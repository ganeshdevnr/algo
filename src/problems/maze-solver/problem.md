# Maze Solver

## Description

Given a 2D grid of strings representing a maze and a valid starting point as `[row, column]`, return `true` if there is a path from the starting point to `E` and `false` otherwise.

Cells use these symbols:

- `#` is a wall.
- ` ` is an open cell.
- `S` may mark the start in examples, but the function receives the starting coordinates directly.
- `E` is the end.

You may move only up, down, left, and right. Diagonal movement is not allowed.

## Recursive Approach

Implement the solution using recursion:

- Start from the provided `[row, column]` coordinates.
- Recurse in four directions: up, down, left, and right.
- Track visited cells to avoid cycles.
- Use base cases for out-of-bounds positions, walls, already visited cells, and reaching `E`.

## Examples

```ts
solveMaze(
  [
    ["#", "#", "E", "#"],
    ["#", "#", " ", "#"],
    ["#", "S", " ", "#"],
  ],
  [2, 1],
); // true

solveMaze(
  [
    ["S", "#", "E"],
    [" ", "#", "#"],
    [" ", " ", " "],
  ],
  [0, 0],
); // false
```

## Constraints

- The maze is a rectangular 2D grid.
- The starting point is valid and inside the maze.
- The maze contains one `E`.
- A valid path may require backtracking.
- Expected solution style: recursive depth-first search.
