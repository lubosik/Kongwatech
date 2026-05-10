import { NextResponse } from 'next/server'
import { getFreeResource } from '@/lib/resources'
import { isCurrentVisitorSubscribed } from '@/lib/subscriber-session'

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const resource = getFreeResource(params.id)
  if (!resource) {
    return NextResponse.json({ error: 'Resource not found.' }, { status: 404 })
  }

  const subscribed = await isCurrentVisitorSubscribed()
  if (!subscribed) {
    return NextResponse.redirect(new URL('/#free-resources', _request.url))
  }

  return NextResponse.redirect(resource.href)
}
