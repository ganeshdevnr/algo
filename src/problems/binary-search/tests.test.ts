import { describe, expect, it } from "vitest";
import binarySearch from "./solution.js";

describe("binary-search", () => {
  it("finds a value in the middle of a sorted array", () => {
    expect(binarySearch([1, 3, 5, 7, 9, 11], 7)).toBe(true);
  });

  it("finds the first element", () => {
    expect(binarySearch([1, 3, 5, 7, 9, 11], 1)).toBe(true);
  });

  it("finds the last element", () => {
    expect(binarySearch([1, 3, 5, 7, 9, 11], 11)).toBe(true);
  });

  it("returns false when the value is between existing elements", () => {
    expect(binarySearch([1, 3, 5, 7, 9, 11], 6)).toBe(false);
  });

  it("returns false when the value is below the lower boundary", () => {
    expect(binarySearch([1, 3, 5, 7, 9, 11], 0)).toBe(false);
  });

  it("returns false when the value is above the upper boundary", () => {
    expect(binarySearch([1, 3, 5, 7, 9, 11], 12)).toBe(false);
  });

  it("returns false for an empty array", () => {
    expect(binarySearch([], 1)).toBe(false);
  });

  it("handles a single matching element", () => {
    expect(binarySearch([42], 42)).toBe(true);
  });

  it("handles a single non-matching element", () => {
    expect(binarySearch([42], 7)).toBe(false);
  });

  it("handles negative numbers and zero", () => {
    expect(binarySearch([-20, -10, -3, 0, 4, 9], -10)).toBe(true);
    expect(binarySearch([-20, -10, -3, 0, 4, 9], -4)).toBe(false);
  });

  it("handles a large sorted input", () => {
    const haystack = Array.from({ length: 1_000_000 }, (_, index) => index * 2);

    expect(binarySearch(haystack, 1_234_568)).toBe(true);
    expect(binarySearch(haystack, 1_234_567)).toBe(false);
  });
});
