import { describe, expect, it } from "vitest";
import { quickSort } from "./solution.js";

function expectSortedInPlace(nums: number[], expected: number[]): void {
  const originalReference = nums;
  const result = quickSort(nums);

  expect(result).toBeUndefined();
  expect(nums).toBe(originalReference);
  expect(nums).toEqual(expected);
}

describe("quick-sort", () => {
  it("sorts an unsorted array in place", () => {
    expectSortedInPlace([9, 3, 7, 4, 69, 420, 42], [3, 4, 7, 9, 42, 69, 420]);
  });

  it("keeps an already sorted array sorted in place", () => {
    expectSortedInPlace([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]);
  });

  it("sorts a reverse-sorted array in place", () => {
    expectSortedInPlace([5, 4, 3, 2, 1], [1, 2, 3, 4, 5]);
  });

  it("sorts duplicate values in place", () => {
    expectSortedInPlace([4, 2, 4, 3, 2, 1], [1, 2, 2, 3, 4, 4]);
  });

  it("handles a single element in place", () => {
    expectSortedInPlace([42], [42]);
  });

  it("handles an empty array in place", () => {
    expectSortedInPlace([], []);
  });

  it("handles all-equal elements in place", () => {
    expectSortedInPlace([7, 7, 7, 7], [7, 7, 7, 7]);
  });

  it("sorts negative numbers in place", () => {
    expectSortedInPlace([0, -10, 5, -3, 2], [-10, -3, 0, 2, 5]);
  });
});
