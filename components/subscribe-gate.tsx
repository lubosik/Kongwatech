'use client'

import { FormEvent, useCallback, useEffect, useState } from 'react'

const STORAGE_KEY = 'kongwa_subscriber_email'

interface SubscribeGateProps {
  compact?: boolean
  title?: string
  description?: string
  onUnlocked?: () => void
}

export default function SubscribeGate({
  compact = false,
  title = 'Unlock with the free Kongwa Tech newsletter',
  description = 'Enter your email, confirm the beehiiv email if prompted, and the full guide unlocks here.',
  onUnlocked,
}: SubscribeGateProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'pending' | 'active' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const checkSubscription = useCallback(async (emailToCheck: string, silent = false) => {
    const normalized = emailToCheck.trim().toLowerCase()
    if (!normalized) return

    if (!silent) {
      setStatus('loading')
      setMessage('')
    }

    try {
      const response = await fetch(`/api/check-subscription?email=${encodeURIComponent(normalized)}`, {
        cache: 'no-store',
      })
      const payload = await response.json()

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to check subscription')
      }

      if (payload.subscribed) {
        localStorage.setItem(STORAGE_KEY, normalized)
        setStatus('active')
        setMessage('Subscription confirmed. Unlocking now.')
        onUnlocked?.()
        window.location.reload()
        return
      }

      if (!silent) {
        setStatus('pending')
        setMessage("We could not verify an active subscription yet. Confirm your email, then try again.")
      }
    } catch (error) {
      if (!silent) {
        setStatus('error')
        setMessage(error instanceof Error ? error.message : 'Something went wrong')
      }
    }
  }, [onUnlocked])

  useEffect(() => {
    const storedEmail = localStorage.getItem(STORAGE_KEY)
    if (storedEmail) {
      setEmail(storedEmail)
      checkSubscription(storedEmail, true)
    }
  }, [checkSubscription])

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const normalized = email.trim().toLowerCase()

    if (!normalized) {
      setStatus('error')
      setMessage('Enter your email address.')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: normalized }),
      })
      const payload = await response.json()

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to subscribe')
      }

      localStorage.setItem(STORAGE_KEY, normalized)

      if (payload.status === 'active') {
        setStatus('active')
        setMessage('Subscription confirmed. Unlocking now.')
        onUnlocked?.()
        window.location.reload()
        return
      }

      setStatus('pending')
      setMessage("Check your inbox to confirm your subscription, then come back and click 'I've confirmed'.")
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  const isLoading = status === 'loading'

  return (
    <div className={compact ? 'space-y-3' : 'space-y-5'}>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-navy text-white" aria-hidden="true">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16.5 10.5V7.5a4.5 4.5 0 0 0-9 0v3m-.75 0h10.5A1.75 1.75 0 0 1 19 12.25v6A1.75 1.75 0 0 1 17.25 20H6.75A1.75 1.75 0 0 1 5 18.25v-6a1.75 1.75 0 0 1 1.75-1.75Z" />
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

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          placeholder="you@example.com"
          autoComplete="email"
          className="min-w-0 flex-1 border border-gray-200 bg-white px-4 py-3 font-sans text-sm text-charcoal outline-none transition-colors placeholder:text-charcoal/35 focus:border-gold"
          disabled={isLoading}
          required
        />
        <button
          type="submit"
          disabled={isLoading}
          className="bg-gold px-5 py-3 font-sans text-sm text-white transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:bg-gold/60"
        >
          {isLoading ? 'Checking...' : 'Subscribe'}
        </button>
      </form>

      {status === 'pending' && (
        <button
          type="button"
          onClick={() => checkSubscription(email)}
          disabled={isLoading}
          className="w-full border border-navy px-5 py-3 font-sans text-sm text-navy transition-colors hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
        >
          I&apos;ve confirmed my email
        </button>
      )}

      {message && (
        <p
          className={`font-sans text-xs leading-relaxed ${
            status === 'error' ? 'text-red-700' : status === 'active' ? 'text-green-700' : 'text-charcoal/60'
          }`}
        >
          {message}
        </p>
      )}
    </div>
  )
}
