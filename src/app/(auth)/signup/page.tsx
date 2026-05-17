'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { AuthShell } from '@/components/marketing/AuthShell';
import Link from 'next/link';

interface SignupFormData {
  name: string;
  email: string;
  password: string;
  businessName: string;
  businessPhone: string;
  privacyConsent: boolean;
}

export default function SignupPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      password: '',
      businessName: '',
      businessPhone: '',
      privacyConsent: false,
    },
  });

  const onSubmit = async (data: SignupFormData) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          password: data.password,
          businessName: data.businessName,
          businessPhone: data.businessPhone,
          privacyConsent: data.privacyConsent,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.error || 'Registration failed. Please try again.');
        return;
      }

      if (response.ok) {
        router.push('/login');
      }
    } catch {
      setError('An unexpected error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthShell
      title="Start with a cleaner field-service record."
      subtitle="Create the workspace your team will use for customers, scheduled work, equipment history, service notes, and billing handoffs."
      panelTitle="Prototype account"
      panelText="Account setup is live today. The deeper field-service workflow is the product direction to validate before production use."
    >
      <div className="space-y-7">
        {error && (
          <div className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700" aria-live="polite">
            {error}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="Your name"
              error={errors.name?.message}
              required
              {...register('name', { required: 'Name is required' })}
            />

            <Input
              label="Email"
              type="email"
              placeholder="you@company.com"
              error={errors.email?.message}
              required
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Please enter a valid email',
                },
              })}
            />

            <Input
              label="Password"
              type="password"
              placeholder="Create a password"
              error={errors.password?.message}
              required
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters',
                },
              })}
            />

            <Input
              label="Business Name"
              type="text"
              placeholder="Your business name"
              error={errors.businessName?.message}
              required
              {...register('businessName', { required: 'Business name is required' })}
            />

            <Input
              label="Business Phone"
              type="tel"
              placeholder="+1 (416) 555-0184"
              error={errors.businessPhone?.message}
              required
              {...register('businessPhone', { required: 'Business phone is required' })}
            />

            <div className="flex items-start">
              <input
                type="checkbox"
                id="privacyConsent"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('privacyConsent', {
                  required: 'You must agree to the privacy policy to create an account',
                })}
              />
              <label htmlFor="privacyConsent" className="ml-2 text-sm text-gray-600">
                I agree to the{' '}
                <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-500 underline" target="_blank">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/terms-of-service" className="text-blue-600 hover:text-blue-500 underline" target="_blank">
                  Terms of Service
                </Link>
              </label>
            </div>
            {errors.privacyConsent && (
              <p className="text-sm font-medium text-red-600">{errors.privacyConsent.message}</p>
            )}
          </div>

          <Button
            type="submit"
            loading={isLoading}
            loadingText="Creating account..."
            className="w-full"
          >
            Create Account
          </Button>
        </form>

        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-semibold text-blue-700 hover:text-blue-900"
          >
            Sign in
          </Link>
        </p>
      </div>
    </AuthShell>
  );
}
