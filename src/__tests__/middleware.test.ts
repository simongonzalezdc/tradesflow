import {
  isPublicRoute,
  isIgnoredRoute,
  isProtectedRoute,
  isAuthRoute,
} from '@/lib/auth/route-guards';

describe('Auth Middleware', () => {
  describe('Route Classification Helpers', () => {
    describe('isPublicRoute', () => {
      it('should return true for root route', () => {
        expect(isPublicRoute('/')).toBe(true);
      });

      it('should return true for login route', () => {
        expect(isPublicRoute('/login')).toBe(true);
      });

      it('should return true for signup route', () => {
        expect(isPublicRoute('/signup')).toBe(true);
      });

      it('should return true for legal and auth error routes', () => {
        expect(isPublicRoute('/privacy-policy')).toBe(true);
        expect(isPublicRoute('/terms-of-service')).toBe(true);
        expect(isPublicRoute('/cookie-policy')).toBe(true);
        expect(isPublicRoute('/auth/error')).toBe(true);
      });

      it('should return false for protected routes', () => {
        expect(isPublicRoute('/dashboard')).toBe(false);
        expect(isPublicRoute('/customers')).toBe(false);
      });
    });

    describe('isIgnoredRoute', () => {
      it('should return true for API routes', () => {
        expect(isIgnoredRoute('/api/auth/register')).toBe(true);
        expect(isIgnoredRoute('/api/health')).toBe(true);
      });

      it('should return true for _next routes', () => {
        expect(isIgnoredRoute('/_next/static/chunk.js')).toBe(true);
      });

      it('should return true for favicon.ico', () => {
        expect(isIgnoredRoute('/favicon.ico')).toBe(true);
      });

      it('should return true for images', () => {
        expect(isIgnoredRoute('/images/logo.png')).toBe(true);
      });

      it('should return false for regular routes', () => {
        expect(isIgnoredRoute('/dashboard')).toBe(false);
        expect(isIgnoredRoute('/login')).toBe(false);
      });
    });

    describe('isProtectedRoute', () => {
      it('should return true for dashboard routes', () => {
        expect(isProtectedRoute('/dashboard')).toBe(true);
        expect(isProtectedRoute('/dashboard/settings')).toBe(true);
      });

      it('should return true for customers routes', () => {
        expect(isProtectedRoute('/customers')).toBe(true);
        expect(isProtectedRoute('/customers/new')).toBe(true);
      });

      it('should return true for quotes routes', () => {
        expect(isProtectedRoute('/quotes')).toBe(true);
        expect(isProtectedRoute('/quotes/123')).toBe(true);
      });

      it('should return true for jobs routes', () => {
        expect(isProtectedRoute('/jobs')).toBe(true);
      });

      it('should return true for invoices routes', () => {
        expect(isProtectedRoute('/invoices')).toBe(true);
      });

      it('should return true for reports routes', () => {
        expect(isProtectedRoute('/reports')).toBe(true);
      });

      it('should return true for settings routes', () => {
        expect(isProtectedRoute('/settings')).toBe(true);
      });

      it('should return false for public routes', () => {
        expect(isProtectedRoute('/')).toBe(false);
        expect(isProtectedRoute('/login')).toBe(false);
        expect(isProtectedRoute('/signup')).toBe(false);
      });

      it('should return false for unknown routes so 404 can render', () => {
        expect(isProtectedRoute('/missing-test-route')).toBe(false);
      });
    });

    describe('isAuthRoute', () => {
      it('should return true for login route', () => {
        expect(isAuthRoute('/login')).toBe(true);
      });

      it('should return true for signup route', () => {
        expect(isAuthRoute('/signup')).toBe(true);
      });

      it('should return false for other routes', () => {
        expect(isAuthRoute('/dashboard')).toBe(false);
        expect(isAuthRoute('/')).toBe(false);
      });
    });
  });
});
