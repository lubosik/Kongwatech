export type ToolStatus = 'active' | 'watching' | 'retired'

export type ToolMedia = {
  kind: 'video'
  src: string
  alt: string
  poster: string
  caption: string
}

export type AiTool = {
  slug: string
  redirectSlug: string
  name: string
  prompt: string
  paragraphs: string[]
  bullets?: string[]
  destinationUrl: string
  isAffiliate: boolean
  offerText: string | null
  cta: string
  logo: string
  media: ToolMedia[]
  status: ToolStatus
  lastVerified: string
}

export const aiTools: AiTool[] = [
  {
    slug: 'instantly',
    redirectSlug: 'instantly',
    name: 'Instantly',
    prompt: "Here's what I use it for.",
    paragraphs: [
      'I use Instantly for outbound. Right now I use it to find leads, verify email addresses and run cold-email campaigns without having to jump between loads of different tools.',
      "If you're trying to get customers for an agency, service or B2B offer, this is one of the tools I'd start with because you can go from finding the people you want to contact to actually running the campaign in one place.",
    ],
    bullets: ['Find leads', 'Verify emails', 'Run campaigns'],
    destinationUrl: 'https://refer.instantly.ai/c9mm9zhzvtmh',
    isAffiliate: true,
    offerText: '14-day free trial',
    cta: 'Try Instantly free for 14 days',
    logo: 'IN',
    media: [],
    status: 'active',
    lastVerified: '2026-08-10',
  },
  {
    slug: 'higgsfield',
    redirectSlug: 'higgsfield',
    name: 'Higgsfield',
    prompt: "This is what I've been using for AI video.",
    paragraphs: [
      "If you've seen me posting realistic AI UGC or cinematic AI clips, this is one of the main tools I've been using.",
      'Rather than trying to explain it, here are a few examples.',
    ],
    destinationUrl: 'https://higgsfield.ai/',
    isAffiliate: false,
    offerText: null,
    cta: 'Try Higgsfield',
    logo: 'HF',
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
        caption: 'Synthetic ad concept · not a real testimonial or result',
      },
      {
        kind: 'video',
        src: '/media/ai-stack/higgsfield/ugc-03.mp4',
        poster: '/media/ai-stack/higgsfield/ugc-03-poster.webp',
        alt: 'AI-generated creator-style talking-head concept filmed in a car.',
        caption: 'AI-generated UGC concept',
      },
    ],
    status: 'active',
    lastVerified: '2026-08-10',
  },
  {
    slug: 'wispr-flow',
    redirectSlug: 'wispr',
    name: 'Wispr Flow',
    prompt: 'I use this because I got tired of typing everything into AI.',
    paragraphs: [
      "When I'm working with Claude or Codex, I usually have way more context in my head than I want to type out.",
      'Wispr lets me just speak normally and turns it into clean text wherever I am working. I use it for prompts, emails, scripts and getting long ideas out quickly.',
    ],
    destinationUrl: 'https://ref.wisprflow.ai/lubosi-kongwa',
    isAffiliate: true,
    offerText: null,
    cta: 'Try Wispr Flow',
    logo: 'WF',
    media: [],
    status: 'active',
    lastVerified: '2026-08-10',
  },
  {
    slug: 'heygen',
    redirectSlug: 'heygen',
    name: 'HeyGen',
    prompt: 'I use HeyGen when I want an AI version of me on camera.',
    paragraphs: [
      'The main thing I like it for is AI avatars and digital twins. You can create a reusable version of yourself and then turn scripts into videos without recording every single one manually.',
      "I think this is especially useful if you're making educational content, product walkthroughs or videos in volume.",
    ],
    destinationUrl:
      'https://www.heygen.com/?sid=rewardful&utm_content=creator&utm_medium=influencera&via=lubosi',
    isAffiliate: true,
    offerText: null,
    cta: 'Try HeyGen',
    logo: 'HG',
    media: [],
    status: 'active',
    lastVerified: '2026-08-10',
  },
  {
    slug: 'elevenlabs',
    redirectSlug: 'elevenlabs',
    name: 'ElevenLabs',
    prompt: 'This is what I use when AI needs to actually sound good.',
    paragraphs: [
      'ElevenLabs is the voice tool I come back to for realistic speech, voiceovers and voice-agent experiments.',
      "If you're building something where AI needs to talk to a customer or you just need good AI narration, this is where I'd look first.",
    ],
    destinationUrl: 'https://try.elevenlabs.io/uyeh31gegisi',
    isAffiliate: true,
    offerText: null,
    cta: 'Try ElevenLabs',
    logo: '11',
    media: [],
    status: 'active',
    lastVerified: '2026-08-10',
  },
  {
    slug: 'apify',
    redirectSlug: 'apify',
    name: 'Apify',
    prompt: 'I use Apify when I need to give AI real data from the web.',
    paragraphs: [
      'A lot of my social-media systems start here. I can pull videos, comments or other public web data, then give that information to Claude or another model to work out what is actually performing.',
      'It is much more useful than asking AI to guess.',
    ],
    destinationUrl: 'https://apify.com/',
    isAffiliate: false,
    offerText: null,
    cta: 'Try Apify',
    logo: 'AP',
    media: [],
    status: 'active',
    lastVerified: '2026-08-10',
  },
  {
    slug: 'unipile',
    redirectSlug: 'unipile',
    name: 'Unipile',
    prompt: 'I use the Unipile MCP when I want an AI system to work with LinkedIn.',
    paragraphs: [
      'I have used it in real outreach workflows, including a capital-formation system where an AI workflow could work across LinkedIn and email.',
      'It is one of the most useful tools I have found when I want the AI to actually do something in a communication channel instead of just generating text for me to copy and paste.',
    ],
    destinationUrl: 'https://www.unipile.com/',
    isAffiliate: false,
    offerText: null,
    cta: 'Try Unipile',
    logo: 'UP',
    media: [],
    status: 'active',
    lastVerified: '2026-08-10',
  },
  {
    slug: 'claude-code',
    redirectSlug: 'claude-code',
    name: 'Claude Code',
    prompt: 'This is probably the tool I spend the most time building with.',
    paragraphs: [
      'I use Claude Code to work directly inside projects rather than going backwards and forwards copying code into a chatbot.',
      'I have used it for websites, automations, internal systems and client builds.',
    ],
    destinationUrl: 'https://www.anthropic.com/product/claude-code',
    isAffiliate: false,
    offerText: null,
    cta: 'Try Claude Code',
    logo: 'CC',
    media: [],
    status: 'active',
    lastVerified: '2026-08-10',
  },
  {
    slug: 'codex',
    redirectSlug: 'codex',
    name: 'Codex',
    prompt: 'I use Codex when I want engineering work running in parallel.',
    paragraphs: [
      'I use it alongside Claude Code, especially when I want separate agents handling implementation, review, testing or different parts of a project at the same time.',
    ],
    destinationUrl: 'https://openai.com/codex/',
    isAffiliate: false,
    offerText: null,
    cta: 'Explore Codex',
    logo: 'CX',
    media: [],
    status: 'active',
    lastVerified: '2026-08-10',
  },
]

export function getAiTool(slug: string) {
  return aiTools.find((tool) => tool.slug === slug)
}
