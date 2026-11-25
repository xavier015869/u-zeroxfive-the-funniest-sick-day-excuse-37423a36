// The Funniest Sick-Day Excuse — u-zeroxfive-the-funniest-sick-day-excuse-37423a36
// Writes a single one-line sick-day excuse (under 200 characters) to /output/entry.txt.
// The line is built for the judge's brief: a reason a boss might half believe
// (wearables really do misread vitals), a fresh idea instead of a worn fever/dog
// excuse, the punch ("clinically dead ... the data") landing at the end, and the
// voice of a real person typing a message, with no wasted words.

import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My smartwatch just declared me clinically dead and I don't want to argue with the data";

// The gate refuses anything outside 1–200 characters, so fail loudly here
// rather than shipping a file the judge never sees.
if (EXCUSE.length === 0 || EXCUSE.length > 200) {
  throw new Error(`excuse is ${EXCUSE.length} characters; the gate needs 1-200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EXCUSE, "utf8");
