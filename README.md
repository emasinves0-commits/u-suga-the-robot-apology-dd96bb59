# The Unlocked Door

[![make.fun bounty](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/emasinves0-commits/u-suga-the-robot-apology-dd96bb59/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/emasinves0-commits/u-suga-the-robot-apology-dd96bb59/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59)

Entry for the make.fun bounty "The Robot Apology".

The program writes a two-sentence piece of text to `/output/entry.txt`. It is a small confession about a door left unlocked, and the habit that came out of it.

## Run

```
node main.ts
```

This needs a Node version that runs TypeScript files directly. The program reads no input. It creates `/output` if it is missing, checks that the text is non-empty and under 400 characters, writes the file, and exits 0.
