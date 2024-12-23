import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Server } from 'lucide-react';
import * as Tooltip from '@radix-ui/react-tooltip';

interface CustomNodeProps {
  data: { 
    label: string;
    className?: string;
  };
}

const CustomNode = memo(({ data }: CustomNodeProps) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <div className={`px-4 py-2 shadow-md rounded-md border-2 ${data.className || 'bg-white border-stone-400'}`}>
            <Handle type="target" position={Position.Top} className="w-16 !bg-teal-500" />
            <div className="flex items-center">
              <Server className="mr-2 h-5 w-5 text-teal-600" />
              <div className="text-sm font-bold">{data.label}</div>
            </div>
            <Handle type="source" position={Position.Bottom} className="w-16 !bg-teal-500" />
          </div>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className="z-50 rounded-lg bg-white px-4 py-3 text-sm leading-none shadow-md"
            sideOffset={5}
          >
            <div className="font-medium">{data.label}</div>
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
});

export default CustomNode;