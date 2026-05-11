const BEEHIIV_BASE_URL = 'https://api.beehiiv.com/v2'

export type NormalizedSubscriptionStatus = 'active' | 'pending' | 'inactive'

interface BeehiivSubscriptionResponse {
  data?: {
    status?: string
  }
}

function getBeehiivConfig() {
  const apiKey = process.env.BEEHIIV_API_KEY
  const publicationId = process.env.BEEHIIV_PUBLICATION_ID

  if (!apiKey || !publicationId) {
    throw new Error('Missing beehiiv environment configuration')
  }

  return { apiKey, publicationId }
}

function normalizeStatus(status?: string): NormalizedSubscriptionStatus {
  if (status === 'active') return 'active'
  if (status === 'inactive') return 'inactive'
  return 'pending'
}

function getBeehiivError(payload: unknown, fallback: string) {
  if (payload && typeof payload === 'object' && 'message' in payload) {
    const message = (payload as { message?: unknown }).message
    if (typeof message === 'string') return message
  }
  if (payload && typeof payload === 'object' && 'error' in payload) {
    const error = (payload as { error?: unknown }).error
    if (typeof error === 'string') return error
  }
  return fallback
}

async function readJsonSafely(response: Response): Promise<unknown> {
  try {
    return await response.json()
  } catch {
    return null
  }
}

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase()
}

export function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function createBeehiivSubscription(email: string) {
  const { apiKey, publicationId } = getBeehiivConfig()
  const response = await fetch(`${BEEHIIV_BASE_URL}/publications/${publicationId}/subscriptions`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      reactivate_existing: true,
      send_welcome_email: true,
    }),
    cache: 'no-store',
  })

  const payload = await readJsonSafely(response)

  if (!response.ok) {
    const errMsg = getBeehiivError(payload, `Beehiiv error ${response.status}`)
    throw new Error(errMsg)
  }

  const status = normalizeStatus((payload as BeehiivSubscriptionResponse | null)?.data?.status)
  return { status, rawStatus: (payload as BeehiivSubscriptionResponse | null)?.data?.status }
}

export async function getBeehiivSubscriptionStatus(email: string) {
  const { apiKey, publicationId } = getBeehiivConfig()
  const encodedEmail = encodeURIComponent(email)
  const response = await fetch(
    `${BEEHIIV_BASE_URL}/publications/${publicationId}/subscriptions/by_email/${encodedEmail}`,
    {
      headers: { Authorization: `Bearer ${apiKey}` },
      cache: 'no-store',
    }
  )

  if (response.status === 404) {
    return { status: 'inactive' as const, rawStatus: undefined }
  }

  const payload = await readJsonSafely(response)

  if (!response.ok) {
    throw new Error(getBeehiivError(payload, 'Unable to check subscription'))
  }

  const rawStatus = (payload as BeehiivSubscriptionResponse | null)?.data?.status
  return { status: normalizeStatus(rawStatus), rawStatus }
}

export async function isBeehiivSubscriberActive(email: string) {
  const result = await getBeehiivSubscriptionStatus(email)
  return result.status === 'active'
}
