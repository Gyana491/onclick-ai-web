export interface QueryRequest {
  query: string;
  attachment?: string; // Base64 encoded image
  searchEnabled: boolean;
}

export interface QueryResponse {
  answer: string;
  sources?: string[];
}

export interface StreamingQueryResponse {
  text: string;
  sources?: string[];
  isComplete: boolean;
}

export interface TavilySearchResult {
  url: string;
  title: string;
  content: string;
  score: number;
}

export interface TavilySearchResponse {
  results: TavilySearchResult[];
  query: string;
}

export interface GeminiResponse {
  text: string;
}

export interface AppwriteConfig {
  endpoint: string;
  projectId: string;
  apiKey: string;
} 