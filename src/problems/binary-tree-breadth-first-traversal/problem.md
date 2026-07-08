# Binary Tree Breadth First Traversal

## Description

Given the root of a binary tree, return the values from a breadth-first traversal in level order.

In breadth-first traversal, visit nodes level by level from left to right.

## Examples

```ts
const tree = {
  value: 1,
  left: { value: 2 },
  right: { value: 3 },
};

breadthFirstTraversal(tree); // [1, 2, 3]
breadthFirstTraversal(null); // []
```

## Constraints

- The tree may be empty.
- Node values may be any type.
- Return a new array containing the visited values.
- Expected time complexity: `O(n)`, where `n` is the number of nodes.
- Expected extra space complexity: `O(w)` excluding the returned array, where `w` is the maximum width of the tree.
