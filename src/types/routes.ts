export interface Route {
  source: string;
  target: string;
  description: string;
  method: string;
  path: string;
  controller?: string;
  operation?: string;
}