# Kongwa Tech Design Notes

## Design direction

The exact `frontend-design` skill requested by the implementation brief was not available in the Codex skills list or filesystem search. The implementation therefore applies equivalent professional frontend principles directly: clear category communication, editorial hierarchy, purposeful composition, restrained motion, accessible interaction, progressive enhancement and mobile-first reflow.

The visual idea is **venture operator's field system** rather than consultancy, agency or generic SaaS. It combines:

- near-black green and warm paper fields for an institutional, technical character;
- Cormorant display typography with compact Inter labels;
- amber as a precise routing/status accent rather than a decorative gradient;
- ledgers, operating maps, node diagrams and system flows as the visual language;
- asymmetric editorial type, fine rules and large negative space;
- no robot imagery, stock technology photography, WebGL or decorative dependency.

## Corporate homepage

The homepage has one conversion goal: `Consult About Your Project`, linking to `/consult` in the hero and closing section.

The first viewport combines the holding-company statement with an original CSS operating map. This makes product, AI, platform and audience capability visible as one operating core without adding media weight or client-style promises.

The remaining composition is intentionally concise:

1. Operating Capability
2. Partner → Build → Operate → Scale
3. Selected Ventures & Operating Work
4. Company thesis
5. Founder/company context
6. Final consultation action

Named work uses relationship-neutral or verified wording. The visible qualification makes clear that inclusion does not imply investment or equity ownership.

## AI Stack

`/ai-stack` is a darker operator's workbench with two clear layers:

1. Three desirable systems, presented before any tool directory.
2. A filterable, typed directory covering Build, Research & Data, Get Customers, Create and Work Faster.

The affiliate disclosure sits directly below the hero, before any affiliate action. Only HeyGen, ElevenLabs and Wispr Flow carry the visible `Affiliate` label and `rel="sponsored"` semantics.

The exact owner destinations live only in `lib/ai-tools.ts`. Card links use branded `/go/*` routes while the central registry remains the source of truth for redirect destinations. Card clicks send the existing lightweight Google Analytics event `ai_stack_tool_click` with `tool`, `is_affiliate` and `source_section` properties.

## Media and proof

The Higgsfield module uses the three verified owner-controlled derivatives in `public/media/ai-stack/higgsfield/`. Their origin and optimisation are recorded in `AI-STACK-MEDIA-INVENTORY.md`.

- Real posters provide a stable first paint.
- Videos use `preload="none"`, `muted`, `playsInline` and `loop`.
- Sources are attached only as the strip approaches the viewport.
- Only one preview plays at a time.
- Mobile uses horizontal scroll snap and explicit tap controls.
- Reduced-motion users get static posters until explicit activation.
- The peptide transformation clip permanently reads `Synthetic ad concept · not a real testimonial or result`.

No tool provenance is claimed for those clips. They are described as owner-created AI UGC / brand-video concepts from Lubosi's production workflow.

HeyGen uses an original capture → twin → script → video diagram. ElevenLabs uses a clearly labelled non-interactive waveform/interface study because no owner-controlled agent ID is configured. Unipile uses a generalised Wokko architecture diagram without private data, results or an official-case-study claim.

## Accessibility and motion

- Semantic sections, ordered operating steps and article-level tool/system content.
- Visible global `:focus-visible` treatment.
- Keyboard-operable category controls and video controls.
- Screen-reader status copy for filtered results.
- Text labels accompany every status and affiliate state; colour is never the only signal.
- Mobile actions meet a roughly 44px minimum target.
- `prefers-reduced-motion` disables transition and entrance animation and prevents hover-triggered preview playback.
- Video captions remain visible over their poster or playing frame.

## Responsive behaviour

The homepage and AI Stack share content shells but use page-specific composition. At tablet widths, two-column capability and operating-model grids replace desktop rows. At phone widths:

- the hero and operating map stack;
- capability cards become a single readable column;
- the operating model becomes a vertical timeline;
- venture entries collapse without losing relationship labels;
- system flows become vertical sequences with readable arrows;
- the tool filter becomes a horizontally scrollable outcome rail;
- tool cards use the full content width;
- video concepts become a swipeable scroll-snap strip.

No content requires hover, and both page roots clip decorative grid/ring overflow.

## Files owned by this implementation

- `app/page.tsx`
- `app/globals.css`
- `app/ai-stack/page.tsx`
- `components/ai-stack-explorer.tsx`
- `lib/ai-tools.ts`
- `DESIGN-NOTES.md`

Media files were produced from the approved source inventory by the media workflow and are consumed by this implementation.

## Validation

- TypeScript: PASS (`npx tsc --noEmit`)
- ESLint: PASS (`npm run lint`)
- Production build: PASS (`npm run build`)
- Homepage desktop visual inspection at 1440×1100: PASS

Independent mobile QA and final reviewer approval remain separate gates owned by their respective agents, as required by the implementation brief.
