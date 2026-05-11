import { NextRequest, NextResponse } from 'next/server'
import { getBeehiivSubscriptionStatus, isValidEmail, normalizeEmail } from '@/lib/beehiiv'
import { clearSubscriberAccessCookie, setSubscriberAccessCookie } from '@/lib/subscriber-session'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { email?: unknown }
    const raw = typeof body.email === 'string' ? body.email : ''
    const email = normalizeEmail(raw)

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { subscribed: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const subscription = await getBeehiivSubscriptionStatus(email)
    const subscribed = subscription.status === 'active'

    if (subscribed) {
      await setSubscriberAccessCookie(email)
    } else {
      await clearSubscriberAccessCookie()
    }

    return NextResponse.json({ subscribed, status: subscription.status })
  } catch (error) {
    return NextResponse.json(
      {
        subscribed: false,
        error: error instanceof Error ? error.message : 'Unable to verify subscription right now.',
      },
      { status: 502 }
    )
  }
}
