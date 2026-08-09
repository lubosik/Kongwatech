import type { Metadata } from 'next'
import AiStackExplorer from '@/components/ai-stack-explorer'
import { aiTools } from '@/lib/ai-tools'

export const metadata: Metadata = {
  title: 'The AI Stack I Actually Use',
  description:
    'The AI tools Lubosi Kongwa uses to build products, research markets, run outbound systems, create content and work faster.',
  alternates: { canonical: '/ai-stack' },
  openGraph: {
    title: 'The AI Stack I Actually Use | Kongwa Tech',
    description:
      'The tools that stay in the workflow, and the systems built around them.',
    url: '/ai-stack',
  },
}

const systems = [
  {
    number: '01',
    label: 'Content Intelligence Engine',
    title: 'Know what to make next.',
    outcome:
      'Scrape your own content and the best creators in your niche, analyse hooks, topics and comments, then turn the patterns into the next batch of content to make.',
    nodes: ['Apify', 'Claude / Codex', 'Wispr Flow', 'Content plan'],
    note: 'Use only content and data you are authorised to collect, and respect source-platform rules.',
  },
  {
    number: '02',
    label: 'AI Outbound Engine',
    title: 'Turn a market into conversations.',
    outcome:
      'Find the right prospects, verify them, personalise outreach, run email campaigns and connect agentic workflows to LinkedIn and messaging.',
    nodes: ['Lead data', 'Instantly', 'AI', 'Unipile', 'LinkedIn / email'],
    note: 'Outreach systems still need lawful data use, appropriate consent and human oversight.',
  },
  {
    number: '03',
    label: 'AI Content Studio',
    title: 'Move from concept to production.',
    outcome:
      'Turn a concept into cinematic AI video, a digital twin or a voice-led experience without a traditional production setup.',
    nodes: ['Idea', 'Higgsfield / HeyGen', 'ElevenLabs', 'Publish'],
    note: 'Use generated media responsibly and make consent part of any digital-twin workflow.',
  },
] as const

export default function AiStackPage() {
  return (
    <div className="ai-stack-page">
      <section className="stack-hero" aria-labelledby="stack-title">
        <div className="stack-hero__grid" aria-hidden="true" />
        <div className="stack-shell stack-hero__layout">
          <div className="stack-hero__copy">
            <p className="stack-kicker">KONGWA TECH OPERATOR&apos;S WORKBENCH</p>
            <h1 id="stack-title">
              The AI Stack
              <span>I Actually Use</span>
            </h1>
            <p className="stack-hero__lede">
              I test a lot of software. These are the tools that actually stay in my workflow,
              and the systems I build around them.
            </p>
            <p className="stack-hero__trust">
              I would not recommend a tool here if I did not genuinely use it or believe it was
              worth using.
            </p>
          </div>

          <div className="stack-console" aria-label="Current AI stack overview">
            <div className="stack-console__bar">
              <span>ACTIVE STACK</span>
              <span className="stack-console__status">LIVE</span>
            </div>
            <div className="stack-console__readout">
              <p>
                <span>TOOLS</span>
                <b>09</b>
              </p>
              <p>
                <span>SYSTEMS</span>
                <b>03</b>
              </p>
              <p>
                <span>PRINCIPLE</span>
                <b>OUTCOME FIRST</b>
              </p>
            </div>
            <div className="stack-console__route" aria-hidden="true">
              <span>DATA</span><i /><span>AGENTS</span><i /><span>OUTPUT</span>
            </div>
            <div className="stack-console__foot">
              <span>FIELD NOTES / AUG 2026</span>
              <span>KT–STACK.09</span>
            </div>
          </div>
        </div>
      </section>

      <section className="stack-disclosure" aria-label="Affiliate disclosure">
        <div className="stack-shell stack-disclosure__inner">
          <span className="stack-disclosure__mark" aria-hidden="true">A</span>
          <p>
            <strong>Affiliate disclosure:</strong> Some links on this page are affiliate links. If
            you sign up through one, I may earn a commission at no extra cost to you. Using them
            is an easy way to support the free systems, research and resources I publish.
          </p>
        </div>
      </section>

      <section className="stack-systems" aria-labelledby="systems-title">
        <div className="stack-shell">
          <div className="stack-section-heading">
            <div>
              <p className="stack-kicker">SYSTEMS, NOT SOFTWARE</p>
              <h2 id="systems-title">Start with what you want to happen.</h2>
            </div>
            <p className="stack-section-heading__copy">
              A tool earns its place when it closes a gap in an operating system. These are three
              systems I keep coming back to.
            </p>
          </div>

          <div className="system-ledger">
            {systems.map((system) => (
              <article className="system-card" key={system.number}>
                <div className="system-card__index" aria-hidden="true">{system.number}</div>
                <div className="system-card__body">
                  <p className="system-card__label">{system.label}</p>
                  <h3>{system.title}</h3>
                  <p className="system-card__outcome">{system.outcome}</p>
                  <div className="system-flow" aria-label={`${system.label} workflow`}>
                    {system.nodes.map((node, index) => (
                      <div className="system-flow__step" key={node}>
                        <span>{node}</span>
                        {index < system.nodes.length - 1 && <i aria-hidden="true">→</i>}
                      </div>
                    ))}
                  </div>
                  <p className="system-card__note">{system.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <AiStackExplorer tools={aiTools} />

      <section className="stack-closing" aria-labelledby="stack-closing-title">
        <div className="stack-shell stack-closing__inner">
          <p className="stack-kicker">FIELD NOTE / 01</p>
          <h2 id="stack-closing-title">Tools matter less than the system around them.</h2>
          <p>
            The strongest workflows connect good tools to a clear outcome, reliable data and a
            human who remains accountable for the result. This page will change as the stack
            changes.
          </p>
          <div className="stack-closing__stamp" aria-label="Stack last reviewed August 2026">
            <span>STACK REVIEW</span>
            <b>AUG / 2026</b>
          </div>
        </div>
      </section>
    </div>
  )
}
