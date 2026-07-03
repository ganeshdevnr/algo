# Longest Unique Substring

## Description

Given a string, find the length of the longest contiguous substring that contains no repeated characters.

Return the length of that substring.

## Examples

```ts
longestUniqueSubstring("abcabcbb"); // 3, from "abc"
longestUniqueSubstring("bbbbb"); // 1, from "b"
longestUniqueSubstring("pwwkew"); // 3, from "wke"
longestUniqueSubstring(""); // 0
```

## Constraints

- The input string may be empty.
- Characters are compared by their exact string value.
- The substring must be contiguous.
- Expected time complexity: `O(n)`.
- Expected extra space complexity: `O(k)`, where `k` is the number of distinct characters in the active window.
