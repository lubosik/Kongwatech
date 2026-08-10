import type { Metadata } from 'next'
import AiStackExplorer from '@/components/ai-stack-explorer'
import { aiTools } from '@/lib/ai-tools'

export const metadata: Metadata = {
  title: 'The AI Tools I Actually Use',
  description:
    'The AI tools Lubosi Kongwa personally uses for outreach, video, voice, research and building software.',
  alternates: { canonical: '/ai-stack' },
  openGraph: {
    title: 'The AI Tools I Actually Use | Kongwa Tech',
    description:
      'A personal shortlist of the AI tools Lubosi Kongwa uses and genuinely recommends.',
    url: '/ai-stack',
  },
}

export default function AiStackPage() {
  return (
    <div className="simple-stack-page">
      <header className="simple-stack-hero">
        <div className="simple-stack-container simple-stack-hero__inner">
          <p className="simple-stack-eyebrow">MY AI STACK</p>
          <h1>The AI tools I actually use.</h1>
          <div className="simple-stack-hero__intro">
            <p>
              I get asked all the time which AI tools I actually use, so I put them all in one
              place.
            </p>
            <p>
              Everything here is something I use in my own work or genuinely recommend. I
              wouldn&apos;t put a tool on this page just because it pays me.
            </p>
          </div>

          <aside className="simple-stack-heads-up" aria-label="Affiliate disclosure">
            <strong>Quick heads-up:</strong>
            <p>
              Some of the links below are affiliate links. If you sign up through one of them, I
              may earn a commission at no extra cost to you. If you find any of my free content
              useful, using these links is an easy way to support what I make. I appreciate it.
            </p>
          </aside>

          <nav className="simple-stack-start-here" aria-label="Recommended places to start">
            <span>Start here: </span>
            <a href="#instantly">Instantly for outbound</a>
            <span aria-hidden="true"> · </span>
            <a href="#higgsfield">Higgsfield for AI video</a>
            <span aria-hidden="true"> · </span>
            <a href="#wispr-flow">Wispr Flow for dictation</a>
            <span aria-hidden="true"> · </span>
            <a href="#dataforseo">DataForSEO for SEO data</a>
            <span aria-hidden="true"> ↓</span>
          </nav>
        </div>
      </header>

      <div>
        <AiStackExplorer tools={aiTools} />

        <aside className="simple-stack-footer-disclosure" aria-labelledby="full-disclosure-title">
          <div className="simple-stack-container">
            <p className="simple-stack-eyebrow">TRANSPARENCY</p>
            <h2 id="full-disclosure-title">A note on affiliate links.</h2>
            <p>
              Some links on this page are affiliate links. If you sign up through them, Kongwa
              Tech or Lubosi may receive a commission at no additional cost to you.
              Recommendations are based on tools Lubosi actually uses or genuinely recommends.
            </p>
          </div>
        </aside>
      </div>
    </div>
  )
}
