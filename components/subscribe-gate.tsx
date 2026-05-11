'use client'

import { useState } from 'react'

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
  const [status, setStatus] = useState<'idle' | 'loading' | 'pending' | 'active' | 'error'>('idle')
  const [message, setMessage] = useState('')

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json() as { success: boolean; status?: string; error?: string }

      if (!res.ok || !data.success) {
        throw new Error(data.error || 'Unable to subscribe')
      }

      if (data.status === 'active') {
        setStatus('active')
        setMessage('Subscription confirmed. Unlocking now.')
        window.location.reload()
        return
      }

      setStatus('pending')
      setMessage("Check your inbox to confirm your subscription. Once confirmed, click below to unlock.")
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  async function handleVerify() {
    setStatus('loading')
    setMessage('')

    try {
      const res = await fetch('/api/check-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json() as { subscribed: boolean; status?: string; error?: string }

      if (!res.ok) {
        throw new Error(data.error || 'Unable to verify')
      }

      if (data.subscribed) {
        setStatus('active')
        setMessage('Subscription confirmed. Unlocking now.')
        window.location.reload()
        return
      }

      setStatus('pending')
      setMessage("Still pending. Please confirm your email in your inbox first, then try again.")
    } catch (err) {
      setStatus('error')
      setMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
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

      {status !== 'pending' && (
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
            {isLoading ? 'One moment...' : 'Subscribe and unlock'}
          </button>
        </form>
      )}

      {status === 'pending' && (
        <div className="space-y-3">
          <p className="font-sans text-xs text-charcoal/60 leading-relaxed">{message}</p>
          <button
            type="button"
            onClick={handleVerify}
            disabled={isLoading}
            className="w-full bg-gold text-white font-sans text-sm px-5 py-3 hover:bg-gold-dark transition-colors disabled:cursor-not-allowed disabled:bg-gold/60"
          >
            {isLoading ? 'Checking...' : "I've confirmed my email"}
          </button>
          <button
            type="button"
            onClick={() => { setStatus('idle'); setMessage('') }}
            className="w-full border border-navy text-navy font-sans text-sm px-5 py-3 hover:bg-navy hover:text-white transition-colors"
          >
            Use a different email
          </button>
        </div>
      )}

      {status === 'error' && (
        <p className="font-sans text-xs text-red-700 leading-relaxed">{message}</p>
      )}

      {status === 'active' && (
        <p className="font-sans text-xs text-green-700 leading-relaxed">{message}</p>
      )}
    </div>
  )
}
