// Routes that don't require authentication
const publicRoutes = [
  '/',
  '/login',
  '/signup',
  '/privacy-policy',
  '/terms-of-service',
  '/cookie-policy',
  '/auth/error',
];

// Routes that should not be intercepted
const ignoredRoutes = [
  '/api',
  '/_next',
  '/favicon.ico',
  '/images',
];

// Protected route patterns
const protectedRoutePatterns = [
  '/dashboard',
  '/customers',
  '/quotes',
  '/jobs',
  '/invoices',
  '/reports',
  '/settings',
];

export function isPublicRoute(pathname: string): boolean {
  return publicRoutes.includes(pathname);
}

export function isIgnoredRoute(pathname: string): boolean {
  return ignoredRoutes.some(route => pathname.startsWith(route));
}

export function isProtectedRoute(pathname: string): boolean {
  return protectedRoutePatterns.some(pattern => pathname.startsWith(pattern));
}

export function isAuthRoute(pathname: string): boolean {
  return pathname === '/login' || pathname === '/signup';
}
