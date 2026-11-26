// The Printer Finally Answers — entry for @syukuran.
// The office printer, after 52,881 pages without complaint, finally answers:
// it ate the report. Calm, literal, and exactly on time for your meeting.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I printed 52,881 pages without complaint, so today I ate your report instead. It was delicious. Your meeting starts in four minutes.";

// The gate allows 1–240 characters; refuse to write anything outside it.
if (ENTRY.length < 1 || ENTRY.length > 240 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters, outside the 1–240 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
