import express, { Request, Response } from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cors());

// Load config file on startup
const configPath = path.join(__dirname, 'config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));

// GET /api/models - List available LLM models
app.get('/api/models', async (req: Request, res: Response) => {
  const modelsConfig = config.models || [];
  const results = [];

  for (const model of modelsConfig) {
    if (model.name === "Ollama") {
      // Special handling for Ollama: fetch models from its /api/tags endpoint
      try {
        const fetch = (await import('node-fetch')).default;
        const url = model.baseUrl.replace(/\/$/, '') + '/api/tags';
        const response = await fetch(url);
        if (!response.ok) throw new Error('Failed to fetch Ollama models');
        const data = await response.json();
        // Only return the list of model names
        const modelNames = (data.models || []).map((m: any) => m.name);
        results.push(...modelNames);
      } catch (e: any) {
        // If error, return nothing for Ollama
      }
    } else {
      // For future models. To be implemented
    }
  }

  res.json({ models: results });
});

// GET /api/prompts - List available prompts
app.get('/api/prompts', (req: Request, res: Response) => {
  const promptDir = path.resolve(__dirname, config.promptDir);
  fs.readdir(promptDir, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to read prompt directory', error: err.message });
    }
    res.json({ prompts: files });
  });
});

// POST /api/rate - Rate a social media post
app.post('/api/rate', async (req: Request, res: Response) => {
  try {
    const fetch = (await import('node-fetch')).default;
    const { url, model, prompt } = req.body;
    if (!url || !model || !prompt) {
      return res.status(400).json({ message: 'Missing url, model, or prompt in request body' });
    }

    // Load prompt template from file
    const promptDir = path.resolve(__dirname, config.promptDir);
    const promptPath = path.join(promptDir, prompt);
    let promptTemplate;
    try {
      promptTemplate = fs.readFileSync(promptPath, 'utf-8');
    } catch (err) {
      return res.status(400).json({ message: 'Prompt file not found', error: (err as Error).message });
    }

    // Fetch post content from url
    let postContent;
    try {
      const postRes = await fetch(url);
      if (!postRes.ok) throw new Error('Failed to fetch post content');
      // Try to parse as JSON and extract 'content' property, else use as text
      const text = await postRes.text();
      try {
        const json = JSON.parse(text);
        postContent = json.content ?? text;
      } catch {
        postContent = text;
      }
    } catch (err) {
      return res.status(400).json({ message: 'Failed to fetch post content', error: (err as Error).message });
    }

    // Replace [INSERT_SOCIAL_MEDIA_POST_TEXT_HERE] in prompt template with post content
    const finalPrompt = promptTemplate.replace('[INSERT_SOCIAL_MEDIA_POST_TEXT_HERE]', postContent);

    // Call Ollama chat endpoint
    const ollamaModel = config.models.find((m: any) => m.name === 'Ollama');
    if (!ollamaModel) {
      return res.status(400).json({ message: 'Ollama model not configured' });
    }
    const chatUrl = ollamaModel.baseUrl.replace(/\/$/, '') + '/api/chat';
    const chatBody = {
      model: model,
      messages: [
        { role: 'user', content: finalPrompt }
      ],
      stream: false,
      think: false
    };
    const ollamaRes = await fetch(chatUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(chatBody)
    });
    if (!ollamaRes.ok) {
      return res.status(500).json({ message: 'Failed to get response from Ollama', error: ollamaRes.statusText });
    }
    const ollamaData = await ollamaRes.json();
    let content = ollamaData?.message?.content ?? '';

    // If content is not valid JSON, try to extract the first JSON object from the string
    let jsonMatch = content.match(/\{[\s\S]*\}/);
    let result: any = content;
    if (jsonMatch) {
      try {
        result = JSON.parse(jsonMatch[0]);
      } catch (e) {
        // If parsing fails, return the raw match
        result = jsonMatch[0];
      }
    }
    res.json({ result, postContent });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error', error: (error as Error).message });
  }
});

// GET /api/post/:name - Get the content of a test post file
app.get('/api/post/:name', (req: Request, res: Response) => {
  const { name } = req.params;
  const testPostsDir = path.resolve(__dirname, config.testPostsDir);
  const filePath = path.join(testPostsDir, name);
  fs.readFile(filePath, 'utf-8', (err, data) => {
    if (err) {
      return res.status(404).json({ message: 'File not found', error: err.message });
    }
    res.json({ content: data });
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
