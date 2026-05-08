import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import SignupPage from '@/app/(auth)/signup/page';

// Mock next/navigation
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

// Mock fetch
global.fetch = jest.fn();

describe('Signup Page', () => {
  const mockPush = jest.fn();
  const mockReplace = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
      replace: mockReplace,
    });
    (global.fetch as jest.Mock).mockReset();
  });

  describe('Rendering', () => {
    it('should render name input field', () => {
      render(<SignupPage />);
      // Use full label text to be specific
      expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    });

    it('should render email input field', () => {
      render(<SignupPage />);
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    it('should render password input field', () => {
      render(<SignupPage />);
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    });

    it('should render business name input field', () => {
      render(<SignupPage />);
      expect(screen.getByLabelText(/business name/i)).toBeInTheDocument();
    });

    it('should render business phone input field', () => {
      render(<SignupPage />);
      expect(screen.getByLabelText(/business phone/i)).toBeInTheDocument();
    });

    it('should render submit button with "Create Account" text', () => {
      render(<SignupPage />);
      expect(screen.getByRole('button', { name: /create account/i })).toBeInTheDocument();
    });

    it('should render link to login page', () => {
      render(<SignupPage />);
      const loginLink = screen.getByRole('link', { name: /sign in/i });
      expect(loginLink).toBeInTheDocument();
      expect(loginLink).toHaveAttribute('href', '/login');
    });
  });

  describe('Form Validation', () => {
    it('should have required attribute on name input', () => {
      render(<SignupPage />);
      const nameInput = screen.getByLabelText(/full name/i);
      expect(nameInput).toBeRequired();
    });

    it('should have required attribute on email input', () => {
      render(<SignupPage />);
      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toBeRequired();
    });

    it('should have required attribute on password input', () => {
      render(<SignupPage />);
      const passwordInput = screen.getByLabelText(/password/i);
      expect(passwordInput).toBeRequired();
    });

    it('should have required attribute on business name input', () => {
      render(<SignupPage />);
      const businessNameInput = screen.getByLabelText(/business name/i);
      expect(businessNameInput).toBeRequired();
    });

    it('should have required attribute on business phone input', () => {
      render(<SignupPage />);
      const businessPhoneInput = screen.getByLabelText(/business phone/i);
      expect(businessPhoneInput).toBeRequired();
    });

    it('should have email type on email input', () => {
      render(<SignupPage />);
      const emailInput = screen.getByLabelText(/email/i);
      expect(emailInput).toHaveAttribute('type', 'email');
    });

    it('should have password type on password input', () => {
      render(<SignupPage />);
      const passwordInput = screen.getByLabelText(/password/i);
      expect(passwordInput).toHaveAttribute('type', 'password');
    });

    it('should have tel type on business phone input', () => {
      render(<SignupPage />);
      const businessPhoneInput = screen.getByLabelText(/business phone/i);
      expect(businessPhoneInput).toHaveAttribute('type', 'tel');
    });

    it('should disable submit button while submitting', async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockImplementation(() => new Promise(() => {})); // Never resolves

      render(<SignupPage />);

      // Fill in all required fields
      await user.type(screen.getByLabelText(/full name/i), 'Test User');
      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/password/i), 'password123');
      await user.type(screen.getByLabelText(/business name/i), 'Test Business');
      await user.type(screen.getByLabelText(/business phone/i), '555-1234');

      const submitButton = screen.getByRole('button', { name: /create account/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(submitButton).toBeDisabled();
      });
    });
  });

  describe('Form Submission', () => {
    it('should call register API on submit', async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ message: 'Registration successful' }),
      });

      render(<SignupPage />);

      await user.type(screen.getByLabelText(/full name/i), 'Test User');
      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/password/i), 'password123');
      await user.type(screen.getByLabelText(/business name/i), 'Test Business');
      await user.type(screen.getByLabelText(/business phone/i), '555-1234');

      const submitButton = screen.getByRole('button', { name: /create account/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(global.fetch).toHaveBeenCalledWith('/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            name: 'Test User',
            email: 'test@example.com',
            password: 'password123',
            businessName: 'Test Business',
            businessPhone: '555-1234',
          }),
        });
      });
    });

    it('should show error message on failed registration', async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: false,
        json: () => Promise.resolve({ error: 'Email already registered' }),
      });

      render(<SignupPage />);

      await user.type(screen.getByLabelText(/full name/i), 'Test User');
      await user.type(screen.getByLabelText(/email/i), 'existing@example.com');
      await user.type(screen.getByLabelText(/password/i), 'password123');
      await user.type(screen.getByLabelText(/business name/i), 'Test Business');
      await user.type(screen.getByLabelText(/business phone/i), '555-1234');

      const submitButton = screen.getByRole('button', { name: /create account/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByText(/email already registered/i)).toBeInTheDocument();
      });
    });

    it('should redirect to login on successful registration', async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockResolvedValueOnce({
        ok: true,
        json: () => Promise.resolve({ message: 'Registration successful' }),
      });

      render(<SignupPage />);

      await user.type(screen.getByLabelText(/full name/i), 'Test User');
      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/password/i), 'password123');
      await user.type(screen.getByLabelText(/business name/i), 'Test Business');
      await user.type(screen.getByLabelText(/business phone/i), '555-1234');

      const submitButton = screen.getByRole('button', { name: /create account/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(mockPush).toHaveBeenCalledWith('/login');
      });
    });

    it('should show loading state during submission', async () => {
      const user = userEvent.setup();
      (global.fetch as jest.Mock).mockImplementation(() => new Promise(() => {})); // Never resolves

      render(<SignupPage />);

      await user.type(screen.getByLabelText(/full name/i), 'Test User');
      await user.type(screen.getByLabelText(/email/i), 'test@example.com');
      await user.type(screen.getByLabelText(/password/i), 'password123');
      await user.type(screen.getByLabelText(/business name/i), 'Test Business');
      await user.type(screen.getByLabelText(/business phone/i), '555-1234');

      const submitButton = screen.getByRole('button', { name: /create account/i });
      await user.click(submitButton);

      await waitFor(() => {
        expect(screen.getByTestId('loading-spinner')).toBeInTheDocument();
      });
    });
  });
});
