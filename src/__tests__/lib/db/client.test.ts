import { readFileSync, existsSync } from 'fs';
import { join } from 'path';

// Mock PrismaClient for unit tests
jest.mock('@/generated/prisma', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    $connect: jest.fn().mockResolvedValue(undefined),
    $disconnect: jest.fn().mockResolvedValue(undefined),
    $queryRaw: jest.fn().mockResolvedValue([{ value: 1 }]),
    $transaction: jest.fn().mockImplementation((promises) => Promise.all(promises)),
    user: {
      count: jest.fn().mockResolvedValue(0),
      findMany: jest.fn().mockResolvedValue([]),
      findFirst: jest.fn().mockResolvedValue(null),
      create: jest.fn().mockResolvedValue({ id: '1' }),
      update: jest.fn().mockResolvedValue({ id: '1' }),
      delete: jest.fn().mockResolvedValue({ id: '1' }),
    },
    business: {
      count: jest.fn().mockResolvedValue(0),
      findMany: jest.fn().mockResolvedValue([]),
    },
    customer: {
      count: jest.fn().mockResolvedValue(0),
      findMany: jest.fn().mockResolvedValue([]),
    },
    appointment: {
      count: jest.fn().mockResolvedValue(0),
      findMany: jest.fn().mockResolvedValue([]),
    },
    invoice: {
      count: jest.fn().mockResolvedValue(0),
      findMany: jest.fn().mockResolvedValue([]),
    },
    equipment: {
      count: jest.fn().mockResolvedValue(0),
      findMany: jest.fn().mockResolvedValue([]),
    },
    priceBookItem: {
      count: jest.fn().mockResolvedValue(0),
      findMany: jest.fn().mockResolvedValue([]),
    },
    notification: {
      count: jest.fn().mockResolvedValue(0),
      findMany: jest.fn().mockResolvedValue([]),
    },
    serviceHistory: {
      count: jest.fn().mockResolvedValue(0),
      findMany: jest.fn().mockResolvedValue([]),
    },
    invoiceItem: {
      count: jest.fn().mockResolvedValue(0),
      findMany: jest.fn().mockResolvedValue([]),
    },
  })),
}));

describe('Database Client', () => {
  const projectRoot = join(__dirname, '../../../..');

  describe('Client File', () => {
    it('should have database client file', () => {
      const clientPath = join(projectRoot, 'src/lib/db/client.ts');
      expect(existsSync(clientPath)).toBe(true);
    });

    it('should export PrismaClient', () => {
      const clientContent = readFileSync(join(projectRoot, 'src/lib/db/client.ts'), 'utf-8');
      expect(clientContent).toContain('PrismaClient');
    });

    it('should implement singleton pattern', () => {
      const clientContent = readFileSync(join(projectRoot, 'src/lib/db/client.ts'), 'utf-8');
      expect(clientContent).toContain('globalForPrisma');
    });
  });

  describe('Client Initialization', () => {
    it('exports a database client instance', async () => {
      const { db } = await import('@/lib/db/client');
      expect(db).toBeDefined();
    });

    it('has connect method', async () => {
      const { db } = await import('@/lib/db/client');
      expect(db.$connect).toBeDefined();
    });

    it('has disconnect method', async () => {
      const { db } = await import('@/lib/db/client');
      expect(db.$disconnect).toBeDefined();
    });
  });

  describe('Model Access', () => {
    it('has user model', async () => {
      const { db } = await import('@/lib/db/client');
      expect(db.user).toBeDefined();
      expect(db.user.count).toBeDefined();
      expect(db.user.findMany).toBeDefined();
    });

    it('has business model', async () => {
      const { db } = await import('@/lib/db/client');
      expect(db.business).toBeDefined();
    });

    it('has customer model', async () => {
      const { db } = await import('@/lib/db/client');
      expect(db.customer).toBeDefined();
    });

    it('has appointment model', async () => {
      const { db } = await import('@/lib/db/client');
      expect(db.appointment).toBeDefined();
    });

    it('has invoice model', async () => {
      const { db } = await import('@/lib/db/client');
      expect(db.invoice).toBeDefined();
    });

    it('has equipment model', async () => {
      const { db } = await import('@/lib/db/client');
      expect(db.equipment).toBeDefined();
    });

    it('has priceBookItem model', async () => {
      const { db } = await import('@/lib/db/client');
      expect(db.priceBookItem).toBeDefined();
    });

    it('has notification model', async () => {
      const { db } = await import('@/lib/db/client');
      expect(db.notification).toBeDefined();
    });

    it('has serviceHistory model', async () => {
      const { db } = await import('@/lib/db/client');
      expect(db.serviceHistory).toBeDefined();
    });

    it('has invoiceItem model', async () => {
      const { db } = await import('@/lib/db/client');
      expect(db.invoiceItem).toBeDefined();
    });
  });

  describe('Query Capabilities', () => {
    it('can count records', async () => {
      const { db } = await import('@/lib/db/client');
      const count = await db.user.count();
      expect(typeof count).toBe('number');
    });

    it('can find many records', async () => {
      const { db } = await import('@/lib/db/client');
      const users = await db.user.findMany({ take: 0 });
      expect(Array.isArray(users)).toBe(true);
    });

    it('can connect to database', async () => {
      const { db } = await import('@/lib/db/client');
      await expect(db.$connect()).resolves.not.toThrow();
    });

    it('can disconnect from database', async () => {
      const { db } = await import('@/lib/db/client');
      await db.$connect();
      await expect(db.$disconnect()).resolves.not.toThrow();
    });

    it('can execute raw queries', async () => {
      const { db } = await import('@/lib/db/client');
      const result = await db.$queryRaw`SELECT 1 as value`;
      expect(result).toEqual([{ value: 1 }]);
    });
  });

  describe('Singleton Pattern', () => {
    it('returns the same instance', async () => {
      // Clear the module cache first
      jest.resetModules();

      // Re-mock PrismaClient
      jest.mock('@/generated/prisma', () => ({
        PrismaClient: jest.fn().mockImplementation(() => ({
          $connect: jest.fn(),
          $disconnect: jest.fn(),
        })),
      }));

      const { db: db1 } = await import('@/lib/db/client');
      const { db: db2 } = await import('@/lib/db/client');
      expect(db1).toBe(db2);
    });
  });
});
