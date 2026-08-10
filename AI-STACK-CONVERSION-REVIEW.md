# AI Stack independent conversion review

Reviewed 10 August 2026 on branch `agent/ai-stack-simplification` against the complete `KONGWA-AI-STACK-SIMPLE-CONVERSION-REBUILD-CODEX.md` brief.

## Reviewer stance

I reviewed the page as someone who had just discovered Lubosi on TikTok, tapped “My AI Tools,” and knew almost nothing about Kongwa Tech. I did not rely on the implementation or mobile agents' conclusions and made no implementation-code changes.

The rebuilt page is understandable without knowing Kongwa Tech's operating model. It presents a personal premise, a human affiliate disclosure, then one tool at a time in a consistent order. The recommendation, reason for use, affiliate status and action are visible without decoding product architecture or navigating filters.

No conversion blockers were found.

## Evidence and method

- Read the complete 1,050-line rebuild brief.
- Read `AI-STACK-VISUAL-REFERENCES.md`, `DESIGN-NOTES-AI-STACK-SIMPLE.md` and `AI-STACK-MOBILE-REVIEW.md`, then independently inspected the source and rendered result.
- Confirmed the pre-build reference study contains nine current live pages, each captured at 1440px desktop and true 390px mobile before implementation. The 18 screenshots and one-page synthesis are under `docs/evidence/ai-stack-visual-references/`.
- Ran a fresh production gate: `npm run lint`, `npm run typecheck` and `npm run build` all completed cleanly with Next.js 16.3.0.
- Served the production build locally and drove a real installed Chrome session through the native Chrome DevTools Protocol at 1440x1000 desktop and true 390x844 mobile dimensions.
- Inspected the hero and every tool visually at both sizes. Reviewer screenshots and raw browser evidence are under `/private/tmp/kongwa-conversion-review/`.
- Inspected Chrome's accessibility tree, keyboard focus order, computed contrast, console, exceptions, network, media state, geometry, redirect responses and analytics calls.
- The Chrome DevTools MCP trace endpoint was not installed in this session. Native CDP supplied the required browser, DOM, accessibility, console and network evidence; a formal DevTools performance trace was therefore outside this conversion gate.

## First-impression conversion test

At 390x844, the H1, both first-person introduction paragraphs, full human disclosure and the beginning of Instantly all appear within the first viewport. Instantly starts at 645px. The visitor knows what the page is, why Lubosi made it and that some links are commercial before reaching a recommendation.

At desktop, the hero remains a restrained text introduction rather than a dashboard. The first tool starts at 787px in a 1000px viewport. The page is white or warm-white throughout and the tool measure remains 880px or narrower.

The hierarchy is consistent for all nine recommendations:

1. Product identity and list position.
2. Product name and affiliate label when applicable.
3. First-person reason for use.
4. One or two short explanatory paragraphs.
5. Genuine proof only for Higgsfield, where visual output is the product decision.
6. Exactly one high-contrast product CTA.

## Per-tool conversion matrix

| Tool | 1. Immediately know what it is? | 2. Why Lubosi uses it? | 3. Too much copy? | 4. Genuine example where necessary? | 5. CTA instantly findable? | 6. Recommendation or ad? | 7. Affiliate status clear? | 8. Distractions? |
|---|---|---|---|---|---|---|---|---|
| Instantly | Yes. The first line identifies outbound, lead finding, email verification and campaigns. | Yes. It replaces several tools and takes a B2B offer from prospect discovery to campaign execution. | No. 71 paragraph words plus three short use bullets. | A visual is not needed; the three concrete jobs explain the workflow. | Yes: `Try Instantly free for 14 days`. | Personal recommendation grounded in Lubosi's current workflow, not vendor feature copy. | Yes. `Affiliate link` is beside the title and the offer note says the trial is for new users. | None. The three bullets reinforce selection and do not compete with the action. |
| Higgsfield | Yes. The prompt says it is Lubosi's AI-video tool. | Yes. He uses it for realistic AI UGC and cinematic AI clips. | No. 33 paragraph words. | Yes. Three owner-controlled examples show actual output; all are identified as AI-generated and the synthetic ad is explicitly not a testimonial or result. | Yes: `Try Higgsfield` directly follows the examples. | Personal recommendation with proof. | Yes by absence: there is no affiliate label, and the footer never implies every tool is paid. | The media is decision-relevant. No overlay, autoplay or decorative interface competes with the CTA. |
| Wispr Flow | Yes. It turns spoken thoughts into clean text wherever Lubosi works. | Yes. He uses it to get detailed prompts, emails, scripts and ideas out without typing. | No. 51 paragraph words. | No visual is necessary; the everyday input/output example is specific. | Yes: `Try Wispr Flow`. | Personal recommendation anchored in a recognisable frustration. | Yes. `Affiliate link` is beside the title. | None. |
| HeyGen | Yes. It creates AI avatars or a reusable digital twin for video. | Yes. Lubosi uses it when he wants an AI version of himself on camera without recording every script. | No. 50 paragraph words. | No example is required to understand the recommendation; the use cases are concrete. | Yes: `Try HeyGen`. | Personal recommendation, not an ad shell. | Yes. `Affiliate link` is beside the title. | None. |
| ElevenLabs | Yes. It is for realistic AI speech, narration and voice-agent work. | Yes. Lubosi returns to it when an AI product or piece of content needs to sound good. | No. 41 paragraph words. | No demo is necessary for the launch recommendation; the brief explicitly defers the voice demo. | Yes: `Try ElevenLabs`. | Personal recommendation expressed in Lubosi's voice. | Yes. `Affiliate link` is beside the title. | None. No widget, waveform or fake interface remains. |
| Apify | Yes. It supplies public web data to an AI workflow. | Yes. Lubosi pulls videos, comments and other public data so a model can analyse real performance rather than guess. | No. 44 paragraph words. | The social-content and comment workflow is a genuine, sufficiently concrete example; a screenshot is not necessary. | Yes: `Try Apify`. | Practical recommendation based on an owned workflow. | Yes by absence: no affiliate label. | None. |
| Unipile | Yes. The adjacent plain-language phrase explains that it lets an AI system work with LinkedIn; the unexplained `MCP` acronym does not prevent comprehension. | Yes. Lubosi uses it for real LinkedIn and email outreach, including a capital-formation workflow. | No. 57 paragraph words. | Yes. The capital-formation workflow is a concrete real-use example without exposing confidential architecture. | Yes: `Try Unipile`. | Personal recommendation grounded in actual operations. | Yes by absence: no affiliate label. | None. No Wokko architecture grid remains. |
| Claude Code | Yes. It is a building tool that works directly inside projects instead of requiring code to be copied through a chatbot. | Yes. Lubosi uses it for websites, automations, internal systems and client builds. | No. 32 paragraph words. | The named build types are sufficient proof for this shortlist; no diagram is needed. | Yes: `Try Claude Code`. | Personal recommendation and strongest-use signal on the page. | Yes by absence: no affiliate label. | None. |
| Codex | Yes. It runs engineering work through separate agents in parallel. | Yes. Lubosi uses it alongside Claude Code for implementation, review, testing and parallel project work. | No. 26 paragraph words. | The specific agent roles are enough to explain the genuine workflow. | Yes: `Explore Codex`. | Personal recommendation, not product advertising. | Yes by absence: no affiliate label. | None. |

## Adversarial requirements

- Exact order rendered at both viewports: Instantly, Higgsfield, Wispr Flow, HeyGen, ElevenLabs, Apify, Unipile, Claude Code, Codex.
- Affiliate labels appear only on Instantly, Wispr Flow, HeyGen and ElevenLabs.
- Every section contains exactly one product link. Higgsfield additionally contains the expected three native video controls, not additional conversion links.
- No visible instance or old UI element remains for Active Stack, systems-first language, system diagrams, category filters, dense tool cards, the Wokko architecture, voice-agent study, build-loop proof, parallel-implementation proof or dramatic transition sections.
- No element exists mainly to impress a designer. The monogram marks, list positions and fine dividers support orientation without adding a second interaction model.
- The top disclosure is conversational; the footer provides the fuller commercial disclosure.

## Links and offers

All nine branded routes returned HTTP 307 with exact, byte-for-byte `Location` values:

| Route | Exact destination | Relationship |
|---|---|---|
| `/go/instantly` | `https://refer.instantly.ai/c9mm9zhzvtmh` | Affiliate; 14-day free trial shown |
| `/go/higgsfield` | `https://higgsfield.ai/` | Public URL |
| `/go/wispr` | `https://ref.wisprflow.ai/lubosi-kongwa` | Affiliate |
| `/go/heygen` | `https://www.heygen.com/?sid=rewardful&utm_content=creator&utm_medium=influencera&via=lubosi` | Affiliate |
| `/go/elevenlabs` | `https://try.elevenlabs.io/uyeh31gegisi` | Affiliate |
| `/go/apify` | `https://apify.com/` | Public URL |
| `/go/unipile` | `https://www.unipile.com/` | Public URL |
| `/go/claude-code` | `https://www.anthropic.com/product/claude-code` | Public URL |
| `/go/codex` | `https://openai.com/codex/` | Public URL |

The four affiliate destinations were also followed with browser-style requests and each reached the intended vendor with HTTP 200. Instantly, Wispr Flow and ElevenLabs preserved their partner attribution on the final vendor URL; HeyGen preserved its supplied Rewardful parameters exactly.

## Analytics, media and performance behaviour

All nine simulated CTA clicks emitted one `ai_stack_tool_click` event with the correct `tool`, boolean `affiliate`, one-based `position` and `source_section: "ai_stack_tool"` payload. The existing GA page-view setup remains present; no new analytics dependency was added.

The three Higgsfield videos initially remained paused with controls enabled, `muted`, `playsInline`, `preload="none"`, a poster and no autoplay. No MP4 request occurred during either cold page load. Playing video one produced `[playing, paused, paused]`; playing video two produced `[paused, playing, paused]`. Mobile confines the media to its own 300px scroll-snap strip and does not expand the document.

The cold local page transfer observed approximately 9.8KB HTML, 11.7KB CSS, 152.6KB JavaScript, 87.1KB fonts and 55.2KB images before video playback. Every local request completed successfully. There is no animation library, background video, WebGL or initial MP4 payload.

## Mobile geometry, accessibility and runtime

- True mobile viewport: 390x844, device scale factor 2 and mobile touch emulation.
- Document width: 390px; horizontal overflow: none.
- Every tool: one 358px content column inside 16px page gutters.
- Every product CTA: 358x54px, above the 48px brief requirement.
- Copy length: 26 to 71 paragraph words per tool, well below the 120–180-word ceiling.
- Contrast ratios: hero copy 5.72:1, disclosure copy 5.71:1, tool copy 5.82:1, affiliate label 5.18:1, CTA 15.91:1 and footer disclosure 5.21:1.
- Semantic structure: one `main`, one H1, nine tool articles with H2 headings, two labelled disclosure landmarks and accessible CTA names.
- Real keyboard Tab navigation reached every CTA in visual order with a visible 2px amber focus outline. All three videos expose accessible labels and caption associations.
- Chrome recorded no runtime exceptions, console errors or failed local requests at either viewport.

## Final verdict: PASS
