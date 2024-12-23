import { useState, useCallback } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Search, X } from 'lucide-react';
import { useReactFlow, Edge } from 'reactflow';

interface SearchDialogProps {
  onHighlight: (edgeId: string | null) => void;
  className?: string;
}

export function SearchDialog({ onHighlight, className }: SearchDialogProps) {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { getEdges } = useReactFlow();

  const handleSearch = useCallback(() => {
    if (!searchTerm.trim()) {
      onHighlight(null);
      return;
    }

    const edges = getEdges();
    const searchLower = searchTerm.toLowerCase();
    
    // Find edges that match the search term
    const matchingEdges = edges.filter((edge: Edge) => {
      if (!edge.data?.apiCalls) return false;
      
      return edge.data.apiCalls.some(call => {
        const searchableText = [
          call.path,
          call.controller,
          call.operation,
          call.method
        ].filter(Boolean).join(' ').toLowerCase();
        
        return searchableText.includes(searchLower);
      });
    });

    // Highlight all matching edges
    edges.forEach(edge => {
      const isMatch = matchingEdges.some(match => match.id === edge.id);
      if (isMatch) {
        onHighlight(edge.id);
      }
    });

    if (matchingEdges.length === 0) {
      onHighlight(null);
    }

    setOpen(false);
  }, [searchTerm, getEdges, onHighlight]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className={className}
        title="Search API Paths"
      >
        <Search className="w-4 h-4" />
      </button>

      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/50" />
          <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-[400px]">
            <Dialog.Title className="text-lg font-semibold mb-4">Search API Paths</Dialog.Title>
            
            <div className="flex gap-2">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Enter path, controller, or method..."
                className="flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                autoFocus
              />
              <button
                onClick={handleSearch}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                Search
              </button>
            </div>

            <Dialog.Close asChild>
              <button 
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}