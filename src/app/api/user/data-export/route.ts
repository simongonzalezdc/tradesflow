import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/config';
import { db } from '@/lib/db/client';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const userId = session.user.id;

    const [user, appointments, notifications, serviceHistory, consents] =
      await Promise.all([
        db.user.findUnique({
          where: { id: userId },
          select: {
            id: true,
            email: true,
            name: true,
            role: true,
            createdAt: true,
          },
        }),
        db.appointment.findMany({
          where: { userId },
          include: { customer: { select: { name: true } } },
        }),
        db.notification.findMany({
          where: { userId },
          select: {
            type: true,
            status: true,
            message: true,
            createdAt: true,
          },
        }),
        db.serviceHistory.findMany({
          where: { userId },
          select: {
            description: true,
            technicianNotes: true,
            performedAt: true,
          },
        }),
        db.consent.findMany({
          where: { userId },
          select: {
            consentType: true,
            consentText: true,
            version: true,
            consentedAt: true,
            revokedAt: true,
          },
        }),
      ]);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const exportData = {
      exportedAt: new Date().toISOString(),
      user,
      appointments,
      notifications,
      serviceHistory,
      consents,
    };

    return new NextResponse(JSON.stringify(exportData, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': `attachment; filename="tradesflow-data-export-${userId}.json"`,
      },
    });
  } catch (error) {
    console.error('Data export failed:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json(
      { error: 'Failed to export data' },
      { status: 500 }
    );
  }
}
