import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import LoginPage from '@/app/(auth)/login/page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mock next-auth/react
jest.mock('next-auth/react', () => ({
  signIn: jest.fn(),
}));

describe('Login Page', () => {
  const mockPush = jest.fn();
  const mockReplace = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
      replace: mockReplace,
    });
  });

  describe('Rendering', () => {
    it('should render email input field', () => {
      render(<LoginPage />);
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    it('should render password input field', () => {
      render(<LoginPage />);
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    it('should render submit button with "Sign In" text', () => {
      render(<LoginPage />);
      expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
    });

    it('should render link to signup page', () => {
      render(<LoginPage />);
      const signupLink = screen.getByRole('link', { name: /create.*here/i });
      expect(signupLink).toBeInTheDocument();
      expect(signupLink).toHaveAttribute('href', '/signup');
    });

    it('should render branded header/logo', () => {
      render(<LoginPage />);
      expect(screen.getByText(/tradesflow/i)).toBeInTheDocument();
    });
  });

  describe('Form Validation', () => {
    it('should have required attribute on email input', () => {
      render(<LoginPage />);
      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toBeRequired();
    });

    it('should have required attribute on password input', () => {
      render(<LoginPage />);
      const passwordInput = screen.getByLabelText(/password/i);
      expect(passwordInput).toBeRequired();
    });

    it('should have email type on email input', () => {
      render(<LoginPage />);
      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toHaveAttribute('type', 'email');
    });

    it('should have password type on password input', () => {
      render(<LoginPage />);
      const passwordInput = screen.getByLabelText(/password/i);
      expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('should disable submit button while submitting', async () => {
      const user = userEvent.setup();
      (signIn as jest.Mock).mockImplementation(() => new Promise(() => {})); // Never resolves

      render(<LoginPage />);

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/password/i);

      await user.type(emailInput, 'test@example.com');
      await user.type(passwordInput, 'password123');

      const submitButton = screen.getByRole('button', { name: /sign in/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(submitButton).toBeDisabled();
      });
    });
  });

  describe('Form Submission', () => {
    it('should call signIn with credentials on submit', async () => {
      const user = userEvent.setup();
      (signIn as jest.Mock).mockResolvedValue({ ok: true, error: null });

      render(<LoginPage />);

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/password/i);

      await user.type(emailInput, 'test@example.com');
      await user.type(passwordInput, 'password123');

      const submitButton = screen.getByRole('button', { name: /sign in/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(signIn).toHaveBeenCalledWith('credentials', {
          email: 'test@example.com',
          password: 'password123',
          redirect: false,
        });
      });
    });

    it('should show error message on failed login', async () => {
      const user = userEvent.setup();
      (signIn as jest.Mock).mockResolvedValue({
        ok: false,
        error: 'CredentialsSignin'
      });

      render(<LoginPage />);

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/password/i);

      await user.type(emailInput, 'test@example.com');
      await user.type(passwordInput, 'wrongpassword');

      const submitButton = screen.getByRole('button', { name: /sign in/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/invalid.*email.*password|credentials/i)).toBeInTheDocument();
      });
    });

    it('should redirect to dashboard on successful login', async () => {
      const user = userEvent.setup();
      (signIn as jest.Mock).mockResolvedValue({ ok: true, error: null });

      render(<LoginPage />);

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/password/i);

      await user.type(emailInput, 'test@example.com');
      await user.type(passwordInput, 'password123');

      const submitButton = screen.getByRole('button', { name: /sign in/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(mockPush).toHaveBeenCalledWith('/dashboard');
      });
    });

    it('should show loading state during submission', async () => {
      const user = userEvent.setup();
      (signIn as jest.Mock).mockImplementation(() => new Promise(() => {})); // Never resolves

      render(<LoginPage />);

      const emailInput = screen.getByLabelText(/email/i);
      const passwordInput = screen.getByLabelText(/password/i);

      await user.type(emailInput, 'test@example.com');
      await user.type(passwordInput, 'password123');

      const submitButton = screen.getByRole('button', { name: /sign in/i });
      await user.click(submitButton);

      await waitFor(() => {
        // Check for loading spinner or loading text
        expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
      });
    });
  });
});
