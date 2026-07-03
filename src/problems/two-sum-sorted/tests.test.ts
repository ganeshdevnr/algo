import { describe, expect, it } from "vitest";
import twoSumSorted from "./solution.js";

describe("two-sum-sorted", () => {
  it("finds a pair in the middle of the array", () => {
    expect(twoSumSorted([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });

  it("finds a pair at the array boundaries", () => {
    expect(twoSumSorted([-3, 0, 2, 4], 1)).toEqual([0, 3]);
  });

  it("finds a pair with negative numbers and zero", () => {
    expect(twoSumSorted([-10, -4, 0, 3, 8], -1)).toEqual([1, 3]);
  });

  it("uses distinct indices when duplicate values form the target", () => {
    expect(twoSumSorted([1, 2, 2, 4], 4)).toEqual([1, 2]);
  });

  it("returns [-1, -1] when no pair exists", () => {
    expect(twoSumSorted([1, 2, 3], 10)).toEqual([-1, -1]);
  });

  it("returns [-1, -1] for an empty array", () => {
    expect(twoSumSorted([], 1)).toEqual([-1, -1]);
  });

  it("returns [-1, -1] for a single-element array", () => {
    expect(twoSumSorted([5], 10)).toEqual([-1, -1]);
  });

  it("handles a large sorted input", () => {
    const nums = Array.from({ length: 100_000 }, (_, index) => index * 2);

    expect(twoSumSorted(nums, 123_456)).toEqual([0, 61_728]);
  });

  it("checks numbers in O(n) time", () => {
    const length = 100_000;
    const rawNums = Array.from({ length }, (_, index) => index * 2);
    const maxExpectedReads = 2 * length;
    let reads = 0;

    const nums = new Proxy(rawNums, {
      get(target, property, receiver) {
        if (typeof property === "string" && /^\d+$/.test(property)) {
          reads++;
        }

        return Reflect.get(target, property, receiver);
      },
    });

    expect(twoSumSorted(nums, 123_456)).toEqual([0, 61_728]);
    expect(reads).toBeLessThanOrEqual(maxExpectedReads);
  });
});
