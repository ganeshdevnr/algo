# Remove Duplicates From Sorted Array II

## Description

Given an integer array `nums` sorted in non-decreasing order, remove some duplicates in place so each unique element appears at most twice. Keep the relative order of the elements the same.

Return `k`, the number of elements left after removing extra duplicates. The first `k` elements of `nums` must hold the final result. Values after the first `k` elements do not matter.

Do not allocate another array. Modify `nums` in place using `O(1)` extra memory.

## Custom Judge

The judge will test the solution with this behavior:

```ts
const nums = [...];
const expectedNums = [...];

const k = removeDuplicatesSortedArrayII(nums);

expect(k).toBe(expectedNums.length);
expect(nums.slice(0, k)).toEqual(expectedNums);
```

## Examples

```ts
const nums = [1, 1, 1, 2, 2, 3];
removeDuplicatesSortedArrayII(nums); // 5
nums.slice(0, 5); // [1, 1, 2, 2, 3]

const otherNums = [0, 0, 1, 1, 1, 1, 2, 3, 3];
removeDuplicatesSortedArrayII(otherNums); // 7
otherNums.slice(0, 7); // [0, 0, 1, 1, 2, 3, 3]
```

## Constraints

- `1 <= nums.length <= 3 * 10^4`
- `-10^4 <= nums[i] <= 10^4`
- `nums` is sorted in non-decreasing order.
- Modify the input array in place.
- Expected time complexity: `O(n)`.
- Expected extra space complexity: `O(1)`.
