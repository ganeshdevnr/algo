import { describe, expect, it } from "vitest";
import twoCrystalBalls from "../problems/two-crystal-balls.js";

describe("two-crystal-balls", () => {
  it("finds the first breaking floor in the middle", () => {
    expect(twoCrystalBalls([false, false, false, true, true, true])).toBe(3);
  });

  it("returns 0 when the first floor breaks", () => {
    expect(twoCrystalBalls([true, true, true])).toBe(0);
  });

  it("finds the last floor when only the last floor breaks", () => {
    expect(twoCrystalBalls([false, false, false, true])).toBe(3);
  });

  it("returns -1 when no floors break", () => {
    expect(twoCrystalBalls([false, false, false, false])).toBe(-1);
  });

  it("returns -1 for an empty building", () => {
    expect(twoCrystalBalls([])).toBe(-1);
  });

  it("handles a single breaking floor", () => {
    expect(twoCrystalBalls([true])).toBe(0);
  });

  it("handles a single non-breaking floor", () => {
    expect(twoCrystalBalls([false])).toBe(-1);
  });

  it("handles a boundary near the start", () => {
    expect(twoCrystalBalls([false, true, true, true, true])).toBe(1);
  });

  it("handles a boundary near the end", () => {
    expect(twoCrystalBalls([false, false, false, false, true])).toBe(4);
  });

  it("handles a large building", () => {
    const firstBreakingFloor = 87_654;
    const breaks = Array.from({ length: 100_000 }, (_, index) => index >= firstBreakingFloor);

    expect(twoCrystalBalls(breaks)).toBe(firstBreakingFloor);
  });

  it("checks floors in O(sqrt(n)) time", () => {
    const length = 100_000;
    const firstBreakingFloor = 87_654;
    const rawBreaks = Array.from({ length }, (_, index) => index >= firstBreakingFloor);
    const maxExpectedReads = 2 * Math.ceil(Math.sqrt(length)) + 2;
    let reads = 0;

    const breaks = new Proxy(rawBreaks, {
      get(target, property, receiver) {
        if (typeof property === "string" && /^\d+$/.test(property)) {
          reads++;
        }

        return Reflect.get(target, property, receiver);
      },
    });

    expect(twoCrystalBalls(breaks)).toBe(firstBreakingFloor);
    expect(reads).toBeLessThanOrEqual(maxExpectedReads);
  });
});
