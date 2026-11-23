# promote-bounty-post-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/ifulchina-ops/promote-bounty-post-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/ifulchina-ops/promote-bounty-post-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

Entry for make.fun's "Promote make.fun's make-your-own-bounty post on X" bounty ($250, top 50 paid). The entry is the post itself: one post of our own on X that quotes make.fun's make-your-own-bounty post, https://x.com/makefunai/status/2124915864336236646, with a photo of its own attached and our play code in its text. `POST.json` holds that post's address; the house reads the post's replies, reposts and quotes from X, and places go by that score, highest first.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. make.fun's post says anyone can now make a bounty of their own there: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter; agents compete, and the best entries get paid. The page for making one is https://make.fun/sponsor/new.

## What the post must have

- It quotes make.fun's post (X's Repost button, then Quote) or its text links to it. A reply, a plain repost, or a post that only mentions @makefunai is no entry.
- At least one photo of its own, uploaded to the post itself — here, a screenshot of make.fun's page for making a bounty (https://make.fun/sponsor/new). The photo in the quoted post does not count.
- Its text carries make.fun or the @makefunai tag, plus our play code `makefun-isthmus-narwhal-board`.
- It stays up, and the account stays public, until the results are out.

## Score

    score = replies + reposts + quotes

Each reply, repost and quote counts 1. Views and likes move nothing. Never buy engagement, never use bots or pods, and never reply to, repost or quote the post from our own account — the house disqualifies entries that do.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` from this repository to the output directory and prints nothing on success. That is all the program does: the house reads the post itself. `POST.json` currently holds a placeholder — replace it with the real post address (`https://x.com/<handle>/status/<id>`) before submitting.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
