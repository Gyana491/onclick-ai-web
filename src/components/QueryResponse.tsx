import { QueryResponse as QueryResponseType, StreamingQueryResponse } from '../api/types';

interface QueryResponseProps {
  response: QueryResponseType | StreamingQueryResponse | null;
  isStreaming: boolean;
}

export default function QueryResponse({ response, isStreaming }: QueryResponseProps) {
  if (!response) return null;
  
  // Handle both streaming and non-streaming responses
  const answer = 'text' in response ? response.text : response.answer;
  const sources = response.sources;
  
  return (
    <div className="mt-6 bg-white shadow overflow-hidden sm:rounded-lg">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">
          Answer {isStreaming && !('isComplete' in response && response.isComplete) && (
            <span className="inline-block ml-2">
              <span className="animate-pulse">●</span>
            </span>
          )}
        </h3>
      </div>
      <div className="border-t border-gray-200">
        <div className="px-4 py-5 sm:p-6 whitespace-pre-wrap">
          {answer}
          {isStreaming && !('isComplete' in response && response.isComplete) && (
            <span className="inline-block ml-1 animate-pulse">▌</span>
          )}
        </div>
      </div>
      
      {sources && sources.length > 0 && (
        <div>
          <div className="px-4 py-3 sm:px-6 bg-gray-50">
            <h4 className="text-sm font-medium text-gray-500">Sources</h4>
          </div>
          <div className="border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {sources.map((source, index) => (
                <li key={index} className="px-4 py-2 sm:px-6">
                  <a 
                    href={source} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
                  >
                    {source}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}