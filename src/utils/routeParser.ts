import { Route } from '../types/routes';

export function parseRoutes(input: string): Route[] {
  const routes: Route[] = [];
  const lines = input.split('\n');
  
  for (const line of lines) {
    if (line.includes('->')) {
      const [source, rest] = line.split('->').map(s => s.trim());
      const [target, pathPart] = rest.split(':').map(s => s.trim());
      
      if (pathPart) {
        // Extract controller and operation if present in parentheses
        const descMatch = /\((.*?)\)/.exec(pathPart);
        const description = descMatch ? descMatch[1] : '';
        
        // Remove the description part for parsing method and path
        const cleanPathPart = pathPart.replace(/\s*\(.*?\)\s*$/, '');
        
        // Parse controller/operation format
        const controllerMatch = /(\w+)\/(\w+)/.exec(cleanPathPart);
        let method = '', path = cleanPathPart;
        
        if (controllerMatch) {
          // It's in Controller/operation format
          method = 'POST'; // Default method for controller operations
          path = cleanPathPart;
        } else {
          // It's in METHOD /path format
          const parts = cleanPathPart.split(' ');
          method = parts[0];
          path = parts.slice(1).join(' ');
        }

        routes.push({
          source,
          target,
          method,
          path,
          description,
          controller: controllerMatch ? controllerMatch[1] : undefined,
          operation: controllerMatch ? controllerMatch[2] : undefined
        });
      }
    }
  }

  return routes;
}