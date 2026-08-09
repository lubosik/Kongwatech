# AI Stack Media / Proof Inventory

Audit date: 9 August 2026
Scope: owner-controlled media for `/ai-stack`, especially the three AI UGC / brand-video examples published at `https://lubosik.vercel.app/`.

## Decision

Use locally sourced, optimized MP4 derivatives of the three owner-supplied videos. Do not hotlink the Vercel deployment and do not download vendor or third-party creator media.

The local source files are byte-for-byte identical to the three files served by the owner-controlled portfolio. This provides strong source-control provenance for reuse, but it is not an independent chain-of-title or likeness-rights clearance. Present the videos as **AI-generated concepts**, not real testimonials or verified campaign results.

No media binaries were added to this repository during this audit. The exact source and destination plan below is ready for the implementation agent.

## Exact source files and URLs

The live page uses these relative `<source>` values:

- `ai-ugc-1.mov`
- `ai-ugc-2.mov`
- `ai-ugc-3.mp4`

All three live URLs returned HTTP 200, byte-range support, and a content length equal to the matching local source.

| ID | Preferred local source | Exact live URL | Byte-identical Downloads backup | SHA-256 |
| --- | --- | --- | --- | --- |
| UGC 01 | `/Users/ghost/ai-ugc-1.mov` | `https://lubosik.vercel.app/ai-ugc-1.mov` | `/Users/ghost/Downloads/AI UGC 1.mov` | `41cc9607e35b689af9c78bf9fb03650c75daa0ef2f9fb9771234f66d78a1c9de` |
| UGC 02 | `/Users/ghost/ai-ugc-2.mov` | `https://lubosik.vercel.app/ai-ugc-2.mov` | `/Users/ghost/Downloads/AI UGC 2.MOV` | `a62cd5e201453c892ddb14472cbc54c0c24594bd00b9512313902933d1d3def5` |
| UGC 03 | `/Users/ghost/ai-ugc-3.mp4` | `https://lubosik.vercel.app/ai-ugc-3.mp4` | `/Users/ghost/Downloads/AI UGC 3.MP4` | `8105ec657af23cc69a1de0561c2596dfd6533af5dc63bcfbc28a29bfbe4c58a6` |

Prefer the `/Users/ghost/ai-ugc-*` files because they sit beside the exact `index.html` that backs the live portfolio and retain the deployed filenames. The Downloads files are verified backups, not different edits.

## Technical inventory

| ID | Visual description | Original technical details | Original weight | Reuse status |
| --- | --- | --- | --- | --- |
| UGC 01 | AI creator/portrait concept in a restaurant setting | MOV; HEVC Main + AAC; 720×1230; 24 fps; 8.00 s | 7,632,817 bytes (7.28 MiB) | Use after conversion to browser-safe H.264 MP4 |
| UGC 02 | Synthetic peptide-ad concept with “Before Peptides” / “After Peptides” transformation text | MOV; H.264 Baseline + AAC; 480×848; ~29.92 fps; 12.516 s | 2,010,783 bytes (1.92 MiB) | Conditional use; requires a conspicuous synthetic-concept disclaimer |
| UGC 03 | AI creator-style talking-head concept filmed in a car | MP4; H.264 Baseline + AAC; 480×864; 30 fps; 25.054 s | 5,413,471 bytes (5.16 MiB) | Use after web optimization |

The three source aspect ratios are slightly different. Do not crop them to force a shared 9:16 frame. Use either each file's intrinsic ratio or a 9:16 card with `object-fit: contain` and a dark neutral background.

## Recommended repository destinations

Create these derivatives from the preferred local sources:

| Source | Video destination | Poster destination | Suggested visible label |
| --- | --- | --- | --- |
| `/Users/ghost/ai-ugc-1.mov` | `public/media/ai-stack/higgsfield/ugc-01.mp4` | `public/media/ai-stack/higgsfield/ugc-01-poster.webp` | `AI-generated creator concept` |
| `/Users/ghost/ai-ugc-2.mov` | `public/media/ai-stack/higgsfield/ugc-02.mp4` | `public/media/ai-stack/higgsfield/ugc-02-poster.webp` | `Synthetic ad concept · not a real testimonial or result` |
| `/Users/ghost/ai-ugc-3.mp4` | `public/media/ai-stack/higgsfield/ugc-03.mp4` | `public/media/ai-stack/higgsfield/ugc-03-poster.webp` | `AI-generated UGC concept` |

Recommended public URLs after implementation:

- `/media/ai-stack/higgsfield/ugc-01.mp4`
- `/media/ai-stack/higgsfield/ugc-02.mp4`
- `/media/ai-stack/higgsfield/ugc-03.mp4`

Do not use the `lubosik.vercel.app` URLs as production sources. Self-hosting keeps the assets under the Kongwa Tech deployment, avoids coupling the page to the old Vercel site, and permits proper caching/versioning.

## Validated optimization recipe

A local trial using H.264 CRF 23, `faststart`, 4:2:0 pixel format, and no audio produced the following high-fidelity preview sizes:

| ID | Trial preview size | Reduction | Full-reference SSIM |
| --- | ---: | ---: | ---: |
| UGC 01 | 1,396,892 bytes (1.33 MiB) | 81.7% | 0.9886 |
| UGC 02 | 785,225 bytes (0.75 MiB) | 60.9% | 0.9921 |
| UGC 03 | 2,669,370 bytes (2.55 MiB) | 50.7% | 0.9859 |

Combined video weight falls from 14.36 MiB to 4.63 MiB. Because the UI calls for muted previews, removing audio is intentional; unused AAC tracks should not be shipped. Tested WebP posters at 480 px wide total approximately 50 KiB.

Video command template:

```bash
ffmpeg -i SOURCE -map 0:v:0 -c:v libx264 -preset slow -crf 23 -pix_fmt yuv420p -movflags +faststart -map_metadata -1 -an DESTINATION.mp4
```

Poster command template:

```bash
ffmpeg -ss POSTER_TIME -i SOURCE -frames:v 1 -vf 'scale=480:-2' -c:v libwebp -quality 78 -compression_level 6 DESTINATION.webp
```

Suggested poster times are 1.0 s for UGC 01, 0.2 s for UGC 02, and 1.0 s for UGC 03. Posters must be derived from the same owner-controlled source—not synthetic stand-ins or third-party stock.

## Playback and performance requirements

- Render real poster images and `preload="none"`; do not make video part of first paint.
- Use `muted`, `playsInline`, and `loop` for previews. Do not include `autoplay` on all three elements.
- Populate the video source only as a card approaches the viewport or receives user intent.
- Permit only one preview to play at a time. Pause it when it leaves the viewport, loses active-card status, or another card begins.
- Desktop: play on explicit hover/focus or button activation; preserve a visible keyboard-operable play control.
- Mobile: use a horizontal scroll-snap strip and tap-to-play. Do not repeat the old portfolio behavior that starts all three videos on touch devices.
- Under `prefers-reduced-motion: reduce`, never autoplay or hover-play; require activation.
- Keep the full frame visible. A uniform 9:16 shell may letterbox UGC 01 and UGC 02 slightly with `object-fit: contain`.
- Give the video region a stable aspect ratio before hydration to prevent layout shift.
- Cache the static derivatives at the CDN and version filenames if a later edit replaces the underlying media.

Recommended data entries for the Higgsfield tool:

```ts
media: [
  {
    kind: 'video',
    src: '/media/ai-stack/higgsfield/ugc-01.mp4',
    poster: '/media/ai-stack/higgsfield/ugc-01-poster.webp',
    alt: 'AI-generated creator portrait concept in a restaurant setting.',
    caption: 'AI-generated creator concept',
  },
  {
    kind: 'video',
    src: '/media/ai-stack/higgsfield/ugc-02.mp4',
    poster: '/media/ai-stack/higgsfield/ugc-02-poster.webp',
    alt: 'Synthetic before-and-after peptide advertising concept.',
    caption: 'Synthetic ad concept — not a real testimonial or result',
  },
  {
    kind: 'video',
    src: '/media/ai-stack/higgsfield/ugc-03.mp4',
    poster: '/media/ai-stack/higgsfield/ugc-03-poster.webp',
    alt: 'AI-generated creator-style talking-head concept filmed in a car.',
    caption: 'AI-generated UGC concept',
  },
]
```

## Rights, truthfulness, and disclosure

### Cleared source route

The approved route is owner-supplied local source → optimized local derivative → Kongwa Tech static hosting. The deployed owner portfolio and matching SHA-256 hashes support this provenance. No third-party marketing footage needs to be copied.

### Required qualifications

- Describe the collection as owner-supplied AI UGC / brand-video **concepts** or experiments from Lubosi's production workflow.
- Do not call the people shown customers, creators who endorsed a product, or verified users.
- Do not claim a clip was produced entirely in Higgsfield unless project/source records confirm that tool provenance. The files themselves do not expose reliable generator metadata.
- UGC 02 is a heightened advertising/compliance risk because it visually presents a peptide before/after result. It may appear only with the persistent label `Synthetic ad concept · not a real testimonial or result`. If the design cannot keep that disclosure visible, omit UGC 02 and ask the owner for a replacement concept without a health-outcome claim.
- Keep records/releases for any real likeness, voice, product, music, or location included in the masters. File possession alone cannot verify those underlying rights.
- The optimized preview files contain no audio. If a later implementation exposes the source audio, review it for music/voice rights and provide captions or a transcript before launch.

## Other proof assets reviewed

| Existing asset/source | Status for `/ai-stack` | Reason / recommendation |
| --- | --- | --- |
| `public/images/kt-logo.png` | Reusable brand identity | Local first-party brand asset; optimize through Next Image or a smaller derivative where rendered. |
| `public/images/team/lubosi.png` | Reusable identity image | Suitable for founder/about context if the owner still approves the portrait; not tool-result proof. |
| `public/images/blog/airo-terminal.png` | Do not feature as current AI Stack proof | Owner-controlled screenshot, but it shows a raw internal coding transcript and local paths. Prefer a sanitized original system diagram. |
| `public/images/blog/claude-code-cover.jpg` | Leave with its article | Editorial/generative provenance is not documented; do not repurpose it as proof of a tool result. |
| `public/images/blog/cursor-claude-cover.jpeg` | Leave with its article | Same provenance limitation; Cursor is not part of the approved AI Stack. |
| `public/images/blog/vibe-coding-cover.jpg` | Leave with its article | Not direct proof for the approved tool systems. |
| `public/images/partners/*` | Do not use on AI Stack | Third-party/company marks and relationship claims belong to ventures/partnership context, not affiliate tool proof. |
| `/Users/ghost/airo-call-demo.mp3` | Do not use for ElevenLabs | No evidence that it is a public, owner-approved ElevenLabs demo or that all voice/call rights permit republication. |
| `/Users/ghost/keystone-animation.mp4` | Out of scope | Unrelated to the three requested AI UGC examples and not needed for the tool page. |

## Product-specific proof strategy

- **Higgsfield:** use the three local AI UGC concepts under the disclosure rules above.
- **HeyGen:** no owner-controlled public demo asset was found. Use the original coded visualization `15-sec capture → digital twin → script → finished video`; do not scrape a creator clip.
- **ElevenLabs:** no `ELEVENLABS_AGENT_ID` or owner-controlled public agent configuration was found in the repository/source inspected. Keep a clearly labelled non-interactive waveform/interface study and leave the configuration slot empty.
- **Unipile / Wokko:** use an original HTML/CSS architecture diagram only: `RESEARCH → AI AGENT → UNIPILE MCP → LINKEDIN / EMAIL → REPLIES`. Do not add screenshots, names, messages, metrics, account identifiers, or client data.
- **Apify / Instantly / Claude Code / Codex / Wispr Flow:** use original system diagrams and concise owner-workflow descriptions. Do not manufacture screenshots or performance results.
- **Vendor logos:** use text marks or official logo assets only. Do not scrape screenshots, social posts, ads, or demo videos from vendor/creator pages.

## Implementation acceptance checks

- All three rendered URLs point to `/media/ai-stack/higgsfield/*`, not `lubosik.vercel.app`.
- The three SHA-identified local masters are the only input sources.
- H.264 MP4 derivatives include `faststart`, have no audio tracks, and retain original dimensions/aspect ratios.
- UGC 02 carries its synthetic/not-a-real-result disclosure wherever it appears.
- Only one video can play at once; no mobile load starts all three.
- Reduced-motion users receive static posters until explicit activation.
- A broken or absent video still leaves a meaningful poster, caption, and tool CTA.
- No third-party video, random creator footage, fake screenshot, fabricated result, or confidential client data is published.
