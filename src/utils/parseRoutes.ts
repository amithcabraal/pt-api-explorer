import { Route, Node, Edge } from '../types';

export function parseRoutes(input: string): Route[] {
  const lines = input.split('\n');
  const routes: Route[] = [];

  for (const line of lines) {
    if (line.includes('->')) {
      const [source, rest] = line.split('->').map(s => s.trim());
      const [target, pathPart] = rest.split(':').map(s => s.trim());
      
      if (pathPart) {
        const method = pathPart.split(' ')[0];
        const path = pathPart.split(' ').slice(1).join(' ');
        
        routes.push({
          source,
          target,
          description: '',
          method,
          path
        });
      }
    }
  }

  return routes;
}

export function createNodesAndEdges(routes: Route[]): { nodes: Node[]; edges: Edge[] } {
  const services = new Set<string>();
  routes.forEach(route => {
    services.add(route.source);
    services.add(route.target);
  });

  const serviceArray = Array.from(services);
  const radius = serviceArray.length * 100;
  const angleStep = (2 * Math.PI) / serviceArray.length;

  const nodes: Node[] = serviceArray.map((service, i) => ({
    id: service,
    type: 'service',
    position: {
      x: 500 + radius * Math.cos(i * angleStep),
      y: 500 + radius * Math.sin(i * angleStep)
    },
    data: { label: service }
  }));

  const edges: Edge[] = routes.map((route, i) => ({
    id: `e${i}`,
    source: route.source,
    target: route.target,
    data: {
      description: route.description,
      method: route.method,
      path: route.path
    }
  }));

  return { nodes, edges };
}