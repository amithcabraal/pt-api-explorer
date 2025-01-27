export interface Node {
  id: string;
  type: 'service';
  position: { x: number; y: number };
  data: { label: string };
}

export interface Edge {
  id: string;
  source: string;
  target: string;
  data: {
    description: string;
    method: string;
    path: string;
  };
}