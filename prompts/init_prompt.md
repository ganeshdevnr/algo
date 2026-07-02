Set up a TypeScript + Node.js algorithm practice environment with Vitest:

1. Init a Node project with TypeScript and Vitest configured (ts strict mode).
2. Folder structure:
   - src/problems/<problem-name>.ts → my solution files (export default function)
   - src/tests/<problem-name>.test.ts → unit tests for each problem
3. Each problem file starts as a stub (correct signature, throws "Not implemented").
4. You write comprehensive unit tests per problem: normal cases, edge cases (empty input, single element, boundaries), and large inputs.
5. Add npm scripts:
   - "test" → run all tests
   - "test:one" → run tests for a single problem by name, e.g. `npm run test:one two-crystal-balls`
6. Seed it with these starter problems: linear-search, binary-search, two-crystal-balls, bubble-sort.
7. Add a README explaining how to add a new problem and run its test.
8. Set up Prettier with workspace format-on-save settings, and preserve that formatting setup in future changes.

Rule: never write the solution logic for me — only stubs and tests. I solve, you verify.
