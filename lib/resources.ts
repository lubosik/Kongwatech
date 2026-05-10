export interface FreeResource {
  id: string
  emoji: string
  title: string
  desc: string
  cta: string
  href: string
}

export const freeResources: FreeResource[] = [
  {
    id: 'viral-tiktok-clip-formula',
    emoji: '🎬',
    title: 'Viral TikTok Clip Formula',
    desc: 'The exact framework I use to identify, cut, and position clips for maximum views.',
    cta: 'Open Formula',
    href: 'https://www.notion.so/Lubosi-s-Personal-Viral-Clip-Identification-Formula-3304cf7f59e680af9d0af431469a9477?source=copy_link',
  },
  {
    id: 'seo-strategy-playbook',
    emoji: '🔍',
    title: 'SEO Strategy Playbook',
    desc: 'How I generated 130K impressions across 3 sites in months. Site structure, content, and indexing.',
    cta: 'Open Strategy',
    href: 'https://www.notion.so/Lubosi-s-SEO-Content-Strategy-3304cf7f59e680aebd55c6d2ccc35700?source=copy_link',
  },
  {
    id: 'prompt-engineering-guide',
    emoji: '🤖',
    title: 'Prompt Engineering Guide',
    desc: 'My personal prompt system for building AI agents that actually work in production.',
    cta: 'Open Playbook',
    href: 'https://www.notion.so/The-Prompt-Engineering-Playbook-2216d05e192c8064b3a5fa3d79a8fd1c?source=copy_link',
  },
  {
    id: 'hyper-realistic-ai-image-guide',
    emoji: '🖼️',
    title: 'Hyper-Realistic AI Image Guide',
    desc: 'My complete system for generating photorealistic AI images. Models, prompts, settings, and workflows.',
    cta: 'Open Guide',
    href: 'https://www.notion.so/COMPLETE-GUIDE-GENERATING-HYPER-REALISTIC-AI-IMAGES-2fd4cf7f59e680f7ba33c5d130dc951a?source=copy_link',
  },
  {
    id: 'hyper-realistic-ai-video-guide',
    emoji: '🎥',
    title: 'Hyper-Realistic AI Video Guide',
    desc: 'The full playbook for creating AI video content that looks and feels real. Tools, pipelines, and prompts.',
    cta: 'Open Guide',
    href: 'https://www.notion.so/COMPLETE-GUIDE-GENERATING-HYPER-REALISTIC-AI-VIDEOS-2fd4cf7f59e6807b9284cdfb6405ad34?source=copy_link',
  },
]

export function getFreeResource(id: string): FreeResource | undefined {
  return freeResources.find(resource => resource.id === id)
}
