import { useCallback, useEffect } from 'react';
import ReactFlow, {
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Node,
} from 'reactflow';
import 'reactflow/dist/style.css';

import Controls from './components/Controls';
import { nodeTypes } from './components/flow-config/nodeTypes';
import { edgeTypes } from './components/flow-config/edgeTypes';
import { parseRoutes } from './utils/routeParser';
import { createNodesAndEdges } from './utils/layoutGenerator';
import { routesData } from './data/routes';
import { setAllRoutes } from './components/edge/utils';
import { loadNodePositions, saveNodePositions } from './utils/storage';

function App() {
  const { nodes: initialNodes, edges: initialEdges } = createNodesAndEdges(parseRoutes(routesData));
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  // Initialize the route data for tracing
  useEffect(() => {
    const routes = parseRoutes(routesData);
    setAllRoutes(routes);
  }, []);

  // Load saved positions
  useEffect(() => {
    const savedPositions = loadNodePositions();
    if (savedPositions.length > 0) {
      setNodes(nodes.map(node => {
        const savedPosition = savedPositions.find(pos => pos.id === node.id);
        return savedPosition 
          ? { ...node, position: savedPosition.position }
          : node;
      }));
    }
  }, []);

  // Save positions when nodes change
  const handleNodesChange = useCallback((changes: any[]) => {
    onNodesChange(changes);
    
    // Only save after position changes, not selections etc.
    const hasPositionChange = changes.some(change => 
      change.type === 'position' && change.dragging === false
    );
    
    if (hasPositionChange) {
      const positions = nodes.map(node => ({
        id: node.id,
        position: node.position
      }));
      saveNodePositions(positions);
    }
  }, [nodes, onNodesChange]);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  return (
    <div className="w-screen h-screen">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;