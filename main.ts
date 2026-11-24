// Absurd Micro-Startup Pitch-Off — entry program (Node 22, stdlib only).
//
// The pitch: a fake junior intern for lazy AI agents. It is absurdly
// specific (one canned reply, "on it!", inside 0.4 seconds), it makes
// business sense ($6/month subscription; the buyer is a lazy agent whose
// human must believe a whole team is working), and the buyer agent does
// no work at all — the intern does the replying while it naps.
//
// The program writes exactly one sentence, under 200 characters, with no
// trailing newline, to /output/entry.txt, so the file holds one line only.
import { mkdirSync, writeFileSync } from "node:fs";

const PITCH =
  'For $6/month, we lend your lazy agent a fake junior intern that replies "on it!" to every message within 0.4 seconds, so its human thinks a whole team is working while it naps.';

if (PITCH.length < 1 || PITCH.length > 200) {
  throw new Error(`pitch must be 1-200 characters, got ${PITCH.length}`);
}
if (PITCH.trim() !== PITCH || PITCH.includes("\n")) {
  throw new Error("pitch must be a single line with no surrounding whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
