import Image from 'next/image'
import Link from 'next/link'

const links = [
  ['Thesis', '/#thesis'],
  ['Capabilities', '/#capabilities'],
  ['Ventures', '/#ventures'],
  ['AI Stack', '/ai-stack'],
  ['Insights', '/blog'],
  ['Consult About Your Project', '/consult'],
] as const

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-12 lg:py-16">
        <div className="grid gap-12 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Image src="/images/kt-logo.png" alt="" width={42} height={42} className="object-contain brightness-0 invert" />
              <span className="font-serif text-2xl">Kongwa Tech</span>
            </div>
            <p className="mt-5 text-sm uppercase tracking-[0.18em] text-gold">Technology · Strategy · Ventures</p>
            <p className="mt-4 text-sm leading-relaxed text-white/55">
              Building, scaling and operating ventures across AI, digital infrastructure and community.
            </p>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Navigate</p>
            <ul className="mt-3">
              {links.map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="flex min-h-11 items-center text-sm text-white/65 transition-colors hover:text-white">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gold">Contact</p>
            <a href="mailto:lubosi@kongwatech.com" className="mt-3 flex min-h-11 items-center text-sm text-white/70 transition-colors hover:text-white">
              lubosi@kongwatech.com
            </a>
            <a
              href="https://www.linkedin.com/company/kongwa-tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center text-sm text-white/70 transition-colors hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Kongwa Tech. All rights reserved.</p>
          <p>Kongwa Tech · United Kingdom</p>
        </div>
      </div>
    </footer>
  )
}
