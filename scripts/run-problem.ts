import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

const problemName = process.argv[2];

if (!problemName) {
  console.error("Usage: npm run problem -- <problem-name>");
  process.exit(1);
}

if (!/^[a-z0-9-]+$/.test(problemName)) {
  console.error("Problem name must contain only lowercase letters, numbers, and hyphens.");
  process.exit(1);
}

const runFile = `src/problems/${problemName}/run.ts`;

if (!existsSync(runFile)) {
  console.error(`No run.ts found for problem: ${problemName}`);
  console.error(`Expected: ${runFile}`);
  process.exit(1);
}

const result = spawnSync("tsx", [runFile], {
  stdio: "inherit",
});

process.exit(result.status ?? 1);
