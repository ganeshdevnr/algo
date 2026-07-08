# Binary Tree Depth First Traversal

## Description

Given the root of a binary tree, return the values from a depth-first traversal in pre-order.

In pre-order traversal, visit the current node first, then traverse the left subtree, then traverse the right subtree.

## Examples

```ts
const tree = {
  value: 1,
  left: { value: 2 },
  right: { value: 3 },
};

depthFirstTraversal(tree); // [1, 2, 3]
depthFirstTraversal(null); // []
```

## Constraints

- The tree may be empty.
- Node values are numbers.
- Return a new array containing the visited values.
- Expected time complexity: `O(n)`, where `n` is the number of nodes.
- Expected extra space complexity: `O(h)` excluding the returned array, where `h` is the tree height.
