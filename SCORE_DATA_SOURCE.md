# Score data source

`src/data/mattresses.ts` is the runtime source of truth for every score on the site
(HTML, JSON-LD, comparison charts, ranked pages, `/llms/` documents, `model-coverage.json`).

## Current dataset

The seven score fields (Overall, Value, Edge Support, Trial Period, Response Time, Motion
Transfer, Cooling & Breathability) come from the score master sheet
`osg-mattress-scores-master (1).csv` (56 models). They were applied with:

```sh
node scripts/apply-score-master.mjs "<path to score master csv>"
```

Overall is now a decimal for most models (for example 9.5, 9.3, 9.2, 8.8). The other six
fields are whole numbers.

## What is deliberately not published

The master sheet also carries `ferdie_tested`, `on_inquirer` and `score_source`
(Ferdie / EN / SJ). None of these are used or shown. The site makes no testing claim and does
not credit scorers: scores are described as editorial comparisons, not lab results (see
`AGENTS.md`, "Editorial and claim safety"). Do not add those columns to the data or the pages
without approved, published evidence.

## Models not in the master sheet

These three models were not in the sheet and keep their earlier scores. All three are archived
reviews that already carry a "no longer listed" availability note, so they are not current
products. Re-score them or confirm them before treating them as comparable to the rest:

- `ghostbed-flex`
- `nolah-original-hybrid`
- `sweetnight-prime`

## Keeping prose in sync with the scores

Hand-written copy quotes scores in many places. After any score change run:

```sh
npx tsx scripts/check-score-claims.ts
```

It lists sentences whose number disagrees with the data (`file:line model metric: text says X,
data says Y`). It is a heuristic and misses sentences that name a model by a nickname, so also
grep for `/10`, "tie" and "highest" in the file you changed.

Then update the locked hash in `scripts/verify-content-integrity.ts`
(`approvedScoreDatasetHash`) and run the full QA in `AGENTS.md`.

## Spec CSV

`osg-mattress-specs (1).csv` is an empty template (model, slug and a few firmness values only).
It is not used by the site. Fill it from official brand pages, with a source link per fact,
before using it.
