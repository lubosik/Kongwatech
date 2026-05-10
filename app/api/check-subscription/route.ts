import { NextResponse } from 'next/server'
import { getBeehiivSubscriptionStatus } from '@/lib/beehiiv'
import { getCurrentVerifiedSubscriberEmail } from '@/lib/subscriber-session'

export async function GET() {
  try {
    const email = await getCurrentVerifiedSubscriberEmail()

    if (!email) {
      return NextResponse.json({ subscribed: false, error: 'Sign in with a verified email address.' }, { status: 401 })
    }

    const subscription = await getBeehiivSubscriptionStatus(email)
    const subscribed = subscription.status === 'active'

    return NextResponse.json({
      subscribed,
      status: subscription.status,
      rawStatus: subscription.rawStatus,
    })
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
