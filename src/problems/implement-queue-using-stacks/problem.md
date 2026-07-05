# Implement Queue Using Stacks

## Description

Implement a first-in-first-out queue using only two stacks.

The queue should support the same operations as a normal queue:

- `push(x)`: push `x` to the back of the queue.
- `pop()`: remove and return the element at the front of the queue.
- `peek()`: return the element at the front of the queue without removing it.
- `empty()`: return whether the queue is empty.

You may simulate stacks with arrays, but only standard stack operations are allowed: push to top, pop from top, peek from top, size, and empty checks.

## Examples

```ts
const queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek(); // 1
queue.pop(); // 1
queue.empty(); // false
```

## Constraints

- `1 <= x <= 9`
- At most `100` calls will be made to `push`, `pop`, `peek`, and `empty`.
- All calls to `pop` and `peek` are valid.
- Use only two stacks to implement the queue.
- Follow-up: implement each operation in amortized `O(1)` time.
