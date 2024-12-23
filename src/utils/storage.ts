const STORAGE_KEY = 'flow-node-positions';

export interface NodePosition {
  id: string;
  position: { x: number; y: number };
}

export function saveNodePositions(positions: NodePosition[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(positions));
  } catch (error) {
    console.error('Failed to save node positions:', error);
  }
}

export function loadNodePositions(): NodePosition[] {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch (error) {
    console.error('Failed to load node positions:', error);
    return [];
  }
}