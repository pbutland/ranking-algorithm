// Add global constant declaration for esbuild-injected API_BASE_URL
declare const API_BASE_URL: string;

import React, { useState, useEffect, FormEvent } from "react";
import "./App.css";
import CollapsibleGroup from "./CollapsibleGroup";

export type MatrixResponses = {
  [prompt: string]: {
    [model: string]: any;
  };
};

export default function App() {
  const [models, setModels] = useState<string[]>([]); // all available models
  const [selectedModels, setSelectedModels] = useState<string[]>([]); // checked models
  const [prompts, setPrompts] = useState<string[]>([]); // all available prompts
  const [selectedPrompts, setSelectedPrompts] = useState<string[]>([]); // checked prompts
  const [inputUrl, setInputUrl] = useState("");
  const [responses, setResponses] = useState<MatrixResponses>({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [postContent, setPostContent] = useState<string>("");
  const [cellStatus, setCellStatus] = useState<{ [prompt: string]: { [model: string]: string } }>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);

  useEffect(() => {
    // Fetch models from backend
    fetch(`${API_BASE_URL}/api/models`)
      .then(res => res.json())
      .then(data => setModels(data.models || []))
      .catch(() => setModels([]));
    // Fetch prompts from backend
    fetch(`${API_BASE_URL}/api/prompts`)
      .then(res => res.json())
      .then(data => setPrompts(data.prompts || []))
      .catch(() => setPrompts([]));
  }, []);

  // Update cellStatus when selection changes
  useEffect(() => {
    const newStatus: { [prompt: string]: { [model: string]: string } } = {};
    selectedPrompts.forEach(prompt => {
      newStatus[prompt] = {};
      selectedModels.forEach(model => {
        newStatus[prompt][model] = ""; // reset status
      });
    });
    setCellStatus(newStatus);
  }, [selectedPrompts, selectedModels]);

  const handleModelToggle = (model: string) => {
    setSelectedModels(prev =>
      prev.includes(model) ? prev.filter(m => m !== model) : [...prev, model]
    );
  };

  const handlePromptToggle = (prompt: string) => {
    setSelectedPrompts(prev =>
      prev.includes(prompt) ? prev.filter(p => p !== prompt) : [...prev, prompt]
    );
  };

  // Send prompt/model permutations to backend sequentially
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setHasSubmitted(true);
    setError("");
    setResponses({});
    setPostContent("");
    // Set all selected cells to 'Queued'
    const queuedStatus: { [prompt: string]: { [model: string]: string } } = {};
    selectedPrompts.forEach(prompt => {
      queuedStatus[prompt] = {};
      selectedModels.forEach(model => {
        queuedStatus[prompt][model] = "Queued";
      });
    });
    setCellStatus(queuedStatus);
    if (!inputUrl || !selectedModels.length || !selectedPrompts.length) {
      setError("Please enter a post URL, select at least one model, and at least one prompt.");
      return;
    }
    setLoading(true);
    try {
      let firstPostContent: string | null = null;
      for (const prompt of selectedPrompts) {
        for (const model of selectedModels) {
          setCellStatus(prev => ({ ...prev, [prompt]: { ...prev[prompt], [model]: "Loading..." } }));
          const resp = await fetch(`${API_BASE_URL}/api/rate`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ url: inputUrl, model, prompt })
          });
          if (!resp.ok) {
            setResponses(prev => ({
              ...prev,
              [prompt]: { ...prev[prompt], [model]: { error: `Error: ${resp.status}` } }
            }));
            setCellStatus(prev => ({ ...prev, [prompt]: { ...prev[prompt], [model]: "Error" } }));
          } else {
            const data = await resp.json();
            setResponses(prev => ({
              ...prev,
              [prompt]: { ...prev[prompt], [model]: data.result || data }
            }));
            setCellStatus(prev => ({ ...prev, [prompt]: { ...prev[prompt], [model]: "Done" } }));
            if (data.postContent) {
              setPostContent(data.postContent);
            }
          }
        }
      }
    } catch (err: any) {
      setError("Failed to process: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Helper to render a response object as a list of key/value pairs
  const renderKeyValueList = (obj: any) => {
    if (!obj || typeof obj !== "object") return null;
    // Order: 'ranking' first, then rest alphabetically
    const keys = Object.keys(obj);
    const sortedKeys = [
      ...(['ranking'].filter(k => keys.includes(k))),
      ...keys.filter(k => k !== 'ranking').sort()
    ];
    return (
      <ul className="kv-list">
        {sortedKeys.map(key => (
          <li key={key} className="kv-list-item">
            <span className="kv-key">{key}:</span> {typeof obj[key] === "object" ? JSON.stringify(obj[key]) : String(obj[key])}
          </li>
        ))}
      </ul>
    );
  };

  // Render results as grouped collapsible card grids
  const renderPromptGroups = () => {
    if (!selectedModels.length || !selectedPrompts.length || !hasSubmitted) return null;
    return (
      <div className="prompt-groups">
        {selectedPrompts.map(prompt => (
          <CollapsibleGroup key={prompt} title={prompt} defaultOpen>
            <div className="card-grid">
              {selectedModels.map(model => {
                const status = cellStatus[prompt]?.[model];
                const cell = responses[prompt] && responses[prompt][model];
                let content = null;
                if (status === "Loading...") content = <span className="loading">Loading...</span>;
                else if (status === "Queued") content = <span className="queued">Queued</span>;
                else if (status === "Error") content = <span className="cell-error">Error</span>;
                else if (cell) {
                  let obj: any = cell;
                  if (typeof cell === "string") {
                    try {
                      obj = JSON.parse(cell);
                    } catch {
                      obj = { value: cell };
                    }
                  }
                  content = renderKeyValueList(obj);
                }
                return (
                  <div key={model} className="result-card">
                    <div className="result-card-header">{model}</div>
                    <div className="result-card-content">{content}</div>
                  </div>
                );
              })}
            </div>
          </CollapsibleGroup>
        ))}
      </div>
    );
  };

  return (
    <div>
      <header className="app-header">
        <h1 className="app-title">Ranking Algorithm POC</h1>
      </header>
      <main className="app-main">
        <form onSubmit={handleSubmit} className="form-row">
          <label htmlFor="post-url" className="form-label">
            Post URL:
          </label>
          <input
            id="post-url"
            type="text"
            value={inputUrl}
            onChange={e => setInputUrl(e.target.value)}
            placeholder="Paste social media post URL here"
            className="input-url"
          />
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? "Loading..." : "Submit"}
          </button>
        </form>
        {/* Models section */}
        <section className="models-section">
          <strong>Models:</strong>
          <div className="models-list">
            {models.map(model => (
              <label key={model} className="model-label">
                <input
                  type="checkbox"
                  checked={selectedModels.includes(model)}
                  onChange={() => handleModelToggle(model)}
                />
                {model}
              </label>
            ))}
          </div>
        </section>
        {/* Prompts section */}
        <section className="prompts-section">
          <strong>Prompts:</strong>
          <div className="prompts-list">
            {prompts.map(prompt => (
              <label key={prompt} className="prompt-label">
                <input
                  type="checkbox"
                  checked={selectedPrompts.includes(prompt)}
                  onChange={() => handlePromptToggle(prompt)}
                />
                {prompt}
              </label>
            ))}
          </div>
        </section>
        {/* Post content section */}
        {postContent && (
          <section className="post-content-section">
            <strong>Post Content:</strong>
            <div className="post-content-text">
              {postContent}
            </div>
          </section>
        )}
        {error && <div className="error-message">{error}</div>}
        {/* Results: card grid grouped by prompt, only after submit */}
        {renderPromptGroups()}
      </main>
    </div>
  );
}
