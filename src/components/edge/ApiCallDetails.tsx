import { FileJson } from 'lucide-react';
import { ApiCallGroup } from './types';

interface ApiCallDetailsProps {
  call: ApiCallGroup;
  onShowTrace?: (path: string) => void;
}

export function ApiCallDetails({ call, onShowTrace }: ApiCallDetailsProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex-1">
        {call.controller ? (
          <>
            <div className="font-medium text-gray-900">
              {call.controller}/{call.operation}
            </div>
            <div className="mt-2 text-gray-600 flex items-center justify-between">
              <span>
                {call.method} {call.path}
                <button 
                  onClick={() => onShowTrace?.(call.path)}
                  className="ml-2 text-blue-500 hover:text-blue-600"
                >
                  ({call.count})
                </button>
              </span>
            </div>
          </>
        ) : (
          <div className="font-medium text-gray-900 flex items-center justify-between">
            <span>
              {call.method} {call.path}
              <button 
                onClick={() => onShowTrace?.(call.path)}
                className="ml-2 text-blue-500 hover:text-blue-600"
              >
                ({call.count})
              </button>
            </span>
          </div>
        )}
        {call.description && (
          <div className="mt-2 text-gray-500 whitespace-pre-wrap">
            {call.description}
          </div>
        )}
      </div>
      <a
        href={`/swagger-ui/${encodeURIComponent(call.path)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
        title="View API Definition"
      >
        <FileJson className="w-5 h-5" />
      </a>
    </div>
  );
}