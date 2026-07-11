import { describe, expect, it } from "vitest";
import { countSum } from "./solution.js";

describe("count-sum", () => {
  it("counts ordered sequences", () => {
    expect(countSum(7, [5, 3, 4])).toBe(2);
  });

  it("counts the empty sequence for target zero", () => {
    expect(countSum(0, [1, 2])).toBe(1);
  });

  it("returns zero when no sequence exists", () => {
    expect(countSum(7, [2, 4])).toBe(0);
  });

  it("handles large targets efficiently", () => {
    expect(countSum(45, [1, 2])).toBe(1836311903);
  });
});
