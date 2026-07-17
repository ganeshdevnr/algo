export type Graph = Record<string, string[]>;

/* Depth First Traversal */
export default function hasPath(graph: Graph, src: string, dst: string): boolean {
  if (src === dst) return true;

  for (let neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dst) === true) {
      return true;
    }
  }
  return false;
}

/* Breadth First Traversal */
/* export default function hasPath(graph: Graph, src: string, dst: string): boolean {
  if (src === dst) return true;

  const queue = [src];

  while (queue.length > 0) {
    const target = queue.shift() as string;
    if (target === dst) {
      return true;
    }
    for (let neighbour of graph[target]) {
      queue.push(neighbour);
    }
  }

  return false;
} */
