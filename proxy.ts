import { NextResponse, type NextRequest } from 'next/server'

const permanentRedirects: Record<string, string> = {
  '/apply': '/consult',
  '/services': '/#capabilities',
  '/services/ai-foundations': '/consult',
  '/services/blueprint-session': '/consult',
  '/services/eco-launch': '/consult',
  '/services/echo-launch': '/consult',
  '/services/the-kongwa-session': '/consult',
  '/ai-consultant-kent': '/',
  '/ai-consultant-southeast-england': '/',
  '/partners': '/#ventures',
  '/team': '/team/lubosi-kongwa',
  '/about': '/#about',
}

export function proxy(request: NextRequest) {
  const destination = permanentRedirects[request.nextUrl.pathname]
  if (!destination) return NextResponse.next()

  return NextResponse.redirect(new URL(destination, request.url), 301)
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|mp4|mov|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
