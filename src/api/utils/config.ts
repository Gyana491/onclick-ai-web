import { AppwriteConfig } from '../types';

export const getAppwriteConfig = (): AppwriteConfig => {
  return {
    endpoint: process.env.APPWRITE_ENDPOINT || '',
    projectId: process.env.APPWRITE_PROJECT_ID || '',
    apiKey: process.env.APPWRITE_API_KEY || '',
  };
};

export const getGeminiApiKey = (): string => {
  return process.env.GEMINI_API_KEY || '';
};

export const getTavilyApiKey = (): string => {
  return process.env.TAVILY_API_KEY || '';
}; 