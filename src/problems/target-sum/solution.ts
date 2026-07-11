export function countTargetSumWays(nums: number[], target: number): number {
  type Memo = {
    [key: string]: number;
  };

  const memo: Memo = {};

  function count(target: number, index: number) {
    if (index === nums.length) return target === 0 ? 1 : 0;

    const key = `${index},${target}`;
    if (key in memo) return memo[key];

    const pick = nums[index++];
    let result = 0;
    for (const sign of [+1, -1]) {
      const need = target - pick * sign;
      result += count(need, index);
    }

    return (memo[key] = result);
  }

  return count(target, 0);
}

export default countTargetSumWays;
