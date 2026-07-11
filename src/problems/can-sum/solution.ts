type Memo = {
  [key: number]: boolean;
};

export function canSum(target: number, nums: number[], memo: Memo = {}): boolean {
  if (target in memo) return memo[target];
  if (target < 0) return false;
  if (target === 0) return true;

  for (let num of nums) {
    const newTarget = target - num;
    if (canSum(newTarget, nums, memo)) {
      return (memo[newTarget] = true);
    }
  }

  return (memo[target] = false);
}

export default canSum;
