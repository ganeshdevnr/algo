export default function removeDuplicatesSortedArray(nums: number[]): number {
  if (nums.length === 0) return 0;

  let s = 0,
    f = 1;

  //   while (f < nums.length) {
  //     if (nums[s] === nums[f]) ++f;
  //     else {
  //       nums[++s] = nums[f];
  //     }
  //   }

  for (; f < nums.length; f++) {
    if (nums[s] !== nums[f]) {
      nums[++s] = nums[f];
    }
  }

  return s + 1;
}
