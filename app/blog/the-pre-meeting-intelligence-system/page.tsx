import type { Metadata } from 'next'
import ArticleContent from './article-content'
import LockedPreMeetingTeaser from './locked-teaser'
import { verifyLeadMagnetToken } from '@/lib/lead-magnet-access'
import { hasSubscriberAccessCookie } from '@/lib/subscriber-session'

export const dynamic = 'force-dynamic'

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

export default async function PreMeetingArticlePage({
  searchParams,
}: {
  searchParams: Promise<{ access?: string }>
}) {
  const { access } = await searchParams
  const hasLeadMagnetAccess = verifyLeadMagnetToken(access, 'the-pre-meeting-intelligence-system')
  const isSubscribed = hasLeadMagnetAccess || await hasSubscriberAccessCookie()
  return isSubscribed ? <ArticleContent /> : <LockedPreMeetingTeaser />
}
