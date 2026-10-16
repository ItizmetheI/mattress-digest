# Domain cutover runbook

## Current state (as of this file)

- Live origin: `https://mattressscore.ahmedbarkat1067.workers.dev`
- Cloudflare Worker name: `mattressscore` (set in `wrangler.jsonc`)
- `mattressscore.com` is taken — it's a live Shopify store for an unrelated
  business. The client needs a different domain/TLD before launch
  (`.io`, `.co`, `getmattressscore.com`, etc.) unless that changes.
- Repo: `github.com/ItizmetheI/mattress-digest` (the only repo this
  project pushes to).

## Why this is a one-variable change

Every canonical tag, JSON-LD `@id`/`url`, sitemap entry, `robots.txt`
sitemap line, and published `/llms/` URL is generated from a single
`SITE_URL` environment variable, read as `import.meta.env.SITE_URL` (or
`process.env.SITE_URL` in `astro.config.mjs`) with a hardcoded fallback to
the current Workers origin above. Nothing else in the codebase hardcodes a
domain. This was true before this file was written and should stay true —
if you ever add a new page or script that needs the site origin, read it
from `SITE_URL` (or the same `import.meta.env.SITE_URL || 'https://...'`
pattern already used everywhere else), don't hardcode a literal domain.

## To cut over to a real domain, in one pass

1. **Buy/confirm the domain**, then in the Cloudflare dashboard: Workers &
   Pages → `mattressscore` → Settings → Domains & Routes → add the custom
   domain (or set up a Cloudflare Pages/Workers route if serving from an
   existing zone).
2. **Set the env var** for the production build: `SITE_URL=https://<real-domain>`
   in the Cloudflare dashboard's environment variables for this Worker
   (Settings → Variables). Do not just change the local `.env` — that only
   affects local builds, not what Cloudflare deploys.
3. **Update local `.env`** (gitignored, not committed) to match, so local
   builds and QA scripts reflect the same origin:
   ```
   SITE_URL=https://<real-domain>
   ```
4. **Rebuild and verify before deploying:**
   ```bash
   npm run build
   npm run qa:dist
   ```
   `qa:dist` (`scripts/verify-build-output.mjs`) checks canonical hosts,
   sitemap host, robots host, schema host, and internal links all agree —
   it will fail loudly if anything still points at the old origin.
5. **Deploy:** `npm run deploy` (runs `astro build && wrangler deploy`).
6. **Spot-check the live site** after deploy: view-source on `/`, check the
   JSON-LD `@id` fields, `/sitemap.xml`, `/robots.txt`, and `/llms.txt` all
   resolve to the new domain, not the old Workers origin.
7. If the brand name itself changes along with the domain (not just the
   URL), that's a bigger job than this checklist covers — treat it as a
   full rebrand pass (name, logo, favicon, OG image, schema `name` fields),
   not a domain-only cutover.

## Also confirm before real launch

- A monitored editorial contact email, set via `PUBLIC_CONTACT_EMAIL` —
  currently unset, so the About page's contact section stays hidden.
- The 67 source-review-pending health/sleep-science blog pages
  (`src/lib/blogSourceReview.ts`) stay `noindex` until their claims are
  actually sourced and Firdous Farhad signs off per-article. Don't flip
  that gate as part of a domain cutover — it's unrelated and deliberate.
