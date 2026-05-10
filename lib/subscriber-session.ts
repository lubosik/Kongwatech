import { auth, clerkClient } from '@clerk/nextjs/server'
import { isBeehiivSubscriberActive, normalizeEmail } from './beehiiv'

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

export async function getCurrentVerifiedSubscriberEmail() {
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
}

export async function isCurrentVisitorSubscribed() {
  const email = await getCurrentVerifiedSubscriberEmail()
  if (!email) return false

  try {
    return await isBeehiivSubscriberActive(email)
  } catch {
    return false
  }
}
