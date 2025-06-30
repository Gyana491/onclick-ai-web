import { GoogleGenerativeAI } from '@google/generative-ai';
import { getGeminiApiKey } from '../utils/config';
import { GeminiResponse } from '../types';
import { Readable } from 'stream';

export class GeminiService {
  private genAI;
  private model;

  constructor() {
    const apiKey = getGeminiApiKey();
    if (!apiKey) {
      throw new Error('Gemini API key is not defined');
    }
    this.genAI = new GoogleGenerativeAI(apiKey);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-1.5-pro' });
  }

  async generateText(prompt: string, context?: string): Promise<GeminiResponse> {
    try {
      const fullPrompt = context 
        ? `${prompt}\n\nContext: ${context}`
        : prompt;
        
      const result = await this.model.generateContent(fullPrompt);
      const response = result.response;
      
      return {
        text: response.text(),
      };
    } catch (error) {
      console.error('Error generating text with Gemini:', error);
      throw new Error('Failed to generate text with Gemini');
    }
  }

  async generateTextWithImage(prompt: string, imageBase64: string): Promise<GeminiResponse> {
    try {
      const imagePart = {
        inlineData: {
          data: imageBase64,
          mimeType: 'image/jpeg',
        },
      };

      const result = await this.model.generateContent([prompt, imagePart]);
      const response = result.response;
      
      return {
        text: response.text(),
      };
    } catch (error) {
      console.error('Error generating text with image using Gemini:', error);
      throw new Error('Failed to generate text with image using Gemini');
    }
  }

  async generateTextStream(prompt: string, context?: string): Promise<ReadableStream> {
    try {
      const fullPrompt = context 
        ? `${prompt}\n\nContext: ${context}`
        : prompt;

      const result = await this.model.generateContentStream(fullPrompt);
      
      // Create a Node.js readable stream
      const readable = new Readable({
        async read() {
          try {
            for await (const chunk of result.stream) {
              const text = chunk.text();
              if (text) {
                this.push(text);
              }
            }
            this.push(null); // End of stream
          } catch (error) {
            this.destroy(error instanceof Error ? error : new Error(String(error)));
          }
        }
      });
      
      // Convert Node.js readable stream to Web API ReadableStream
      return Readable.toWeb(readable) as ReadableStream;
    } catch (error) {
      console.error('Error streaming text with Gemini:', error);
      throw new Error('Failed to stream text with Gemini');
    }
  }

  async generateTextWithImageStream(prompt: string, imageBase64: string): Promise<ReadableStream> {
    try {
      const imagePart = {
        inlineData: {
          data: imageBase64,
          mimeType: 'image/jpeg',
        },
      };

      const result = await this.model.generateContentStream([prompt, imagePart]);
      
      // Create a Node.js readable stream
      const readable = new Readable({
        async read() {
          try {
            for await (const chunk of result.stream) {
              const text = chunk.text();
              if (text) {
                this.push(text);
              }
            }
            this.push(null); // End of stream
          } catch (error) {
            this.destroy(error instanceof Error ? error : new Error(String(error)));
          }
        }
      });
      
      // Convert Node.js readable stream to Web API ReadableStream
      return Readable.toWeb(readable) as ReadableStream;
    } catch (error) {
      console.error('Error streaming text with image using Gemini:', error);
      throw new Error('Failed to stream text with image using Gemini');
    }
  }
} 