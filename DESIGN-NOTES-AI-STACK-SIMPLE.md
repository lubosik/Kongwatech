# AI Stack Simple Rebuild — Design Notes

## Skill and source of truth

The requested `frontend-design` skill was not available in the current Codex skills list. The rebuild instead uses the live-reference study in `AI-STACK-VISUAL-REFERENCES.md` and its browser screenshots under `docs/evidence/ai-stack-visual-references/` as the higher-priority design source, followed by the owner’s simplification brief.

The implementation intentionally does not preserve the rejected AI Stack design. It is a new page structure, content model and responsive system.

## Reference decisions applied

The useful common pattern across Creator Ops Hub, Ali Abdaal, George Blackman, Future Tools, Jeff Su, Zach Highley and Matthias Frank was:

1. Start with a personal reason the list exists.
2. Disclose affiliate relationships in normal human language.
3. Present one recommendation at a time.
4. Explain the creator’s real use before describing features.
5. Use proof only when it materially improves trust.
6. End each recommendation with one obvious action.

The rebuild borrows Ali Abdaal’s warm-light readability, Creator Ops Hub’s first-person premise, George Blackman’s CTA clarity and Future Tools’ curation discipline. It does not borrow oversized hero art, lead-magnet competition, directory metadata, dark database chrome, category scaffolding, modals or intrusive consent overlays.

Representative evidence inspected before implementation:

- `docs/evidence/ai-stack-visual-references/ali-abdaal-desktop.png`
- `docs/evidence/ai-stack-visual-references/ali-abdaal-mobile-390.png`
- `docs/evidence/ai-stack-visual-references/creator-ops-mobile-390.png`
- `docs/evidence/ai-stack-visual-references/george-scriptkit-mobile-390.png`
- `docs/evidence/ai-stack-visual-references/future-tools-higgsfield-mobile-390.png`
- `docs/evidence/ai-stack-visual-references/zach-highley-mobile-390.png`

All 18 supplied desktop/mobile reference screenshots were reviewed as contact sheets and individually where needed.

## New hierarchy

The page now has four simple layers:

1. Compact first-person hero: `The AI tools I actually use.`
2. Human `Quick heads-up` disclosure.
3. Nine vertical tool sections in launch order.
4. Full affiliate disclosure on a quiet warm footer surface.

The exact launch order is:

1. Instantly
2. Higgsfield
3. Wispr Flow
4. HeyGen
5. ElevenLabs
6. Apify
7. Unipile
8. Claude Code
9. Codex

Every recommendation uses the same visual grammar: compact mark and position, product name, optional `Affiliate link` label, first-person prompt, one or two short paragraphs, optional genuine proof, and exactly one high-contrast CTA.

## What was removed

The implementation and its obsolete AI Stack CSS no longer contain the previous:

- dark full-page workbench treatment;
- Active Stack dashboard or statistics;
- systems showcase and system-flow diagrams;
- category filter rail;
- two-column product-card grid;
- field-note ending;
- Wokko architecture diagram;
- ElevenLabs voice-agent study;
- abstract build/proof boxes;
- theatrical transition sections.

The broader corporate homepage styles were preserved. New styles use only the `.simple-stack-*` and `.simple-tool*` namespaces.

## Visual system

- Background: white with a slightly warm `#fffdf9` hero and `#f7f2e8` disclosure surfaces.
- Type: existing Kongwa Cormorant display type paired with Inter body copy.
- Accent: restrained amber for the eyebrow, disclosure rule and affiliate labels.
- CTA: existing dark navy with white text for strong contrast.
- Main recommendation width: 880px maximum.
- Section separation: whitespace and one neutral divider; no nested card system.
- Tool marks: lightweight text monograms to avoid unverified or scraped logo assets.

## Mobile-first behaviour

At 700px and below:

- every tool is a single column;
- identity, product mark and position occupy one compact row;
- headings remain readable without oversized hero art;
- every CTA is full width and 54px high;
- no tool information depends on hover;
- the owned Higgsfield examples use a contained scroll-snap row with a visible next-card edge;
- the page itself does not horizontally scroll.

The compact global mobile header remains unchanged and the first Instantly section starts at 645px in a 390×844 viewport, making the first recommendation visible in the opening screen.

## Media treatment

Only Higgsfield receives visual proof because the owned examples materially explain the recommendation.

- Three owner-controlled MP4 derivatives and real WebP posters are reused.
- Videos render with native controls, `preload="none"`, `muted` and `playsInline`.
- Videos never autoplay.
- Starting one example pauses the others.
- The media remains 9:16 without forced source cropping.
- The second example permanently displays `Synthetic ad concept · not a real testimonial or result` beneath the video.

ElevenLabs has no widget, waveform, interface study or fake demo.

## Affiliate and conversion treatment

Only these tools show `Affiliate link`:

- Instantly
- Wispr Flow
- HeyGen
- ElevenLabs

Instantly uses `https://refer.instantly.ai/c9mm9zhzvtmh`, is marked affiliate and presents the public 14-day free trial. The exact HeyGen, ElevenLabs and Wispr Flow tracked destinations remain unchanged in `lib/ai-tools.ts`. All rendered CTAs use the existing branded `/go/*` routes.

Click tracking remains lightweight through the existing Google Analytics installation:

- Event: `ai_stack_tool_click`
- Properties: `tool`, `affiliate`, `position`, `source_section`

The existing Google Analytics configuration handles the page view; no new analytics dependency was added.

## Final visual and technical evidence

A real local Chrome session was controlled through Chrome DevTools Protocol rather than relying on bare `--window-size`. Device metrics were explicitly set to 1440×1000 desktop and true 390×844 mobile dimensions.

Final desktop result:

- `innerWidth`: 1440
- document width: 1440
- horizontal overflow: none
- white page background confirmed
- nine CTAs at 52px high
- all three videos paused, `preload="none"`, controls enabled

Final 390px mobile result:

- `innerWidth`: 390
- document width: 390
- horizontal overflow: none
- all nine CTA widths: 358px, within the 16px page gutters
- all nine CTA heights: 54px
- first tool starts at 645px
- exact tool order confirmed
- affiliate labels confirmed only on the four approved tools
- persistent synthetic-media label confirmed
- no nested main landmark
- no browser/runtime errors

The visual check inspected the hero and every tool section at both sizes. One mobile min-content issue in the Higgsfield scroller was found during the first CDP pass and fixed before the final pass.

## Files changed by the design implementation

- `app/ai-stack/page.tsx`
- `components/ai-stack-explorer.tsx`
- `lib/ai-tools.ts`
- AI Stack-specific CSS in `app/globals.css`
- `DESIGN-NOTES-AI-STACK-SIMPLE.md`

No publishing, merge, DNS change or broader corporate-site redesign was performed.
