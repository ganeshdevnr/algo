# Linear Search

## Description

Given an array of numbers and a target number, determine whether the target exists in the array.

Return `true` if the target is present, otherwise return `false`.

## Examples

```ts
linearSearch([3, 7, 11, 15, 19], 11); // true
linearSearch([3, 7, 11, 15, 19], 9); // false
linearSearch([], 1); // false
```

## Constraints

- The input array may be empty.
- The input array may contain negative numbers, zero, and duplicates.
- The array is not guaranteed to be sorted.
- Expected time complexity: `O(n)`.
