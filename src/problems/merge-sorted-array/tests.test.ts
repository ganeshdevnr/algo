import { describe, expect, it } from "vitest";
import mergeSortedArray from "./solution.js";

describe("merge-sorted-array", () => {
  it("merges two sorted arrays with overlapping values", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];

    mergeSortedArray(nums1, 3, [2, 5, 6], 3);

    expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
  });

  it("leaves nums1 unchanged when nums2 is empty", () => {
    const nums1 = [1];

    mergeSortedArray(nums1, 1, [], 0);

    expect(nums1).toEqual([1]);
  });

  it("copies nums2 when nums1 has no meaningful elements", () => {
    const nums1 = [0];

    mergeSortedArray(nums1, 0, [1], 1);

    expect(nums1).toEqual([1]);
  });

  it("handles negative numbers and duplicate values", () => {
    const nums1 = [-5, -3, -3, 0, 0, 0, 0];

    mergeSortedArray(nums1, 3, [-4, -3, -1, 2], 4);

    expect(nums1).toEqual([-5, -4, -3, -3, -3, -1, 2]);
  });

  it("handles all nums2 values coming before nums1 values", () => {
    const nums1 = [4, 5, 6, 0, 0, 0];

    mergeSortedArray(nums1, 3, [1, 2, 3], 3);

    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("handles all nums2 values coming after nums1 values", () => {
    const nums1 = [1, 2, 3, 0, 0, 0];

    mergeSortedArray(nums1, 3, [4, 5, 6], 3);

    expect(nums1).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it("handles boundary integer values", () => {
    const nums1 = [-1_000_000_000, 0, 0, 0];

    mergeSortedArray(nums1, 1, [-1_000_000_000, 1_000_000_000, 1_000_000_000], 3);

    expect(nums1).toEqual([-1_000_000_000, -1_000_000_000, 1_000_000_000, 1_000_000_000]);
  });

  it("handles a large sorted input", () => {
    const m = 100_000;
    const n = 100_000;
    const nums1 = Array.from({ length: m + n }, (_, index) => (index < m ? index * 2 : 0));
    const nums2 = Array.from({ length: n }, (_, index) => index * 2 + 1);

    mergeSortedArray(nums1, m, nums2, n);

    expect(nums1.slice(0, 6)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(nums1.slice(-6)).toEqual([199_994, 199_995, 199_996, 199_997, 199_998, 199_999]);
  });

  it("processes the arrays in O(m + n) time", () => {
    const m = 100_000;
    const n = 100_000;
    const maxExpectedAccesses = 8 * (m + n);
    let accesses = 0;
    const rawNums1 = Array.from({ length: m + n }, (_, index) => (index < m ? index * 2 : 0));
    const rawNums2 = Array.from({ length: n }, (_, index) => index * 2 + 1);
    const countIndexAccess = <T extends number[]>(target: T): T =>
      new Proxy(target, {
        get(proxiedTarget, property, receiver) {
          if (typeof property === "string" && /^\d+$/.test(property)) {
            accesses++;
          }

          return Reflect.get(proxiedTarget, property, receiver);
        },
        set(proxiedTarget, property, value, receiver) {
          if (typeof property === "string" && /^\d+$/.test(property)) {
            accesses++;
          }

          return Reflect.set(proxiedTarget, property, value, receiver);
        },
      });

    const nums1 = countIndexAccess(rawNums1);
    const nums2 = countIndexAccess(rawNums2);

    mergeSortedArray(nums1, m, nums2, n);

    expect(nums1.slice(0, 6)).toEqual([0, 1, 2, 3, 4, 5]);
    expect(accesses).toBeLessThanOrEqual(maxExpectedAccesses);
  });
});
