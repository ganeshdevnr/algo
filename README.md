# Algorithm Practice

TypeScript + Node.js practice environment for algorithm problems. Solution files are stubs by default; implement the algorithms yourself and use Vitest to verify them.

## Structure

```text
src/problems/<problem-name>.ts
src/tests/<problem-name>.test.ts
```

Each problem file exports a default function. Starter files intentionally throw `"Not implemented"`.

## Run Tests

Run all tests:

```bash
npm test
```

Run one problem test by name:

```bash
npm run test:one two-crystal-balls
```

The problem name must match the test filename without `.test.ts`.

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

1. Create `src/problems/<problem-name>.ts`.
2. Export a default function with the intended signature.
3. Keep the initial body as a stub:

```ts
export default function myProblem(input: number[]): number {
  throw new Error("Not implemented");
}
```

4. Create `src/tests/<problem-name>.test.ts`.
5. Import the default function from `../problems/<problem-name>.js`.
6. Add tests for normal cases, edge cases, boundaries, and large inputs.
7. Run `npm run test:one <problem-name>`.

## Rule

Do not add solution logic until you are ready to solve the problem. Tests define the expected behavior; solution files start as stubs only.
