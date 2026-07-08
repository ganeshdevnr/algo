export interface BinaryTreeNode<T> {
  value: T;
  left?: BinaryTreeNode<T> | null;
  right?: BinaryTreeNode<T> | null;
}

export default function depthFirstTraversal<T>(
  root: BinaryTreeNode<T> | null | undefined,
): T[] | [] {
  if (!root) return [];

  const left = depthFirstTraversal(root.left);
  const right = depthFirstTraversal(root.right);

  return [root.value, ...left, ...right];
}
