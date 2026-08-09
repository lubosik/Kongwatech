import type { MetadataRoute } from 'next'
import { fetchAllPosts } from '@/lib/blog-utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchAllPosts()
  const blogUrls: MetadataRoute.Sitemap = posts.map(post => ({
    url: `https://kongwatech.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.65,
  }))

  return [
    { url: 'https://kongwatech.com', changeFrequency: 'weekly', priority: 1 },
    { url: 'https://kongwatech.com/consult', changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://kongwatech.com/ai-stack', changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://kongwatech.com/team/lubosi-kongwa', changeFrequency: 'monthly', priority: 0.65 },
    { url: 'https://kongwatech.com/blog', changeFrequency: 'weekly', priority: 0.7 },
    ...blogUrls,
  ]
}
