export default function removeDuplicatesSortedArray(nums: number[]): number {
  let s = 0;
  let f = 1;

  if (nums.length === 0) return s;

  for (; f < nums.length; f++) {
    if (nums[s] !== nums[f]) {
      ++s;
      nums[s] = nums[f];
    }
  }

  return s + 1;
}
