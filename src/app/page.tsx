'use client';

import { useState } from 'react';
import { QueryResponse as QueryResponseType, StreamingQueryResponse } from '../api/types';
import QueryInput from '../components/QueryInput';
import QueryResponse from '../components/QueryResponse';

export default function Home() {
  const [response, setResponse] = useState<QueryResponseType | StreamingQueryResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isStreaming, setIsStreaming] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (query: string, attachment: string | null, searchEnabled: boolean) => {
    setIsLoading(true);
    setError(null);
    setResponse(null);
    
    try {
      const res = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query,
          attachment,
          searchEnabled,
        }),
      });
      
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Failed to process query');
      }
      
      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Error submitting query:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStreamingSubmit = async (query: string, attachment: string | null, searchEnabled: boolean) => {
    setIsStreaming(true);
    setError(null);
    setResponse({ text: '', isComplete: false });
    
    try {
      const res = await fetch('/api/query', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/event-stream',
        },
        body: JSON.stringify({
          query,
          attachment,
          searchEnabled,
        }),
      });
      
      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ error: 'Unknown error' }));
        throw new Error(errorData.error || `Failed to process query: ${res.status}`);
      }

      // Get sources from headers if available
      const sourcesHeader = res.headers.get('X-Sources');
      const sources = sourcesHeader && sourcesHeader !== '' ? JSON.parse(sourcesHeader) : undefined;
      
      if (!res.body) {
        throw new Error('Response body is null');
      }
      
      // Create a reader for the stream
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let streamedText = '';
      
      try {
        while (true) {
          const { done, value } = await reader.read();
          
          if (done) {
            // Stream is complete
            setResponse({ text: streamedText, sources, isComplete: true });
            break;
          }
          
          // Update the response with the new chunk
          const chunk = decoder.decode(value, { stream: true });
          streamedText += chunk;
          setResponse({ text: streamedText, sources, isComplete: false });
        }
      } catch (readError) {
        console.error('Error reading stream:', readError);
        throw new Error('Error reading response stream');
      } finally {
        reader.releaseLock();
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
      console.error('Error streaming query:', err);
      // Set empty response if we have an error
      setResponse(null);
    } finally {
      setIsStreaming(false);
    }
  };
  
  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">
            AI Research Assistant
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Ask a question and get an answer powered by Gemini AI and Tavily
          </p>
        </div>
        
        <div className="bg-white shadow overflow-hidden sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <QueryInput 
              onSubmit={handleSubmit} 
              onStreamingSubmit={handleStreamingSubmit}
              isLoading={isLoading}
              isStreaming={isStreaming}
            />
            
            {error && (
              <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <QueryResponse response={response} isStreaming={isStreaming} />
      </div>
    </main>
  );
}
