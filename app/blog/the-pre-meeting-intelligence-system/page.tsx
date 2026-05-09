import type { Metadata } from 'next'
import ArticleContent from './article-content'

export const metadata: Metadata = {
  title: 'How to Research Any Sales Prospect Using Claude AI in 10 Minutes | Kongwa Tech',
  description:
    'Use Claude AI and Claude Code to build a complete sales prospect intelligence brief in under 10 minutes. Four Anthropic prompts covering background, buying triggers, objections, and conversation openers. Used by sales teams closing high-ticket deals.',
  keywords: [
    'Claude AI sales research',
    'Claude Code sales tool',
    'Anthropic Claude prompts',
    'AI prospect research',
    'pre-meeting intelligence',
    'sales preparation AI',
    'Claude AI for business',
    'AI sales assistant',
  ],
  openGraph: {
    title: 'How to Research Any Sales Prospect Using Claude AI in 10 Minutes',
    description:
      'Four Claude AI prompts that build a complete prospect brief in under 10 minutes. Background, buying triggers, objections, conversation openers.',
    type: 'article',
    images: ['/images/blog/pre-meeting-hero.jpg'],
  },
}

export default function PreMeetingArticlePage() {
  return <ArticleContent />
}
