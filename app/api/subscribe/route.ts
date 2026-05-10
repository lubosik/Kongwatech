import { NextResponse } from 'next/server'
import { createBeehiivSubscription } from '@/lib/beehiiv'
import { getCurrentVerifiedSubscriberEmail } from '@/lib/subscriber-session'

export async function POST() {
  try {
    const email = await getCurrentVerifiedSubscriberEmail()

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Sign in with a verified email address before subscribing.' },
        { status: 401 }
      )
    }

    const subscription = await createBeehiivSubscription(email)

    return NextResponse.json({
      success: true,
      status: subscription.status === 'active' ? 'active' : 'pending',
      rawStatus: subscription.rawStatus,
    })
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : 'Unable to subscribe right now.',
      },
      { status: 502 }
    )
  }
}
