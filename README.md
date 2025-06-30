# AI Research Assistant API

This project provides an API layer for an AI research assistant that uses:

- **LangChain**: For building the AI workflow
- **Tavily**: For web search capabilities
- **Gemini AI**: For natural language processing
- **CopilotKit**: For frontend integration

## Features

- **Natural Language Queries**: Users can ask questions in natural language
- **Web Search Integration**: Uses Tavily to search the web for relevant information
- **Image Analysis**: Can process and analyze attached images using Gemini AI
- **Source Attribution**: Provides sources for information gathered from the web

## API Endpoints

### `/api/query`

Processes user queries with optional image attachments and web search capabilities.

**Request Body:**
```json
{
  "query": "Your question here",
  "attachment": "Base64 encoded image (optional)",
  "searchEnabled": true/false
}
```

**Response:**
```json
{
  "answer": "AI-generated response",
  "sources": ["https://source1.com", "https://source2.com"]
}
```

## Environment Variables

The following environment variables are required:

```
GEMINI_API_KEY=your_gemini_api_key
TAVILY_API_KEY=your_tavily_api_key
APPWRITE_API_KEY=your_appwrite_api_key
APPWRITE_PROJECT_ID=your_appwrite_project_id
APPWRITE_ENDPOINT=your_appwrite_endpoint
```

## Getting Started

1. Clone the repository
2. Install dependencies with `npm install`
3. Create a `.env` file with the required environment variables
4. Run the development server with `npm run dev`

## Tech Stack

- **Next.js**: React framework for the frontend and API routes
- **TypeScript**: For type safety
- **LangChain**: For building AI workflows
- **Tavily**: For web search capabilities
- **Gemini AI**: For natural language processing
- **CopilotKit**: For frontend integration
