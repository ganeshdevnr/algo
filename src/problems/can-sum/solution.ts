type Memo = {
  [key: number]: boolean;
};

export function canSum(target: number, nums: number[], memo: Memo = {}): boolean {
  const key = target;
  if (key in memo) return memo[key];
  if (target < 0) return false;
  if (target === 0) return true;

  for (let num of nums) {
    const newTarget = target - num;
    const result = canSum(newTarget, nums, memo);
    memo[key] = result;
    if (result === true) return true;
  }

  return false;
}

export default canSum;
