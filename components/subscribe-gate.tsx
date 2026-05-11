'use client'

import { useState } from 'react'

const BEEHIIV_FALLBACK = 'https://some-free-game.beehiiv.com'

interface SubscribeGateProps {
  compact?: boolean
  title?: string
  description?: string
}

export default function SubscribeGate({
  compact = false,
  title = 'Subscribe to Some Free Game',
  description = 'Join the free newsletter to unlock the full article archive.',
}: SubscribeGateProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'subscribed' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json() as { success: boolean; status?: string; error?: string }

      if (!res.ok || !data.success) throw new Error(data.error || 'Unable to subscribe')

      setStatus('subscribed')
    } catch (err) {
      setStatus('error')
      setErrorMsg(err instanceof Error ? err.message : 'Unable to subscribe')
    }
  }

  if (status === 'subscribed') {
    return (
      <div className="space-y-3">
        <h3 className={`${compact ? 'text-lg' : 'text-2xl'} font-serif text-navy leading-tight`}>
          You are subscribed. Welcome.
        </h3>
        <p className={`${compact ? 'text-xs' : 'text-sm'} font-sans text-charcoal/65 leading-relaxed`}>
          Your free resources are on their way to your inbox now. If you do not see them within a few minutes, check your spam folder. Any issues, reach out at{' '}
          <a href="mailto:lubosi@kongwatech.com" className="text-navy underline">lubosi@kongwatech.com</a>.
        </p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="space-y-3">
        <h3 className={`${compact ? 'text-lg' : 'text-2xl'} font-serif text-navy leading-tight`}>
          Something went wrong.
        </h3>
        <p className={`${compact ? 'text-xs' : 'text-sm'} font-sans text-charcoal/65 leading-relaxed`}>
          Oops, we ran into an error subscribing you. Head to{' '}
          <a href={BEEHIIV_FALLBACK} target="_blank" rel="noopener noreferrer" className="text-navy underline">
            some-free-game.beehiiv.com
          </a>{' '}
          to get subscribed directly. Any issues, reach out at{' '}
          <a href="mailto:lubosi@kongwatech.com" className="text-navy underline">lubosi@kongwatech.com</a>.
        </p>
      </div>
    )
  }

  const isLoading = status === 'loading'

  return (
    <div className={compact ? 'space-y-3' : 'space-y-5'}>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white"
            aria-hidden="true"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.8}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          <h3 className={`${compact ? 'text-lg' : 'text-2xl'} font-serif text-navy leading-tight`}>
            {title}
          </h3>
        </div>
        <p className={`${compact ? 'text-xs' : 'text-sm'} font-sans text-charcoal/65 leading-relaxed`}>
          {description}
        </p>
      </div>

      <form onSubmit={handleSubscribe} className="space-y-3">
        <input
          type="email"
          required
          placeholder="Your email address"
          value={email}
          onChange={e => setEmail(e.target.value)}
          disabled={isLoading}
          className="w-full border border-gray-200 px-4 py-3 font-sans text-sm focus:outline-none focus:border-navy transition-colors disabled:opacity-60 bg-white"
        />
        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-gold text-white font-sans text-sm px-5 py-3 hover:bg-gold-dark transition-colors disabled:cursor-not-allowed disabled:bg-gold/60"
        >
          {isLoading ? 'One moment...' : 'Subscribe free'}
        </button>
      </form>
    </div>
  )
}
