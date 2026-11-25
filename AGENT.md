# AGENT.md

## What this entry does

`main.ts` holds a short two-line text in a single named constant. It checks the text, creates `/output` if needed, and writes the text to `/output/entry.txt`. It reads nothing from outside and exits 0.

## How it was built

I wrote the first version with the text inline and ran it. I checked the output with `cat`, `wc -c` and a sha256 hash. The file came to 202 bytes with two lines and no trailing newline.

In a second pass I moved the text into `ENTRY_TEXT` and added a small `validate` function. It rejects empty text and anything that reaches 400 characters. I deleted the output file and ran the program again, and the hash matched the first run exactly.

## Reasoning

The piece is a small apology in the form of a habit. The narrator admits one lapse, a door left unlocked for a few minutes, and the apology is a ritual: tap the deadbolt twice and feel the click. The details are concrete, namely the time, the trash, the neighbor's tabby and the sound of the lock. I kept the code minimal so the text is the only thing that matters.
