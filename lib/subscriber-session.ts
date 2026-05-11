import { createHmac, timingSafeEqual } from 'crypto'
import { auth, clerkClient } from '@clerk/nextjs/server'
import { cookies } from 'next/headers'
import { isBeehiivSubscriberActive, normalizeEmail } from './beehiiv'

const SUBSCRIBER_ACCESS_COOKIE = 'kongwa_sfg_access'
const ACCESS_COOKIE_MAX_AGE_SECONDS = 60 * 60 * 24 * 30

interface ClerkEmailAddress {
  id: string
  emailAddress: string
  verification?: {
    status?: string
  } | null
}

function isVerifiedEmail(email: ClerkEmailAddress) {
  return email.verification?.status === 'verified'
}

function getSigningSecret() {
  return process.env.LEAD_MAGNET_SECRET || process.env.CLERK_SECRET_KEY || process.env.BEEHIIV_API_KEY || ''
}

function sign(payload: string) {
  return createHmac('sha256', getSigningSecret()).update(payload).digest('base64url')
}

function safeCompare(a: string, b: string) {
  const left = Buffer.from(a)
  const right = Buffer.from(b)
  return left.length === right.length && timingSafeEqual(left, right)
}

function createSubscriberAccessToken(email: string) {
  const payload = Buffer.from(JSON.stringify({
    email: normalizeEmail(email),
    exp: Math.floor(Date.now() / 1000) + ACCESS_COOKIE_MAX_AGE_SECONDS,
  })).toString('base64url')

  return `${payload}.${sign(payload)}`
}

function verifySubscriberAccessToken(token?: string) {
  const secret = getSigningSecret()
  if (!secret || !token) return false

  const [payload, signature] = token.split('.')
  if (!payload || !signature || !safeCompare(signature, sign(payload))) return false

  try {
    const parsed = JSON.parse(Buffer.from(payload, 'base64url').toString('utf8')) as {
      email?: string
      exp?: number
    }

    return Boolean(parsed.email && parsed.exp && parsed.exp > Math.floor(Date.now() / 1000))
  } catch {
    return false
  }
}

export async function setSubscriberAccessCookie(email: string) {
  const cookieStore = await cookies()
  cookieStore.set(SUBSCRIBER_ACCESS_COOKIE, createSubscriberAccessToken(email), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: ACCESS_COOKIE_MAX_AGE_SECONDS,
  })
}

export async function clearSubscriberAccessCookie() {
  const cookieStore = await cookies()
  cookieStore.set(SUBSCRIBER_ACCESS_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  })
}

export async function hasSubscriberAccessCookie() {
  const cookieStore = await cookies()
  return verifySubscriberAccessToken(cookieStore.get(SUBSCRIBER_ACCESS_COOKIE)?.value)
}

export async function getCurrentVerifiedSubscriberEmail() {
  try {
    const { isAuthenticated, userId } = await auth()
    if (!isAuthenticated || !userId) return null

    const client = await clerkClient()
    const user = await client.users.getUser(userId)
    const emailAddresses = user.emailAddresses as ClerkEmailAddress[]
    const primaryEmail = emailAddresses.find(email => email.id === user.primaryEmailAddressId)
    const verifiedEmail = primaryEmail && isVerifiedEmail(primaryEmail)
      ? primaryEmail
      : emailAddresses.find(isVerifiedEmail)

    return verifiedEmail ? normalizeEmail(verifiedEmail.emailAddress) : null
  } catch (error) {
    console.error('Unable to read Clerk subscriber session', error)
    return null
  }
}

export async function isCurrentVisitorSubscribed() {
  if (await hasSubscriberAccessCookie()) return true

  const email = await getCurrentVerifiedSubscriberEmail()
  if (!email) return false

  try {
    return await isBeehiivSubscriberActive(email)
  } catch {
    return false
  }
}
