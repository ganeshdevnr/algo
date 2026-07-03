import { describe, expect, it } from "vitest";
import removeDuplicatesSortedArray from "./solution.js";

describe("remove-duplicates-sorted-array", () => {
  it("returns 0 for an empty array", () => {
    const nums: number[] = [];

    expect(removeDuplicatesSortedArray(nums)).toBe(0);
    expect(nums).toEqual([]);
  });

  it("keeps a single element", () => {
    const nums = [1];

    expect(removeDuplicatesSortedArray(nums)).toBe(1);
    expect(nums.slice(0, 1)).toEqual([1]);
  });

  it("keeps an array that has no duplicates", () => {
    const nums = [1, 2, 3, 4, 5];

    expect(removeDuplicatesSortedArray(nums)).toBe(5);
    expect(nums.slice(0, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("compacts an array where every value is duplicated", () => {
    const nums = [1, 1, 2, 2, 3, 3];

    expect(removeDuplicatesSortedArray(nums)).toBe(3);
    expect(nums.slice(0, 3)).toEqual([1, 2, 3]);
  });

  it("compacts an array with uneven duplicate runs", () => {
    const nums = [1, 1, 1, 2, 3, 3, 4, 4, 4, 5];

    expect(removeDuplicatesSortedArray(nums)).toBe(5);
    expect(nums.slice(0, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles all elements being the same", () => {
    const nums = [7, 7, 7, 7];

    expect(removeDuplicatesSortedArray(nums)).toBe(1);
    expect(nums.slice(0, 1)).toEqual([7]);
  });

  it("handles duplicates at the start and end", () => {
    const nums = [1, 1, 2, 3, 4, 5, 5, 5];

    expect(removeDuplicatesSortedArray(nums)).toBe(5);
    expect(nums.slice(0, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles a large sorted input", () => {
    const nums = Array.from({ length: 100_000 }, (_, index) => Math.floor(index / 10) + 1);

    expect(removeDuplicatesSortedArray(nums)).toBe(10_000);
    expect(nums.slice(0, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(nums.slice(9_995, 10_000)).toEqual([9_996, 9_997, 9_998, 9_999, 10_000]);
  });

  it("processes the array in O(n) time", () => {
    const length = 100_000;
    const rawNums = Array.from({ length }, (_, index) => Math.floor(index / 10) + 1);
    const maxExpectedAccesses = 4 * length;
    let accesses = 0;

    const nums = new Proxy(rawNums, {
      get(target, property, receiver) {
        if (typeof property === "string" && /^\d+$/.test(property)) {
          accesses++;
        }

        return Reflect.get(target, property, receiver);
      },
      set(target, property, value, receiver) {
        if (typeof property === "string" && /^\d+$/.test(property)) {
          accesses++;
        }

        return Reflect.set(target, property, value, receiver);
      },
    });

    expect(removeDuplicatesSortedArray(nums)).toBe(10_000);
    expect(nums.slice(0, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(accesses).toBeLessThanOrEqual(maxExpectedAccesses);
  });
});
