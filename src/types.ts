export interface Route {
  source: string;
  target: string;
  description: string;
  method: string;
  path: string;
}

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