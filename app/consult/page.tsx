import type { Metadata } from 'next'
import ConsultForm from '@/components/consult-form'

export const metadata: Metadata = {
  title: 'Consult About Your Project',
  description:
    'Tell Kongwa Tech what you are building and where hands-on product, AI, platform or growth capability could change its trajectory.',
  alternates: { canonical: '/consult' },
  openGraph: {
    title: 'Consult About Your Project | Kongwa Tech',
    description: 'Tell us what you are building and where operating capability could change its trajectory.',
    url: '/consult',
  },
}

export default function ConsultPage() {
  return (
    <>
      <section className="bg-navy px-6 py-20 text-white lg:px-12 lg:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-gold">Project consultation</p>
          <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
            Tell us what you&apos;re building.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">
            Kongwa Tech selectively partners with founders and brands where our operating capability can materially change the trajectory of a venture.
          </p>
        </div>
      </section>

      <section className="consult-shell bg-cream px-6 py-16 lg:px-12 lg:py-24">
        <div className="mx-auto grid max-w-5xl gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:gap-16">
          <aside>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">What helps us assess fit</p>
            <h2 className="mt-4 font-serif text-3xl leading-tight text-navy">Context before conversation.</h2>
            <p className="mt-5 text-sm leading-relaxed text-charcoal/65">
              Share the venture, its current stage and the leverage you believe Kongwa Tech could bring. We review each project for strategic fit, operating relevance and aligned upside.
            </p>
            <div className="mt-9 border-t border-navy/15 pt-7">
              <p className="text-xs font-medium uppercase tracking-[0.18em] text-gold">How an engagement starts</p>
              <ol className="mt-5 space-y-5">
                {[
                  ['01', 'Scope', 'Define the project, outcomes and operating work required.'],
                  ['02', 'Structure', 'Agree the initial setup fee and ongoing operating cost.'],
                  ['03', 'Align', 'Set any strategic or equity-aligned terms separately, where appropriate.'],
                  ['04', 'Operate', 'Begin the build and establish the ongoing operating cadence.'],
                ].map(([number, title, copy]) => (
                  <li className="grid grid-cols-[2rem_1fr] gap-3" key={number}>
                    <span className="pt-0.5 text-xs font-semibold tracking-wider text-gold" aria-hidden="true">{number}</span>
                    <div>
                      <strong className="block text-sm font-semibold text-navy">{title}</strong>
                      <span className="mt-1 block text-sm leading-relaxed text-charcoal/65">{copy}</span>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="mt-6 border-l-2 border-gold pl-4 text-sm leading-relaxed text-charcoal/75">
                Equity alignment, when used, sits alongside delivery costs rather than replacing them.
              </p>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-charcoal/65">
              Prefer email? Write to{' '}
              <a className="inline-flex min-h-11 items-center align-middle font-medium text-navy underline decoration-gold underline-offset-4" href="mailto:lubosi@kongwatech.com">
                lubosi@kongwatech.com
              </a>
              .
            </p>
          </aside>
          <div className="border border-navy/10 bg-white p-6 sm:p-9 lg:p-11">
            <ConsultForm />
          </div>
        </div>
      </section>
    </>
  )
}
