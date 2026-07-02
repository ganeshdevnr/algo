import { describe, expect, it } from "vitest";
import bubbleSort from "./solution.js";

describe("bubble-sort", () => {
  it("sorts an unsorted array", () => {
    expect(bubbleSort([9, 3, 7, 4, 69, 420, 42])).toEqual([3, 4, 7, 9, 42, 69, 420]);
  });

  it("returns an empty array for empty input", () => {
    expect(bubbleSort([])).toEqual([]);
  });

  it("handles a single element", () => {
    expect(bubbleSort([42])).toEqual([42]);
  });

  it("keeps an already sorted array sorted", () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it("sorts a reverse-sorted array", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  it("handles duplicate values", () => {
    expect(bubbleSort([4, 2, 4, 3, 2, 1])).toEqual([1, 2, 2, 3, 4, 4]);
  });

  it("handles negative numbers and zero", () => {
    expect(bubbleSort([0, -10, 5, -3, 2])).toEqual([-10, -3, 0, 2, 5]);
  });

  it("handles repeated identical values", () => {
    expect(bubbleSort([7, 7, 7, 7])).toEqual([7, 7, 7, 7]);
  });

  it("does not mutate the input array", () => {
    const input = [3, 1, 2];

    expect(bubbleSort(input)).toEqual([1, 2, 3]);
    expect(input).toEqual([3, 1, 2]);
  });

  it("handles a large input", () => {
    const input = Array.from({ length: 1_000 }, (_, index) => 1_000 - index);
    const expected = Array.from({ length: 1_000 }, (_, index) => index + 1);

    expect(bubbleSort(input)).toEqual(expected);
  });
});
