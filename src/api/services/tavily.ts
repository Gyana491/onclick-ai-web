import { tavily } from '@tavily/core';
import { getTavilyApiKey } from '../utils/config';
import { TavilySearchResponse } from '../types';

export class TavilyService {
  private client;

  constructor() {
    const apiKey = getTavilyApiKey();
    if (!apiKey) {
      throw new Error('Tavily API key is not defined');
    }
    this.client = tavily({ apiKey });
  }

  async search(query: string): Promise<TavilySearchResponse> {
    try {
      const response = await this.client.search(query, {
        searchDepth: 'advanced',
        includeRawContent: false,
        maxResults: 5,
      });
      
      return {
        results: response.results.map(result => ({
          url: result.url,
          title: result.title,
          content: result.content,
          score: result.score,
        })),
        query: response.query,
      };
    } catch (error) {
      console.error('Error searching with Tavily:', error);
      throw new Error('Failed to search with Tavily');
    }
  }
} 