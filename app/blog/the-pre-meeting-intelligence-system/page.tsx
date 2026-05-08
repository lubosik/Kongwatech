import type { Metadata } from 'next'
import ArticleContent from './article-content'

export const metadata: Metadata = {
  title: 'The Pre-Meeting Intelligence System | Kongwa Tech',
  description:
    'How to build a 4-layer intelligence briefing on any prospect in under 10 minutes using Claude. Used by sales teams closing £50k+ deals.',
  openGraph: {
    title: 'The Pre-Meeting Intelligence System',
    description:
      'How to build a 4-layer intelligence briefing on any prospect in under 10 minutes using Claude.',
    type: 'article',
    images: ['/images/blog/pre-meeting-hero.jpg'],
  },
}

export default function PreMeetingArticlePage() {
  return <ArticleContent />
}
