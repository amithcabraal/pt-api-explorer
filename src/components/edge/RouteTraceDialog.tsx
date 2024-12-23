import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { ApiCall } from './types';

interface RouteTraceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  path: string;
  traces: ApiCall[];
}

export function RouteTraceDialog({ open, onOpenChange, path, traces }: RouteTraceDialogProps) {
  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50" />
        <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg shadow-lg p-6 w-[600px] max-h-[80vh] overflow-y-auto">
          <Dialog.Title className="text-lg font-semibold mb-4">
            Route Traces for {path}
          </Dialog.Title>
          
          <div className="space-y-4">
            {traces.map((trace, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-lg">
                <div className="font-medium text-gray-900">
                  {trace.controller}/{trace.operation}
                </div>
                <div className="mt-2 text-gray-600">
                  {trace.method} {trace.path}
                </div>
                {trace.description && (
                  <div className="mt-2 text-gray-500 text-sm">
                    {trace.description}
                  </div>
                )}
              </div>
            ))}
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
  );
}