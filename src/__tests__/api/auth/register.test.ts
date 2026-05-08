const mockUserFindUnique = jest.fn();
const mockUserCreate = jest.fn();
const mockBusinessCreate = jest.fn();
const mockBusinessFindUnique = jest.fn();
const mockTransaction = jest.fn();

jest.mock('@/lib/db/client', () => ({
  db: {
    user: {
      findUnique: () => mockUserFindUnique(),
      create: (data: unknown) => mockUserCreate(data),
    },
    business: {
      create: (data: unknown) => mockBusinessCreate(data),
      findUnique: () => mockBusinessFindUnique(),
    },
    $transaction: (fn: (tx: unknown) => Promise<unknown>) => mockTransaction(fn),
  },
}));

jest.mock('bcryptjs', () => ({
  hash: jest.fn().mockResolvedValue('hashed-password'),
}));

// Mock next/server to avoid ReferenceError: Request is not defined in jsdom
jest.mock('next/server', () => {
  return {
    NextRequest: class NextRequest {
      private _body: unknown;
      constructor(_input: unknown, init?: { body?: unknown }) {
        this._body = init?.body;
      }
      json() {
        return Promise.resolve(this._body);
      }
    },
    NextResponse: {
      json: (body: unknown, init?: { status?: number }) => ({
        status: init?.status ?? 200,
        json: () => Promise.resolve(body),
        headers: new Map(),
      }),
    },
  };
});

import { POST } from '@/app/api/auth/register/route';

function createRequest(body: Record<string, string>) {
  // Use the mocked NextRequest which accepts body directly
  return { json: () => Promise.resolve(body) } as unknown as Parameters<typeof POST>[0];
}

describe('POST /api/auth/register', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockUserFindUnique.mockResolvedValue(null);
    mockBusinessFindUnique.mockResolvedValue(null);
    mockBusinessCreate.mockResolvedValue({
      id: 'business-1',
      name: 'Test Business',
      slug: 'test-business',
      phone: '555-1234',
    });
    mockUserCreate.mockImplementation((data: { data: { email: string; name: string; role: string; businessId: string } }) =>
      Promise.resolve({
        id: 'user-1',
        email: data.data.email,
        name: data.data.name,
        role: data.data.role,
        businessId: data.data.businessId,
      })
    );
    // Default: $transaction passes the callback a mock tx that delegates to the standalone mocks
    mockTransaction.mockImplementation(async (fn: (tx: unknown) => Promise<unknown>) => {
      const tx = {
        business: {
          create: (data: unknown) => mockBusinessCreate(data),
        },
        user: {
          create: (data: unknown) => mockUserCreate(data),
        },
      };
      return fn(tx);
    });
  });

  describe('Validation', () => {
    it('should reject empty email', async () => {
      const response = await POST(createRequest({ email: '', password: 'password123', name: 'Test', businessName: 'Test', businessPhone: '555-1234' }));
      expect(response.status).toBe(400);
    });

    it('should reject invalid email format', async () => {
      const response = await POST(createRequest({ email: 'invalid-email', password: 'password123', name: 'Test', businessName: 'Test', businessPhone: '555-1234' }));
      expect(response.status).toBe(400);
    });

    it('should reject short password', async () => {
      const response = await POST(createRequest({ email: 'test@example.com', password: 'short', name: 'Test', businessName: 'Test', businessPhone: '555-1234' }));
      expect(response.status).toBe(400);
    });

    it('should reject missing password', async () => {
      const response = await POST(createRequest({ email: 'test@example.com', password: '', name: 'Test', businessName: 'Test', businessPhone: '555-1234' }));
      expect(response.status).toBe(400);
    });

    it('should validate name is required', async () => {
      const response = await POST(createRequest({ email: 'test@example.com', password: 'password123', name: '', businessName: 'Test', businessPhone: '555-1234' }));
      expect(response.status).toBe(400);
    });

    it('should validate businessName is required', async () => {
      const response = await POST(createRequest({ email: 'test@example.com', password: 'password123', name: 'Test', businessName: '', businessPhone: '555-1234' }));
      expect(response.status).toBe(400);
    });

    it('should validate businessPhone is required', async () => {
      const response = await POST(createRequest({ email: 'test@example.com', password: 'password123', name: 'Test', businessName: 'Test', businessPhone: '' }));
      expect(response.status).toBe(400);
    });
  });

  describe('Registration Success', () => {
    it('should create new user with hashed password', async () => {
      const response = await POST(createRequest({ email: 'new@example.com', password: 'SecurePassword123!', name: 'Test User', businessName: 'Test Business', businessPhone: '555-1234' }));
      expect(response.status).toBe(201);
    });

    it('should reject duplicate email', async () => {
      mockUserFindUnique.mockResolvedValueOnce({ id: 'existing-user', email: 'existing@example.com' });
      const response = await POST(createRequest({ email: 'existing@example.com', password: 'SecurePassword123!', name: 'Second User', businessName: 'Second Business', businessPhone: '555-2222' }));
      expect(response.status).toBe(409);
    });
  });
});
