import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/config';
import { db } from '@/lib/db/client';
import { z } from 'zod';

const deletionSchema = z.object({
  confirmation: z.literal('DELETE', {
    errorMap: () => ({ message: 'Type DELETE to confirm account deletion' }),
  }),
});

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const body = await request.json();
    const validation = deletionSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.error.errors },
        { status: 400 }
      );
    }

    const userId = session.user.id;
    const businessId = session.user.businessId;

    const user = await db.user.findUnique({
      where: { id: userId },
      select: { role: true, business: { select: { id: true, users: { select: { id: true } } } } },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (user.role === 'OWNER' && user.business.users.length > 1) {
      return NextResponse.json(
        { error: 'Business has other users. Transfer ownership before deleting your account.' },
        { status: 409 }
      );
    }

    if (user.role === 'OWNER') {
      await db.business.delete({ where: { id: businessId } });
    } else {
      await db.user.delete({ where: { id: userId } });
    }

    return NextResponse.json(
      { message: 'Account and associated data deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Account deletion failed:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json(
      { error: 'Failed to delete account' },
      { status: 500 }
    );
  }
}
