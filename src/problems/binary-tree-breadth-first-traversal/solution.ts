export interface BinaryTreeNode<T> {
  value: T;
  left?: BinaryTreeNode<T> | null;
  right?: BinaryTreeNode<T> | null;
}

export default function breadthFirstTraversal<T>(root: BinaryTreeNode<T> | null | undefined): T[] {
  if (!root) return [] as T[];

  const queue = [root];
  const values: T[] = [];

  // using a readPointer prevents array shifting causes bad performance with large input
  let readPointer = 0;

  while (readPointer < queue.length) {
    const current = queue[readPointer++];

    if (current) {
      values.push(current.value);

      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }

  return values;
}
