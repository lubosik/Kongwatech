import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import NewsletterCta from '@/components/newsletter-cta'
import { fetchPostBySlug, formatDate, categoryLabel } from '@/lib/blog-utils'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await fetchPostBySlug(slug)
  if (!post) return {}
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt, type: 'article' },
  }
}

function renderParagraph(para: string, i: number) {
  if (para.startsWith('## ')) {
    return <h2 key={i} className="font-serif text-navy text-2xl lg:text-3xl mt-10 mb-4 leading-snug">{para.slice(3)}</h2>
  }
  if (para.startsWith('### ')) {
    return <h3 key={i} className="font-serif text-navy text-xl lg:text-2xl mt-8 mb-3 leading-snug">{para.slice(4)}</h3>
  }
  if (para.startsWith('![')) {
    const match = para.match(/^!\[(.*)]\((.*)\)$/)
    if (match) {
      return (
        <figure key={i} className="my-10">
          <div className="relative aspect-[16/9] overflow-hidden bg-navy">
            <Image src={match[2]} alt={match[1]} fill className="object-cover" />
          </div>
          {match[1] && (
            <figcaption className="mt-2 text-center font-sans text-xs text-charcoal/40">{match[1]}</figcaption>
          )}
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
                      <td key={ci} className="px-4 py-3 text-charcoal/80 font-sans text-sm">{cell}</td>
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
    return <p key={i} className="font-sans text-charcoal leading-relaxed mb-4"><strong className="text-navy">{para.slice(2, -2)}</strong></p>
  }
  return <p key={i} className="font-sans text-charcoal/80 leading-relaxed mb-4 text-base">{para}</p>
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await fetchPostBySlug(slug)
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
  const firstHalf = paragraphs.slice(0, midpoint)
  const secondHalf = paragraphs.slice(midpoint)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article header */}
      <section className="bg-navy py-20 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <span className="text-gold font-sans text-xs tracking-[0.3em] uppercase">
              {categoryLabel(post.category)}
            </span>
            <span className="text-white/30 text-xs">|</span>
            <span className="text-white/50 font-sans text-xs">{formatDate(post.date)}</span>
          </div>
          <h1 className="font-serif text-white text-3xl sm:text-4xl lg:text-5xl leading-tight mb-8">
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
                alt={`${post.title} — Kongwa Tech`}
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
          {/* First half */}
          <div>{firstHalf.map((para, i) => renderParagraph(para, i))}</div>

          {/* Mid-article CTA — outside any prose/link colour context */}
          <div className="my-12 bg-cream border-l-4 border-gold p-8">
            <p className="font-serif text-navy text-2xl mb-3">
              Want this applied to your business?
            </p>
            <p className="font-sans text-charcoal/70 text-sm mb-6">
              Book a short application call and we will identify the first AI workflow worth building.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-navy text-white font-sans text-sm px-6 py-3 hover:bg-navy-light transition-colors"
            >
              Apply to Work with Lubosi
            </Link>
          </div>

          {/* Second half */}
          <div>{secondHalf.map((para, i) => renderParagraph(para, midpoint + i))}</div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="pb-8 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <NewsletterCta />
        </div>
      </section>

      {/* End-article service CTA */}
      <section className="pb-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <div className="bg-navy p-8">
            <p className="font-serif text-white text-2xl mb-3">
              Build the AI environment your business actually needs.
            </p>
            <p className="font-sans text-white/60 text-sm mb-6">
              Apply to work with Lubosi through the Blueprint Session online or Eco Launch in person.
            </p>
            <Link
              href="/apply"
              className="inline-block bg-gold text-white font-sans text-sm px-6 py-3 hover:bg-gold-dark transition-colors"
            >
              Apply to Work with Lubosi
            </Link>
          </div>
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
