import { createHmac, timingSafeEqual } from 'crypto'

interface LeadMagnetPayload {
  slug: string
  exp: number
  campaign?: string
}

function getLeadMagnetSecret() {
  return process.env.LEAD_MAGNET_SECRET || process.env.CLERK_SECRET_KEY || ''
}

function sign(payload: string) {
  return createHmac('sha256', getLeadMagnetSecret()).update(payload).digest('base64url')
}

function safeCompare(a: string, b: string) {
  const left = Buffer.from(a)
  const right = Buffer.from(b)
  return left.length === right.length && timingSafeEqual(left, right)
}

export function verifyLeadMagnetToken(token: string | undefined, slug: string) {
  const secret = getLeadMagnetSecret()
  if (!secret || !token) return false

  const [encodedPayload, signature] = token.split('.')
  if (!encodedPayload || !signature || !safeCompare(signature, sign(encodedPayload))) {
    return false
  }

  try {
    const payload = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString('utf8')) as LeadMagnetPayload
    const now = Math.floor(Date.now() / 1000)
    return payload.exp > now && (payload.slug === slug || payload.slug === '*')
  } catch {
    return false
  }
}
