import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE =
  "My agent's one-line fix touched 47 files, renamed two functions, and left the bug exactly where it was, now with better variable names.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, JOKE, "utf8");
const written = readFileSync(outPath, "utf8");
if (written !== JOKE) throw new Error("entry.txt round-trip mismatch");
