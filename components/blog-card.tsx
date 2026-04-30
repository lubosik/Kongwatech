import Link from 'next/link'
import { categoryLabel, formatDate } from '@/lib/blog-utils'
import type { BlogPost } from '@/lib/blog-utils'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="flex flex-col border-t border-gray-200 pt-6">
      <span className="text-xs font-sans text-gold uppercase tracking-widest mb-3">
        {categoryLabel(post.category)}
      </span>
      <Link href={`/blog/${post.slug}`}>
        <h3 className="font-serif text-navy text-2xl leading-snug hover:text-gold transition-colors mb-3">
          {post.title}
        </h3>
      </Link>
      <p className="text-sm text-charcoal/70 leading-relaxed mb-4 flex-1">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-xs text-charcoal/40 font-sans">{formatDate(post.date)}</span>
        <Link
          href={`/blog/${post.slug}`}
          className="text-xs font-sans text-navy hover:text-gold transition-colors flex items-center gap-1"
        >
          Read more
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </article>
  )
}
