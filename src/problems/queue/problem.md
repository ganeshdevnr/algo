# Queue

## Description

Implement a generic first-in-first-out queue data structure.

The queue should support adding values to the back, removing values from the front, checking the front value without removing it, checking whether the queue is empty, and reading the current size.

## Examples

```ts
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);

queue.peek(); // 1
queue.dequeue(); // 1
queue.dequeue(); // 2
queue.dequeue(); // undefined
```

## Constraints

- The queue must support generic value types.
- `dequeue` should return `undefined` when the queue is empty.
- `peek` should return `undefined` when the queue is empty.
- `peek` must not remove the front value.
- `size` should return the number of values currently in the queue.
- `isEmpty` should return whether the queue contains no values.
