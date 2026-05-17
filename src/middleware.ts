import { withAuth, type NextRequestWithAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextFetchEvent, NextRequest } from 'next/server';
import {
  isPublicRoute,
  isIgnoredRoute,
  isProtectedRoute,
  isAuthRoute,
} from '@/lib/auth/route-guards';

// Re-export for testing
export {
  isPublicRoute,
  isIgnoredRoute,
  isProtectedRoute,
  isAuthRoute,
} from '@/lib/auth/route-guards';

// Export the authenticated handler for testing and for protected app routes.
export const middlewareHandler = withAuth(
  function middleware(req) {
    const { pathname } = req.nextUrl;
    const token = req.nextauth?.token;

    // If user is authenticated and trying to access auth pages, redirect to dashboard
    if (token && isAuthRoute(pathname)) {
      const url = req.nextUrl.clone();
      url.pathname = '/dashboard';
      return NextResponse.redirect(url);
    }

    // Allow access to public and ignored routes
    if (isPublicRoute(pathname) || isIgnoredRoute(pathname)) {
      return NextResponse.next();
    }

    // If user is not authenticated and trying to access protected route, redirect to login
    if (!token && isProtectedRoute(pathname)) {
      const url = req.nextUrl.clone();
      url.pathname = '/login';
      url.searchParams.set('callbackUrl', encodeURIComponent(req.url));
      return NextResponse.redirect(url);
    }

    return NextResponse.next();
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;

        // Allow access to public routes without authentication
        if (isPublicRoute(pathname) || isIgnoredRoute(pathname)) {
          return true;
        }

        // For protected app routes, require token. Unknown routes should be
        // allowed through so Next can render the public 404 surface.
        if (isProtectedRoute(pathname)) {
          return !!token;
        }

        return true;
      },
    },
    pages: {
      signIn: '/login',
    },
  }
);

// Default export for Next.js middleware
export default function middleware(req: NextRequest, event: NextFetchEvent) {
  const { pathname } = req.nextUrl;

  if (isIgnoredRoute(pathname)) {
    return NextResponse.next();
  }

  if (isPublicRoute(pathname)) {
    const shouldLetAuthMiddlewareHandleSessionRedirects =
      isAuthRoute(pathname) && Boolean(process.env.NEXTAUTH_SECRET);

    if (!shouldLetAuthMiddlewareHandleSessionRedirects) {
      return NextResponse.next();
    }
  }

  if (!isProtectedRoute(pathname)) {
    return NextResponse.next();
  }

  return middlewareHandler(req as NextRequestWithAuth, event);
}

// Configure which routes the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
};
