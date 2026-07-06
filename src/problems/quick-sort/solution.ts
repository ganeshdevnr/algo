export function quickSort(nums: number[]): void {
  quickSortHelper(nums, 0, nums.length - 1);
}

function quickSortHelper(nums: number[], start: number, end: number): void {
  if (start >= end) return;

  const partitionIndex = partition(nums, start, end);

  quickSortHelper(nums, start, partitionIndex - 1);
  quickSortHelper(nums, partitionIndex + 1, end);
}

// parition sorts the partition
function partition(nums: number[], start: number, end: number): number {
  let write = start;
  let read = start;

  for (; read <= end; read++) {
    if (nums[read] < nums[end]) {
      const temp = nums[write];
      nums[write++] = nums[read];
      nums[read] = temp;
    }
  }

  // swap the partition number
  const temp = nums[write];
  nums[write] = nums[end];
  nums[end] = temp;

  return write;
}
