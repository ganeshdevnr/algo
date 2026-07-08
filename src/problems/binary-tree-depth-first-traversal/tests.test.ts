import { describe, expect, it } from "vitest";
import depthFirstTraversal, { type BinaryTreeNode } from "./solution.js";

describe("binary-tree-depth-first-traversal", () => {
  it("returns an empty array for an empty tree", () => {
    expect(depthFirstTraversal(null)).toEqual([]);
  });

  it("visits a single node", () => {
    expect(depthFirstTraversal({ value: 1 })).toEqual([1]);
  });

  it("traverses a balanced tree in pre-order", () => {
    const root: BinaryTreeNode<number> = {
      value: 1,
      left: {
        value: 2,
        left: { value: 4 },
        right: { value: 5 },
      },
      right: {
        value: 3,
        left: { value: 6 },
        right: { value: 7 },
      },
    };

    expect(depthFirstTraversal(root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
  });

  it("traverses a left-skewed tree", () => {
    const root: BinaryTreeNode<number> = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 3,
          left: { value: 4 },
        },
      },
    };

    expect(depthFirstTraversal(root)).toEqual([1, 2, 3, 4]);
  });

  it("traverses a right-skewed tree", () => {
    const root: BinaryTreeNode<number> = {
      value: 1,
      right: {
        value: 2,
        right: {
          value: 3,
          right: { value: 4 },
        },
      },
    };

    expect(depthFirstTraversal(root)).toEqual([1, 2, 3, 4]);
  });

  it("handles missing children at different levels", () => {
    const root: BinaryTreeNode<number> = {
      value: 10,
      left: {
        value: 5,
        right: { value: 7 },
      },
      right: {
        value: 15,
        left: { value: 12 },
      },
    };

    expect(depthFirstTraversal(root)).toEqual([10, 5, 7, 15, 12]);
  });

  it("handles explicit null children", () => {
    const root: BinaryTreeNode<number> = {
      value: 1,
      left: null,
      right: {
        value: 2,
        left: null,
        right: null,
      },
    };

    expect(depthFirstTraversal(root)).toEqual([1, 2]);
  });

  it("handles duplicate and negative values", () => {
    const root: BinaryTreeNode<number> = {
      value: -1,
      left: { value: -1 },
      right: { value: 0 },
    };

    expect(depthFirstTraversal(root)).toEqual([-1, -1, 0]);
  });

  it("traverses string values", () => {
    const root: BinaryTreeNode<string> = {
      value: "root",
      left: { value: "left" },
      right: { value: "right" },
    };

    expect(depthFirstTraversal(root)).toEqual(["root", "left", "right"]);
  });

  it("preserves object value references", () => {
    const rootValue = { id: "root" };
    const leftValue = { id: "left" };
    const rightValue = { id: "right" };
    const root: BinaryTreeNode<{ id: string }> = {
      value: rootValue,
      left: { value: leftValue },
      right: { value: rightValue },
    };

    expect(depthFirstTraversal(root)).toEqual([rootValue, leftValue, rightValue]);
  });
});
