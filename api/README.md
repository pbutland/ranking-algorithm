# Backend API Server

This directory contains the backend API server for the Social Media Ranking Algorithm Research project.

## Purpose

The backend server ingests social media posts, interfaces with multiple large language models (LLMs), and provides API endpoints for comparing and ranking LLM responses based on social benefit criteria.

## Features
- Accepts real and synthetic social media posts for analysis
- Interfaces with multiple LLMs to generate or evaluate responses
- Provides endpoints for comparing and ranking responses
- Designed for extensibility and experimentation

## Setup & Installation

1. **Install dependencies:**
   ```sh
   cd api
   npm install
   ```
2. **Configuration:**
   - Edit `config.json` to set up LLM API keys, model endpoints, and other settings as needed.

3. **Build:**
   ```sh
   npm run build
   ```
   This will compile the TypeScript source from `src/` to `dist/` and copy `config.json` to `dist/`.

4. **Run the server:**
   ```sh
   npm start
   ```
   The server will start on the port specified in the `PORT` environment variable, or 3001 by default.

## API Usage

### Example: Compare and Rank LLM Responses

**Endpoint:** `POST /api/rank`

**Request Body:**
```json
{
  "post": "How can we reduce online misinformation?",
  "responses": [
    "Response from LLM 1...",
    "Response from LLM 2..."
  ]
}
```

**Response:**
```json
{
  "rankings": [
    { "response": "Response from LLM 2...", "score": 0.92 },
    { "response": "Response from LLM 1...", "score": 0.75 }
  ],
  "criteria": ["constructiveness", "accuracy", "community value"]
}
```

## Development
- Source code: `src/server.ts`
- Sample posts: `test-posts/`
