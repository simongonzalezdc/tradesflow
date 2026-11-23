import { existsSync } from 'fs';
import { join } from 'path';
import { render, screen } from '@testing-library/react';
import DashboardPage from '@/app/dashboard/page';
import { getServerSession } from 'next-auth';

jest.mock('next-auth', () => ({
  getServerSession: jest.fn(),
}));

// The page reads the session through the auth config, which constructs a
// Prisma client at import time. The render only needs the session value, so
// stub the client out.
jest.mock('@/lib/db/client', () => ({
  db: {},
}));

const mockGetServerSession = getServerSession as jest.Mock;

describe('Dashboard landing page', () => {
  const projectRoot = join(__dirname, '../../../..');

  beforeEach(() => {
    jest.clearAllMocks();
    mockGetServerSession.mockResolvedValue({
      user: { email: 'operator@example.com' },
    });
  });

  describe('Post-login landing (D4)', () => {
    it('should render the operator workspace, not the 404 surface', async () => {
      render(await DashboardPage());

      expect(screen.getByRole('heading', { name: /account is live/i })).toBeInTheDocument();
      expect(screen.queryByText(/this record is not on the board/i)).not.toBeInTheDocument();
    });

    it('should show who is signed in', async () => {
      render(await DashboardPage());

      expect(screen.getByText(/signed in as/i)).toBeInTheDocument();
      expect(screen.getByText('operator@example.com')).toBeInTheDocument();
    });

    it('should sign out through a real form post, not client script', async () => {
      const { container } = render(await DashboardPage());

      const form = container.querySelector('form');
      expect(form).toHaveAttribute('action', '/api/auth/signout');
      expect(form).toHaveAttribute('method', 'post');
      expect(screen.getByRole('button', { name: /sign out/i })).toHaveAttribute('type', 'submit');
    });

    it('should not link to areas that have no page', async () => {
      render(await DashboardPage());

      expect(screen.queryByRole('link', { name: /customers/i })).not.toBeInTheDocument();
      expect(screen.queryByRole('link', { name: /invoices/i })).not.toBeInTheDocument();
    });

    it('should be reachable at /dashboard', () => {
      const pagePath = join(projectRoot, 'src/app/dashboard/page.tsx');
      expect(existsSync(pagePath)).toBe(true);
    });
  });
});
