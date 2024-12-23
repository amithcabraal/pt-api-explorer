import { useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { ApiCallGroup } from './types';
import { ApiCallDetails } from './ApiCallDetails';
import { RouteTraceDialog } from './RouteTraceDialog';
import { findTraces } from './utils';

interface EdgeTooltipProps {
  apiCalls: ApiCallGroup[];
  open: boolean;
  onOpenChange: (open: boolean) => void;
  position: { x: number; y: number };
}

export function EdgeTooltip({ apiCalls, open, onOpenChange, position }: EdgeTooltipProps) {
  const [traceDialogOpen, setTraceDialogOpen] = useState(false);
  const [selectedPath, setSelectedPath] = useState<string>('');
  const [traces, setTraces] = useState<ApiCallGroup[]>([]);

  const handleShowTrace = (path: string) => {
    const pathTraces = findTraces(path);
    setTraces(pathTraces);
    setSelectedPath(path);
    setTraceDialogOpen(true);
  };

  return (
    <>
      <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0" onClick={() => onOpenChange(false)} />
          <Dialog.Content 
            className="fixed bg-white rounded-lg shadow-lg p-4 max-w-md max-h-[80vh] overflow-y-auto"
            style={{
              left: `${position.x}px`,
              top: `${position.y}px`,
              transform: 'translate(-50%, -50%)'
            }}
          >
            <Dialog.Title className="sr-only">API Call Details</Dialog.Title>
            <div className="space-y-4">
              {apiCalls.map((call, index) => (
                <div key={index} className={index > 0 ? 'pt-4 border-t border-gray-200' : ''}>
                  <ApiCallDetails 
                    call={call}
                    onShowTrace={handleShowTrace}
                  />
                </div>
              ))}
            </div>
            <Dialog.Close className="absolute top-2 right-2 p-1 text-gray-400 hover:text-gray-600">
              <X className="w-4 h-4" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>

      <RouteTraceDialog
        open={traceDialogOpen}
        onOpenChange={setTraceDialogOpen}
        path={selectedPath}
        traces={traces}
      />
    </>
  );
}