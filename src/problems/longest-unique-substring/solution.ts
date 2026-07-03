export default function longestUniqueSubstring(input: string): number {
  let l = 0,
    r = 0,
    window = new Set(),
    m = 0;

  for (; r < input.length; ++r) {
    while (window.has(input[r])) {
      window.delete(input[l]);
      l++;
    }

    window.add(input[r]);

    m = Math.max(m, window.size);
  }

  return m;
}
