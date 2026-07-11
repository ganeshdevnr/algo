import { describe, expect, it } from "vitest";
import { canSum } from "./solution.js";

describe("can-sum", () => {
  it("returns true when a sum exists", () => {
    expect(canSum(7, [5, 3, 4])).toBe(true);
  });

  it("returns false when no sum exists", () => {
    expect(canSum(7, [2, 4])).toBe(false);
  });

  it("returns true for another reachable target", () => {
    expect(canSum(8, [5, 3, 4])).toBe(true);
  });

  it("returns true for target zero", () => {
    expect(canSum(0, [1, 2])).toBe(true);
  });

  // unskip after memoization
  it("returns false for a large unreachable target", () => {
    expect(canSum(300, [7, 14])).toBe(false);
  });
});
