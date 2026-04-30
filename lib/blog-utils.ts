import { getAllPostsFromStrapi, getPostBySlugFromStrapi } from './strapi'
import type { BlogPost } from './strapi'
import { seedPosts } from './blog-seed'

export type { BlogPost }

export async function fetchAllPosts(): Promise<BlogPost[]> {
  const strapiPosts = await getAllPostsFromStrapi()
  if (strapiPosts.length > 0) return strapiPosts
  return seedPosts
}

export async function fetchPostBySlug(slug: string): Promise<BlogPost | null> {
  const strapiPost = await getPostBySlugFromStrapi(slug)
  if (strapiPost) return strapiPost
  return seedPosts.find(p => p.slug === slug) ?? null
}

export function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}

export function categoryLabel(cat: string): string {
  const map: Record<string, string> = {
    'claude-code': 'Claude Code',
    'vibe-coding': 'Vibe Coding',
    'ai-automation': 'AI Automation',
    'ai-tools': 'AI Tools',
    'business-strategy': 'Business Strategy',
    'insights': 'Insights',
  }
  return map[cat] ?? cat
}
