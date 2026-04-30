import Link from 'next/link'
import Image from 'next/image'
import { categoryLabel, formatDate } from '@/lib/blog-utils'
import type { BlogPost } from '@/lib/blog-utils'

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group flex flex-col bg-white border border-gray-100 hover:border-gray-200 hover:shadow-md transition-all duration-200">
      {/* Cover image */}
      <div className="relative h-48 overflow-hidden bg-navy">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-navy to-[#1a3a5c]" />
        )}
        <div className="absolute top-4 left-4">
          <span className="bg-gold text-white font-sans text-xs px-3 py-1 uppercase tracking-wider">
            {categoryLabel(post.category)}
          </span>
        </div>
      </div>

      {/* Card body */}
      <div className="flex flex-col flex-1 p-6">
        <Link href={`/blog/${post.slug}`}>
          <h3 className="font-serif text-navy text-xl leading-snug hover:text-gold transition-colors mb-3 line-clamp-3">
            {post.title}
          </h3>
        </Link>
        <p className="text-sm text-charcoal/70 font-sans leading-relaxed mb-4 flex-1 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-navy flex items-center justify-center">
              <span className="text-white text-xs font-serif">L</span>
            </div>
            <span className="text-xs font-sans text-charcoal/50">Lubosi Kongwa</span>
          </div>
          <div className="flex items-center gap-3 text-xs font-sans text-charcoal/40">
            <span>{formatDate(post.date)}</span>
            {post.readTime && (
              <>
                <span>·</span>
                <span>{post.readTime} min read</span>
              </>
            )}
          </div>
        </div>
      </div>
    </article>
  )
}
