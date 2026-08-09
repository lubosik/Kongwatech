# Kongwa Tech holding-company and AI Stack implementation

**Release date:** 10 August 2026
**Repository:** `lubosik/Kongwatech`
**Release branch:** `rebrand/holding-company-ai-stack`
**Audited production baseline:** `7621d64795a0b5f16b5b501aecbafe51be8dba5c`
**Merged application release:** `e4f560b527c26aae1adf63c5ef2947c4b29f8e44`

## Outcome

Kongwa Tech has been repositioned from a package-led local AI consultancy into a technology and strategy holding company. The release establishes one corporate conversion path, adds a curated AI Stack, preserves useful editorial content, and removes retired offers and lead-generation infrastructure.

The implementation passed the independent Mobile Agent and Final Reviewer gates. The reviewer initially failed the candidate on retained article CTAs, article canonicals, small-text accessibility, uncaptioned remote audio, and manifest icon weight. Every blocker was corrected, rebuilt, and independently re-reviewed to PASS before publication.

## Public information architecture

- `/` — holding-company homepage: Thesis, Capabilities, operating model, Ventures/selected work, About, consultation close
- `/consult` — single project-consultation route and structured project form
- `/ai-stack` — systems-first, filterable tool directory with proof and disclosure
- `/team/lubosi-kongwa` — consolidated founder profile
- `/blog` and retained articles — editorial library with route-specific canonicals

Primary navigation: Thesis, Capabilities, Ventures, AI Stack, About, and `Consult About Your Project`.

## Main-site changes

- Introduced the category `Technology & Strategy Holding Company` and the central thesis `We do not take clients. We take stakes.`
- Reframed services as operating capability across product, AI systems, platform engineering, and audience/growth.
- Added the Partner → Build → Operate → Scale model.
- Presented AIRO by Velto, Vici and a private-markets system with explicit, relationship-neutral boundaries; inclusion does not imply investment or equity ownership.
- Updated navigation, footer, founder positioning, metadata, Organization/Person schema, manifest, sitemap, robots and `llms.txt`.
- Consolidated every corporate conversion into `/consult` and instrumented existing GA4 behavior without adding a second analytics vendor.

Principal implementation files include `app/page.tsx`, `app/layout.tsx`, `app/globals.css`, `components/nav.tsx`, `components/footer.tsx`, `app/consult/*`, `app/ai-stack/*`, `components/ai-stack-explorer.tsx`, `lib/ai-tools.ts`, `app/go/[slug]/route.ts`, `proxy.ts`, `app/sitemap.ts`, `app/manifest.ts`, `next.config.mjs` and the owned files beneath `public/media/ai-stack/`. Retired route, package, subscription and lead-capture files are recorded as deletions in the release commit.

## AI Stack

The directory uses typed centralized data in `lib/ai-tools.ts`, five category filters and nine branded `/go/*` routes. `ai_stack_tool_click` records the tool name, affiliate Boolean and source section. Affiliate buttons use `rel="sponsored noopener noreferrer"`; non-affiliate tools are not labelled or described as affiliates.

Active affiliate destinations:

- HeyGen — `https://www.heygen.com/?sid=rewardful&utm_content=creator&utm_medium=influencera&via=lubosi`
- ElevenLabs — `https://try.elevenlabs.io/uyeh31gegisi`
- Wispr Flow — `https://ref.wisprflow.ai/lubosi-kongwa`

Awaiting tracked affiliate replacements: Claude Code, Codex, Apify, Instantly, Unipile and Higgsfield. Their current destinations are direct, non-affiliate vendor URLs.

Three owner-controlled Higgsfield/AI UGC examples were transcoded to local fast-start H.264 MP4, stripped of audio, supplied with WebP posters and loaded only near the viewport. Playback is user-initiated, one-at-a-time and reduced-motion safe. The peptide concept retains the persistent label `Synthetic ad concept · not a real testimonial or result`.

## Removed and redirected

Removed: package/service pages, local Kent/Southeast England consultancy pages, `/apply`, newsletter and Beehiiv UI/API code, subscribe gate, lead popup, Cal embed/configuration, lead-magnet access code and duplicate partners/team pages.

Twelve retired public routes now return permanent 301 redirects. Nine branded tool routes return intentional 307 redirects because destination and affiliate URLs may change. The exact map is documented in `KONGWA-REDIRECT-MAP.md`; retired routes are absent from the sitemap.

## Security and performance work

- Upgraded Next.js to 16.3.0 and removed all known production dependency vulnerabilities (`npm audit --omit=dev`: 0).
- Migrated deprecated middleware handling to the Next.js proxy convention.
- Added content-type, frame, referrer and permissions headers plus immutable caching for owned media.
- Corrected mobile AI Stack min-content overflow found by independent QA.
- Replaced the 563 KB manifest download with a real 512×512, 35 KB indexed PNG.
- Corrected meaningful-text contrast and 16 px mobile form sizing.
- Removed remote critical-speech recordings rather than publishing them without truthful transcripts.

## Validation record

- `npm run lint` — PASS, zero warnings
- `npm run typecheck` — PASS
- `npm run build` — PASS with Next.js 16.3.0
- `npm audit --omit=dev` — PASS, 0 vulnerabilities
- `git diff --check` — PASS
- Mobile Agent — PASS at required 360, 375, 390, 393, 412 and 430 px widths, plus 320 and 768 px stress cases
- Independent Final Reviewer — PASS after correction and full re-review
- Current routes, 12 permanent redirects, nine branded tool redirects, canonicals, internal links/assets, analytics event, media lifecycle and form UI states — PASS in the production build
- Secret scan — PASS; no supplied GitHub credential is present in the repository

## Publication and hosting record

- Preview URL: `https://kongwatech-git-rebrand-hold-adcbfc-lubosikongwa5-7492s-projects.vercel.app` (Vercel authentication may be required)
- Production deployment URL: `https://kongwatech-obruzpmgr-lubosikongwa5-7492s-projects.vercel.app`
- Canonical production domain: `https://kongwatech.com`
- Application release commit: `e4f560b527c26aae1adf63c5ef2947c4b29f8e44`
- Production deployment status: successful; post-deploy route, redirect, content and affiliate smoke checks passed through Cloudflare
- DNS state observed before release: Cloudflare nameservers and proxy active; the application origin remains Vercel
- DNS changes made by this release: none

## Known external verification limits

- Chrome DevTools MCP was unavailable. QA used the production bundle, Chrome CDP mobile/touch emulation, DOM geometry, resource/network/console inspection and media probing; no unsupported Core Web Vitals score is claimed.
- Web3Forms blocks automated test traffic with its Cloudflare/CORS controls. Native validation and mocked success/provider-error states passed, and the existing public access-key pattern is preserved. A normal human production submission should be observed after deployment.
- OpenAI's public Codex URL blocks command-line bots with HTTP 403; the destination is the correct public URL.
- No owner-controlled public Bosi University/Discord repository URL was found, so it was not presented as a live venture.

## Supporting artefacts

- `KONGWA-SITE-PRECHANGE-AUDIT.md`
- `KONGWA-BRAND-IA.md`
- `DESIGN-NOTES.md`
- `AI-STACK-MEDIA-INVENTORY.md`
- `KONGWA-REDIRECT-MAP.md`
- `MOBILE-QA.md`
- `FINAL-REVIEW.md`
