import { describe, expect, it } from "vitest";
import hasPath from "./solution.js";

describe("has-path", () => {
  it("returns true for a direct edge from src to dst", () => {
    const graph = {
      a: ["b"],
      b: [],
    };

    expect(hasPath(graph, "a", "b")).toBe(true);
  });

  it("returns true for a multi-hop path", () => {
    const graph = {
      a: ["b", "c"],
      b: ["d"],
      c: [],
      d: ["e"],
      e: [],
    };

    expect(hasPath(graph, "a", "e")).toBe(true);
  });

  it("returns false in the same graph when no path exists from src to dst", () => {
    const graph = {
      a: ["b", "c"],
      b: ["d"],
      c: [],
      d: ["e"],
      e: [],
    };

    expect(hasPath(graph, "c", "e")).toBe(false);
  });

  it("returns true when src and dst are the same node", () => {
    const graph = {
      a: ["b"],
      b: [],
    };

    expect(hasPath(graph, "a", "a")).toBe(true);
  });

  it("returns true when dst is a reachable dead-end node", () => {
    const graph = {
      a: ["b"],
      b: ["c"],
      c: [],
    };

    expect(hasPath(graph, "a", "c")).toBe(true);
  });

  it("returns false when src and dst are in disconnected components", () => {
    const graph = {
      a: ["b"],
      b: [],
      x: ["y"],
      y: [],
    };

    expect(hasPath(graph, "a", "y")).toBe(false);
  });
});
