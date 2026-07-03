export default function twoSumSorted(nums: number[], target: number): [number, number] {
  let R = nums.length - 1;
  let L = 0;

  while (L < R) {
    const sum = nums[L] + nums[R];

    if (sum === target) {
      return [L, R];
    } else if (sum < target) {
      ++L;
    } else {
      --R;
    }
  }

  return [-1, -1];
}
