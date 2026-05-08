import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Input } from '@/components/ui/Input';

describe('Input Component', () => {
  describe('Rendering', () => {
    it('renders an input element', () => {
      render(<Input />);
      expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('renders with a label', () => {
      render(<Input label="Email" />);
      expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    });

    it('associates label with input via htmlFor', () => {
      render(<Input label="Email" id="email-input" />);
      const input = screen.getByLabelText(/email/i);
      expect(input).toHaveAttribute('id', 'email-input');
    });
  });

  describe('Input Types', () => {
    it('defaults to type="text"', () => {
      render(<Input />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'text');
    });

    it('supports type="email"', () => {
      render(<Input type="email" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('type', 'email');
    });

    it('supports type="password"', () => {
      render(<Input type="password" label="Password" />);
      expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
      expect(screen.getByLabelText(/password/i)).toHaveAttribute('type', 'password');
    });

    it('supports type="tel"', () => {
      render(<Input type="tel" />);
      const input = document.querySelector('input[type="tel"]');
      expect(input).toBeInTheDocument();
    });
  });

  describe('Value Handling', () => {
    it('displays controlled value', () => {
      render(<Input value="test@example.com" onChange={() => {}} />);
      expect(screen.getByRole('textbox')).toHaveValue('test@example.com');
    });

    it('handles value changes', async () => {
      const user = userEvent.setup();
      const onChange = jest.fn();
      render(<Input onChange={onChange} />);

      await user.type(screen.getByRole('textbox'), 'hello');
      expect(onChange).toHaveBeenCalled();
    });

    it('supports default value (uncontrolled)', () => {
      render(<Input defaultValue="default text" />);
      expect(screen.getByRole('textbox')).toHaveValue('default text');
    });
  });

  describe('Placeholder', () => {
    it('displays placeholder text', () => {
      render(<Input placeholder="Enter your email" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', 'Enter your email');
    });
  });

  describe('States', () => {
    it('shows disabled state', () => {
      render(<Input disabled />);
      expect(screen.getByRole('textbox')).toBeDisabled();
    });

    it('shows readonly state', () => {
      render(<Input readOnly />);
      expect(screen.getByRole('textbox')).toHaveAttribute('readonly');
    });

    it('shows required indicator when required', () => {
      render(<Input label="Email" required />);
      expect(screen.getByText('*')).toBeInTheDocument();
    });
  });

  describe('Error Handling', () => {
    it('displays error message', () => {
      render(<Input error="Email is required" />);
      expect(screen.getByText(/email is required/i)).toBeInTheDocument();
    });

    it('applies error styles when error is present', () => {
      render(<Input error="Invalid email" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveClass('border-red-500');
    });

    it('associates error message with input via aria-describedby', () => {
      render(<Input error="Invalid input" id="test-input" />);
      const input = screen.getByRole('textbox');
      expect(input).toHaveAttribute('aria-describedby');
      expect(input).toHaveAttribute('aria-invalid', 'true');
    });
  });

  describe('Help Text', () => {
    it('displays help text', () => {
      render(<Input helpText="We'll never share your email" />);
      expect(screen.getByText(/we'll never share your email/i)).toBeInTheDocument();
    });
  });

  describe('Sizes', () => {
    it('applies small size styles', () => {
      render(<Input size="sm" />);
      expect(screen.getByRole('textbox')).toHaveClass('px-3');
      expect(screen.getByRole('textbox')).toHaveClass('py-1.5');
    });

    it('applies medium size styles (default)', () => {
      render(<Input size="md" />);
      expect(screen.getByRole('textbox')).toHaveClass('px-4');
      expect(screen.getByRole('textbox')).toHaveClass('py-2');
    });

    it('applies large size styles', () => {
      render(<Input size="lg" />);
      expect(screen.getByRole('textbox')).toHaveClass('px-4');
      expect(screen.getByRole('textbox')).toHaveClass('py-3');
    });
  });

  describe('Accessibility', () => {
    it('accepts aria-label directly', () => {
      render(<Input aria-label="Search" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-label', 'Search');
    });

    it('accepts aria-required attribute', () => {
      render(<Input required aria-required="true" />);
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-required', 'true');
    });
  });

  describe('Custom Styling', () => {
    it('accepts custom className', () => {
      render(<Input className="custom-input" />);
      expect(screen.getByRole('textbox')).toHaveClass('custom-input');
    });
  });

  describe('Ref Forwarding', () => {
    it('forwards ref to input element', () => {
      const ref = { current: null as HTMLInputElement | null };
      render(<Input ref={ref} />);
      expect(ref.current).toBeInstanceOf(HTMLInputElement);
    });
  });
});
