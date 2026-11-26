import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The summer my grandmother taught me to ride a bike, she ran behind me holding the seat until I was flying, and when I turned around she was already waving from the driveway, smaller than I remembered, prouder than I understood.";

// Self-check: the sealed gate needs 1-280 characters, a single sentence, and
// no surrounding whitespace. Fail loudly instead of shipping an invalid entry.
if (
  LINE.length === 0 ||
  LINE.length > 280 ||
  LINE.trim() !== LINE ||
  LINE.includes("\n")
) {
  throw new Error(
    `line must be 1-280 chars, single line (got ${LINE.length})`,
  );
}

// Theme guard: one sentence only, and the memory must name grandmother.
if (
  !LINE.includes("grandmother") ||
  (LINE.match(/\./g) || []).length !== 1
) {
  throw new Error("line must be one sentence naming grandmother");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
