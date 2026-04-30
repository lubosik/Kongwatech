export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  date: string
  coverImage?: string
  readTime?: number
}

const STRAPI_URL = process.env.STRAPI_URL || ''
const STRAPI_API_TOKEN = process.env.STRAPI_API_TOKEN || ''

function getHeaders(): HeadersInit {
  const headers: HeadersInit = { 'Content-Type': 'application/json' }
  if (STRAPI_API_TOKEN) {
    headers['Authorization'] = `Bearer ${STRAPI_API_TOKEN}`
  }
  return headers
}

interface StrapiAttributes {
  title: string
  slug: string
  excerpt: string
  content: string
  category: string
  publishedAt: string
  coverImage?: string | StrapiMedia
  readTime?: number
}

interface StrapiItem {
  id: number
  attributes?: StrapiAttributes
  title?: string
  slug?: string
  excerpt?: string
  content?: string
  category?: string
  publishedAt?: string
  coverImage?: string | StrapiMedia
  readTime?: number
}

interface StrapiMedia {
  url?: string
  data?: {
    attributes?: {
      url?: string
    }
    url?: string
  }
}

function resolveMediaUrl(media?: string | StrapiMedia): string | undefined {
  if (!media) return undefined
  if (typeof media === 'string') return media
  const rawUrl = media.url || media.data?.attributes?.url || media.data?.url
  if (!rawUrl) return undefined
  if (rawUrl.startsWith('http') || rawUrl.startsWith('/')) return rawUrl
  return STRAPI_URL ? `${STRAPI_URL}${rawUrl}` : rawUrl
}

function mapPost(item: StrapiItem): BlogPost {
  const attrs = item.attributes || item
  return {
    id: String(item.id),
    title: attrs.title || '',
    slug: attrs.slug || '',
    excerpt: attrs.excerpt || '',
    content: attrs.content || '',
    category: attrs.category || 'insights',
    date: attrs.publishedAt || new Date().toISOString(),
    coverImage: resolveMediaUrl(attrs.coverImage),
    readTime: attrs.readTime,
  }
}

export async function getAllPostsFromStrapi(): Promise<BlogPost[]> {
  if (!STRAPI_URL) return []
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/articles?populate=*&sort=publishedAt:desc`,
      { headers: getHeaders(), next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const json = await res.json()
    return (json.data as StrapiItem[]).map(mapPost)
  } catch {
    return []
  }
}

export async function getPostBySlugFromStrapi(slug: string): Promise<BlogPost | null> {
  if (!STRAPI_URL) return null
  try {
    const res = await fetch(
      `${STRAPI_URL}/api/articles?filters[slug][$eq]=${slug}&populate=*`,
      { headers: getHeaders(), next: { revalidate: 3600 } }
    )
    if (!res.ok) return null
    const json = await res.json()
    const items = json.data as StrapiItem[]
    return items[0] ? mapPost(items[0]) : null
  } catch {
    return null
  }
}
