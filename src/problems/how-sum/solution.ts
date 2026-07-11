type Memo = {
  [key: number]: number[] | null;
};

export function howSum(target: number, nums: number[], memo: Memo = {}): number[] | null {
  if (target === 0) return [];
  if (target < 0) return null;
  if (target in memo) return memo[target];

  for (const num of nums) {
    const newTarget = target - num;

    const result = howSum(newTarget, nums, memo);

    if (result) {
      return (memo[target] = [num, ...result]);
    }
  }

  return (memo[target] = null);
}

export default howSum;
