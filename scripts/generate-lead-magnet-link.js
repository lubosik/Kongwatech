const crypto = require('crypto')

const [slug, days = '14', campaign = 'cold-email'] = process.argv.slice(2)
const secret = process.env.LEAD_MAGNET_SECRET || process.env.CLERK_SECRET_KEY
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kongwatech.com'

if (!slug || !secret) {
  console.error('Usage: LEAD_MAGNET_SECRET=... node scripts/generate-lead-magnet-link.js <slug> [days] [campaign]')
  process.exit(1)
}

const payload = Buffer.from(JSON.stringify({
  slug,
  campaign,
  exp: Math.floor(Date.now() / 1000) + Number(days) * 24 * 60 * 60,
})).toString('base64url')

const signature = crypto.createHmac('sha256', secret).update(payload).digest('base64url')
const path = slug === 'the-pre-meeting-intelligence-system'
  ? `/blog/${slug}`
  : `/blog/${slug}`

console.log(`${baseUrl}${path}?access=${payload}.${signature}`)
