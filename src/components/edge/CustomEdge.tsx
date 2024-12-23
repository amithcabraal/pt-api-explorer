import { memo, useState, useCallback } from 'react';
import { EdgeProps, getBezierPath } from 'reactflow';
import { clsx } from 'clsx';
import { EdgeTooltip } from './EdgeTooltip';
import { groupApiCalls } from './utils';
import type { ApiCall } from './types';

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
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });

  const [edgePath] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
    curvature: 0.25
  });

  const apiCalls: ApiCall[] = Array.isArray(data?.apiCalls) ? data.apiCalls : [{
    method: data?.method,
    path: data?.path,
    controller: data?.controller,
    operation: data?.operation,
    description: data?.description,
  }];

  const groupedApiCalls = groupApiCalls(apiCalls);

  const labelX = (sourceX + targetX) / 2;
  const labelY = (sourceY + targetY) / 2;

  const handleClick = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const rect = (e.currentTarget as Element).getBoundingClientRect();
    setTooltipPosition({
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    });
    setIsTooltipOpen(true);
  }, []);

  return (
    <>
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
        <g 
          transform={`translate(${labelX - 18} ${labelY - 18})`}
          onClick={handleClick}
          style={{ cursor: 'pointer' }}
        >
          <circle 
            r="18" 
            fill="white" 
            className="stroke-2 stroke-gray-300 hover:stroke-gray-400 transition-colors"
            style={{ pointerEvents: 'all' }}
          />
          <text
            x="0"
            y="0"
            textAnchor="middle"
            dominantBaseline="middle"
            className="text-lg font-semibold fill-gray-600 select-none"
            style={{ pointerEvents: 'none' }}
          >
            {apiCalls.length}
          </text>
        </g>
      </g>
      <EdgeTooltip
        apiCalls={groupedApiCalls}
        open={isTooltipOpen}
        onOpenChange={setIsTooltipOpen}
        position={tooltipPosition}
      />
    </>
  );
});

export default CustomEdge;