import { describe, expect, it } from "vitest";
import kidsWithCandies from "./solution.js";

describe("kids-with-the-greatest-number-of-candies", () => {
  it("matches example 1", () => {
    expect(kidsWithCandies([2, 3, 5, 1, 3], 3)).toEqual([true, true, true, false, true]);
  });

  it("matches example 2", () => {
    expect(kidsWithCandies([4, 2, 1, 1, 2], 1)).toEqual([true, false, false, false, false]);
  });

  it("matches example 3", () => {
    expect(kidsWithCandies([12, 1, 12], 10)).toEqual([true, false, true]);
  });

  it("handles the minimum number of kids", () => {
    expect(kidsWithCandies([1, 100], 50)).toEqual([false, true]);
  });

  it("returns true for every kid when all are already tied", () => {
    expect(kidsWithCandies([7, 7, 7, 7], 1)).toEqual([true, true, true, true]);
  });

  it("returns true for every kid when extra candies let everyone reach the maximum", () => {
    expect(kidsWithCandies([5, 1, 3], 4)).toEqual([true, true, true]);
  });

  it("returns false for kids who cannot catch the maximum", () => {
    expect(kidsWithCandies([10, 1, 2, 3], 2)).toEqual([true, false, false, false]);
  });

  it("keeps multiple existing greatest kids true", () => {
    expect(kidsWithCandies([8, 2, 8, 1], 1)).toEqual([true, false, true, false]);
  });

  it("handles the maximum constrained input size", () => {
    const candies = Array.from({ length: 100 }, (_, index) => (index === 99 ? 100 : 50));

    expect(kidsWithCandies(candies, 50)).toEqual(Array.from({ length: 100 }, () => true));
  });

  it("checks candies in O(n) time", () => {
    const length = 100;
    const rawCandies = Array.from({ length }, (_, index) => (index === length - 1 ? 100 : 1));
    const maxExpectedReads = 3 * length;
    let reads = 0;

    const candies = new Proxy(rawCandies, {
      get(target, property, receiver) {
        if (typeof property === "string" && /^\d+$/.test(property)) {
          reads++;
        }

        return Reflect.get(target, property, receiver);
      },
    });

    expect(kidsWithCandies(candies, 50)).toEqual([
      ...Array.from({ length: length - 1 }, () => false),
      true,
    ]);
    expect(reads).toBeLessThanOrEqual(maxExpectedReads);
  });
});
