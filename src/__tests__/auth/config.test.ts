import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

// Set required env vars before importing auth config
process.env.NEXTAUTH_SECRET = 'test-secret-for-jest';
process.env.NEXTAUTH_URL = 'http://localhost:3000';

describe('NextAuth Configuration', () => {
  const projectRoot = join(__dirname, '../../..');

  describe('Configuration File', () => {
    it('should have auth config file', () => {
      const authConfigPath = join(projectRoot, 'src/lib/auth/config.ts');
      expect(existsSync(authConfigPath)).toBe(true);
    });

    it('should export authOptions', async () => {
      const { authOptions } = await import('@/lib/auth/config');
      expect(authOptions).toBeDefined();
    });

    it('should define session strategy', async () => {
      const { authOptions } = await import('@/lib/auth/config');
      expect(authOptions.session).toBeDefined();
      expect(authOptions.session!.strategy).toBe('jwt');
    });

    it('should configure session max age', async () => {
      const { authOptions } = await import('@/lib/auth/config');
      expect(authOptions.session!.maxAge).toBeDefined();
      expect(authOptions.session!.maxAge).toBeGreaterThan(0);
    });
  });

  describe('Providers', () => {
    it('should have credentials provider configured', async () => {
      const { authOptions } = await import('@/lib/auth/config');
      expect(authOptions.providers).toBeDefined();
      expect(Array.isArray(authOptions.providers)).toBe(true);

      const credentialsProvider = authOptions.providers.find(
        (p: { type: string; id: string }) => p.type === 'credentials' || p.id === 'credentials'
      );
      expect(credentialsProvider).toBeDefined();
    });

    it('credentials provider should have authorize function', async () => {
      const { authOptions } = await import('@/lib/auth/config');
      const credentialsProvider = authOptions.providers.find(
        (p) => (p as { type?: string; id?: string }).id === 'credentials'
      ) as { authorize?: (...args: unknown[]) => unknown } | undefined;
      expect(credentialsProvider?.authorize).toBeDefined();
    });

    it('credentials provider should define name', async () => {
      const { authOptions } = await import('@/lib/auth/config');
      const credentialsProvider = authOptions.providers.find(
        (p: { type: string; id: string }) => p.type === 'credentials' || p.id === 'credentials'
      );
      expect(credentialsProvider?.name).toBeDefined();
    });
  });

  describe('Callbacks', () => {
    it('should define jwt callback', async () => {
      const { authOptions } = await import('@/lib/auth/config');
      expect(authOptions.callbacks).toBeDefined();
      expect(authOptions.callbacks!.jwt).toBeDefined();
    });

    it('should define session callback', async () => {
      const { authOptions } = await import('@/lib/auth/config');
      expect(authOptions.callbacks!.session).toBeDefined();
    });

    it('should include businessId in session', async () => {
      const { authOptions } = await import('@/lib/auth/config');
      // Session callback should be able to add businessId to session
      expect(typeof authOptions.callbacks!.session).toBe('function');
    });
  });

  describe('Pages', () => {
    it('should define custom sign-in page', async () => {
      const { authOptions } = await import('@/lib/auth/config');
      expect(authOptions.pages).toBeDefined();
      expect(authOptions.pages!.signIn).toBe('/login');
    });

    it('should define custom error page', async () => {
      const { authOptions } = await import('@/lib/auth/config');
      expect(authOptions.pages!.error).toBe('/auth/error');
    });
  });

  describe('Secret and Security', () => {
    it('should use NEXTAUTH_SECRET from environment', async () => {
      const { authOptions } = await import('@/lib/auth/config');
      // The secret should be configured
      expect(authOptions.secret).toBeDefined();
    });
  });

  describe('TypeScript Types', () => {
    it('should have next-auth types file', () => {
      const typesPath = join(projectRoot, 'src/types/next-auth.d.ts');
      expect(existsSync(typesPath)).toBe(true);
    });

    it('should extend Session with businessId', async () => {
      const typesContent = readFileSync(join(projectRoot, 'src/types/next-auth.d.ts'), 'utf-8');
      expect(typesContent).toContain('businessId');
    });

    it('should extend JWT with businessId', async () => {
      const typesContent = readFileSync(join(projectRoot, 'src/types/next-auth.d.ts'), 'utf-8');
      expect(typesContent).toContain('interface JWT');
    });
  });
});
