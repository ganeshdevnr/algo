import { describe, expect, it } from "vitest";
import { howSum } from "./solution.js";

describe("how-sum", () => {
  it("returns one valid sum when a sum exists", () => {
    const nums = [5, 3, 4];
    const result = howSum(7, nums);

    expect(result).not.toBeNull();
    expect(result?.reduce((sum, num) => sum + num, 0)).toBe(7);
    expect(result?.every((num) => nums.includes(num))).toBe(true);
  });

  it("returns null when no sum exists", () => {
    expect(howSum(7, [2, 4])).toBeNull();
  });

  it("returns an empty array for target zero", () => {
    expect(howSum(0, [1, 2])).toEqual([]);
  });

  it("returns null for a large unreachable target within 5ms", () => {
    const start = performance.now();
    const result = howSum(3000, [7, 14]);
    const elapsed = performance.now() - start;

    expect(elapsed).toBeLessThan(5);
    expect(result).toBeNull();
  });
});
