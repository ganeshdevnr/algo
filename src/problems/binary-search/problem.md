# Binary Search

## Description

Given a sorted array of numbers and a target number, determine whether the target exists in the array.

Return `true` if the target is present, otherwise return `false`.

## Examples

```ts
binarySearch([1, 3, 5, 7, 9, 11], 7); // true
binarySearch([1, 3, 5, 7, 9, 11], 6); // false
binarySearch([], 1); // false
```

## Constraints

- The input array is sorted in ascending order.
- The input array may be empty.
- The input array may contain negative numbers and zero.
- Expected time complexity: `O(log n)`.
