import { ApiCall, ApiCallGroup } from './types';

export function groupApiCalls(apiCalls: ApiCall[]): ApiCallGroup[] {
  const groups = new Map<string, ApiCallGroup>();

  apiCalls.forEach(call => {
    const key = JSON.stringify({
      method: call.method,
      path: call.path,
      controller: call.controller,
      operation: call.operation
    });

    const existing = groups.get(key);
    if (existing) {
      existing.count++;
    } else {
      groups.set(key, { ...call, count: 1 });
    }
  });

  return Array.from(groups.values());
}

// Keep track of all routes globally
let allRoutes: ApiCall[] = [];

export function setAllRoutes(routes: ApiCall[]) {
  allRoutes = routes;
}

export function findTraces(targetPath: string): ApiCallGroup[] {
  // Find all routes that include this path as part of their journey
  const traces = allRoutes.filter(route => {
    // Check if this route is part of a path that leads to the target
    return route.path === targetPath || 
           (route.data?.apiCalls?.some(call => call.path === targetPath));
  });

  // Group the traces by their unique paths
  return groupApiCalls(traces);
}