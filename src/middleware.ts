import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', request.nextUrl.pathname)
  requestHeaders.set('x-params', request.nextUrl.search)

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })
}
