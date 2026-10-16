# Site taxonomy — target structure

This is the category tree The Mattress Digest is growing into: a sleep/bed publication
with mattresses as the core commercial category, not a mattress-only database.
Adopted from the client's own diagnosis (see conversation history / commit log
around the "MattressNut-level" rebuild request).

**Status: architecture only.** Nothing below is live in navigation or routing yet.
Per the explicit build order (#16 in the diagnosis): taxonomy → nav → templates →
map existing content → build ecosystems → expand. Nav does not change until a
category has real content behind every link — see "Rollout gate" at the bottom.

## The tree

```
Mattresses                          [BUILT — existing site]
├── Reviews                         Mattress interface, mattresses.ts
├── Best Mattresses                 /best/[category]
├── Mattress Types                  memory-foam, hybrid, latex, innerspring, foam
├── Comparisons                     Comparison interface, comparisons.ts
└── Sleep Needs                     topics.ts + /best/[category] fit clusters

Beds                                [SCHEMA BUILT this pass — src/data/beds.ts]
├── Bunk Beds
├── Loft Beds
├── Platform Beds
├── Trundle Beds
├── Murphy Beds
├── Canopy Beds
├── Futons
└── Kids Beds

Foundations                         [NOT STARTED — needs its own schema]
├── Box Springs
├── Bed Bases
├── Bunkie Boards
└── Slatted Bases

Pillows                             [NOT STARTED — needs its own schema]
├── Body Pillows
├── Neck Pillows
├── Lumbar Pillows
└── Memory Foam Pillows

Bedding & Accessories               [NOT STARTED — needs its own schema, likely
├── Mattress Toppers                one shared "Accessory" type given how thin
├── Mattress Protectors             each sub-type's spec differences are]
├── Blankets
└── Headboards

Guides                              [PARTIALLY BUILT — BlogPost schema is
├── Buying Guides                   already category-agnostic, reused as-is.
├── How-To                          Needs volume, not new schema. "Blog" in nav
├── Sizes                           should become "Sleep Guides" per diagnosis
├── Materials                       item #2 — nav change, gated same as above.]
└── Sleep Education
```

## Why product schemas don't share one shape

Mattresses score on Edge Support, Motion Transfer, Cooling & Breathability — none
of which mean anything for a box spring or a pillow. Forcing every category
through one `Product` interface would mean a pile of nullable fields nobody
scores, which defeats the site's actual differentiator: **the same rubric,
honestly applied within a category.** Each top-level category gets its own
scoring rubric, sized to what actually varies in that category (see `beds.ts`
for the reasoning behind the 6-metric bed rubric vs. the mattress site's 7).

`BlogPost` (guides/articles) is the one schema that's genuinely
category-agnostic already — it's driven by `category`/`tags` strings, not a
typed union, so Beds guides, Pillow guides, etc. all slot into the existing
`blogs-generated.ts` pattern without a new interface. Confirmed by reading
`src/data/blogSchema.ts` before writing this doc — no schema change needed there.

## Build order for each new category (repeat per category)

1. Design the category's own scoring rubric (what actually varies, 5-7 metrics)
2. Write the `<Category>` interface + a `normalize<Category>Review()` helper
   that derives pros/cons/FAQs/summary/verdict from the scored fields, mirroring
   `normalizeMattressReview()` in `mattresses.ts` — this is what keeps 50+
   entries internally consistent without hand-writing repetitive copy
3. Populate a handful of real, editorially-defensible entries to prove the
   schema holds up against real products (not the full catalog yet)
4. Page templates: index/listing, detail, best-of, comparison — copied and
   adapted from the existing `/reviews/`, `/reviews/[id]/`, `/best/[category]/`,
   `/comparison/[slug]/` templates, which are already category-agnostic enough
   in their Astro logic (they key off imported data, not hardcoded to "mattress")
5. Only then: nav entry, sitemap inclusion, cross-links from mattress content

## Rollout gate (decided, not open)

A category does not get a nav slot or a public route until it has real content
end-to-end — schema, populated entries, working templates. No "Coming Soon"
placeholder pages, no dead links in navigation. Until a category clears that
bar it exists only as data + templates, reachable by direct URL for review but
not linked from anywhere a visitor would find it.

## What this pass actually shipped

- This document
- `src/data/beds.ts` — full `Bed`/`BedScore`/`BedType` schema, `normalizeBedReview()`,
  and 2 real example entries (one bunk bed, one platform bed) proving the pattern
- Nothing else. No new pages, no nav changes, no routes. Templates and the
  remaining 3 categories (Foundations, Pillows, Bedding & Accessories) are next.
