# Number of Provinces

## Description

There are `n` cities. Some cities are directly connected, while others are not. If city `a` is directly connected with city `b`, and city `b` is directly connected with city `c`, then city `a` is indirectly connected with city `c`.

A province is a group of directly or indirectly connected cities with no other cities outside the group.

Given an `n x n` matrix `isConnected`, where `isConnected[i][j] = 1` if the `i`th city and the `j`th city are directly connected and `0` otherwise, return the total number of provinces.

## Examples

```ts
numberOfProvinces([
  [1, 1, 0],
  [1, 1, 0],
  [0, 0, 1],
]); // 2

numberOfProvinces([
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
]); // 3
```

## Constraints

- `1 <= n <= 200`
- `isConnected.length === n`
- `isConnected[i].length === n`
- `isConnected[i][j]` is either `0` or `1`.
- `isConnected[i][i] === 1`
- `isConnected[i][j] === isConnected[j][i]`
