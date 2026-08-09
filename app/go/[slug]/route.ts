import { NextResponse, type NextRequest } from 'next/server'
import { getAiTool } from '@/lib/ai-tools'

const brandedToolSlugs: Record<string, string> = {
  heygen: 'heygen',
  elevenlabs: 'elevenlabs',
  wispr: 'wispr-flow',
  higgsfield: 'higgsfield',
  apify: 'apify',
  instantly: 'instantly',
  unipile: 'unipile',
  'claude-code': 'claude-code',
  codex: 'codex',
}

export async function GET(
  _request: NextRequest,
  context: { params: Promise<{ slug: string }> },
) {
  const { slug } = await context.params
  const tool = getAiTool(brandedToolSlugs[slug])

  if (!tool || tool.status !== 'active') {
    return NextResponse.json({ error: 'Unknown tool' }, { status: 404 })
  }

  return NextResponse.redirect(tool.destinationUrl, 307)
}
