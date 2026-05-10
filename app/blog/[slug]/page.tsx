import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import SubscribeGate from '@/components/subscribe-gate'
import { fetchPostBySlug, fetchAllPosts, formatDate, categoryLabel } from '@/lib/blog-utils'
import { isCurrentVisitorSubscribed } from '@/lib/subscriber-session'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const post = await fetchPostBySlug(params.slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await fetchPostBySlug(params.slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: 'Lubosi Kongwa',
      url: 'https://kongwatech.com/team/lubosi-kongwa',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Kongwa Tech',
      url: 'https://kongwatech.com',
    },
    datePublished: post.date,
    image: post.coverImage,
    keywords: [post.category, 'AI consultancy', 'Claude Code', 'Southeast England'],
  }

  const paragraphs = post.content.split('\n').filter(Boolean)
  const midpoint = Math.max(2, Math.floor(paragraphs.length / 2))
  const isSubscribed = await isCurrentVisitorSubscribed()
  const teaserParagraphs = paragraphs.filter(para => !para.startsWith('## ') && !para.startsWith('### ')).slice(0, 2)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article header */}
      <section className="bg-navy py-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">
              {categoryLabel(post.category)}
            </span>
            <span className="text-white/30 text-xs">|</span>
            <span className="text-white/50 font-sans text-xs">{formatDate(post.date)}</span>
          </div>
          <h1 className="font-serif text-white text-4xl lg:text-5xl leading-tight mb-8">
            {post.title}
          </h1>
          <p className="text-white/60 font-sans text-base leading-relaxed">{post.excerpt}</p>
          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-white/40 font-sans text-sm">
              By <span className="text-white/70">Lubosi Kongwa</span>. Kongwa Tech, Rochester, Kent
            </p>
          </div>
        </div>
      </section>

      {post.coverImage && (
        <section className="bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-12 -mt-10 relative z-10">
            <div className="relative aspect-[16/9] overflow-hidden border border-gray-100 bg-navy">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>
      )}

      {/* Article body */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          {isSubscribed ? (
            <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy prose-a:text-gold prose-strong:text-navy">
              {paragraphs.map((para, i) => {
              const midCta = i === midpoint ? (
                <div key={`mid-cta-${i}`} className="not-prose my-12 bg-cream border-l-4 border-gold p-8">
                  <p className="font-serif text-navy text-2xl mb-3">
                    Want this applied to your business?
                  </p>
                  <p className="font-sans text-charcoal/70 text-sm mb-6">
                    Book a short application call and we will identify the first AI workflow worth building.
                  </p>
                  <Link
                    href="/apply"
                    className="inline-block bg-gold text-white font-sans text-sm px-6 py-3 hover:bg-gold-dark transition-colors"
                  >
                    Apply to Work with Lubosi
                  </Link>
                </div>
              ) : null

              const rendered = (() => {
              if (para.startsWith('## ')) {
                return <h2 key={i}>{para.slice(3)}</h2>
              }
              if (para.startsWith('### ')) {
                return <h3 key={i}>{para.slice(4)}</h3>
              }
              if (para.startsWith('![')) {
                const match = para.match(/^!\[(.*)]\((.*)\)$/)
                if (match) {
                  return (
                    <figure key={i} className="not-prose my-10">
                      <div className="relative aspect-[16/9] overflow-hidden bg-navy">
                        <Image src={match[2]} alt={match[1]} fill className="object-cover" />
                      </div>
                    </figure>
                  )
                }
              }
              if (para.startsWith('| ')) {
                return (
                  <div key={i} className="overflow-x-auto my-6">
                    <table className="min-w-full border-collapse text-sm">
                      <tbody>
                        {para.split('\n').filter(r => r.startsWith('|')).map((row, ri) => {
                          if (row.replace(/\|/g, '').replace(/-/g, '').trim() === '') return null
                          const cells = row.split('|').filter(Boolean).map(c => c.trim())
                          const isHeader = ri === 0
                          return (
                            <tr key={ri} className={isHeader ? 'bg-navy text-white' : 'border-b border-gray-100'}>
                              {cells.map((cell, ci) =>
                                isHeader ? (
                                  <th key={ci} className="px-4 py-2 text-left font-sans text-xs font-medium">{cell}</th>
                                ) : (
                                  <td key={ci} className="px-4 py-3 text-charcoal/80">{cell}</td>
                                )
                              )}
                            </tr>
                          )
                        })}
                      </tbody>
                    </table>
                  </div>
                )
              }
              if (para.startsWith('**') && para.endsWith('**')) {
                return <p key={i}><strong>{para.slice(2, -2)}</strong></p>
              }
              return <p key={i}>{para}</p>
              })()

              return (
                <div key={`block-${i}`}>
                  {midCta}
                  {rendered}
                </div>
              )
              })}
            </div>
          ) : (
            <div>
              <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-navy prose-strong:text-navy">
                {teaserParagraphs.map((para, index) => (
                  <p key={index}>{para}</p>
                ))}
              </div>
              <div className="relative mt-8 overflow-hidden border border-gray-100 bg-white">
                <div className="h-44 select-none space-y-4 p-8 blur-[3px]" aria-hidden="true">
                  <div className="h-5 w-3/4 bg-charcoal/10" />
                  <div className="h-4 w-full bg-charcoal/10" />
                  <div className="h-4 w-11/12 bg-charcoal/10" />
                  <div className="h-4 w-5/6 bg-charcoal/10" />
                  <div className="h-4 w-full bg-charcoal/10" />
                </div>
                <div className="absolute inset-0 flex items-center justify-center bg-white/85 p-6">
                  <div className="w-full max-w-xl bg-white p-6 shadow-sm ring-1 ring-gray-100">
                    <SubscribeGate
                      title="Subscribe to keep reading"
                      description="The full Some Free Game archive is free for confirmed Kongwa Tech newsletter subscribers."
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* End-article CTA */}
          {isSubscribed && <div className="mt-16 bg-navy p-8">
            <p className="font-serif text-navy text-2xl mb-3">
              <span className="text-white">Build the AI environment your business actually needs.</span>
            </p>
            <p className="font-sans text-white/60 text-sm mb-6">
              Apply to work with Lubosi through AI Foundations online or Eco Launch in person.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-gold text-white font-sans text-sm px-6 py-3 hover:bg-gold-dark transition-colors"
            >
              Apply to Work with Lubosi
            </Link>
          </div>}
        </div>
      </section>

      {/* Back link */}
      <section className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-sans text-charcoal/50 hover:text-navy transition-colors"
          >
            <svg className="w-4 h-4 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
            All articles
          </Link>
        </div>
      </section>
    </>
  )
}
