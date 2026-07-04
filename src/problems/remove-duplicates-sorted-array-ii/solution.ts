export default function removeDuplicatesSortedArrayII(nums: number[]): number {
  let readPointer = 0,
    writePointer = 0;

  for (; readPointer < nums.length; readPointer++) {
    // guard the write pointer
    if (readPointer < 2 || nums[readPointer] !== nums[writePointer - 2]) {
      nums[writePointer++] = nums[readPointer];
    }
  }

  return writePointer;
}
