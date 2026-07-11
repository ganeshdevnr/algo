type Memo = {
  [key: number]: number;
};

export function countSum(target: number, nums: number[], memo: Memo = {}): number {
  if (target === 0) return 1;
  if (target < 0) return 0;
  if (target in memo) return memo[target];

  let result = 0;
  for (const num of nums) {
    const newTarget = target - num;
    result += countSum(newTarget, nums, memo);
  }

  return (memo[target] = result);
}

export default countSum;
