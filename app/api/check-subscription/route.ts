import { NextResponse } from 'next/server'
import { getBeehiivSubscriptionStatus, isValidEmail, normalizeEmail } from '@/lib/beehiiv'
import { clearSubscriberCookie, setSubscriberCookie } from '@/lib/subscriber-session'

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const email = normalizeEmail(searchParams.get('email') || '')

    if (!isValidEmail(email)) {
      clearSubscriberCookie()
      return NextResponse.json({ subscribed: false, error: 'Enter a valid email address.' }, { status: 400 })
    }

    const subscription = await getBeehiivSubscriptionStatus(email)
    const subscribed = subscription.status === 'active'

    if (subscribed) {
      setSubscriberCookie(email)
    } else {
      clearSubscriberCookie()
    }

    return NextResponse.json({
      subscribed,
      status: subscription.status,
      rawStatus: subscription.rawStatus,
    })
  } catch (error) {
    clearSubscriberCookie()
    return NextResponse.json(
      {
        subscribed: false,
        error: error instanceof Error ? error.message : 'Unable to verify subscription right now.',
      },
      { status: 502 }
    )
  }
}
