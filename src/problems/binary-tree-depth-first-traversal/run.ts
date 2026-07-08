import depthFirstTraversal, { type BinaryTreeNode } from "./solution.js";

const tree: BinaryTreeNode<string> = {
  value: "root",
  left: {
    value: "left",
    left: { value: "left.left" },
    right: { value: "left.right" },
  },
  right: {
    value: "right",
  },
};

console.log(depthFirstTraversal(tree));
