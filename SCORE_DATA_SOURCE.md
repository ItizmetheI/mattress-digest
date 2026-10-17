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

## Best-category ranking rules

The six picks on every `/best/[category]/` page are derived from the scores, not hand-picked.
Run `npx tsx scripts/derive-best-picks.ts` to print them (add `--check` to fail when
`src/lib/bestCategories.ts` differs). The first pick is the page's winner.

Common rules: archived and kids models are excluded, at most two models per brand, at most
three from the concentration-guard brands (Amerisleep, Zoma, Vaya, FORM), and a minimum Overall
of 9.0 (8.8 for memory-foam and the firm-feel categories, which have small pools). Exact ties on
every sort key break by longer warranty, then lower queen sale price.

| Category | Pool | Sort order |
|---|---|---|
| overall | all | Overall, Value, warranty years, fit-category breadth |
| luxury | Overall 9.0+ and queen sale price $1,500+ | Overall, Value, warranty |
| cooling | all | Cooling & Breathability, Overall, Value |
| side-sleepers | firmness 3-5 | softest first, Overall, Motion Transfer |
| back-pain | firmness 6+ | Overall, Edge Support, Response Time |
| memory-foam | foam / memory foam | Overall, Motion Transfer, Value |
| hybrid | hybrid | Overall, Edge Support, Value |
| organic | GOLS or GOTS certified | Overall, Value, warranty |
| value | all | Value, Overall, lower queen price |
| back-sleepers | firmness 6+ | Response Time, Overall, Edge Support |
| stomach-sleepers | firmness 6+ | firmest first, Overall, Edge Support |
| combination-sleepers | firmness 4-6 and Response 9+ | Response Time, Motion Transfer, Overall |
| heavy-sleepers | hybrid/innerspring, Edge 9+, 12 in+ | Edge Support, thickness, warranty, Overall |
| couples | Motion Transfer 9+ and Edge Support 9+ | Motion + Edge combined, Overall, Value |
| hip-pain | firmness 3-5 | softest first, Edge Support, Overall |
| shoulder-pain | firmness 3-5 | softest first, Cooling, Overall |
| motion-isolation | all | Motion Transfer, Overall, Value |
| pressure-relief | firmness 3-5 | softest first, Value, Overall |

The homepage "Top picks" and hero leaders read the winners from `bestCategories.ts`, so they
follow the scores automatically.

## Spec CSV

`specs/mattress-specs.csv` is the spec sheet template filled from what the site already records
(type, construction layers, height, queen sale price, trial, warranty, sizes, certifications,
organic certification, official product URL). These columns are still empty and need official
brand pages with a source link per fact: `firmness_options`, `price_checked`, `shipping`,
`returns`, `made_in`, `source_checked`. Archived models are marked in `source_checked`.
