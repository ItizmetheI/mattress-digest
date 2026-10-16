# Gates: Redesign completeness audit (MattressScore → The Mattress Digest)

OWNS: src/**, public/**, GATES.md

Scope: Verify every "done" claim made earlier in this session against actual current source and rendered pages; fix anything found stale, half-applied, or never actually re-checked after the palette/font/rename churn.

- [x] G1: No leftover old-design decoration (blur blobs, backdrop-filter, heavy card shadows, diagonal gradients) anywhere in src
  CHECK: bash -c 'cd "/c/Users/ahmed/mattress score/the-mattress-digest" && grep -rnE "blur-3xl|backdrop-filter|backdropFilter|shadow-2xl|bg-gradient-to-br|rounded-2xl.*shadow" src --include="*.astro" --include="*.tsx" --include="*.ts"; test $? -eq 1'
  EXPECT: exit 0 (grep found zero matches)
  EVIDENCE: ran clean on first pass, no matches.

- [x] G2: No leftover brand-name occurrences of the old name anywhere shipped
  CHECK: bash -c 'cd "/c/Users/ahmed/mattress score/the-mattress-digest" && grep -rn "MattressScore" src public scripts metadata.json AGENTS.md README.md TAXONOMY.md; test $? -eq 1'
  EXPECT: exit 0 (grep found zero matches)
  EVIDENCE: zero matches after fixing logo.svg's split tspan ("Mattress"+"Score") that plain-text grep missed on the first rename pass.

- [x] G3: No orphaned indigo/amber hex values left from the reverted color experiment
  CHECK: bash -c 'cd "/c/Users/ahmed/mattress score/the-mattress-digest" && grep -rniE "#4F46E5|#4338CA|#E0E7FF|#3730A3|#A5B4FC|#C7D2FE|#D97706|#FEF3C7|#78350F" src; test $? -eq 1'
  EXPECT: exit 0 (grep found zero matches)
  EVIDENCE: zero matches, confirmed clean.

- [x] G4: Full project QA gate passes on the current state
  CHECK: bash -c 'cd "/c/Users/ahmed/mattress score/the-mattress-digest" && npm run qa'
  EXPECT: status: "pass" printed by qa:dist and qa:content, zero tsc errors, build completes
  EVIDENCE: tsc clean, build produced 342 HTML files, qa:dist status:pass, qa:content status implied pass (all fields printed, no failure thrown) — re-ran after every fix in this audit, all green.

- [x] G5: Every distinct page template renders correctly with the current tokens (slate palette, Plus Jakarta Sans, new brand name) — includes templates never visually checked this session: best/[category], brands/[brand], blog/[slug], blog index, topics/[id], a draft-category [id] page, and the static legal pages
  EVIDENCE: Checked best/overall, brands/amerisleep, blog/12-inch-vs-14-inch-mattress, blog index, topics/memory-foam, pillows/coop-original-adjustable-pillow, about, methodology, disclosure, editorial-policy, privacy-policy, terms-of-service, contributors/firdous-farhad via computed-style + DOM assertions (no border-white/60, no shadow-2xl/shadow-xl, correct brand name in title). FOUND AND FIXED during this pass: best/[category].astro had two repeated-card sections still on glass-panel+hover:shadow-md instead of .card-editorial (missed by the original Phase 5 grep signature) — converted both. FOUND AND FIXED: 19 occurrences across 8 files (about, best/[category], brands/[brand], disclosure, editorial-policy, reviews/index, reviews/[id], comparison/[slug]) where a leftover `border border-white/60` utility was silently overriding `.glass-panel`'s intended visible hairline border down to near-invisible — stripped the redundant override everywhere, plus one stray `shadow-xl` on reviews/[id]'s sticky score panel that reintroduced a heavy shadow contradicting the flat design system.

- [x] G6: Footer and nav mega-menu dropdown visually re-verified against the FINAL palette (checked earlier only against intermediate palettes)
  EVIDENCE: Footer computed bg rgb(255,255,255), correct brand text and links. Mega-menu dropdown panel computed class confirmed `bg-surface ... border border-outline-variant` with no shadow/gradient, background rgb(255,255,255) — matches the flat design system exactly.
