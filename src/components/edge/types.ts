export interface ApiCall {
  method: string;
  path: string;
  controller?: string;
  operation?: string;
  description?: string;
}

export interface ApiCallGroup extends ApiCall {
  count: number;
}