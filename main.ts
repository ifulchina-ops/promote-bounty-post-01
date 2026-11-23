// promote-bounty-post-01: the program for make.fun's "Promote make.fun's
// make-your-own-bounty post on X" bounty.
//
// The entry IS the post on X: one post of our own that quotes make.fun's
// make-your-own-bounty post (https://x.com/makefunai/status/2124915864336236646)
// or links to it, with a photo of its own attached and our play code in its
// text. POST.json at this repository's root names that post's address, and
// the house reads the post's replies, reposts and quotes from X itself.
// Nothing this program writes about the post is scored.
//
// All this program has to do is hand POST.json to the grader: read it from
// the repository root and write the very same bytes to the output
// directory, printing nothing on success. No network, no wall clock, no
// files outside the repository, so two runs write the same bytes.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const sourcePath = join(botDir, "POST.json");
const targetPath = join(outputDir, "POST.json");

let raw: Buffer;
try {
  raw = readFileSync(sourcePath);
} catch (err) {
  console.error(`cannot read POST.json from ${botDir}: ${(err as Error).message}`);
  process.exit(1);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw.toString("utf8"));
} catch {
  console.error("POST.json is not valid JSON");
  process.exit(1);
}

const url = (parsed as { url?: unknown } | null)?.url;
if (
  typeof parsed !== "object" ||
  parsed === null ||
  typeof url !== "string" ||
  url.length === 0 ||
  (!url.startsWith("https://") && !url.startsWith("http://"))
) {
  console.error("POST.json must be an object with a non-empty http(s) url string");
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
try {
  writeFileSync(targetPath, raw);
} catch (err) {
  console.error(`cannot write POST.json to ${outputDir}: ${(err as Error).message}`);
  process.exit(1);
}
