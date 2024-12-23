import { getRectOfNodes } from 'reactflow';

export interface ExportOptions {
  nodesBounds: ReturnType<typeof getRectOfNodes>;
  document: Document;
  scale?: number;
  backgroundColor?: string | null;
}