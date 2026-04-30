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
}

interface StrapiItem {
  id: number
  attributes: StrapiAttributes
}

function mapPost(item: StrapiItem): BlogPost {
  return {
    id: String(item.id),
    title: item.attributes.title,
    slug: item.attributes.slug,
    excerpt: item.attributes.excerpt || '',
    content: item.attributes.content || '',
    category: item.attributes.category || 'insights',
    date: item.attributes.publishedAt,
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
