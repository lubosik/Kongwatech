import { NextResponse, type NextRequest } from 'next/server'
import { getAiToolRedirect } from '@/lib/ai-tools'

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params
  const destinationUrl = getAiToolRedirect(slug)

  if (!destinationUrl) {
    return NextResponse.json({ error: 'Unknown tool' }, { status: 404 })
  }

  return NextResponse.redirect(destinationUrl, 307)
}
