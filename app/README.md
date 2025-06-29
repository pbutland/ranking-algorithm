# Front-End Webapp

This directory contains the front-end web application for the Social Media Ranking Algorithm Research project.

## Purpose

The webapp provides a user interface for submitting social media posts, viewing and comparing LLM responses, and interacting with ranking results based on social benefit criteria.

## Features
- Submit real (currently unimplemented) or synthetic social media posts for analysis
- View LLM responses side-by-side
- See rankings and scores for each response
- Interactive and user-friendly design

## Setup & Installation

1. **Install dependencies:**
   ```sh
   cd app
   npm install
   ```
2. **Build the app:**
   ```sh
   npm run build
   ```
   The build output will be in the `public/` directory.

3. **Run the app (development mode):**
   ```sh
   npm run dev
   ```
   The app will be available at `http://localhost:8001` (or the port specified in your configuration).

## Configuration
- Define `API_BASE_URL` to change API endpoints from the default.

## Usage
- Open the webapp in your browser.
- Enter a social media post and submit. (currently only supports 'synthetic' posts under the `/api/test-posts` exposed by the API `/api/post/{name}`)
- View and compare LLM responses and their rankings.

## API Integration
- The webapp communicates with the backend API server (`api/`). Ensure the backend is running and accessible.

## Development
- Main entry: `src/index.tsx`
- UI components: `src/`
- Styles: `src/App.css`
