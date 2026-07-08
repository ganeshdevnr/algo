import breadthFirstTraversal, { type BinaryTreeNode } from "./solution.js";

const tree: BinaryTreeNode<string> = {
  value: "root",
  left: {
    value: "left",
    left: { value: "left.left" },
    right: { value: "left.right" },
  },
  right: {
    value: "right",
    left: { value: "right.left" },
    right: { value: "right.right" },
  },
};

console.log(breadthFirstTraversal(tree));
