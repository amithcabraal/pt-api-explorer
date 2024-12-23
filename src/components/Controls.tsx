import { memo } from 'react';
import { useReactFlow, getRectOfNodes, Controls as ReactFlowControls } from 'reactflow';
import { Download, Search } from 'lucide-react';
import { downloadImage } from '../utils/export';
import { SearchDialog } from './SearchDialog';

const Controls = memo(() => {
  const { getNodes, setEdges } = useReactFlow();

  const handleExport = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const nodes = getNodes();
    await downloadImage({
      nodesBounds: getRectOfNodes(nodes),
      document,
      scale: 2
    });
  };

  const handleHighlight = (edgeId: string | null) => {
    setEdges((edges) =>
      edges.map((edge) => ({
        ...edge,
        selected: edgeId ? edge.id === edgeId : false,
      }))
    );
  };

  return (
    <>
      <ReactFlowControls showInteractive={true}>
        <button
          onClick={handleExport}
          className="react-flow__controls-button"
          title="Export PNG"
        >
          <Download className="w-4 h-4" />
        </button>
        <SearchDialog 
          onHighlight={handleHighlight}
          className="react-flow__controls-button"
        />
      </ReactFlowControls>
    </>
  );
});

export default Controls;