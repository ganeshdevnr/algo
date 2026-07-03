import { describe, expect, it } from "vitest";
import longestUniqueSubstring from "./solution.js";

describe("longest-unique-substring", () => {
  it("returns 0 for an empty string", () => {
    expect(longestUniqueSubstring("")).toBe(0);
  });

  it("returns 1 for a single character", () => {
    expect(longestUniqueSubstring("a")).toBe(1);
  });

  it("finds the longest unique substring at the start", () => {
    expect(longestUniqueSubstring("abcabcbb")).toBe(3);
  });

  it("finds the longest unique substring in the middle", () => {
    expect(longestUniqueSubstring("pwwkew")).toBe(3);
  });

  it("returns 1 when every character is the same", () => {
    expect(longestUniqueSubstring("bbbbb")).toBe(1);
  });

  it("handles repeated characters that force the window to move past an earlier duplicate", () => {
    expect(longestUniqueSubstring("abba")).toBe(2);
  });

  it("keeps earlier valid characters when a duplicate breaks the window mid-string", () => {
    expect(longestUniqueSubstring("dvdf")).toBe(3);
    expect(longestUniqueSubstring("abba")).toBe(2);
    expect(longestUniqueSubstring("tmmzuxt")).toBe(5);
  });

  it("handles strings with no repeated characters", () => {
    expect(longestUniqueSubstring("abcdef")).toBe(6);
  });

  it("treats spaces and punctuation as characters", () => {
    expect(longestUniqueSubstring("a b!a")).toBe(4);
  });

  it("handles a large input", () => {
    const input = `${"a".repeat(50_000)}bcdefghijklmnopqrstuvwxyz`;

    expect(longestUniqueSubstring(input)).toBe(26);
  });
});
