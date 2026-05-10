import { NextResponse } from 'next/server'
import { createBeehiivSubscription, isValidEmail, normalizeEmail } from '@/lib/beehiiv'
import { setSubscriberCookie } from '@/lib/subscriber-session'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const email = normalizeEmail(String(body.email || ''))

    if (!isValidEmail(email)) {
      return NextResponse.json({ success: false, error: 'Enter a valid email address.' }, { status: 400 })
    }

    const subscription = await createBeehiivSubscription(email)

    if (subscription.status === 'active') {
      setSubscriberCookie(email)
    }

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
