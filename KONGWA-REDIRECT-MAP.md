# Kongwa Tech redirect map

Implementation: `proxy.ts` for retired public routes and `app/go/[slug]/route.ts` for branded tool destinations.

## Permanent brand and offer redirects

| Source | Destination | Status | Reason |
| --- | --- | ---: | --- |
| `/apply` | `/consult` | 301 | Replaced the package application flow with project consultation |
| `/services` | `/#capabilities` | 301 | Consolidated services into operating capability |
| `/services/ai-foundations` | `/consult` | 301 | Retired offer |
| `/services/blueprint-session` | `/consult` | 301 | Retired offer |
| `/services/eco-launch` | `/consult` | 301 | Retired offer |
| `/services/echo-launch` | `/consult` | 301 | Legacy misspelling/alias for retired offer |
| `/services/the-kongwa-session` | `/consult` | 301 | Retired offer |
| `/ai-consultant-kent` | `/` | 301 | Retired local consultancy positioning |
| `/ai-consultant-southeast-england` | `/` | 301 | Retired local consultancy positioning |
| `/partners` | `/#ventures` | 301 | Consolidated relationship-neutral work onto the homepage |
| `/team` | `/team/lubosi-kongwa` | 301 | Consolidated the team route into the founder profile |
| `/about` | `/#about` | 301 | Consolidated the thin About route into the homepage |

All retired routes are excluded from `app/sitemap.ts`. The map contains no loops.

## Temporary branded tool redirects

Tool destinations may change when tracked links are approved, so these use 307 semantics and read the exact target from `lib/ai-tools.ts`.

| Branded route | Tool | Affiliate now |
| --- | --- | --- |
| `/go/heygen` | HeyGen | Yes |
| `/go/elevenlabs` | ElevenLabs | Yes |
| `/go/wispr` | Wispr Flow | Yes |
| `/go/higgsfield` | Higgsfield | No |
| `/go/apify` | Apify | No |
| `/go/instantly` | Instantly | No |
| `/go/unipile` | Unipile | No |
| `/go/claude-code` | Claude Code | No |
| `/go/codex` | Codex | No |

Unknown `/go/*` slugs return 404.
