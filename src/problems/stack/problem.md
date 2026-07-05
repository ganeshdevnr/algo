# Stack

## Description

Implement a generic last-in-first-out stack data structure.

The stack should support adding values to the top, removing values from the top, checking the top value without removing it, checking whether the stack is empty, and reading the current size.

## Examples

```ts
const stack = new Stack<number>();

stack.push(1);
stack.push(2);

stack.peek(); // 2
stack.pop(); // 2
stack.pop(); // 1
stack.pop(); // undefined
```

## Constraints

- The stack must support generic value types.
- `pop` should return `undefined` when the stack is empty.
- `peek` should return `undefined` when the stack is empty.
- `peek` must not remove the top value.
- `size` should return the number of values currently in the stack.
- `isEmpty` should return whether the stack contains no values.
