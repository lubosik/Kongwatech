'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navigation = [
  ['Thesis', '/#thesis'],
  ['Capabilities', '/#capabilities'],
  ['Ventures', '/#ventures'],
  ['AI Stack', '/ai-stack'],
  ['About', '/#about'],
] as const

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || open
          ? 'border-navy/10 bg-cream/95 backdrop-blur-md'
          : 'border-transparent bg-cream/90 backdrop-blur-sm'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-12">
        <Link href="/" className="flex min-h-11 items-center gap-3" aria-label="Kongwa Tech home">
          <Image
            src="/images/kt-logo.png"
            alt=""
            width={40}
            height={40}
            className="object-contain"
            priority
          />
          <span className="font-serif text-xl font-semibold tracking-tight text-navy">Kongwa Tech</span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-7 lg:flex">
          {navigation.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className="text-xs font-medium uppercase tracking-[0.14em] text-charcoal/65 transition-colors hover:text-navy"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/consult"
            className="hidden min-h-11 items-center bg-navy px-5 text-center text-xs font-medium uppercase tracking-[0.12em] text-white transition-colors hover:bg-navy-light sm:inline-flex"
          >
            Consult About Your Project
          </Link>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-navy lg:hidden"
            onClick={() => setOpen(value => !value)}
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" aria-label="Mobile navigation" className="border-t border-navy/10 bg-cream px-5 py-5 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="flex min-h-12 items-center border-b border-navy/10 text-sm font-medium uppercase tracking-[0.12em] text-charcoal"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <Link
              href="/consult"
              className="mt-5 flex min-h-12 items-center justify-center bg-navy px-5 text-center text-sm font-medium text-white"
              onClick={() => setOpen(false)}
            >
              Consult About Your Project
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}
