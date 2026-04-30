'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_0_rgba(13,34,64,0.1)]' : ''
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/kt-logo.png"
            alt="Kongwa Tech"
            width={44}
            height={44}
            className="object-contain"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          <Link href="/services" className="text-sm font-sans text-charcoal hover:text-navy transition-colors">Services</Link>
          <Link href="/team" className="text-sm font-sans text-charcoal hover:text-navy transition-colors">Team</Link>
          <Link href="/partners" className="text-sm font-sans text-charcoal hover:text-navy transition-colors">Partners</Link>
          <Link href="/blog" className="text-sm font-sans text-charcoal hover:text-navy transition-colors">Blog</Link>
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/apply"
            className="hidden md:inline-block bg-gold text-white text-sm font-sans px-6 py-2.5 hover:bg-gold-dark transition-colors"
          >
            Apply Now
          </Link>
          <button
            className="md:hidden text-navy"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-8 flex flex-col gap-6">
          <Link href="/services" className="text-base font-sans text-charcoal" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/team" className="text-base font-sans text-charcoal" onClick={() => setOpen(false)}>Team</Link>
          <Link href="/partners" className="text-base font-sans text-charcoal" onClick={() => setOpen(false)}>Partners</Link>
          <Link href="/blog" className="text-base font-sans text-charcoal" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/apply" className="bg-gold text-white text-sm font-sans px-6 py-3 text-center" onClick={() => setOpen(false)}>Apply Now</Link>
        </div>
      )}
    </header>
  )
}
