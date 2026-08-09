# Kongwa Tech Mobile QA

**Independent mobile agent:** Agent E
**Final result:** **PASS**
**Date:** 10 August 2026
**Build tested:** local production build at `http://127.0.0.1:3010`, Next.js 16.3.0

## Scope and method

I tested `/`, `/ai-stack`, and `/consult` with Chrome DevTools Protocol device emulation, not desktop window resizing. Every run used `mobile: true`, device scale factor 2, touch emulation with five touch points, an iPhone user agent, and `prefers-reduced-motion: reduce`.

The required viewports were tested at their exact dimensions:

- 360 × 800
- 375 × 812
- 390 × 844
- 393 × 852
- 412 × 915
- 430 × 932

I also tested 320 × 800 as a narrow-phone stress case and 768 × 1024 as the tablet/mobile-navigation boundary. Each route received a fresh navigation, screenshot inspection, DOM geometry audit, touch interaction checks, and keyboard-focus checks.

## Defect found and fixed

The first stable production pass found a real `/ai-stack` mobile defect. The featured media strip's min-content width forced every tool-card grid track to about 898 px at a 360 px viewport. Page-level clipping hid document scrolling, but card content was still cut off and inaccessible.

The fix constrains tool cards and the media strip with `min-width: 0` and an explicit bounded width. Final card widths now equal the usable viewport/grid width at every phone size, while the media strip itself remains an intentional horizontal scroller. I also increased the mobile disclosure text to the page's normal 12.48 px disclosure size and enlarged remaining footer/contact tap areas.

## Final viewport evidence

| Viewport | `/` max horizontal scroll | `/ai-stack` max horizontal scroll | `/consult` max horizontal scroll | Homepage CTA bottom |
|---|---:|---:|---:|---:|
| 320 × 800 | 0 px | 0 px | 0 px | 694 px |
| 360 × 800 | 0 px | 0 px | 0 px | 687.5 px |
| 375 × 812 | 0 px | 0 px | 0 px | 696.5 px |
| 390 × 844 | 0 px | 0 px | 0 px | 705.4 px |
| 393 × 852 | 0 px | 0 px | 0 px | 707.2 px |
| 412 × 915 | 0 px | 0 px | 0 px | 693.8 px |
| 430 × 932 | 0 px | 0 px | 0 px | 704.5 px |
| 768 × 1024 | 0 px | 0 px | 0 px | 717 px |

For all 24 route/viewport combinations, `documentElement.scrollWidth` exactly matched the viewport width and a forced horizontal scroll attempt left `window.scrollX` at 0. The only geometry beyond the homepage edge below 768 px is the intentionally clipped, `aria-hidden` operating-map ring decoration; no text or control is outside the viewport.

## Hard-pass criteria

### Homepage — PASS

- **Hero understood in the first viewport:** PASS. The category kicker, complete headline, positioning copy, stake thesis, and consultation CTA all appear in the first viewport at every required phone size. The CTA bottom is no lower than 707.2 px across the six primary widths.
- **Stake thesis fits cleanly:** PASS. “We do not take clients. We take stakes.” wraps into two deliberate lines without clipping or orphaned words.
- **Consultation CTA visible and usable:** PASS. It is a full-width 56 px-high target on phones and fits at 320 px.
- **Operating capability grid:** PASS. Four cards reflow to one column on phones and a balanced two-column layout at 768 px. Card widths remain within the viewport.
- **Venture cards:** PASS. They reflow to a compact number/content layout, preserve full copy, and have no hover-only content.
- **Hierarchy/headings:** PASS. Visual inspection at every width found no clipped headings or awkward one-word orphans. There is exactly one `h1` and one `main` landmark.

### AI Stack — PASS

- **Disclosure near the top:** PASS. It is the first section after the hero/stack console, is fully visible, and renders at 12.48 px with 1.6 line height on phones. It is not hidden behind a control or collapsed into fine print.
- **System flows:** PASS. At widths through 430 px, every flow becomes a vertical sequence with 46 px nodes and normal-size labels; measured flow widths remain inside their 288–398 px containers. At 768 px, flows return to a readable horizontal layout.
- **Category navigation:** PASS. Buttons are 54 px high on phones, horizontally scroll as a deliberate contained rail, and respond to touch. Selecting Build sets `aria-pressed="true"` and shows exactly Claude Code and Codex.
- **Tool cards:** PASS. Cards stack in logical data order. After the width fix, phone cards are exactly 320–430 px wide, with concise sections and 52 px outbound CTA targets. Affiliate labels remain visible on the three applicable cards.
- **Media strip:** PASS. It is a bounded snap-scroller on phones, shows a useful preview of the next card, preserves 9:16 media, and exposes 44 px play/pause controls. A real touch event starts only the selected video; scrolling it away pauses it and removes the media source.
- **Video performance:** PASS. All three videos begin paused, use `preload="none"`, have no `autoplay`, use posters and `playsInline`, and have no source/current media URL before nearing the strip. There is no initial-load autoplay disaster.
- **No page-level overflow or sticky collision:** PASS. Maximum horizontal scroll is 0 at every width. The only fixed element is the 65 px header; the page reserves 64 px above content and the opened menu begins at y=64.

### Navigation and touch — PASS

- The menu opens through a dispatched touch event at all eight widths.
- The menu is 320–768 px wide as appropriate, begins below the fixed header, and ends at y=413, so it does not cover the whole viewport.
- All five navigation links and the consultation action are 48 px high.
- Keyboard traversal reaches the menu button at every width. It matches `:focus-visible` and receives a visible 2–3 px outline.
- After the tap-area adjustments, the automated interactive-control audit reports zero undersized targets on `/` and `/ai-stack`.

### Consultation flow — PASS

- No page-level horizontal overflow at any width.
- Text inputs and select controls are 48 px high; textareas are larger. The submit button is 48 px high and full width on phones.
- Every input/select/textarea has a programmatic label. There is one `main` and one `h1`.
- The native checkbox is visually 13 × 16 px, but its entire associated label is the activation target (262 × 102.3 px at 360 px and never below 48 px high). This is not an undersized effective touch target.
- A dispatched touch focused the name field and entered `Mobile QA`; keyboard interaction changed the stage to `Idea / exploration` at all eight widths.
- Native required-field validation remained active (`form.checkValidity() === false` with the rest of the required fields intentionally empty). No external test lead was submitted.

### Motion and accessibility basics — PASS

- `prefers-reduced-motion: reduce` matched at all 24 route/viewport combinations.
- No animation remained running in the reduced-motion runs.
- Keyboard-tested links, buttons, filters, and form controls received visible focus outlines.
- Mobile controls have explicit accessible names; tool filter state uses `aria-pressed`; video controls change from Play to Pause labels; workflow/media regions have accessible labels.

## Validation

- `npm run lint` — **PASS**, zero warnings
- `npm run typecheck` — **PASS**
- `npm run build` — **PASS**, Next.js 16.3.0 production build; all expected routes generated
- Final touch-emulated mobile matrix — **PASS**

## Files changed by the mobile agent

- `app/globals.css`
- `components/footer.tsx`
- `app/consult/page.tsx`
- `MOBILE-QA.md`

## Gate decision

**PASS — the implementation satisfies every Mobile Agent hard-pass criterion and is ready for the independent final reviewer.**
