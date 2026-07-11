import { describe, expect, it } from "vitest";
import { countTargetSumWays } from "./solution.js";

describe("target-sum", () => {
  it("counts ways for a hand-verified case", () => {
    expect(countTargetSumWays([1, 2, 1], 2)).toBe(2);
  });

  it("counts a traced subproblem with target one", () => {
    expect(countTargetSumWays([2, 1], 1)).toBe(1);
  });

  it("counts a traced subproblem with target three", () => {
    expect(countTargetSumWays([2, 1], 3)).toBe(1);
  });

  it("counts the standard repeated-one case", () => {
    expect(countTargetSumWays([1, 1, 1, 1, 1], 3)).toBe(5);
  });

  it("counts the empty expression for target zero", () => {
    expect(countTargetSumWays([], 0)).toBe(1);
  });

  it("returns zero for empty input and nonzero target", () => {
    expect(countTargetSumWays([], 5)).toBe(0);
  });

  it("continues after reaching zero early", () => {
    expect(countTargetSumWays([1, 1], 2)).toBe(1);
  });

  it("counts plus-zero and minus-zero as different expressions", () => {
    expect(countTargetSumWays([1, 0], 1)).toBe(2);
  });

  it("test case 116 from leetcode — must complete fast (memoization required)", () => {
    const nums = [2, 107, 109, 113, 127, 131, 137, 3, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 47, 53];

    const start = performance.now();
    const result = countTargetSumWays(nums, 899);
    const elapsed = performance.now() - start;

    expect(elapsed).toBeLessThan(3);
    expect(result).toBe(0);
  });
});
