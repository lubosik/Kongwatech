import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Kongwa Tech: Technology & Strategy Holding Company',
  description:
    'Kongwa Tech partners with founders and brands to build, scale and operate ventures across AI, digital infrastructure and community.',
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Kongwa Tech: Technology & Strategy Holding Company',
    description:
      'Technology, strategy and operating capability for ventures built to compound.',
    url: '/',
  },
}

const capabilities = [
  {
    number: '01',
    title: 'Product Development',
    description:
      'From concept and prototype to usable software, product systems and digital experiences.',
    signal: 'IDEA / PRODUCT',
  },
  {
    number: '02',
    title: 'AI Implementation',
    description:
      'Agentic systems, workflow automation, data pipelines, model integration and practical AI operating layers.',
    signal: 'DATA / AGENTS',
  },
  {
    number: '03',
    title: 'Platform Engineering',
    description:
      'Infrastructure, APIs, integrations and internal tools that allow ventures to operate and scale.',
    signal: 'SYSTEM / SCALE',
  },
  {
    number: '04',
    title: 'Audience Growth',
    description:
      'Positioning, content systems, distribution and community-led growth designed alongside the product.',
    signal: 'TRUST / REACH',
  },
] as const

const operatingModel = [
  {
    step: 'Partner',
    copy: 'We align with a founder, brand or venture where Kongwa Tech can create disproportionate operating leverage.',
  },
  {
    step: 'Build',
    copy: 'We deploy hands-on product, AI, infrastructure and growth capability around the opportunity.',
  },
  {
    step: 'Operate',
    copy: 'We stay close to the system, measure what works and keep improving the operating layer.',
  },
  {
    step: 'Scale',
    copy: 'Where the fit is right, we add an equity-aligned structure so long-term upside stays aligned as the venture grows.',
  },
] as const

const work = [
  {
    label: 'GO-TO-MARKET PARTNERSHIP',
    title: 'AIRO by Velto',
    copy: 'A voice AI product developed by Velto and brought to market in partnership with Kongwa Tech, connecting inbound lead handling with qualification and commercial follow-through.',
    code: 'VOICE / GTM',
  },
  {
    label: 'E-COMMERCE OPERATING WORK',
    title: 'Vici Peptides growth infrastructure',
    copy: 'Growth infrastructure spanning e-commerce intelligence, lifecycle automation, campaign systems, product positioning and conversion optimisation.',
    code: 'GROWTH / OPS',
  },
  {
    label: 'AI RESEARCH & OUTREACH',
    title: 'Private-markets outreach architecture',
    copy: 'Agentic systems for sourcing, research, structured deal intelligence and outreach across private-markets workflows.',
    code: 'RESEARCH / AI',
  },
] as const

export default function HomePage() {
  return (
    <div className="holding-home">
      <section className="holding-hero" aria-labelledby="holding-hero-title">
        <div className="holding-hero__grid" aria-hidden="true" />
        <div className="holding-shell holding-hero__layout">
          <div className="holding-hero__copy">
            <p className="holding-kicker">TECHNOLOGY · STRATEGY · VENTURES</p>
            <h1 id="holding-hero-title">We build and operate companies at the edge of AI.</h1>
            <p className="holding-hero__lede">
              Kongwa Tech is a technology and strategy holding company that partners with founders
              and brands to build, scale and operate ventures at the intersection of AI, digital
              infrastructure and community.
            </p>
            <p className="holding-hero__thesis">We do not take clients. We take stakes.</p>
            <Link className="holding-cta" href="/consult">
              <span>Consult About Your Project</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <figure className="holding-hero__portrait">
            <div className="holding-hero__portrait-frame">
              <Image
                src="/images/lubosi-hero-portrait.webp"
                alt="Lubosi Kongwa, founder of Kongwa Tech, working at his desk"
                width={900}
                height={940}
                priority
                sizes="(max-width: 600px) calc(100vw - 48px), (max-width: 820px) 520px, 42vw"
              />
            </div>
            <figcaption>
              <span>Lubosi Kongwa</span>
              <span>Founder / Operator</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="capability-section" id="capabilities" aria-labelledby="capabilities-title">
        <div className="holding-shell">
          <div className="holding-section-head">
            <div>
              <p className="holding-kicker">WHAT WE DEPLOY</p>
              <h2 id="capabilities-title">Operating Capability</h2>
            </div>
            <p>Hands-on capability across the layers that turn an idea into an operating venture.</p>
          </div>
          <div className="capability-grid">
            {capabilities.map((capability) => (
              <article className="capability-card" key={capability.number}>
                <div className="capability-card__top">
                  <span>{capability.number}</span>
                  <span>{capability.signal}</span>
                </div>
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
                <div className="capability-card__signal" aria-hidden="true">
                  <i /><i /><i /><i />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="model-section" aria-labelledby="model-title">
        <div className="holding-shell">
          <div className="holding-section-head holding-section-head--dark">
            <div>
              <p className="holding-kicker">HOW WE WORK</p>
              <h2 id="model-title">Partner. Build. Operate. Scale.</h2>
            </div>
            <p>An operating relationship, designed around what creates the most leverage.</p>
          </div>
          <ol className="model-track">
            {operatingModel.map((item, index) => (
              <li key={item.step}>
                <div className="model-track__node">
                  <span>{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{item.step}</h3>
                <p>{item.copy}</p>
              </li>
            ))}
          </ol>
          <p className="model-section__note">
            <strong>Commercial structure.</strong> Every accepted partnership is scoped around the
            work required. We agree an initial setup fee and ongoing operating cost before work
            begins; where appropriate, an equity position is added to align long-term upside.
            Equity does not replace the cost of delivery.
          </p>
        </div>
      </section>

      <section className="ventures-section" id="ventures" aria-labelledby="ventures-title">
        <div className="holding-shell">
          <div className="holding-section-head">
            <div>
              <p className="holding-kicker">SELECTED WORK</p>
              <h2 id="ventures-title">Selected Ventures &amp; Operating Work</h2>
            </div>
            <p>A selection of partnerships and systems where Kongwa Tech has deployed operating capability.</p>
          </div>
          <div className="venture-list">
            {work.map((item, index) => (
              <article className="venture-card" key={item.title}>
                <div className="venture-card__number" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <div className="venture-card__copy">
                  <p>{item.label}</p>
                  <h3>{item.title}</h3>
                  <span>{item.copy}</span>
                </div>
                <div className="venture-card__code">{item.code}</div>
              </article>
            ))}
          </div>
          <p className="relationship-note">
            Relationships vary by project. Inclusion here does not imply an investment or equity holding.
          </p>
        </div>
      </section>

      <section className="thesis-section" id="thesis" aria-labelledby="thesis-title">
        <div className="holding-shell thesis-section__layout">
          <div className="thesis-section__marker" aria-hidden="true">
            <span>KT</span>
            <i />
            <small>THESIS / 2026</small>
          </div>
          <div className="thesis-section__copy">
            <p className="holding-kicker">OUR THESIS</p>
            <h2 id="thesis-title">Building is cheaper. Operating well is still rare.</h2>
            <p>
              AI is reducing the time and cost required to build useful products. But lower build
              costs do not create distribution, trust or durable operations. We believe product,
              infrastructure and audience should be designed as one system.
            </p>
            <p>
              That is why Kongwa Tech works hands-on with a small number of aligned founders and
              brands and may take equity positions where the structure is right. The goal is aligned
              upside, not a queue of transactional projects.
            </p>
            <blockquote>We do not take clients. We take stakes.</blockquote>
          </div>
        </div>
      </section>

      <section className="about-section" id="about" aria-labelledby="about-title">
        <div className="holding-shell about-section__layout">
          <div className="about-portrait">
            <Image
              src="/images/team/lubosi-profile.jpg"
              alt="Lubosi Kongwa, founder of Kongwa Tech"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />
            <div className="about-portrait__caption">
              <span>LUBOSI KONGWA</span>
              <span>FOUNDER / KONGWA TECH</span>
            </div>
          </div>
          <div className="about-section__copy">
            <p className="holding-kicker">ABOUT KONGWA TECH</p>
            <h2 id="about-title">Technical depth, product judgement and distribution in one operating model.</h2>
            <p>
              Founded by Lubosi Kongwa, Kongwa Tech combines technical execution, AI implementation,
              product thinking and audience growth under one operating model. The company partners
              selectively where that combination can materially improve how a venture is built,
              operated and scaled.
            </p>
            <Link href="/team/lubosi-kongwa" className="holding-text-link">
              Read Lubosi&apos;s profile <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="holding-final" aria-labelledby="holding-final-title">
        <div className="holding-final__grid" aria-hidden="true" />
        <div className="holding-shell holding-final__inner">
          <p className="holding-kicker">START A CONVERSATION</p>
          <h2 id="holding-final-title">Building something we should know about?</h2>
          <p>
            If you are building an ambitious venture, or facing an operating problem where product,
            AI, infrastructure or audience could materially change the trajectory, tell us what you
            are working on.
          </p>
          <Link className="holding-cta" href="/consult">
            <span>Consult About Your Project</span>
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
