# AI Stack mobile review

**Gate result: PASS**

Reviewed 2026-08-10 against `KONGWA-AI-STACK-SIMPLE-CONVERSION-REBUILD-CODEX.md` and `AI-STACK-VISUAL-REFERENCES.md` on branch `agent/ai-stack-simplification`.

The review used the production build served locally at `http://127.0.0.1:3010`. Chrome was driven through the Chrome DevTools Protocol with mobile emulation, touch support, a mobile user agent, device scale factor 2, and the exact viewport dimensions below. Each viewport received a fresh navigation. No source fix was necessary.

## Required viewport evidence

| Viewport | HTML/body width | Page overflow (`maxX`) | Hero / first-tool boundary | Disclosure bottom | Tool width | CTA height | Result |
|---|---:|---:|---:|---:|---:|---:|---|
| 360x800 | 360 / 360 | 0 px | 682.1 px | 627.1 px | 328 px | 54 px | PASS |
| 375x812 | 375 / 375 | 0 px | 641.2 px | 586.2 px | 343 px | 54 px | PASS |
| 390x844 | 390 / 390 | 0 px | 645.1 px | 590.1 px | 358 px | 54 px | PASS |
| 393x852 | 393 / 393 | 0 px | 645.9 px | 590.9 px | 361 px | 54 px | PASS |
| 412x915 | 412 / 412 | 0 px | 651.0 px | 596.0 px | 380 px | 54 px | PASS |
| 430x932 | 430 / 430 | 0 px | 655.7 px | 600.7 px | 398 px | 54 px | PASS |

At every width, the first tool begins inside the initial viewport. All nine sections occupy one full content column; no tool is laid out beside another. Copy remains readable and does not clip. The horizontal Higgsfield filmstrip is intentionally self-contained and does not increase the document width.

## Acceptance criteria

| Criterion | Evidence | Result |
|---|---|---|
| Warm-white/light design | Computed colors at all six widths: body `rgb(255, 255, 255)`, hero `rgb(255, 253, 249)`, tool area `rgb(255, 255, 255)`. Visual screenshots also confirm the light editorial treatment. | PASS |
| No page-level horizontal scroll | `documentElement.scrollWidth`, body scroll width, and viewport width matched at all six sizes; the full DOM right-edge scan returned `maxX = 0`. | PASS |
| Simple hierarchy / no obsolete complexity | Exactly nine tool sections and one H1. DOM/text checks found no filters, diagrams, systems grid, “Active Stack,” voice-study block, giant hero, or extra sticky UI. The only fixed element is the 65 px site header. | PASS |
| First tool visible quickly | Instantly begins between 641.2 and 682.1 px from the page top, inside every 800–932 px initial viewport. | PASS |
| Human disclosure | The disclosure appears in the hero before the tools at 426.0–447.2 px and ends at 586.2–627.1 px. Its mobile computed type is 12.48 px with 19.72 px line height and the copy is fully readable. | PASS |
| Exact tool order | `01 / 09` Instantly; `02 / 09` Higgsfield; `03 / 09` Wispr Flow; `04 / 09` HeyGen; `05 / 09` ElevenLabs; `06 / 09` Apify; `07 / 09` Unipile; `08 / 09` Claude Code; `09 / 09` Codex. Identical at all six widths. | PASS |
| Affiliate labels | Labels appear only on Instantly, Wispr Flow, HeyGen, and ElevenLabs. Higgsfield, Apify, Unipile, Claude Code, and Codex have no affiliate label. | PASS |
| All nine CTAs | Present in tool order: “Try Instantly free for 14 days,” “Try Higgsfield,” “Try Wispr Flow,” “Try HeyGen,” “Try ElevenLabs,” “Try Apify,” “Try Unipile,” “Try Claude Code,” and “Explore Codex.” Every CTA is 54 px high at every viewport. | PASS |
| Touch targets | Nine tool CTAs are 54 px high. All six mobile-menu links are 48 px high. The automated interactive-element scan returned no undersized controls. | PASS |
| Higgsfield fit | Media container uses horizontal `overflow: auto` and `scroll-snap-type: x mandatory`. Cards are 280.8–300 px wide in 9:16 format, the first is immediately visible, and the next card peeks into view. No page overflow results. | PASS |
| Higgsfield load/play policy | All three videos have controls, `playsInline`, `muted`, `preload="none"`, poster images, no autoplay, and are initially paused. Fresh-load network capture recorded zero MP4 requests at all six widths. | PASS |
| One video at a time | At 390x844, scripted user-gesture playback produced paused states `[false, true, true]` after playing video 1 and `[true, false, true]` after playing video 2. | PASS |
| Synthetic-media disclosure | The second concept is visibly captioned “Synthetic ad concept · not a real testimonial or result.” Other media is explicitly identified as AI-generated. | PASS |
| Mobile navigation | Real touch input opens the menu directly below the header. `aria-expanded` becomes true; Escape closes the menu, removes it from the DOM, and restores `aria-expanded=false`. No content is trapped or covered. | PASS |
| Focus basics | Keyboard Tab reaches the menu button with a visible solid 2 px outline. The button has an accessible name and `aria-controls="mobile-navigation"`. | PASS |
| Reduced motion | With `prefers-reduced-motion: reduce`, the query matches and the animation scan found zero running animations at every tested viewport. | PASS |
| Semantics | One `main`, one H1, nine labelled tool sections, and the footer disclosure are present at all widths. | PASS |
| Runtime/network health | Console, JavaScript exception, and failed-request collections were empty at all six sizes. | PASS |
| Desktop smoke | 1440x1000 production screenshot confirms the same warm-white hierarchy, restrained hero, disclosure, and first tool; no old dark/diagram treatment reappears. | PASS |

## Redirect and destination verification

Every internal CTA route was fetched with redirects disabled. Each returned HTTP 307 and the exact required `Location` value:

| Route | Exact destination | Result |
|---|---|---|
| `/go/instantly` | `https://refer.instantly.ai/c9mm9zhzvtmh` | PASS |
| `/go/higgsfield` | `https://higgsfield.ai/` | PASS |
| `/go/wispr` | `https://ref.wisprflow.ai/lubosi-kongwa` | PASS |
| `/go/heygen` | `https://www.heygen.com/?sid=rewardful&utm_content=creator&utm_medium=influencera&via=lubosi` | PASS |
| `/go/elevenlabs` | `https://try.elevenlabs.io/uyeh31gegisi` | PASS |
| `/go/apify` | `https://apify.com/` | PASS |
| `/go/unipile` | `https://www.unipile.com/` | PASS |
| `/go/claude-code` | `https://www.anthropic.com/product/claude-code` | PASS |
| `/go/codex` | `https://openai.com/codex/` | PASS |

The four affiliate destinations were then followed with browser-style GET requests. Instantly, Wispr Flow, HeyGen, and ElevenLabs each returned HTTP 200. The three redirecting trackers preserved partner/referral parameters on the final vendor URL; HeyGen's supplied URL reached the vendor directly with its original Rewardful/query parameters intact.

## Build and static checks

- `npm run lint`: PASS
- `npm run typecheck`: PASS
- `npm run build`: PASS (Next.js 16.3.0 production build)
- `git diff --check`: PASS

## Artifacts and change scope

Raw browser measurements: `/private/tmp/kongwa-simple-mobile-qa/results.json`

Screenshots:

- `/private/tmp/kongwa-simple-mobile-qa/ai-stack-360x800.png`
- `/private/tmp/kongwa-simple-mobile-qa/ai-stack-375x812.png`
- `/private/tmp/kongwa-simple-mobile-qa/ai-stack-390x844.png`
- `/private/tmp/kongwa-simple-mobile-qa/ai-stack-393x852.png`
- `/private/tmp/kongwa-simple-mobile-qa/ai-stack-412x915.png`
- `/private/tmp/kongwa-simple-mobile-qa/ai-stack-430x932.png`
- `/private/tmp/kongwa-simple-mobile-qa/higgsfield-390x844.png`
- `/private/tmp/kongwa-simple-mobile-qa/desktop-1440x1000.png`

This independent review made no change to `app/globals.css` or `components/ai-stack-explorer.tsx`; the implementation already passed the gate. The only file added by the Mobile Agent is this report.
