# Has Path

## Description

Given an adjacency list of a directed acyclic graph, a source node, and a destination node, determine whether a directed path exists from the source to the destination.

Return `true` if a path exists, otherwise return `false`.

## Examples

```ts
hasPath({ a: ["b"], b: ["c"], c: [] }, "a", "c"); // true
hasPath({ a: ["b"], b: [], c: [] }, "b", "c"); // false
hasPath({ a: ["b"], b: [] }, "a", "a"); // true
```

## Constraints

- The graph is directed and acyclic.
- Nodes are represented as strings.
- Every node may have zero or more outgoing edges.
- A node with no outgoing edges is represented with an empty neighbor list.
