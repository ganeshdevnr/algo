import { describe, expect, it } from "vitest";
import solveMaze from "./solution.js";

describe("maze-solver", () => {
  it("solves a simple maze", () => {
    expect(
      solveMaze(
        [
          ["S", " ", "E"],
          ["#", "#", "#"],
        ],
        [0, 0],
      ),
    ).toBe(true);
  });

  it("solves the 3x4 example maze", () => {
    expect(
      solveMaze(
        [
          ["#", "#", "E", "#"],
          ["#", "#", " ", "#"],
          ["#", "S", " ", "#"],
        ],
        [2, 1],
      ),
    ).toBe(true);
  });

  it("returns false when the end is blocked by walls", () => {
    expect(
      solveMaze(
        [
          ["S", " ", "#"],
          ["#", "#", "E"],
          [" ", " ", "#"],
        ],
        [0, 0],
      ),
    ).toBe(false);
  });

  it("solves a maze where the start is adjacent to the end", () => {
    expect(solveMaze([["S", "E"]], [0, 0])).toBe(true);
  });

  it("solves a maze that requires backtracking", () => {
    expect(
      solveMaze(
        [
          ["S", " ", " ", "#", "E"],
          ["#", "#", " ", "#", " "],
          [" ", " ", " ", " ", " "],
          [" ", "#", "#", "#", "#"],
        ],
        [0, 0],
      ),
    ).toBe(true);
  });

  it("handles single-row mazes", () => {
    expect(solveMaze([["S", " ", " ", "E"]], [0, 0])).toBe(true);
    expect(solveMaze([["S", "#", "E"]], [0, 0])).toBe(false);
  });

  it("handles single-column mazes", () => {
    // expect(solveMaze([["S"], [" "], [" "], ["E"]], [0, 0])).toBe(true);
    expect(solveMaze([["S"], ["#"], ["E"]], [0, 0])).toBe(false);
  });

  it("handles mazes with the start or end on the border", () => {
    expect(
      solveMaze(
        [
          ["S", "#", "#"],
          [" ", " ", "E"],
          ["#", "#", "#"],
        ],
        [0, 0],
      ),
    ).toBe(true);

    expect(
      solveMaze(
        [
          ["#", "#", "E"],
          ["#", " ", " "],
          ["S", " ", "#"],
        ],
        [2, 0],
      ),
    ).toBe(true);
  });
});
