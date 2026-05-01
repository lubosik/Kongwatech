'use client'

import { useState, useEffect, useCallback } from 'react'

const INDUSTRIES = [
  'E-commerce / Retail',
  'Professional Services',
  'Agency / Consultancy',
  'Healthcare / Wellness',
  'Real Estate',
  'Tech / SaaS',
  'Recruitment',
  'Other',
]

const GOALS = [
  'Generate more leads',
  'Automate repetitive tasks',
  'Build internal tools',
  'Improve marketing and content',
  'Understand what AI can do for me',
  'Set up an AI operating environment',
]

const STORAGE_KEY = 'kt_popup_dismissed'
const EXPIRY_DAYS = 30

function isDismissed(): boolean {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return false
    const { dismissedAt } = JSON.parse(raw)
    const expiry = dismissedAt + EXPIRY_DAYS * 24 * 60 * 60 * 1000
    return Date.now() < expiry
  } catch {
    return false
  }
}

function setDismissed() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ dismissedAt: Date.now() }))
  } catch {}
}

export default function LeadPopup() {
  const [show, setShow] = useState(false)
  const [step, setStep] = useState(1)
  const [industry, setIndustry] = useState('')
  const [goal, setGoal] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [submitting, setSubmitting] = useState(false)

  const openPopup = useCallback(() => {
    if (isDismissed()) return
    const path = window.location.pathname
    if (path.startsWith('/apply') || path.startsWith('/blog')) return
    setShow(true)
  }, [])

  useEffect(() => {
    if (isDismissed()) return

    // 60 second timer
    const timer = setTimeout(openPopup, 60000)

    // Scroll depth 70%
    const handleScroll = () => {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      if (scrolled / total >= 0.7) openPopup()
    }

    // Exit intent (desktop)
    const handleMouseMove = (e: MouseEvent) => {
      if (e.clientY < 10) openPopup()
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [openPopup])

  function handleDismiss() {
    setDismissed()
    setShow(false)
  }

  function handleSelectIndustry(value: string) {
    setIndustry(value)
    setStep(2)
  }

  function handleSelectGoal(value: string) {
    setGoal(value)
    setStep(3)
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)

    try {
      await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'e8144041-9073-44fa-bba9-3b9089fc8511',
          subject: 'New Lead Popup — Kongwa Tech',
          industry,
          goal,
          name,
          email,
          company,
        }),
      })
    } catch {}

    setDismissed()
    setShow(false)

    const params = new URLSearchParams({
      name,
      email,
      ...(company ? { company } : {}),
      service: 'blueprint',
    })
    window.location.href = `/apply?${params.toString()}`
  }

  if (!show) return null

  const progress = step === 1 ? '33%' : step === 2 ? '66%' : '100%'

  return (
    <div
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4"
      onClick={(e) => { if (e.target === e.currentTarget) handleDismiss() }}
    >
      <div className="bg-white max-w-[480px] w-full relative shadow-2xl">
        {/* Header band */}
        <div className="bg-cream px-6 pt-5 pb-4">
          {/* Progress bar */}
          <div className="w-full h-[3px] bg-gray-200 mb-4 overflow-hidden">
            <div
              className="h-full bg-gold transition-all duration-500"
              style={{ width: progress }}
            />
          </div>
          <div className="flex items-center justify-between">
            <p className="font-sans text-xs text-charcoal/40 uppercase tracking-widest">
              Step {step} of 3
            </p>
            <button
              onClick={handleDismiss}
              className="text-charcoal/40 hover:text-charcoal transition-colors p-1"
              aria-label="Close"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-8 pt-6">
          {step === 1 && (
            <>
              <h2 className="font-serif text-navy text-2xl mb-6">
                What type of business do you run?
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {INDUSTRIES.map(option => (
                  <button
                    key={option}
                    onClick={() => handleSelectIndustry(option)}
                    className={`border px-4 py-3 text-sm font-sans text-left cursor-pointer transition-colors ${
                      industry === option
                        ? 'border-gold text-gold bg-gold/5'
                        : 'border-gray-200 text-charcoal/70 hover:border-gold'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <h2 className="font-serif text-navy text-2xl mb-6">
                What are you most focused on right now?
              </h2>
              <div className="grid grid-cols-1 gap-3">
                {GOALS.map(option => (
                  <button
                    key={option}
                    onClick={() => handleSelectGoal(option)}
                    className={`border px-4 py-3 text-sm font-sans text-left cursor-pointer transition-colors ${
                      goal === option
                        ? 'border-gold text-gold bg-gold/5'
                        : 'border-gray-200 text-charcoal/70 hover:border-gold'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <h2 className="font-serif text-navy text-2xl mb-6">
                Almost there. Tell us a little about you.
              </h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={name}
                  onChange={e => setName(e.target.value)}
                  className="w-full border border-gray-200 px-4 py-3 font-sans text-sm mb-4 focus:outline-none focus:border-navy transition-colors"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  className="w-full border border-gray-200 px-4 py-3 font-sans text-sm mb-4 focus:outline-none focus:border-navy transition-colors"
                />
                <input
                  type="text"
                  placeholder="Your company (optional)"
                  value={company}
                  onChange={e => setCompany(e.target.value)}
                  className="w-full border border-gray-200 px-4 py-3 font-sans text-sm mb-6 focus:outline-none focus:border-navy transition-colors"
                />
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-gold text-white font-sans text-sm py-4 hover:bg-gold-dark transition-colors disabled:opacity-60"
                >
                  {submitting ? 'One moment...' : 'Show Me What\'s Possible'}
                </button>
                <p className="text-xs text-charcoal/40 font-sans mt-4 text-center">
                  No spam. No commitment. Just a conversation.
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
