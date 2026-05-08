import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
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

// Export the handler for testing
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

        // For protected routes, require token
        return !!token;
      },
    },
    pages: {
      signIn: '/login',
    },
  }
);

// Default export for Next.js middleware
export default middlewareHandler;

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
