import { memo } from 'react';
import { EdgeProps, getBezierPath } from 'reactflow';
import * as Tooltip from '@radix-ui/react-tooltip';
import { clsx } from 'clsx';

interface ApiCall {
  method: string;
  path: string;
  controller?: string;
  operation?: string;
  description?: string;
}

const CustomEdge = memo(({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  data,
  selected,
}: EdgeProps) => {
  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    curvature: 0.25 // Adjust curvature for better connections
  });

  // Ensure data.apiCalls is always an array
  const apiCalls: ApiCall[] = Array.isArray(data?.apiCalls) ? data.apiCalls : [{
    method: data?.method,
    path: data?.path,
    controller: data?.controller,
    operation: data?.operation,
    description: data?.description,
  }];

  // Calculate midpoint for label
  const labelX = (sourceX + targetX) / 2;
  const labelY = (sourceY + targetY) / 2;

  return (
    <Tooltip.Provider delayDuration={0}>
      <Tooltip.Root>
        <g>
          <path
            id={id}
            className={clsx(
              'react-flow__edge-path stroke-2',
              selected ? 'stroke-purple-500' : [
                data?.method === 'GET' && 'stroke-blue-500',
                data?.method === 'POST' && 'stroke-green-500',
                data?.method === 'PUT' && 'stroke-orange-500',
                data?.method === 'DELETE' && 'stroke-red-500'
              ]
            )}
            d={edgePath}
            strokeWidth={selected ? 3 : 2}
          />
          <Tooltip.Trigger asChild>
            <g 
              transform={`translate(${labelX - 18} ${labelY - 18})`}
              className="cursor-pointer"
            >
              <circle 
                r="18" 
                fill="white" 
                className="stroke-2 stroke-gray-300 hover:stroke-gray-400 transition-colors"
              />
              <text
                x="0"
                y="0"
                textAnchor="middle"
                dominantBaseline="middle"
                className="text-lg font-semibold fill-gray-600 pointer-events-none select-none"
              >
                {apiCalls.length}
              </text>
            </g>
          </Tooltip.Trigger>
        </g>
        <Tooltip.Portal>
          <Tooltip.Content
            className="z-50 rounded-lg bg-white px-4 py-3 text-sm leading-none shadow-md max-w-md"
            sideOffset={5}
          >
            <div className="space-y-4">
              {apiCalls.map((call, index) => (
                <div key={index} className={index > 0 ? 'pt-4 border-t border-gray-200' : ''}>
                  {call.controller ? (
                    <>
                      <div className="font-medium text-gray-900">
                        {call.controller}/{call.operation}
                      </div>
                      <div className="mt-2 text-gray-600">
                        {call.method} {call.path}
                      </div>
                    </>
                  ) : (
                    <div className="font-medium text-gray-900">
                      {call.method} {call.path}
                    </div>
                  )}
                  {call.description && (
                    <div className="mt-2 text-gray-500 whitespace-pre-wrap">
                      {call.description}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <Tooltip.Arrow className="fill-white" />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
});

export default CustomEdge;