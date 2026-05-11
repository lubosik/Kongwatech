import { NextRequest, NextResponse } from 'next/server'
import { createBeehiivSubscription, isValidEmail, normalizeEmail } from '@/lib/beehiiv'
import { setSubscriberAccessCookie } from '@/lib/subscriber-session'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json() as { email?: unknown }
    const raw = typeof body.email === 'string' ? body.email : ''
    const email = normalizeEmail(raw)

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { success: false, error: 'Please enter a valid email address.' },
        { status: 400 }
      )
    }

    const subscription = await createBeehiivSubscription(email)

    if (subscription.status === 'active') {
      await setSubscriberAccessCookie(email)
    }

    return NextResponse.json({
      success: true,
      status: subscription.status === 'active' ? 'active' : 'pending',
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
