'use client'

import { useCallback, useEffect, useState } from 'react'
import { Show, SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs'

interface SubscribeGateProps {
  compact?: boolean
  title?: string
  description?: string
}

export default function SubscribeGate({
  compact = false,
  title = 'Unlock with the free Kongwa Tech newsletter',
  description = 'Sign in with your email, subscribe through beehiiv, and the full article unlocks here.',
}: SubscribeGateProps) {
  const { isSignedIn, user } = useUser()
  const [status, setStatus] = useState<'idle' | 'loading' | 'pending' | 'active' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const checkSubscription = useCallback(async (silent = false) => {
    if (!isSignedIn) return

    if (!silent) {
      setStatus('loading')
      setMessage('')
    }

    try {
      const response = await fetch('/api/check-subscription', { cache: 'no-store' })
      const payload = await response.json()

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to check subscription')
      }

      if (payload.subscribed) {
        setStatus('active')
        setMessage('Subscription confirmed. Unlocking now.')
        window.location.reload()
        return
      }

      if (!silent) {
        setStatus('pending')
        setMessage("Your Clerk email is signed in, but beehiiv is not active yet. Subscribe or confirm your beehiiv email, then try again.")
      }
    } catch (error) {
      if (!silent) {
        setStatus('error')
        setMessage(error instanceof Error ? error.message : 'Something went wrong')
      }
    }
  }, [isSignedIn])

  useEffect(() => {
    checkSubscription(true)
  }, [checkSubscription])

  async function subscribe() {
    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
      })
      const payload = await response.json()

      if (!response.ok) {
        throw new Error(payload.error || 'Unable to subscribe')
      }

      if (payload.status === 'active') {
        setStatus('active')
        setMessage('Subscription confirmed. Unlocking now.')
        window.location.reload()
        return
      }

      setStatus('pending')
      setMessage("Check your inbox to confirm your beehiiv subscription, then come back and click 'I've confirmed'.")
    } catch (error) {
      setStatus('error')
      setMessage(error instanceof Error ? error.message : 'Something went wrong')
    }
  }

  const isLoading = status === 'loading'
  const email = user?.primaryEmailAddress?.emailAddress

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

      <Show when="signed-out">
        <div className="flex flex-col sm:flex-row gap-3">
          <SignUpButton mode="modal">
            <button className="bg-gold px-5 py-3 font-sans text-sm text-white transition-colors hover:bg-gold-dark">
              Sign up free
            </button>
          </SignUpButton>
          <SignInButton mode="modal">
            <button className="border border-navy px-5 py-3 font-sans text-sm text-navy transition-colors hover:bg-navy hover:text-white">
              I already signed up
            </button>
          </SignInButton>
        </div>
      </Show>

      <Show when="signed-in">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3 border border-gray-100 bg-cream px-4 py-3">
            <p className="min-w-0 truncate font-sans text-xs text-charcoal/60">
              Signed in as <span className="text-navy">{email}</span>
            </p>
            <UserButton />
          </div>
          <button
            type="button"
            onClick={subscribe}
            disabled={isLoading}
            className="w-full bg-gold px-5 py-3 font-sans text-sm text-white transition-colors hover:bg-gold-dark disabled:cursor-not-allowed disabled:bg-gold/60"
          >
            {isLoading ? 'Checking...' : 'Subscribe and unlock'}
          </button>
          {status === 'pending' && (
            <button
              type="button"
              onClick={() => checkSubscription()}
              disabled={isLoading}
              className="w-full border border-navy px-5 py-3 font-sans text-sm text-navy transition-colors hover:bg-navy hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              I&apos;ve confirmed my email
            </button>
          )}
        </div>
      </Show>

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
