# Kongwa Tech AI Stack simplification release

**Release date:** 10 August 2026

**Branch:** `agent/ai-stack-simplification`

## Outcome

`/ai-stack` was rebuilt as a simple, mobile-first creator recommendation page. The prior workbench/dashboard design was not recoloured or incrementally adjusted; its page hierarchy, interaction model, copy system and obsolete CSS were removed and replaced.

The release was researched visually before implementation. Nine current live recommendation/resource pages were inspected in Chrome at 1440×1000 desktop and true 390×844 mobile dimensions. The findings and 18 screenshots are preserved in `AI-STACK-VISUAL-REFERENCES.md` and `docs/evidence/ai-stack-visual-references/`.

## Before and after

Before:

- dark operator-workbench hero and Active Stack dashboard;
- three large systems showcases and workflow diagrams;
- category filters and a two-column dense card directory;
- abstract proof panels, Wokko architecture and ElevenLabs interface study;
- theatrical Field Note closing section.

After:

- compact first-person hero on a warm-white surface;
- human affiliate disclosure before the first recommendation;
- nine consistent, vertically ordered tool sections;
- short personal explanations of what Lubosi uses each tool for;
- genuine proof only for Higgsfield's owner-created video examples;
- exactly one obvious CTA per tool;
- full affiliate disclosure in a quiet footer section.

## New hierarchy and launch order

1. Instantly
2. Higgsfield
3. Wispr Flow
4. HeyGen
5. ElevenLabs
6. Apify
7. Unipile
8. Claude Code
9. Codex

Every section uses the same grammar: product identity and position, product heading, optional `Affiliate link` label, first-person reason for use, one or two short paragraphs, optional genuine proof, and one high-contrast CTA.

## Affiliate configuration

Active affiliate tools:

- Instantly — `https://refer.instantly.ai/c9mm9zhzvtmh` — newly installed; visible 14-day free trial
- Wispr Flow — `https://ref.wisprflow.ai/lubosi-kongwa`
- HeyGen — `https://www.heygen.com/?sid=rewardful&utm_content=creator&utm_medium=influencera&via=lubosi`
- ElevenLabs — `https://try.elevenlabs.io/uyeh31gegisi`

Tools using normal public URLs while awaiting any future approved tracked link:

- Higgsfield — `https://higgsfield.ai/`
- Apify — `https://apify.com/`
- Unipile — `https://www.unipile.com/`
- Claude Code — `https://www.anthropic.com/product/claude-code`
- Codex — `https://openai.com/codex/`

All nine CTAs use the existing branded `/go/*` routes and return 307 redirects with byte-for-byte exact `Location` values. Affiliate labels appear only on the four active affiliate tools.

## Media

Only Higgsfield carries visual proof. The release reuses the three owner-controlled H.264 MP4 examples and their WebP posters already stored under `public/media/ai-stack/higgsfield/`.

- no autoplay;
- `preload="none"`, muted and `playsInline`;
- native, accessible controls;
- no MP4 request on cold page load;
- playing one video pauses the others;
- permanent `Synthetic ad concept · not a real testimonial or result` label on the peptide concept.

No third-party visual reference was copied into the product experience. Reference screenshots are research evidence only.

## Analytics

The existing Google Analytics installation handles the page view. Each product CTA emits:

- event: `ai_stack_tool_click`
- properties: `tool`, Boolean `affiliate`, one-based `position`, `source_section: "ai_stack_tool"`

No additional analytics dependency was added.

## Validation

- frontend-design implementation review — PASS;
- independent Mobile Agent — PASS at 360×800, 375×812, 390×844, 393×852, 412×915 and 430×932;
- independent Conversion Reviewer — PASS;
- `npm run lint` — PASS;
- `npm run typecheck` — PASS;
- `npm run build` — PASS;
- `git diff --check` — PASS;
- all nine route destinations — PASS;
- all four affiliate endpoints followed successfully with partner attribution intact;
- zero page-level mobile overflow;
- all nine mobile CTAs — 54px high;
- no runtime exceptions, console errors or failed first-party requests.

Detailed evidence:

- `AI-STACK-VISUAL-REFERENCES.md`
- `DESIGN-NOTES-AI-STACK-SIMPLE.md`
- `AI-STACK-MOBILE-REVIEW.md`
- `AI-STACK-CONVERSION-REVIEW.md`

## Deployment record

- Preview URL: `https://kongwatech-git-agent-ai-sta-4a5473-lubosikongwa5-7492s-projects.vercel.app/ai-stack` (deployment ready; access controlled by Vercel SSO)
- Production URL: `https://kongwatech.com/ai-stack`
- Production commit/status: `4ede53590d09b039fde88b2e703e86aef90d04c0` — Vercel deployment successful; public Cloudflare response `200`; rebuilt content, exact tool order, four affiliate labels and all nine branded redirects verified live
- DNS changes: none
