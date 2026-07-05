interface Node<T> {
  value: T;
  previous?: Node<T>;
}

export default class Stack<T> {
  head?: Node<T>;

  length = 0;

  push(value: T): void {
    this.length += 1;

    const head = this.head;

    const node = { value } as Node<T>;

    node.previous = head;

    this.head = node;
  }

  pop(): T | undefined {
    if (this.length === 0) return undefined;

    this.length -= 1;

    const head = this.head as Node<T>;

    // if "head" is the last element, then "head.previous" is undefined
    this.head = head.previous;

    head.previous = undefined;

    return head.value;
  }

  peek(): T | undefined {
    return this.head?.value;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  size(): number {
    return this.length;
  }
}
