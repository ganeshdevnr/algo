type Point = [number, number];

function pointer(args: Point) {
  return `${args[0]},${args[1]}`;
}

function walk(maze: string[][], curr: Point, seen: Set<string>, path: Point[]) {
  // Check the base conditions
  const [row, column] = curr;

  // if the position is out side the maze
  if (row >= maze.length || row < 0 || column < 0 || column >= maze[row].length) return false;

  if (maze[row][column] === "#") return false;

  if (seen.has(pointer(curr))) return false;

  if (maze[row][column] === "E") return true;

  // this could be a valid path, we don't know yet, so you need to continue walking
  seen.add(pointer(curr));

  for (const [rowOffset, colOffset] of [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ] satisfies Point[]) {
    const next = [row + rowOffset, column + colOffset] as Point;
    path.push(next);
    if (walk(maze, next, seen, path) === true) return true;
    else path.pop();
  }

  return false;
}

/**
 * Return true when a path exists from `start` to `E` in the maze.
 *
 * Intended recursive approach:
 * - Start from the provided `[row, column]` coordinates.
 * - Recursively explore the four directions: up, down, left, and right.
 * - Track visited cells so recursion does not loop forever.
 * - Stop when recursion goes out of bounds, hits a wall, reaches a visited
 *   cell, or reaches `E`.
 */
export default function solveMaze(maze: string[][], start: Point): boolean {
  let path: Point[] = [];
  let seen: Set<string> = new Set();

  return walk(maze, start, seen, path);
}
