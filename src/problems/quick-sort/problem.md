# Quick Sort

## Description

Given an array of numbers, sort the array in ascending order in place using quicksort.

The exported `quickSort(nums: number[]): void` function should mutate the input array and return `undefined`.

## Requirements

- Use quicksort.
- Use a recursive helper over inclusive `start` and `end` indexes.
- Use Lomuto partitioning.
- Use the last element as the pivot.
- Sort in place instead of returning a new array.

## Examples

```ts
const nums = [3, 1, 2];
quickSort(nums);
nums; // [1, 2, 3]
```

## Constraints

- The input array may be empty.
- The input may contain duplicate values.
- The input may contain negative values.
