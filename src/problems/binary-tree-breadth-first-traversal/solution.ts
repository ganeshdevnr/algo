export interface BinaryTreeNode<T> {
  value: T;
  left?: BinaryTreeNode<T> | null;
  right?: BinaryTreeNode<T> | null;
}

export default function breadthFirstTraversal<T>(root: BinaryTreeNode<T> | null | undefined): T[] {
  if (!root) return [] as T[];

  const queue = [root];
  const values: T[] = [];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current) {
      values.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  return values;
}
