import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { db } from '@/lib/db/client';
import { z } from 'zod';
import { checkRateLimit } from '@/lib/rate-limit';

const registerSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(1, 'Name is required'),
  businessName: z.string().min(1, 'Business name is required'),
  businessPhone: z.string().min(1, 'Business phone is required'),
  privacyConsent: z.boolean().refine((value) => value === true, {
    message: 'You must agree to the privacy policy',
  }),
});

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function POST(request: NextRequest) {
  try {
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const { allowed, retryAfterMs } = checkRateLimit(`register:${clientIp}`);
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many registration attempts. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil(retryAfterMs / 1000)) } }
      );
    }

    const body = await request.json();

    // Validate input
    const validationResult = registerSchema.safeParse(body);
    if (!validationResult.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validationResult.error.errors },
        { status: 400 }
      );
    }

    const { email, password, name, businessName, businessPhone } = validationResult.data;

    // Check if user already exists
    const existingUser = await db.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'Email already registered' },
        { status: 409 }
      );
    }

    // Generate unique business slug
    let slug = generateSlug(businessName);
    let slugCounter = 1;
    while (await db.business.findUnique({ where: { slug } })) {
      slug = `${generateSlug(businessName)}-${slugCounter}`;
      slugCounter++;
    }

    // Hash password (CPU-bound, do before transaction to avoid holding a DB connection)
    const hashedPassword = await hash(password, 12);

    // Create business and user atomically to prevent orphaned records
    const { business, user } = await db.$transaction(async (tx) => {
      const business = await tx.business.create({
        data: {
          name: businessName,
          slug,
          phone: businessPhone,
        },
      });

      const user = await tx.user.create({
        data: {
          email,
          password: hashedPassword,
          name,
          role: 'OWNER',
          businessId: business.id,
        },
      });

      await tx.consent.create({
        data: {
          userId: user.id,
          consentType: 'PRIVACY_POLICY',
          consentText: 'I agree to the Privacy Policy and Terms of Service',
          version: '1.0',
          ipAddress: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null,
          userAgent: request.headers.get('user-agent') || null,
        },
      });

      return { business, user };
    });

    // Return user without password
    const userWithoutPassword = { ...user };
    delete (userWithoutPassword as { password?: unknown }).password;

    return NextResponse.json(
      {
        message: 'Registration successful',
        user: userWithoutPassword,
        business,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration failed:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
