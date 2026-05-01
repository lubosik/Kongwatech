import { MetadataRoute } from 'next'
import { fetchAllPosts } from '@/lib/blog-utils'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await fetchAllPosts()
  const blogUrls: MetadataRoute.Sitemap = posts.map(post => ({
    url: `https://kongwatech.com/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    { url: 'https://kongwatech.com', lastModified: new Date(), changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://kongwatech.com/team', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://kongwatech.com/team/lubosi-kongwa', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://kongwatech.com/services', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://kongwatech.com/services/ai-foundations', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://kongwatech.com/services/eco-launch', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://kongwatech.com/blog', lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://kongwatech.com/apply', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://kongwatech.com/ai-consultant-kent', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://kongwatech.com/ai-consultant-southeast-england', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    ...blogUrls,
  ]
}
