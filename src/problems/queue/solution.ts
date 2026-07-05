interface Node<T> {
  value: T;
  prev?: Node<T>;
  next?: Node<T>;
}

export default class Queue<T> {
  head?: Node<T>;
  tail?: Node<T>;
  length: number = 0;

  enqueue(value: T): void {
    this.length += 1;

    const node = { value } as Node<T>;

    if (this.length === 1) {
      this.tail = node;
      this.head = node;
      return;
    }

    const head = this.tail as Node<T>;

    head.next = node;
    node.prev = head;

    this.tail = node;
  }

  dequeue(): T | undefined {
    if (!this.head) return undefined;

    this.length -= 1;

    const head = this.head as Node<T>;

    this.head = head.next;

    // setting next to undefined, so it can be garbage collected.
    head.next = undefined;

    // if we dequeue the last element, there is no element in the queue so, clear the head as well
    if (this.length === 0) {
      this.tail = undefined;
    }

    return head.value;
  }

  peek(): T | undefined {
    if (!this.head) return undefined;

    return this.head.value;
  }

  isEmpty(): boolean {
    return this.length === 0;
  }

  size(): number {
    return this.length;
  }
}
