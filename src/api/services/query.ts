import { TavilyService } from './tavily';
import { GeminiService } from './gemini';
import { QueryRequest, QueryResponse } from '../types';

export class QueryService {
  private tavilyService: TavilyService;
  private geminiService: GeminiService;

  constructor() {
    this.tavilyService = new TavilyService();
    this.geminiService = new GeminiService();
  }

  async processQuery(request: QueryRequest): Promise<QueryResponse> {
    try {
      const { query, attachment, searchEnabled } = request;
      
      // If search is enabled, use Tavily to get context
      let context = '';
      let sources: string[] = [];
      
      if (searchEnabled) {
        const searchResults = await this.tavilyService.search(query);
        
        if (searchResults.results.length > 0) {
          context = searchResults.results
            .map(result => `Title: ${result.title}\nContent: ${result.content}\nURL: ${result.url}`)
            .join('\n\n');
          
          sources = searchResults.results.map(result => result.url);
        }
      }
      
      // Process with Gemini based on whether there's an attachment
      let response;
      if (attachment) {
        response = await this.geminiService.generateTextWithImage(
          `${query}\n${context ? `Consider this context: ${context}` : ''}`,
          attachment
        );
      } else {
        response = await this.geminiService.generateText(query, context);
      }
      
      return {
        answer: response.text,
        sources: sources.length > 0 ? sources : undefined,
      };
    } catch (error) {
      console.error('Error processing query:', error);
      throw new Error('Failed to process query');
    }
  }

  async processQueryStream(request: QueryRequest): Promise<{ stream: ReadableStream<Uint8Array>, sources?: string[] }> {
    try {
      const { query, attachment, searchEnabled } = request;
      
      // If search is enabled, use Tavily to get context
      let context = '';
      let sources: string[] = [];
      
      if (searchEnabled) {
        const searchResults = await this.tavilyService.search(query);
        
        if (searchResults.results.length > 0) {
          context = searchResults.results
            .map(result => `Title: ${result.title}\nContent: ${result.content}\nURL: ${result.url}`)
            .join('\n\n');
          
          sources = searchResults.results.map(result => result.url);
        }
      }
      
      // Process with Gemini based on whether there's an attachment and return a stream
      let stream;
      if (attachment) {
        stream = await this.geminiService.generateTextWithImageStream(
          `${query}\n${context ? `Consider this context: ${context}` : ''}`,
          attachment
        );
      } else {
        stream = await this.geminiService.generateTextStream(query, context);
      }
      
      return {
        stream,
        sources: sources.length > 0 ? sources : undefined,
      };
    } catch (error) {
      console.error('Error processing query stream:', error);
      throw new Error('Failed to process query stream');
    }
  }
} 