export function quickSort(nums: number[]): void {
  quickSortHelper(nums, 0, nums.length - 1);
}

function quickSortHelper(nums: number[], start: number, end: number): void {
  if (start >= end) return;

  const partitionIndex = partition(nums, start, end);

  quickSortHelper(nums, start, partitionIndex);
  quickSortHelper(nums, partitionIndex + 1, end);
}

// parition sorts the partition
function partition(nums: number[], start: number, end: number): number {
  let write = start - 1;
  let read = start - 1;

  const pivot = nums[end];

  for (; read <= end; read++) {
    if (nums[read] < pivot) {
      const temp = nums[write];
      nums[write++] = nums[read];
      nums[read] = temp;
    }
  }

  nums[end] = nums[write];
  nums[write] = pivot;

  return write;
}
