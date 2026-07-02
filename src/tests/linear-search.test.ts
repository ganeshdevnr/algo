import { describe, expect, it } from "vitest";
import linearSearch from "../problems/linear-search.js";

describe("linear-search", () => {
  it("finds a value in the middle of the array", () => {
    expect(linearSearch([3, 7, 11, 15, 19], 11)).toBe(true);
  });

  it("finds the first element", () => {
    expect(linearSearch([3, 7, 11, 15, 19], 3)).toBe(true);
  });

  it("finds the last element", () => {
    expect(linearSearch([3, 7, 11, 15, 19], 19)).toBe(true);
  });

  it("returns false when the value is missing", () => {
    expect(linearSearch([3, 7, 11, 15, 19], 9)).toBe(false);
  });

  it("returns false for an empty array", () => {
    expect(linearSearch([], 1)).toBe(false);
  });

  it("handles a single matching element", () => {
    expect(linearSearch([42], 42)).toBe(true);
  });

  it("handles a single non-matching element", () => {
    expect(linearSearch([42], 7)).toBe(false);
  });

  it("handles negative numbers and zero", () => {
    expect(linearSearch([-10, -3, 0, 4, 9], 0)).toBe(true);
    expect(linearSearch([-10, -3, 0, 4, 9], -5)).toBe(false);
  });

  it("handles duplicate values", () => {
    expect(linearSearch([1, 2, 2, 2, 3], 2)).toBe(true);
  });

  it("handles a large input", () => {
    const haystack = Array.from({ length: 100_000 }, (_, index) => index);

    expect(linearSearch(haystack, 99_999)).toBe(true);
    expect(linearSearch(haystack, 100_001)).toBe(false);
  });
});
