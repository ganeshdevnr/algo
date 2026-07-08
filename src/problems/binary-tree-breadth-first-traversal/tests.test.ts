import { describe, expect, it } from "vitest";
import breadthFirstTraversal, { type BinaryTreeNode } from "./solution.js";

describe("binary-tree-breadth-first-traversal", () => {
  it("returns an empty array for a null tree", () => {
    expect(breadthFirstTraversal(null)).toEqual([]);
  });

  it("returns an empty array for an undefined tree", () => {
    expect(breadthFirstTraversal(undefined)).toEqual([]);
  });

  it("visits a single node", () => {
    expect(breadthFirstTraversal({ value: 1 })).toEqual([1]);
  });

  it("traverses a balanced tree in level order", () => {
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

    expect(breadthFirstTraversal(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
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

    expect(breadthFirstTraversal(root)).toEqual([1, 2, 3, 4]);
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

    expect(breadthFirstTraversal(root)).toEqual([1, 2, 3, 4]);
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

    expect(breadthFirstTraversal(root)).toEqual([10, 5, 15, 7, 12]);
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

    expect(breadthFirstTraversal(root)).toEqual([1, 2]);
  });

  it("handles duplicate and negative values", () => {
    const root: BinaryTreeNode<number> = {
      value: -1,
      left: { value: -1 },
      right: { value: 0 },
    };

    expect(breadthFirstTraversal(root)).toEqual([-1, -1, 0]);
  });

  it("traverses string values", () => {
    const root: BinaryTreeNode<string> = {
      value: "root",
      left: { value: "left" },
      right: { value: "right" },
    };

    expect(breadthFirstTraversal(root)).toEqual(["root", "left", "right"]);
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

    expect(breadthFirstTraversal(root)).toEqual([rootValue, leftValue, rightValue]);
  });
});
