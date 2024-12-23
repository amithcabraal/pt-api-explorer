import { Route } from '../types/routes';
import { Node, Edge } from '../types/graph';

function getServiceColor(service: string): string {
  const colors: Record<string, string> = {
    'Client': 'bg-blue-100 border-blue-400',
    'Api Gateway': 'bg-green-100 border-green-400',
    'AccountsApi': 'bg-purple-100 border-purple-400',
    'AddressLookup': 'bg-yellow-100 border-yellow-400',
    'ScientificGamesPlayer': 'bg-red-100 border-red-400',
    'ScientificGamesService': 'bg-indigo-100 border-indigo-400',
    'ExperianRest': 'bg-pink-100 border-pink-400',
    'SalesforceRest': 'bg-orange-100 border-orange-400'
  };
  return colors[service] || 'bg-gray-100 border-gray-400';
}

export function createNodesAndEdges(routes: Route[]): { nodes: Node[]; edges: Edge[] } {
  const services = new Set<string>();
  const edgeMap = new Map<string, Route[]>();
  
  // Group routes by source-target pair
  routes.forEach(route => {
    services.add(route.source);
    services.add(route.target);
    
    const key = `${route.source}->${route.target}`;
    const existing = edgeMap.get(key) || [];
    edgeMap.set(key, [...existing, route]);
  });

  const serviceArray = Array.from(services);
  const radius = Math.max(serviceArray.length * 40, 200);
  const angleStep = (2 * Math.PI) / serviceArray.length;

  const nodes: Node[] = serviceArray.map((service, i) => ({
    id: service,
    type: 'service',
    position: {
      x: 400 + radius * Math.cos(i * angleStep),
      y: 300 + radius * Math.sin(i * angleStep)
    },
    data: { 
      label: service,
      className: getServiceColor(service)
    }
  }));

  const edges: Edge[] = Array.from(edgeMap.entries()).map(([key, routes], i) => ({
    id: `e${i}`,
    source: routes[0].source,
    target: routes[0].target,
    data: {
      apiCalls: routes.map(route => ({
        description: route.description,
        method: route.method,
        path: route.path,
        controller: route.controller,
        operation: route.operation
      }))
    }
  }));

  return { nodes, edges };
}