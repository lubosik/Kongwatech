import type { Metadata } from 'next'
import ArticleContent from '../article-content'

export async function generateMetadata({
  params,
}: {
  params: { company: string }
}): Promise<Metadata> {
  const companyName = params.company
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

export default function PersonalisedArticlePage({
  params,
}: {
  params: { company: string }
}) {
  return <ArticleContent company={params.company} />
}
