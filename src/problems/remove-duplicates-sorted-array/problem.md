# Remove Duplicates From Sorted Array

## Description

Given a sorted array of positive integers, remove duplicate values in place so each unique value appears once at the start of the array.

Return the number of unique values. Only the first returned-length elements of the array need to contain the deduplicated values; values after that prefix do not matter.

## Examples

```ts
const nums = [1, 1, 2, 2, 3];
removeDuplicatesSortedArray(nums); // 3
nums.slice(0, 3); // [1, 2, 3]

const noDuplicates = [1, 2, 3];
removeDuplicatesSortedArray(noDuplicates); // 3
noDuplicates.slice(0, 3); // [1, 2, 3]
```

## Constraints

- The input array is sorted in ascending order.
- Every element is a positive integer.
- The input array may be empty.
- Modify the input array in place.
- Expected time complexity: `O(n)`.
- Expected extra space complexity: `O(1)`.
