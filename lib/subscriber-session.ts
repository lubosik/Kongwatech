import { createHmac, timingSafeEqual } from 'crypto'
import { cookies } from 'next/headers'
import { isBeehiivSubscriberActive, normalizeEmail } from './beehiiv'

export const SUBSCRIBER_COOKIE = 'kongwa_subscriber'
const SESSION_MAX_AGE_SECONDS = 60 * 60 * 24 * 30

function base64UrlEncode(value: string) {
  return Buffer.from(value, 'utf8').toString('base64url')
}

function base64UrlDecode(value: string) {
  return Buffer.from(value, 'base64url').toString('utf8')
}

function getSigningSecret() {
  const secret = process.env.SUBSCRIBER_SESSION_SECRET || process.env.BEEHIIV_API_KEY
  if (!secret) throw new Error('Missing subscriber session signing secret')
  return secret
}

function sign(payload: string) {
  return createHmac('sha256', getSigningSecret()).update(payload).digest('base64url')
}

function safeCompare(a: string, b: string) {
  const left = Buffer.from(a)
  const right = Buffer.from(b)
  return left.length === right.length && timingSafeEqual(left, right)
}

export function createSubscriberToken(email: string) {
  const payload = JSON.stringify({
    email: normalizeEmail(email),
    exp: Math.floor(Date.now() / 1000) + SESSION_MAX_AGE_SECONDS,
  })
  const encodedPayload = base64UrlEncode(payload)
  return `${encodedPayload}.${sign(encodedPayload)}`
}

export function verifySubscriberToken(token?: string) {
  if (!token) return null

  const [encodedPayload, signature] = token.split('.')
  if (!encodedPayload || !signature || !safeCompare(signature, sign(encodedPayload))) {
    return null
  }

  try {
    const payload = JSON.parse(base64UrlDecode(encodedPayload)) as {
      email?: string
      exp?: number
    }

    if (!payload.email || !payload.exp || payload.exp < Math.floor(Date.now() / 1000)) {
      return null
    }

    return { email: normalizeEmail(payload.email) }
  } catch {
    return null
  }
}

export function setSubscriberCookie(email: string) {
  cookies().set(SUBSCRIBER_COOKIE, createSubscriberToken(email), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: SESSION_MAX_AGE_SECONDS,
  })
}

export function clearSubscriberCookie() {
  cookies().set(SUBSCRIBER_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  })
}

export function getSubscriberEmailFromCookie() {
  const token = cookies().get(SUBSCRIBER_COOKIE)?.value
  return verifySubscriberToken(token)?.email ?? null
}

export async function isCurrentVisitorSubscribed() {
  const email = getSubscriberEmailFromCookie()
  if (!email) return false

  try {
    return await isBeehiivSubscriberActive(email)
  } catch {
    return false
  }
}
