# Kongwa Tech pre-change site and repository audit

Audit date: 9 August 2026 (Europe/London)
Immutable baseline audited: `7621d64795a0b5f16b5b501aecbafe51be8dba5c`
Repository: `lubosik/Kongwatech`
Live site: `https://kongwatech.com`

## Audit boundary

This document records the site before the holding-company rebrand. Repository findings are tied to the immutable commit above so that concurrent feature-branch work cannot contaminate the baseline. The checkout was initially clean on `main`, with local `HEAD`, `origin/main`, and `origin/HEAD` all resolving to the audited SHA. No production, DNS, repository setting, or site-code mutation was made during this audit. Only this report was created.

Live checks covered HTTP status and redirects, response headers, robots, sitemap, DNS, TLS, selected static payloads, and owner-configured external destinations. Forms were not submitted, because doing so would create external records and email side effects.

## Executive findings

1. The supplied repository is the repository serving `kongwatech.com`. GitHub's default branch is `main`; the audited commit has a successful Vercel status, and the live response exposes Next.js and Vercel origin headers.
2. Cloudflare nameservers have propagated. Both apex and `www` resolve through Cloudflare, TLS is valid, and Cloudflare proxies the current Vercel origin. The application has **not** been migrated to Cloudflare Pages or Workers; there is no Wrangler/Pages configuration in the repository.
3. The public site is comprehensively positioned as an AI consultancy. The stale positioning exists in global metadata/schema, homepage, navigation, footer, packages, forms, founder pages, local SEO pages, articles/CTAs, `llms.txt`, sitemap, and repository strategy documents.
4. The main conversion path is currently impaired: `https://cal.com/kongwatech/free-consultation`, embedded at the top of `/apply`, returned **404**. The Eco Launch calendar returned 200.
5. `/consult` and `/ai-stack` both returned 404 on the baseline, as expected before implementation.
6. Existing legacy redirects use temporary 307 semantics. Intentionally retired offers need permanent redirects, with old service/local pages removed from the sitemap.
7. Homepage HTML is forced dynamic and returns `private, no-cache, no-store`; Cloudflare therefore reports `DYNAMIC` and the Vercel origin reports a cache miss. This defeats full-page edge caching for content that is mostly static.
8. SEO identity is stale and internally inconsistent: `LocalBusiness`, local-service, package-price and consultant metadata remain; no explicit canonical link was present in the live homepage; the sitemap promotes retired services and local consultancy pages.
9. There is no privacy/terms/cookie route or consent layer despite GA4, a subscriber cookie, Web3Forms, Beehiiv, Cal.com and a Google Maps embed. This should receive a focused compliance review rather than being carried forward accidentally.
10. The GitHub PAT was pasted into task text. It was not found in tracked repository content and is not reproduced here. It should be revoked/rotated after this work and replaced with least-privilege authentication.

## Repository, framework and deployment

| Item | Baseline finding |
|---|---|
| Repository | Public GitHub repository `lubosik/Kongwatech` |
| Default/production branch | GitHub default branch and tracked remote HEAD are `main` |
| Production baseline | `7621d64795a0b5f16b5b501aecbafe51be8dba5c` |
| Framework | Next.js 15.5 App Router, React 18.3, TypeScript strict mode |
| Styling | Tailwind CSS 3.4 plus `app/globals.css`; Cormorant Garamond and Inter via `next/font/google` |
| Build | Vercel config runs `npm install`, then `npm run build`, output `.next` |
| CI | No `.github/workflows` or other repository CI configuration |
| Tests | No unit/e2e test dependencies or test script; scripts are `dev`, `build`, `start`, `lint`, and lead-magnet link generation |
| Hosting evidence | GitHub commit status `Vercel: success`; live headers include `x-vercel-id`, `x-vercel-cache`, `x-powered-by: Next.js` |
| Cloudflare evidence | Authoritative NS `grace.ns.cloudflare.com` and `logan.ns.cloudflare.com`; proxied Cloudflare A/AAAA; `server: cloudflare`, `cf-ray`, `cf-cache-status` |
| Cloudflare app config | None. No `wrangler.toml/json/jsonc`, Pages adapter, Worker, or Cloudflare deployment workflow |
| Content source | Code-authored pages plus four fallback posts in `lib/blog-seed.ts`; optional Strapi via `STRAPI_URL`/token with a 1-hour revalidation window |
| Local secrets/config | No `.env.local` or `.vercel` project directory in the checkout; `.env.local.example` contains placeholders only |

The evidence supports this production behavior: pushes to the Vercel-connected `main` branch produce Vercel deployments; Cloudflare currently supplies authoritative DNS, proxying and edge/security features in front of Vercel. The exact Vercel dashboard production-branch setting is not stored in the repository, but GitHub default-branch state, the successful Vercel commit status, the live Vercel headers, and live content all align on `main` and the audited SHA.

### Current Cloudflare/DNS state

- Nameserver cutover is active, not pending, as observed during the audit.
- Apex and `www` both resolve to Cloudflare anycast IPv4 and IPv6 and serve the site.
- `http://kongwatech.com` permanently redirects to HTTPS with 308.
- `https://www.kongwatech.com` redirects to the apex, currently with 307.
- TLS certificate: Google Trust Services `WE1`, valid 9 August through 7 November 2026.
- HSTS is present (`max-age=63072000`).
- No DS record was returned, so DNSSEC is not currently delegated at the registrar.
- No DNS changes were made by this audit.

## Route inventory

All listed live statuses were checked on 9 August 2026. Global navigation, footer, GA, Trustpilot bootstrap and the lead popup are applied through the root layout unless a route returns before rendering.

| Route | Source | Live status | Discovery/indexing | Baseline purpose and disposition |
|---|---|---:|---|---|
| `/` | `app/page.tsx` | 200 | Nav + sitemap | Force-dynamic consultancy/package homepage. Replace in place. |
| `/about` | `app/about/page.tsx` | 307 to `/team` | No internal link/sitemap | Temporary legacy redirect. Reassess after new IA. |
| `/services` | `app/services/page.tsx` | 200 | Nav + sitemap | Package directory. Retire and permanently redirect. |
| `/services/ai-foundations` | `app/services/ai-foundations/page.tsx` | 200 | Sitemap only | Orphaned old advisory page with FAQ schema. Retire/redirect. |
| `/services/blueprint-session` | `app/services/blueprint-session/page.tsx` | 200 | Homepage/services links; omitted from sitemap | £997 offer with Service schema. Retire/redirect. |
| `/services/eco-launch` | `app/services/eco-launch/page.tsx` | 200 | Homepage/services links + sitemap | £3,000+ offer with Service and FAQ schema. Retire/redirect. |
| `/services/echo-launch` | `app/services/echo-launch/page.tsx` | 307 to `/services/eco-launch` | No internal link/sitemap | Typo/legacy route. Redirect ultimately to `/consult`, permanently. |
| `/services/the-kongwa-session` | `app/services/the-kongwa-session/page.tsx` | 307 to `/services/eco-launch` | No internal link/sitemap | Legacy offer route. Redirect ultimately to `/consult`, permanently. |
| `/team` | `app/team/page.tsx` | 200 | Nav + sitemap | Boutique-practice/team page. Consolidate or rewrite. |
| `/team/lubosi-kongwa` | `app/team/lubosi-kongwa/page.tsx` | 200 | Homepage/team + sitemap | Stale founder title/copy and Person schema. Rewrite if retained. |
| `/partners` | `app/partners/page.tsx` | 200 | Nav; omitted from sitemap | Velto, Rosen Relations, Vici Peptides. Relationship-neutral rewrite or consolidate. |
| `/apply` | `app/apply/page.tsx` | 200 | Global CTAs + sitemap | Two-step discovery-call/package application. Replace with `/consult`; 301 old path. |
| `/blog` | `app/blog/page.tsx` | 200 | Nav + sitemap | “Some Free Game” archive with newsletter CTA. Retain articles, remove newsletter identity. |
| `/blog/what-is-claude-code` | dynamic `[slug]` + seed/Strapi | 200 | Blog + sitemap | Useful article; remove stale global/service/newsletter CTAs and schema keywords. |
| `/blog/claude-code-vs-cursor` | dynamic `[slug]` + seed/Strapi | 200 | Blog + sitemap | Useful article; same global cleanup. |
| `/blog/what-is-vibe-coding` | dynamic `[slug]` + seed/Strapi | 200 | Blog + sitemap | Useful article; same global cleanup. |
| `/blog/the-pre-meeting-intelligence-system` | dedicated route | 200 | Blog + sitemap | Subscriber/lead-magnet gated teaser despite being in public sitemap. Newsletter dependency must be reconciled. |
| `/blog/the-pre-meeting-intelligence-system/[company]` | dynamic company route | 200 for arbitrary slug | Not in sitemap | Personalised title/body and subscriber gate. Arbitrary company paths are indexable 200s; constrain or set `noindex` to avoid infinite thin pages. |
| `/blog/[slug]` | `app/blog/[slug]/page.tsx` | 200 for known post, 404 unknown | Runtime Strapi + seed links | Generic article renderer. Strapi may add routes beyond the four observed in the live sitemap. |
| `/ai-consultant-kent` | dedicated page | 200 | Footer + sitemap | Local consultancy landing page with LocalBusiness schema. Retire/301. |
| `/ai-consultant-southeast-england` | dedicated page | 200 | Sitemap only | Orphaned local consultancy page with LocalBusiness schema. Retire/301. |
| `/api/subscribe` | route handler | POST | Robots disallow `/api/` | Beehiiv subscription creation and subscriber-cookie issuance. Remove when newsletter is retired. |
| `/api/check-subscription` | route handler | POST | Robots disallow `/api/` | Beehiiv status lookup and subscriber-cookie issuance. Remove with gate; currently exposes subscriber-state lookup for arbitrary emails. |
| `/robots.txt` | `app/robots.ts` + Cloudflare managed additions | 200 | Standard | Allows site, disallows `/api/` and `/admin/`; links sitemap. |
| `/sitemap.xml` | `app/sitemap.ts` | 200 | Standard | Contains 14 URLs; promotes old offers/local pages. Rewrite. |
| `/llms.txt` | `public/llms.txt` | 200 | Direct | Entirely stale consultancy/service/local identity. Rewrite. |
| `/consult` | absent on baseline | 404 | None | Required new route. |
| `/ai-stack` | absent on baseline | 404 | None | Required new route. |

The live sitemap had 14 entries: 10 fixed routes and four articles. It omitted `/partners` and the internally prominent Blueprint page, while including the orphaned AI Foundations and Southeast England pages. Fixed-route `lastModified` values are generated with `new Date()` on every sitemap request, falsely suggesting that every page changes every time the sitemap is rendered.

## Stale positioning inventory

The following are raw literal matching-line counts in tracked files at the immutable baseline, excluding `package-lock.json`. Counts include documentation and, for generic terms such as `client`/`subscribe`, some implementation identifiers. They are included to make the cleanup repeatable.

| Search term | Matching lines |
|---|---:|
| `Boutique AI Consultancy` | 12 |
| `consultancy` | 31 |
| `consultant` | 107 |
| `Blueprint Session` | 17 |
| `Eco Launch` | 33 |
| `AI Foundations` | 18 |
| `Some Free Game` | 11 |
| `Subscribe` | 63 |
| `£997` | 12 |
| `£3,000` | 12 |
| `client` | 37 |
| `clients per month` | 2 |
| `Serving Southeast England` | 4 |
| `Rochester, Kent` | 21 |
| `AI Consultant Kent` | 10 |
| `services/blueprint-session` | 3 |
| `services/eco-launch` | 7 |

### User-visible/runtime stale-reference map

- **Global identity:** `app/layout.tsx`, `components/nav.tsx`, `components/footer.tsx`, `public/llms.txt`.
- **Homepage/offers:** `app/page.tsx`, `app/services/page.tsx`, `app/services/blueprint-session/page.tsx`, `app/services/eco-launch/page.tsx`, `app/services/ai-foundations/page.tsx`.
- **Application funnel:** `app/apply/page.tsx`, `components/apply-form.tsx`, `components/cal-embed.tsx`, `components/lead-popup.tsx`, `cal-events.json`.
- **Founder/company:** `app/team/page.tsx`, `app/team/lubosi-kongwa/page.tsx`, `app/partners/page.tsx`.
- **Local consultancy SEO:** `app/ai-consultant-kent/page.tsx`, `app/ai-consultant-southeast-england/page.tsx`, `app/sitemap.ts`.
- **Blog/newsletter:** `app/blog/page.tsx`, `app/blog/[slug]/page.tsx`, `app/blog/the-pre-meeting-intelligence-system/locked-teaser.tsx`, `app/blog/the-pre-meeting-intelligence-system/article-content.tsx`, `components/newsletter-cta.tsx`, `components/subscribe-gate.tsx`, `lib/blog-seed.ts`.
- **Newsletter backend/access:** `app/api/subscribe/route.ts`, `app/api/check-subscription/route.ts`, `lib/beehiiv.ts`, `lib/subscriber-session.ts`, `lib/lead-magnet-access.ts`, `scripts/generate-lead-magnet-link.js`.
- **Repository instructions/strategy:** `CLAUDE.md` still mandates boutique consultancy/application language; `SEO-KEYWORD-STRATEGY.md` is built around local consultant/package positioning and even references the former `octotechai.com` identity.

Important interpretation: ordinary uses of “client” inside article examples or React's `'use client'` directive are not automatically stale positioning. The reviewer should rerun the exact search and judge each remaining match by context, not blindly force zero matches for generic technical terms.

## Navigation and internal-link findings

- Desktop and mobile nav expose Services, Team, Partners, Some Free Game, Subscribe, and Apply Now. Five of these labels/goals conflict with the approved IA.
- Footer repeats Services, Team, Partners, Some Free Game, Apply, and AI Consultant Kent, plus “Boutique AI consultancy”, Rochester and Southeast England copy.
- `/services/ai-foundations` is discoverable only through the sitemap; `/ai-consultant-southeast-england` is also sitemap-only. These are outdated orphan pages.
- `/services/blueprint-session` is linked from homepage and services but accidentally absent from the sitemap.
- `/partners` is globally linked but absent from the sitemap.
- The `/about`, `/services/echo-launch`, and `/services/the-kongwa-session` redirect endpoints have no current internal inbound links.
- Generic blog posts contain two separate `/apply` CTAs plus a newsletter CTA, and the global popup can introduce another conversion path on non-blog pages.
- The special pre-meeting article contains a direct Cal.com consultation link in its long-form content; it must be updated independently of shared CTAs.

## Forms, lead capture and external systems

### Current consultation/application flow

- `/apply` renders an embedded `kongwatech/free-consultation` Cal.com calendar, followed by a Web3Forms application.
- The configured free-consultation URL returned **404** during the audit. This breaks the first and most prominent step of the application route.
- The separate `kongwatech/eco-launch-consultation` Cal.com destination returned 200.
- The Web3Forms form posts directly from the browser and asks which package the prospect wants, with Blueprint and Eco Launch pricing.
- `ApplyForm` reports success on a network exception even though delivery is unknown. Conversely, a non-2xx response produces no visible success or error state. Delivery therefore cannot be considered reliable from UI behavior alone.
- The exit/scroll/time-based lead popup posts to Web3Forms, ignores the response status, then redirects to `/apply?service=blueprint` regardless of delivery.
- The Web3Forms public access key is present in client code. That is normal for this provider's client-side pattern, but there is no visible bot challenge, server-side rate limiting, or domain-bound protection in this repository.

### Newsletter/access flow

- Beehiiv is integrated server-side through `BEEHIIV_API_KEY` and `BEEHIIV_PUBLICATION_ID`.
- `/api/subscribe` subscribes an email and sets a 30-day signed HttpOnly access cookie when active.
- `/api/check-subscription` reveals active/inactive state for a supplied email and has no repository-level rate limiting or bot protection.
- The signed cookie payload is base64-encoded rather than encrypted and contains the subscriber email. It is HttpOnly, Secure in production and SameSite Lax, but the newsletter removal makes this data path unnecessary.
- Newsletter UI still stores provider error text in state even though the latest baseline no longer displays the raw error.
- `LEAD_MAGNET_SECRET` falls back to the Beehiiv API key as a signing secret. Separate secrets are preferable if this feature survives elsewhere.

### External service inventory

| Service | Where used | Finding |
|---|---|---|
| Google Analytics 4 | Global root layout | Measurement ID `G-NF7L5E1BKQ`; standard page config only |
| Vercel Analytics | None | Package/component absent |
| PostHog / Plausible | None | Absent |
| Trustpilot | Global script; homepage widget | Script is loaded on every route even though the widget is homepage-only |
| Web3Forms | Apply form + lead popup | Direct client submissions; response handling is unreliable |
| Cal.com | Apply page + special article | Primary free consultation URL currently 404; Eco Launch URL 200 |
| Beehiiv | Newsletter components/API | Active integration; should be removed with “Some Free Game” |
| Strapi | Optional blog source | Runtime optional; seed content is fallback |
| Google Maps | `/apply` | Lazy iframe for Rochester location |
| Cloudflare | DNS/proxy/managed robots/email obfuscation/telemetry | Active in front of Vercel |

No form submission or analytics event was fired by this audit. Production environment-variable presence could not be read from the repository and was not inferred.

## SEO, metadata and structured data

### Global/homepage

- Root title/description/keywords and homepage overrides promote a “Boutique AI Consultancy”, Rochester/Kent, Blueprint and Eco Launch pricing.
- `metadataBase` is set, but no explicit `alternates.canonical` existed on the baseline homepage; the live homepage did not emit a `rel="canonical"` link.
- Global Open Graph provides type, URL, site name and locale but no image. Twitter uses `summary_large_image` without a global image.
- Many pages set title/description only, leaving canonical and page-specific social URL/image coverage incomplete.
- No web manifest is implemented.

### Schema

- Global JSON-LD injects a `LocalBusiness` and `Person` graph on every route.
- `LocalBusiness` identifies Rochester/Kent/Southeast England, describes a boutique AI consultancy and declares `priceRange: £6,000`.
- `Person.jobTitle` is “Founder and Lead Consultant”. The founder route emits another stale Person object.
- Blueprint and Eco Launch emit `Service`/`Offer` schema and prices; old service FAQ schema also remains.
- Local consultant pages emit additional LocalBusiness schema.
- Generic articles emit Article schema with stale `AI consultancy` and `Southeast England` keywords.
- The new identity should use one coherent Organization graph, retaining truthful person/contact/social data without the local-service/package classification.

### Sitemap, robots and LLM metadata

- Retired package/local pages are in the sitemap; `/partners` and Blueprint are inconsistently omitted.
- Dynamic `new Date()` timestamps make fixed routes appear modified on every request.
- Cloudflare prepends managed content-signal rules to the application's robots output. Search is allowed; several AI training/crawler agents are disallowed. The application's `/api/` and `/admin/` disallows remain present.
- `public/llms.txt` repeats the consultancy, AI Foundations, Eco Launch price, local service routes, Rochester/Southeast England and `/apply` conversion.

## Assets and performance risks

The repository has approximately 17.17 MiB under `public/`. There are no video or audio assets in this repository and no AI Stack media on the baseline.

Largest source assets include:

- `public/images/team/lubosi-profile.jpg`: 2.48 MB, 2752×1536 (apparently unused).
- `public/images/blog/airo-terminal.png`: 1.95 MB, 2880×1800 (apparently unused).
- `public/images/lubosi-hero.jpg`: 1.40 MB (apparently unused).
- Three 1024×1024 blog covers: approximately 1.23–1.30 MB each.
- `public/images/team/lubosi.png`: 867 KB; repeated multiple times on the homepage and used as the priority hero.
- `public/images/kt-logo.png`: 563 KB at 1254×1254; used as site icon and visible logo.
- Partner PNGs: 345 KB and 442 KB.

Next Image optimizes rendered instances, but originals remain oversized and some unused duplicates should be removed after reference verification. A sampled 1080px transformed hero was still about 240 KB. The live homepage HTML was approximately 86 KB, and sampled first-party JS chunks referenced by it totalled roughly 387 KB before including every request/third-party execution cost.

Performance architecture findings:

- Homepage, blog index, generic articles and the gated article routes are `force-dynamic`.
- Homepage response is explicitly no-store and cannot benefit from Cloudflare HTML caching.
- Two hidden-by-breakpoint hero `<Image priority>` instances use the same large portrait, and the global logo is also priority/preloaded.
- GA and Trustpilot scripts are loaded globally; Trustpilot can be scoped to the page containing its widget.
- The global lead popup hydrates and registers scroll/mouse/timer listeners across non-blog routes.
- Partner marquee animates continuously with no `prefers-reduced-motion` override.
- Cloudflare static-asset samples were initially MISS while Vercel reported HIT, consistent with a recent DNS/proxy cutover. Immutable Next assets have one-year caching; raw public images expose a four-hour max-age.

No browser performance trace/Core Web Vitals values are claimed here. The Chrome DevTools MCP required by the performance audit workflow was not configured in this session. Curl timing samples (roughly 0.13–0.67 seconds for known routes from London) are availability observations, not CWV measurements.

## Accessibility and security review signals

These are source-level findings to be validated in the final browser QA:

- Form labels in `ApplyForm` are not connected to controls with `htmlFor`/`id`.
- Lead-popup inputs rely on placeholder text rather than persistent labels.
- The popup lacks dialog semantics, `aria-modal`, focus trapping, Escape handling and explicit focus restoration.
- Mobile nav toggle lacks `aria-expanded` and `aria-controls`.
- Several controls remove the default outline and provide only border-colour focus; there is no consistent `focus-visible` system.
- No skip link is present.
- The partner marquee lacks reduced-motion behavior.
- Several text colours use low-opacity white/charcoal and should be contrast-tested rather than assumed compliant.
- The dynamic `[company]` article route accepts arbitrary slugs and returns indexable 200 pages.

Observed homepage security headers included HSTS, but not Content-Security-Policy, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, X-Frame-Options, or an equivalent CSP `frame-ancestors` directive. Any header hardening must account for Cal.com, Google Analytics, Trustpilot, Google Maps, Beehiiv/Web3Forms behavior and Cloudflare.

No GitHub PAT or other live secret was found in tracked source at the audited commit. Placeholder API-key examples occur in `.env.local.example` and article tutorial text. The credential included in the task conversation should still be rotated because conversation disclosure is outside repository scanning.

## Required implementation handoff

Priority order for the rebrand implementation:

1. Build the new homepage, `/consult` and `/ai-stack` from the approved holding-company positioning.
2. Preserve the existing Web3Forms delivery destination only after fixing response handling and validating a real submission in preview; remove the broken mandatory Cal step unless a verified owner URL replaces it.
3. Remove newsletter UI, popup, Beehiiv APIs/access gate/cookie paths and recurring article CTAs, while keeping useful article content public.
4. Implement permanent, loop-free redirects for `/apply`, all retired service routes and both local consultancy routes. Include both typo/legacy aliases.
5. Decide whether `/team`, `/team/lubosi-kongwa`, `/partners` and `/about` remain or consolidate, then align nav/sitemap/canonicals accordingly.
6. Replace LocalBusiness/service/package schema with Organization plus a truthful founder Person object.
7. Rewrite `llms.txt`, sitemap, metadata, OG/Twitter image coverage and repository positioning docs.
8. Constrain or `noindex` the personalised `[company]` route if it remains.
9. Optimize/reuse only referenced assets; add AI Stack media through the separate media inventory.
10. Run browser-based desktop/mobile accessibility, link, console, network and CWV checks on the completed preview.

### Redirect destinations recommended from this audit

| Source | Target | Semantics |
|---|---|---|
| `/apply` | `/consult` | 308/301 permanent |
| `/services` | `/#capabilities` or `/consult` | Permanent; prefer relevant non-looping destination |
| `/services/ai-foundations` | `/consult` | Permanent |
| `/services/blueprint-session` | `/consult` | Permanent |
| `/services/eco-launch` | `/consult` | Permanent |
| `/services/echo-launch` | `/consult` | Permanent, direct (no chain) |
| `/services/the-kongwa-session` | `/consult` | Permanent, direct (no chain) |
| `/ai-consultant-kent` | `/` | Permanent |
| `/ai-consultant-southeast-england` | `/` | Permanent |
| `/about` | `/` or retained founder/about destination | Permanent once IA decision is final |

The separate redirect-map deliverable should record the final targets and automated status/loop checks.

## Audit completion status

**COMPLETE for the immutable pre-change baseline.** Repository structure, current public routes, stale positioning, internal links, framework/content sources, analytics, forms, deployment configuration, SEO/schema, redirects, assets, Cloudflare/Vercel boundary and major accessibility/performance/security signals were inventoried without mutating production. Browser CWV and form-delivery validation are intentionally deferred to preview QA because the required browser MCP was unavailable and live form submission would create external side effects.
