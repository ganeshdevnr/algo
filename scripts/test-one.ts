import { spawnSync } from "node:child_process";

const problemName = process.argv[2];

if (!problemName) {
  console.error("Usage: npm run test:one <problem-name>");
  process.exit(1);
}

const result = spawnSync("vitest", ["run", `src/tests/${problemName}.test.ts`], {
  stdio: "inherit",
  shell: true,
});

process.exit(result.status ?? 1);
