# Merge Sorted Array

## Description

You are given two integer arrays `nums1` and `nums2`, sorted in non-decreasing order, and two integers `m` and `n`, representing the number of elements in `nums1` and `nums2` respectively.

Merge `nums1` and `nums2` into a single array sorted in non-decreasing order.

The final sorted array should not be returned by the function. Instead, store it inside `nums1`. To accommodate this, `nums1` has a length of `m + n`, where the first `m` elements denote the elements that should be merged, and the last `n` elements are set to `0` and should be ignored. `nums2` has a length of `n`.

## Examples

```ts
const nums1 = [1, 2, 3, 0, 0, 0];
mergeSortedArray(nums1, 3, [2, 5, 6], 3);
nums1; // [1, 2, 2, 3, 5, 6]

const alreadyMerged = [1];
mergeSortedArray(alreadyMerged, 1, [], 0);
alreadyMerged; // [1]

const emptyPrefix = [0];
mergeSortedArray(emptyPrefix, 0, [1], 1);
emptyPrefix; // [1]
```

## Constraints

- `nums1.length === m + n`.
- `nums2.length === n`.
- `0 <= m, n <= 200`.
- `1 <= m + n <= 200`.
- `-1_000_000_000 <= nums1[i], nums2[j] <= 1_000_000_000`.
- Both input arrays are sorted in non-decreasing order across their meaningful elements.
- Modify `nums1` in place.
- Expected time complexity: `O(m + n)`.
- Expected extra space complexity: `O(1)`.
