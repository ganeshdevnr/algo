# Two Sum Sorted

## Description

Given a sorted array of numbers and a target number, find two distinct numbers whose sum equals the target.

Return the zero-based indices of the two numbers as `[leftIndex, rightIndex]`. If no pair sums to the target, return `[-1, -1]`.

## Examples

```ts
twoSumSorted([2, 7, 11, 15], 9); // [0, 1]
twoSumSorted([-3, 0, 2, 4], 1); // [0, 3]
twoSumSorted([1, 2, 3], 10); // [-1, -1]
```

## Constraints

- The input array is sorted in ascending order.
- The input array may be empty.
- The input array may contain negative numbers, zero, and duplicate values.
- Use each array element at most once.
- Expected time complexity: `O(n)`.
- Expected extra space complexity: `O(1)`.
