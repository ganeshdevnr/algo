# Two Crystal Balls

## Description

Given an array where each index represents a floor, each value indicates whether a crystal ball breaks when dropped from that floor.

The array starts with zero or more `false` values followed by zero or more `true` values. Return the index of the first `true` value. Return `-1` if the ball never breaks.

## Examples

```ts
twoCrystalBalls([false, false, false, true, true]); // 3
twoCrystalBalls([true, true, true]); // 0
twoCrystalBalls([false, false, false]); // -1
twoCrystalBalls([]); // -1
```

## Constraints

- The input array may be empty.
- Once a floor breaks a crystal ball, every higher floor also breaks it.
- Return the first breaking index, not just any breaking index.
- Expected time complexity: `O(sqrt(n))`.
