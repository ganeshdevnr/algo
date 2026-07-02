# Algorithm Practice

TypeScript + Node.js practice environment for algorithm problems. Solution files are stubs by default; implement the algorithms yourself and use Vitest to verify them.

## Structure

```text
src/problems/<problem-name>/problem.md
src/problems/<problem-name>/solution.ts
src/problems/<problem-name>/tests.test.ts
```

Each problem folder contains the problem description, your solution file, and its tests. Starter solution files intentionally throw `"Not implemented"`.

## Run Tests

Run all tests:

```bash
npm test
```

Run one problem test by name:

```bash
npm run test:one two-crystal-balls
```

The problem name must match the folder name under `src/problems/`.

## Formatting

This project uses Prettier. VS Code workspace settings enable format-on-save with the Prettier extension.

Format all files manually:

```bash
npm run format
```

Check formatting without writing changes:

```bash
npm run format:check
```

## Add A New Problem

1. Create `src/problems/<problem-name>/`.
2. Add `problem.md` with the description, examples, and constraints.
3. Add `solution.ts` and export a default function with the intended signature.
4. Keep the initial solution body as a stub:

```ts
export default function myProblem(input: number[]): number {
  throw new Error("Not implemented");
}
```

5. Create `tests.test.ts` in the same problem folder.
6. Import the default function from `./solution.js`.
7. Add tests for normal cases, edge cases, boundaries, and large inputs.
8. Add a time-complexity guard when the problem has a meaningful expected complexity.
9. Run `npm run test:one <problem-name>`.

## Rule

Do not add solution logic until you are ready to solve the problem. Tests define the expected behavior; solution files start as stubs only.
