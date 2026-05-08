import { NextRequest, NextResponse } from 'next/server';
import { hash } from 'bcryptjs';
import { db } from '@/lib/db/client';
import { z } from 'zod';

const registerSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(1, 'Name is required'),
  businessName: z.string().min(1, 'Business name is required'),
  businessPhone: z.string().min(1, 'Business phone is required'),
});

function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export async function POST(request: NextRequest) {
  try {
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

    // Create business
    const business = await db.business.create({
      data: {
        name: businessName,
        slug,
        phone: businessPhone,
      },
    });

    // Hash password
    const hashedPassword = await hash(password, 12);

    // Create user with OWNER role
    const user = await db.user.create({
      data: {
        email,
        password: hashedPassword,
        name,
        role: 'OWNER',
        businessId: business.id,
      },
    });

    // Return user without password
    const { password: _, ...userWithoutPassword } = user;

    return NextResponse.json(
      {
        message: 'Registration successful',
        user: userWithoutPassword,
        business,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
