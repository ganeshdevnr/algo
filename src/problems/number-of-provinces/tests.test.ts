import { describe, expect, it } from "vitest";
import numberOfProvinces from "./solution.js";

describe("number-of-provinces", () => {
  it("counts one province when all cities are directly connected", () => {
    expect(
      numberOfProvinces([
        [1, 1, 1],
        [1, 1, 1],
        [1, 1, 1],
      ]),
    ).toBe(1);
  });

  it("counts indirectly connected cities as one province", () => {
    expect(
      numberOfProvinces([
        [1, 1, 0],
        [1, 1, 1],
        [0, 1, 1],
      ]),
    ).toBe(1);
  });

  it("counts separate connected groups as separate provinces", () => {
    expect(
      numberOfProvinces([
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1],
      ]),
    ).toBe(2);
  });

  it("counts each isolated city as its own province", () => {
    expect(
      numberOfProvinces([
        [1, 0, 0],
        [0, 1, 0],
        [0, 0, 1],
      ]),
    ).toBe(3);
  });

  it("handles a single city", () => {
    expect(numberOfProvinces([[1]])).toBe(1);
  });

  it("handles multiple disconnected components with more than one city each", () => {
    expect(
      numberOfProvinces([
        [1, 1, 0, 0, 0],
        [1, 1, 0, 0, 0],
        [0, 0, 1, 1, 1],
        [0, 0, 1, 1, 1],
        [0, 0, 1, 1, 1],
      ]),
    ).toBe(2);
  });
});
