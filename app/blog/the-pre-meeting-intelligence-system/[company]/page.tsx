import type { Metadata } from 'next'
import ArticleContent from '../article-content'
import LockedPreMeetingTeaser from '../locked-teaser'
import { verifyLeadMagnetToken } from '@/lib/lead-magnet-access'
import { isCurrentVisitorSubscribed } from '@/lib/subscriber-session'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ company: string }>
}): Promise<Metadata> {
  const { company } = await params
  const companyName = company
    .split('-')
    .map((w: string) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ')

  return {
    title: `The Pre-Meeting Intelligence System |Prepared for ${companyName} | Kongwa Tech`,
    description: `A personalised intelligence briefing system built for ${companyName}. How to research any prospect in under 10 minutes using Claude.`,
    openGraph: {
      title: `Pre-Meeting Intelligence System |${companyName}`,
      description: `Personalised for ${companyName}. Build a 4-layer prospect briefing in under 10 minutes with Claude.`,
      type: 'article',
      images: ['/images/blog/pre-meeting-hero.jpg'],
    },
  }
}

export default async function PersonalisedArticlePage({
  params,
  searchParams,
}: {
  params: Promise<{ company: string }>
  searchParams: Promise<{ access?: string }>
}) {
  const { company } = await params
  const { access } = await searchParams
  const hasLeadMagnetAccess = verifyLeadMagnetToken(access, 'the-pre-meeting-intelligence-system')
  const isSubscribed = hasLeadMagnetAccess || await isCurrentVisitorSubscribed()
  return isSubscribed ? <ArticleContent company={company} /> : <LockedPreMeetingTeaser />
}
