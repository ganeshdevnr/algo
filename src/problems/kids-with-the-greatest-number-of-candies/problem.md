# Kids With the Greatest Number of Candies

## Description

There are `n` kids with candies. You are given an integer array `candies`, where `candies[i]` represents the number of candies the `i`th kid has, and an integer `extraCandies`, denoting the number of extra candies that you have.

Return a boolean array `result` of length `n`, where `result[i]` is `true` if, after giving the `i`th kid all the `extraCandies`, they will have the greatest number of candies among all the kids, or `false` otherwise.

Multiple kids can have the greatest number of candies.

## Examples

```ts
kidsWithCandies([2, 3, 5, 1, 3], 3); // [true, true, true, false, true]
kidsWithCandies([4, 2, 1, 1, 2], 1); // [true, false, false, false, false]
kidsWithCandies([12, 1, 12], 10); // [true, false, true]
```

## Constraints

- `n === candies.length`
- `2 <= n <= 100`
- `1 <= candies[i] <= 100`
- `1 <= extraCandies <= 50`
- Expected time complexity: `O(n)`.
- Expected extra space complexity: `O(n)` for the returned array.
