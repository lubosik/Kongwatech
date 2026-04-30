import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import BlogCard from '@/components/blog-card'
import { fetchAllPosts, categoryLabel, formatDate } from '@/lib/blog-utils'

export const metadata: Metadata = {
  title: 'Kongwa Tech News | AI Insights for Businesses',
  description:
    'Weekly analysis on Claude Code, vibe coding, AI automation, and AI strategy for UK business owners. From Kongwa Tech, Rochester, Kent.',
}

const categories = [
  { key: 'all', label: 'All' },
  { key: 'claude-code', label: 'Claude Code' },
  { key: 'vibe-coding', label: 'Vibe Coding' },
  { key: 'ai-automation', label: 'AI Automation' },
  { key: 'ai-tools', label: 'AI Tools' },
  { key: 'business-strategy', label: 'Business Strategy' },
]

export default async function BlogPage({
  searchParams,
}: {
  searchParams: { category?: string }
}) {
  const posts = await fetchAllPosts()
  const activeCategory = searchParams.category || 'all'
  const filtered =
    activeCategory === 'all'
      ? posts
      : posts.filter(p => p.category === activeCategory)

  const featured = filtered[0] ?? null
  const rest = filtered.slice(1)

  return (
    <>
      <section className="bg-navy py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Kongwa Tech News</span>
          <h1 className="font-serif text-white text-5xl lg:text-6xl mt-6 leading-tight">
            Insights from the frontier.
          </h1>
          <p className="text-white/60 font-sans text-lg mt-6 max-w-xl leading-relaxed">
            Weekly intelligence on AI tools, strategy, and implementation for ambitious businesses.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-wrap gap-3 mb-12">
            {categories.map(cat => (
              <a
                key={cat.key}
                href={cat.key === 'all' ? '/blog' : `/blog?category=${cat.key}`}
                className={`font-sans text-sm px-5 py-2 border transition-colors ${
                  activeCategory === cat.key
                    ? 'bg-navy text-white border-navy'
                    : 'border-gray-200 text-charcoal hover:border-navy hover:text-navy'
                }`}
              >
                {cat.label}
              </a>
            ))}
          </div>

          {featured ? (
            <>
              <div className="mb-12">
                <Link
                  href={`/blog/${featured.slug}`}
                  className="group grid grid-cols-1 lg:grid-cols-2 gap-0 border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200 overflow-hidden"
                >
                  <div className="relative h-64 lg:h-80 bg-navy overflow-hidden">
                    {featured.coverImage ? (
                      <Image
                        src={featured.coverImage}
                        alt={featured.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-navy to-[#1a3a5c]" />
                    )}
                  </div>
                  <div className="p-10 flex flex-col justify-center bg-white">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-gold text-white font-sans text-xs px-3 py-1 uppercase tracking-wider">
                        {categoryLabel(featured.category)}
                      </span>
                      <span className="text-xs font-sans text-charcoal/40">Featured</span>
                    </div>
                    <h2 className="font-serif text-navy text-3xl lg:text-4xl leading-tight mb-4 group-hover:text-gold transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-sm text-charcoal/70 font-sans leading-relaxed mb-6">
                      {featured.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs font-sans text-charcoal/40">
                      <span>Lubosi Kongwa</span>
                      <span>·</span>
                      <span>{formatDate(featured.date)}</span>
                      {featured.readTime && (
                        <>
                          <span>·</span>
                          <span>{featured.readTime} min read</span>
                        </>
                      )}
                    </div>
                  </div>
                </Link>
              </div>

              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {rest.map(post => (
                    <BlogCard key={post.id} post={post} />
                  ))}
                </div>
              )}
            </>
          ) : (
            <p className="text-charcoal/50 font-sans">No articles in this category yet. Check back soon.</p>
          )}
        </div>
      </section>
    </>
  )
}
