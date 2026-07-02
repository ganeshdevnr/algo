# Project Instructions

- Never write solution logic for algorithm problems unless explicitly requested; keep starter problem files as stubs that throw `"Not implemented"`.
- Use Prettier for formatting. Preserve the workspace format-on-save setup and keep files formatted before finishing changes.
- Each problem lives in `src/problems/<problem-name>/`.
- Each problem folder contains `problem.md`, `solution.ts`, and `tests.test.ts`.
- `problem.md` should describe the problem, examples, and constraints.
- `solution.ts` exports the default solution function.
- `tests.test.ts` should cover normal cases, edge cases, boundaries, and large inputs.
- When writing unit tests for algorithm problems, test expected behavior through inputs and outputs first. Include time-complexity guards for problems with a meaningful expected complexity by counting observable operations, such as array index reads with a `Proxy`, instead of asserting on implementation details.
