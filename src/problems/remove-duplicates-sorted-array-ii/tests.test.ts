import { describe, expect, it } from "vitest";
import removeDuplicatesSortedArrayII from "./solution.js";

describe("remove-duplicates-sorted-array-ii", () => {
  it("keeps a single element", () => {
    const nums = [1];

    expect(removeDuplicatesSortedArrayII(nums)).toBe(1);
    expect(nums.slice(0, 1)).toEqual([1]);
  });

  it("keeps two equal elements", () => {
    const nums = [1, 1];

    expect(removeDuplicatesSortedArrayII(nums)).toBe(2);
    expect(nums.slice(0, 2)).toEqual([1, 1]);
  });

  it("leet code", () => {
    const nums = [1, 1, 1, 2, 2, 3];

    expect(removeDuplicatesSortedArrayII(nums)).toBe(5);
    expect(nums.slice(0, 5)).toEqual([1, 1, 2, 2, 3]);
  });

  it("removes extra copies from a run of three", () => {
    const nums = [1, 1, 1];

    expect(removeDuplicatesSortedArrayII(nums)).toBe(2);
    expect(nums.slice(0, 2)).toEqual([1, 1]);
  });

  it("matches the first example", () => {
    const nums = [1, 1, 1, 2, 2, 3];

    expect(removeDuplicatesSortedArrayII(nums)).toBe(5);
    expect(nums.slice(0, 5)).toEqual([1, 1, 2, 2, 3]);
  });

  it("matches the second example", () => {
    const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];

    expect(removeDuplicatesSortedArrayII(nums)).toBe(7);
    expect(nums.slice(0, 7)).toEqual([0, 0, 1, 1, 2, 3, 3]);
  });

  it("keeps an array that has no duplicates", () => {
    const nums = [1, 2, 3, 4];

    expect(removeDuplicatesSortedArrayII(nums)).toBe(4);
    expect(nums.slice(0, 4)).toEqual([1, 2, 3, 4]);
  });

  it("keeps every value when each appears exactly twice", () => {
    const nums = [1, 1, 2, 2, 3, 3];

    expect(removeDuplicatesSortedArrayII(nums)).toBe(6);
    expect(nums.slice(0, 6)).toEqual([1, 1, 2, 2, 3, 3]);
  });

  it("keeps only two elements when all values are the same", () => {
    const nums = [7, 7, 7, 7, 7];

    expect(removeDuplicatesSortedArrayII(nums)).toBe(2);
    expect(nums.slice(0, 2)).toEqual([7, 7]);
  });

  it("handles uneven duplicate runs with negative values", () => {
    const nums = [-3, -3, -3, -2, -1, -1, 0, 0, 0, 0, 4];

    expect(removeDuplicatesSortedArrayII(nums)).toBe(8);
    expect(nums.slice(0, 8)).toEqual([-3, -3, -2, -1, -1, 0, 0, 4]);
  });

  it("handles extra duplicates at the start and end", () => {
    const nums = [1, 1, 1, 2, 3, 4, 4, 4];

    expect(removeDuplicatesSortedArrayII(nums)).toBe(6);
    expect(nums.slice(0, 6)).toEqual([1, 1, 2, 3, 4, 4]);
  });

  it("handles minimum and maximum constraint values", () => {
    const nums = [-10_000, -10_000, -10_000, 0, 10_000, 10_000, 10_000];

    expect(removeDuplicatesSortedArrayII(nums)).toBe(5);
    expect(nums.slice(0, 5)).toEqual([-10_000, -10_000, 0, 10_000, 10_000]);
  });

  it("handles a large sorted input", () => {
    const nums = Array.from({ length: 30_000 }, (_, index) => Math.floor(index / 5) - 10_000);

    expect(removeDuplicatesSortedArrayII(nums)).toBe(12_000);
    expect(nums.slice(0, 6)).toEqual([-10_000, -10_000, -9_999, -9_999, -9_998, -9_998]);
    expect(nums.slice(11_994, 12_000)).toEqual([-4_003, -4_003, -4_002, -4_002, -4_001, -4_001]);
  });

  it("processes the array in O(n) time", () => {
    const length = 30_000;
    const rawNums = Array.from({ length }, (_, index) => Math.floor(index / 5) - 10_000);
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

    expect(removeDuplicatesSortedArrayII(nums)).toBe(12_000);
    expect(nums.slice(0, 6)).toEqual([-10_000, -10_000, -9_999, -9_999, -9_998, -9_998]);
    expect(accesses).toBeLessThanOrEqual(maxExpectedAccesses);
  });
});
