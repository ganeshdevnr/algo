export default function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let max = 0;
  let i = 0;
  while (i < candies.length) {
    max = Math.max(max, candies[i++]);
  }

  return candies.map((val) => val + extraCandies >= max);
}
