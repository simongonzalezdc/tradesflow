import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth/config';
import { checkRateLimit } from '@/lib/rate-limit';
import { NextRequest } from 'next/server';

const handler = async (req: NextRequest) => {
  if (req.method === 'POST') {
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const { allowed, retryAfterMs } = checkRateLimit(`login:${clientIp}`);
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: 'Too many login attempts. Please try again later.' }),
        { status: 429, headers: { 'Content-Type': 'application/json', 'Retry-After': String(Math.ceil(retryAfterMs / 1000)) } }
      );
    }
  }
  return NextAuth(authOptions)(req);
};

export { handler as GET, handler as POST };
