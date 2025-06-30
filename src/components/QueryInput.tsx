import { useState, ChangeEvent, FormEvent } from 'react';
import { StreamingQueryResponse } from '../api/types';

interface QueryInputProps {
  onSubmit: (query: string, attachment: string | null, searchEnabled: boolean) => void;
  onStreamingSubmit: (query: string, attachment: string | null, searchEnabled: boolean) => void;
  isLoading: boolean;
  isStreaming: boolean;
}

export default function QueryInput({ onSubmit, onStreamingSubmit, isLoading, isStreaming }: QueryInputProps) {
  const [query, setQuery] = useState('');
  const [attachment, setAttachment] = useState<string | null>(null);
  const [searchEnabled, setSearchEnabled] = useState(true);
  const [useStreaming, setUseStreaming] = useState(true);
  
  const handleQueryChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setQuery(e.target.value);
  };
  
  const handleAttachmentChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setAttachment(null);
      return;
    }
    
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result?.toString().split(',')[1] || '';
      setAttachment(base64);
    };
    reader.readAsDataURL(file);
  };
  
  const handleSearchEnabledChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchEnabled(e.target.checked);
  };

  const handleStreamingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUseStreaming(e.target.checked);
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      if (useStreaming) {
        onStreamingSubmit(query, attachment, searchEnabled);
      } else {
        onSubmit(query, attachment, searchEnabled);
      }
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="query" className="block text-sm font-medium text-gray-700">
          Your Question
        </label>
        <textarea
          id="query"
          value={query}
          onChange={handleQueryChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          placeholder="Ask a question..."
          rows={4}
          required
        />
      </div>
      
      <div>
        <label htmlFor="attachment" className="block text-sm font-medium text-gray-700">
          Attachment (optional)
        </label>
        <input
          id="attachment"
          type="file"
          onChange={handleAttachmentChange}
          accept="image/*"
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-md file:border-0
            file:text-sm file:font-semibold
            file:bg-indigo-50 file:text-indigo-700
            hover:file:bg-indigo-100"
        />
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <input
            id="searchEnabled"
            type="checkbox"
            checked={searchEnabled}
            onChange={handleSearchEnabledChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="searchEnabled" className="ml-2 block text-sm text-gray-700">
            Enable web search
          </label>
        </div>
        
        <div className="flex items-center">
          <input
            id="useStreaming"
            type="checkbox"
            checked={useStreaming}
            onChange={handleStreamingChange}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
          />
          <label htmlFor="useStreaming" className="ml-2 block text-sm text-gray-700">
            Enable streaming
          </label>
        </div>
      </div>
      
      <div>
        <button
          type="submit"
          disabled={(isLoading || isStreaming) || !query.trim()}
          className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${
            (isLoading || isStreaming) || !query.trim() ? 'bg-indigo-400' : 'bg-indigo-600 hover:bg-indigo-700'
          } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
        >
          {isLoading ? 'Processing...' : isStreaming ? 'Streaming...' : 'Submit'}
        </button>
      </div>
    </form>
  );
} 