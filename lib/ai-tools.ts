export const toolCategories = [
  'Build',
  'Research & Data',
  'Get Customers',
  'Create',
  'Work Faster',
] as const

export type ToolCategory = (typeof toolCategories)[number]
export type ToolStatus = 'active' | 'watching' | 'retired'

export type ToolMedia = {
  kind: 'image' | 'video'
  src: string
  alt: string
  poster?: string
  caption?: string
}

export type AiTool = {
  slug: string
  redirectSlug: string
  name: string
  category: ToolCategory
  headline: string
  description: string
  useCases: string[]
  proofTitle: string
  proofDescription: string
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
    slug: 'claude-code',
    redirectSlug: 'claude-code',
    name: 'Claude Code',
    category: 'Build',
    headline: 'Give an agent the project, not just a prompt.',
    description:
      'Work across a codebase, make coordinated changes, run tests and iterate from the terminal.',
    useCases: [
      'Build products',
      'Refactor codebases',
      'Automate workflows',
      'Work across files',
      'Run tests and iterate',
    ],
    proofTitle: 'Inside the build loop',
    proofDescription:
      'Used across Kongwa Tech product, internal-tool and automation work.',
    destinationUrl: 'https://www.anthropic.com/product/claude-code',
    isAffiliate: false,
    offerText: null,
    cta: 'Explore Claude Code',
    logo: 'CC',
    media: [],
    status: 'active',
    lastVerified: '2026-08-09',
  },
  {
    slug: 'codex',
    redirectSlug: 'codex',
    name: 'Codex',
    category: 'Build',
    headline: 'Run engineering work in parallel.',
    description:
      'Give scoped engineering tasks to agents that can inspect a repository, implement changes and verify the result.',
    useCases: ['Features', 'Migrations', 'Refactors', 'Multi-agent work', 'Background tasks'],
    proofTitle: 'Parallel implementation',
    proofDescription:
      "Part of Kongwa Tech's workflow for implementation, review and repository-wide change.",
    destinationUrl: 'https://openai.com/codex/',
    isAffiliate: false,
    offerText: null,
    cta: 'Explore Codex',
    logo: 'CX',
    media: [],
    status: 'active',
    lastVerified: '2026-08-09',
  },
  {
    slug: 'apify',
    redirectSlug: 'apify',
    name: 'Apify',
    category: 'Research & Data',
    headline: 'Turn the public web into structured data.',
    description:
      'Collect authorised public-web data on a schedule, structure it and feed it into analysis or an operating workflow.',
    useCases: [
      'Content collection',
      'Creator and competitor research',
      'Lead and research data',
      'Scheduled collection',
      'AI analysis inputs',
    ],
    proofTitle: 'Content intelligence input',
    proofDescription:
      "The collection layer in Kongwa Tech's content intelligence workflow.",
    destinationUrl: 'https://apify.com/',
    isAffiliate: false,
    offerText: null,
    cta: 'Explore Apify',
    logo: 'AP',
    media: [],
    status: 'active',
    lastVerified: '2026-08-09',
  },
  {
    slug: 'instantly',
    redirectSlug: 'instantly',
    name: 'Instantly',
    category: 'Get Customers',
    headline: 'Turn a target market into an outbound system.',
    description:
      'Move from lead discovery and verification into sequences, campaign execution and structured experimentation.',
    useCases: [
      'Lead discovery',
      'Verification',
      'Email sequences',
      'Campaign execution',
      'Outbound experimentation',
    ],
    proofTitle: 'Outbound operating layer',
    proofDescription: 'Used by Kongwa Tech in outbound workflows.',
    destinationUrl: 'https://instantly.ai/',
    isAffiliate: false,
    offerText: null,
    cta: 'Explore Instantly',
    logo: 'IN',
    media: [],
    status: 'active',
    lastVerified: '2026-08-09',
  },
  {
    slug: 'unipile',
    redirectSlug: 'unipile',
    name: 'Unipile',
    category: 'Get Customers',
    headline: 'Give your AI a communication layer.',
    description:
      'Connect agentic workflows to LinkedIn, email and messaging through one integration layer.',
    useCases: [
      'LinkedIn workflows',
      'Email',
      'Messaging',
      'Agentic outreach',
      'Reply handling',
    ],
    proofTitle: 'Wokko — capital formation outreach system',
    proofDescription:
      'A communication layer for deal-by-deal capital formation outreach, allowing AI workflows to work across LinkedIn and email from one integration.',
    destinationUrl: 'https://www.unipile.com/',
    isAffiliate: false,
    offerText: null,
    cta: 'Explore Unipile',
    logo: 'UP',
    media: [],
    status: 'active',
    lastVerified: '2026-08-09',
  },
  {
    slug: 'higgsfield',
    redirectSlug: 'higgsfield',
    name: 'Higgsfield',
    category: 'Create',
    headline: 'Create cinematic AI video without a production crew.',
    description:
      'Turn concepts, images and product ideas into high-production-value visual sequences for content and campaigns.',
    useCases: [
      'Cinematic AI video',
      'Product visuals',
      'AI UGC concepts',
      'Campaign creative',
      'Rapid visual iteration',
    ],
    proofTitle: 'Owner-created visual work',
    proofDescription:
      'A selection of AI UGC and brand-video experiments from Lubosi’s production workflow.',
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
    lastVerified: '2026-08-09',
  },
  {
    slug: 'heygen',
    redirectSlug: 'heygen',
    name: 'HeyGen',
    category: 'Create',
    headline: 'Create a digital twin and turn scripts into videos.',
    description:
      'Capture a reusable on-camera presence, then produce avatar-led content from a script.',
    useCases: [
      'AI twin',
      'Avatar-led content',
      'Tutorials',
      'Multilingual content',
      'Repeatable creator and business video',
    ],
    proofTitle: 'A repeatable video pipeline',
    proofDescription: '15-second capture → digital twin → script → finished video.',
    destinationUrl:
      'https://www.heygen.com/?sid=rewardful&utm_content=creator&utm_medium=influencera&via=lubosi',
    isAffiliate: true,
    offerText: null,
    cta: 'Try HeyGen',
    logo: 'HG',
    media: [],
    status: 'active',
    lastVerified: '2026-08-09',
  },
  {
    slug: 'elevenlabs',
    redirectSlug: 'elevenlabs',
    name: 'ElevenLabs',
    category: 'Create',
    headline: 'Give your product a voice.',
    description:
      'Add expressive speech, narration or conversational voice to content and digital products.',
    useCases: [
      'Voice agents',
      'Conversational AI',
      'Narration',
      'Voiceovers',
      'Interactive website agents',
    ],
    proofTitle: 'Voice-agent interface study',
    proofDescription:
      'A visual concept for the speaking and listening states of an embedded voice agent.',
    destinationUrl: 'https://try.elevenlabs.io/uyeh31gegisi',
    isAffiliate: true,
    offerText: null,
    cta: 'Try ElevenLabs',
    logo: '11',
    media: [],
    status: 'active',
    lastVerified: '2026-08-09',
  },
  {
    slug: 'wispr-flow',
    redirectSlug: 'wispr',
    name: 'Wispr Flow',
    category: 'Work Faster',
    headline: 'Stop typing every thought into AI.',
    description:
      "When AI is part of your work all day, typing becomes the bottleneck. Wispr Flow lets you speak naturally and turns it into clean text wherever you're already working.",
    useCases: [
      'Long prompts',
      'Claude and Codex context',
      'Emails',
      'Scripts',
      'Technical dictation',
      'Hands-free writing',
    ],
    proofTitle: 'Everyday input layer',
    proofDescription: "The voice-input layer in Lubosi's daily AI workflow.",
    destinationUrl: 'https://ref.wisprflow.ai/lubosi-kongwa',
    isAffiliate: true,
    offerText: null,
    cta: 'Try Wispr Flow',
    logo: 'WF',
    media: [],
    status: 'active',
    lastVerified: '2026-08-09',
  },
]

export function getAiTool(slug: string) {
  return aiTools.find((tool) => tool.slug === slug)
}
