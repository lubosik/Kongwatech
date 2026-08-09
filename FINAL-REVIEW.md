# Kongwa Tech independent final review

**Independent reviewer:** Agent F
**Review date:** 10 August 2026
**Branch reviewed:** `rebrand/holding-company-ai-stack`
**Baseline production commit:** `7621d64795a0b5f16b5b501aecbafe51be8dba5c`
**Build reviewed:** local Next.js 16.3.0 production build at `http://127.0.0.1:3011`

## Final verdict

**PASS**

The corrected branch satisfies the implementation brief and the independent release gate. No blocking defect remains in the reviewed source or local production build.

## Corrected blocker verification

- All retained article conversion actions now use `/consult`; the dead Cal.com CTA and competing AIRO booking link are gone. Stale local-consulting/discovery-call endings were rewritten without deleting the useful article bodies, and `cal-events.json` was removed.
- Each indexable article now emits its own matching canonical and Open Graph URL. Arbitrary personalized company pages emit `noindex, follow` and canonicalize to the parent pre-meeting article.
- The relationship disclaimer, system qualifications, and AI Stack trust statement now calculate to approximately 6.33:1, 6.33:1, and 6.82:1 respectively. The uncaptioned AIRO audio proof was removed instead of inventing transcripts.
- Consultation inputs, selects, and textareas compute to 16 px at every required phone width and remain 14 px on desktop.
- The manifest and browser icons now use a real 512×512, 35,392-byte indexed PNG. A fresh cold-browser inventory fetched the optimized navigation image and the new icon, not the 562,939-byte source logo.

## Successful checks

### Build, types, lint, dependencies, and repository hygiene

- `npm run lint`: succeeded with zero warnings.
- `npm run typecheck`: succeeded.
- `npm run build`: succeeded; all expected Next.js routes were generated.
- `npm audit --omit=dev`: zero known vulnerabilities.
- Installed security-sensitive versions include Next.js 16.3.0, PostCSS 8.5.23, nanoid 3.3.18, and sharp 0.35.3.
- `git diff --check`: clean.
- Secret scan found no GitHub PAT or common production-secret patterns in the worktree.
- No unit/e2e test script exists in this repository; this is documented rather than represented as a test success.

### Main positioning, IA, and truthfulness

- The homepage leads with the approved holding-company category and makes `We do not take clients. We take stakes.` prominent.
- The public navigation is Thesis, Capabilities, Ventures, AI Stack, About, and the single `Consult About Your Project` conversion action.
- Operating Capability, Partner/Build/Operate/Scale, selected work, thesis, about, and final consultation sections match the requested information architecture.
- Selected work is relationship-neutral and carries an explicit statement that inclusion does not imply investment or equity ownership.
- No implementation copy labels an unverified company a portfolio company, holding, investment, or equity stake.
- Founder title, Organization/Person schema, footer identity, `llms.txt`, manifest, robots, and sitemap fixed-route inventory reflect the new company positioning.
- Newsletter UI/backends, package pages, application flow, local consultancy pages, popup, Beehiiv code, Cal embed, and retired service components are removed.

### Routes and redirects

All required current pages returned 200 in the production build: `/`, `/consult`, `/ai-stack`, the founder profile, blog index, all four known articles, robots, sitemap, manifest, and `llms.txt`.

All 12 retired routes returned exact permanent 301 destinations, including `/apply` → `/consult`, retired service routes → `/consult` or `/#capabilities`, local consultant routes → `/`, `/partners` → `/#ventures`, `/team` → the founder profile, and `/about` → `/#about`. No loop was found.

All nine branded tool routes returned 307 with the centralized destination, and an unknown slug returned 404.

An HTML crawl covered 15 rendered internal pages/query variants, 24 internal references, and 21 decoded first-party asset URLs. No broken page, image, script, stylesheet, poster, or media route was found.

### AI Stack, affiliates, analytics, and media

- The affiliate disclosure is the first section after the hero and is readable on desktop and phone layouts.
- Only HeyGen, ElevenLabs, and Wispr Flow are labelled `Affiliate`; their card anchors include `rel="sponsored"` as well as `noopener noreferrer`.
- Exact destination equality was confirmed for all nine tools. The three owner-provided tracked strings are byte-for-byte unchanged:
  - HeyGen: `https://www.heygen.com/?sid=rewardful&utm_content=creator&utm_medium=influencera&via=lubosi`
  - ElevenLabs: `https://try.elevenlabs.io/uyeh31gegisi`
  - Wispr Flow: `https://ref.wisprflow.ai/lubosi-kongwa`
- Non-affiliate vendors are not labelled as affiliates and make no discount claim.
- A browser click probe captured `ai_stack_tool_click` with `tool`, Boolean `is_affiliate`, and `source_section: tool_directory`.
- The three proof videos are local H.264 MP4s with fast-start metadata, no audio streams, stable dimensions, posters, `preload="none"`, no autoplay, and `playsInline`.
- Video weights are 1,396,888, 785,225, and 2,669,370 bytes; posters total 51,278 bytes.
- No video source was loaded at first paint. On approach, sources were attached without playback; explicit activation played one video, and activating a second paused the first.
- The peptide concept keeps the persistent `Synthetic ad concept · not a real testimonial or result` label.
- No random third-party marketing footage or confidential Wokko data was found. HeyGen, ElevenLabs, and Wokko use original coded proof visuals.

### Desktop, mobile, console, and network behavior

- Independent Chrome CDP checks covered 21 route/viewport combinations: `/`, `/ai-stack`, and `/consult` at 1440 px desktop plus all six required touch-emulated phone widths. Every case had one `main`, one `h1`, document width equal to viewport width, and no runtime exception, application console error, or non-cancelled network failure.
- The apparent off-canvas items on `/ai-stack` are contained horizontal filter/media scrollers; document width remained exactly equal to viewport width.
- The homepage hero, stake thesis, and consultation CTA remain in the first 360×800 viewport. The AI Stack hierarchy and disclosure order remain intact.
- Mobile controls tested by Agent F were at least 44 px except the native equity checkbox, whose associated label supplies the effective large activation target.
- The completed independent Mobile Agent matrix documents zero page-level overflow at 360×800, 375×812, 390×844, 393×852, 412×915, and 430×932, plus 320 and 768 px stress cases.
- Reduced-motion emulation matched, CSS collapses transitions/animations, and videos remain user-activated.
- The consultation form's native required validation, payload field names, mocked success state, and mocked provider-error state all behaved correctly. No package or budget field remains.

## External and instrumentation limits

- Chrome DevTools MCP is not configured in this environment, so no DevTools performance trace or defensible Core Web Vitals values are claimed. The review used the production build, Chrome CDP device emulation, resource entries, DOM geometry, network/console events, and media inspection instead.
- Web3Forms blocks automated browser/CLI probes with Cloudflare/CORS behavior, including a clearly labelled production-origin delivery test. The request did not return a success response, so no delivery is claimed. The implementation preserves the existing public access key and its client-side submission pattern; controlled browser tests confirm the local success/error UI. A normal-human production submission should be observed after deploy, but the automation block alone is not treated as proof of a code defect.
- OpenAI's Codex destination returned 403 to curl while its public URL is correct; this is consistent with vendor bot protection. The remaining tool destinations resolved successfully.

## Release gate

The branch is approved for the repository's normal preview, merge, and production deployment workflow. Production should still receive a final route/redirect smoke check after deployment because the local gate cannot validate hosting-platform behavior before the new commit is live.
