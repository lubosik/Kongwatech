import type { Metadata } from 'next'
import BlogCard from '@/components/blog-card'
import { fetchAllPosts, categoryLabel } from '@/lib/blog-utils'

export const metadata: Metadata = {
  title: 'Kongwa Tech News | AI Insights for British Businesses',
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

  return (
    <>
      <section className="bg-navy py-28 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">Kongwa Tech News</span>
          <h1 className="font-serif text-white text-5xl lg:text-7xl mt-6 leading-tight">
            Insights from the frontier.
          </h1>
          <p className="text-white/60 font-sans text-lg mt-6 max-w-xl leading-relaxed">
            Weekly intelligence on AI tools, strategy, and implementation for British businesses.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Category filters */}
          <div className="flex flex-wrap gap-3 mb-16">
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

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filtered.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <p className="text-charcoal/50 font-sans">
              No articles in {categoryLabel(activeCategory)} yet. Check back soon.
            </p>
          )}
        </div>
      </section>
    </>
  )
}
