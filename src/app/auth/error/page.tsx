'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Suspense } from 'react';
import { BrandLockup } from '@/components/marketing/Brand';
import { Button } from '@/components/ui/Button';

function ErrorContent() {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  const errorMessages: Record<string, string> = {
    Configuration: 'There is a problem with the server configuration.',
    AccessDenied: 'You do not have permission to access this resource.',
    Verification: 'The verification link may have expired or been used.',
    Default: 'An authentication error occurred.',
  };

  const message = errorMessages[error || 'Default'] || errorMessages.Default;

  return (
    <main className="flex min-h-[100dvh] items-center justify-center bg-[#f7f4ee] px-4 py-10 text-slate-950 sm:px-6 lg:px-8">
      <div className="w-full max-w-lg rounded-lg bg-white p-6 text-center shadow-[0_28px_80px_-55px_rgba(15,23,42,0.55)] ring-1 ring-slate-200 sm:p-8">
        <div className="flex justify-center">
          <BrandLockup compact />
        </div>
        <p className="mt-10 text-xs font-black uppercase tracking-[0.22em] text-amber-700">Account access</p>
        <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-slate-950">Authentication error</h1>
        <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-slate-600">{message}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/login">
            <Button className="w-full sm:w-auto">Back to sign in</Button>
          </Link>
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-slate-500 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:translate-y-px"
          >
            Return home
          </Link>
        </div>
      </div>
    </main>
  );
}

export default function AuthErrorPage() {
  return (
    <Suspense fallback={<main className="flex min-h-[100dvh] items-center justify-center bg-[#f7f4ee]"><p className="text-sm font-semibold text-slate-500">Loading account status...</p></main>}>
      <ErrorContent />
    </Suspense>
  );
}
