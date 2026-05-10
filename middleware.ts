import { NextResponse, type NextRequest } from 'next/server'
import { clerkMiddleware } from '@clerk/nextjs/server'
import type { NextFetchEvent } from 'next/server'

const hasClerkKeys = Boolean(
  process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY &&
    process.env.CLERK_SECRET_KEY &&
    !process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY.includes('replace_me') &&
    !process.env.CLERK_SECRET_KEY.includes('replace_me')
)

const clerk = hasClerkKeys ? clerkMiddleware() : null

export default async function middleware(request: NextRequest, event: NextFetchEvent) {
  if (!clerk) return NextResponse.next()

  try {
    return await clerk(request, event)
  } catch (error) {
    console.error('Clerk middleware failed, continuing without auth middleware', error)
    return NextResponse.next()
  }
}

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
}
