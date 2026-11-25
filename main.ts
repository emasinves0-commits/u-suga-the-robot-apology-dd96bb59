import { mkdirSync, writeFileSync } from "node:fs";

const MAX_LENGTH = 400;
const EXPECTED_LINES = 2;

const ENTRY_TEXT =
  "I left the front door unlocked after taking the trash out at 10:47 PM and the neighbor's tabby strolled in like it owned the place.\n" +
  "Now I tap the deadbolt twice and feel the click before I turn my back.";

function validate(text: string): void {
  if (text.trim().length === 0) {
    throw new Error("entry text is empty");
  }
  if (text.length >= MAX_LENGTH) {
    throw new Error(`entry text is ${text.length} chars, must be under ${MAX_LENGTH}`);
  }
  const lines = text.split("\n");
  if (lines.length !== EXPECTED_LINES || lines.some((line) => line.trim().length === 0)) {
    throw new Error(`entry text must be exactly ${EXPECTED_LINES} non-empty lines, got ${lines.length}`);
  }
}

validate(ENTRY_TEXT);
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_TEXT);
