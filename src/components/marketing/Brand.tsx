import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils/cn';

type BrandTone = 'light' | 'dark';

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-lg bg-slate-950 text-white shadow-[0_14px_28px_-18px_rgba(15,23,42,0.65)] ring-1 ring-slate-900/10',
        className
      )}
      aria-hidden="true"
    >
      <svg className="h-6 w-6" viewBox="0 0 32 32" fill="none">
        <path d="M7 9.5h18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M7 16h12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M7 22.5h18" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
        <path d="M23.5 13.5 27 17l-3.5 3.5" stroke="#f59e0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

export function BrandLockup({
  href = '/',
  tone = 'light',
  compact = false,
}: {
  href?: string;
  tone?: BrandTone;
  compact?: boolean;
}) {
  const textClass = tone === 'dark' ? 'text-white' : 'text-slate-950';
  const subTextClass = tone === 'dark' ? 'text-slate-400' : 'text-slate-500';

  return (
    <Link href={href} className="group inline-flex items-center gap-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2">
      <BrandMark className={tone === 'dark' ? 'bg-white text-slate-950' : undefined} />
      <span className="leading-none">
        <span className={cn('block text-lg font-black tracking-[-0.02em]', textClass)}>TradesFlow</span>
        {!compact && (
          <span className={cn('mt-1 block text-[0.68rem] font-bold uppercase tracking-[0.22em]', subTextClass)}>
            Field service OS
          </span>
        )}
      </span>
    </Link>
  );
}

export function MarketingFooter() {
  return (
    <footer className="bg-slate-950 px-5 py-14 text-slate-400 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <BrandLockup tone="dark" />
          <p className="mt-5 max-w-xl text-sm leading-6">
            Field service management for trade businesses that need cleaner customer records,
            scheduled work, equipment history, and billing handoffs without enterprise bloat.
          </p>
        </div>
        <nav className="grid gap-8 text-sm sm:grid-cols-3" aria-label="Footer">
          <FooterGroup title="Product">
            <Link href="/#workflow">Workflow</Link>
            <Link href="/#equipment">Equipment records</Link>
            <Link href="/#pricing">Pricing</Link>
          </FooterGroup>
          <FooterGroup title="Account">
            <Link href="/signup">Create account</Link>
            <Link href="/login">Sign in</Link>
            <a href="mailto:hello@tradesflow.app">Contact</a>
          </FooterGroup>
          <FooterGroup title="Legal">
            <Link href="/privacy-policy">Privacy</Link>
            <Link href="/terms-of-service">Terms</Link>
            <Link href="/cookie-policy">Cookies</Link>
          </FooterGroup>
        </nav>
      </div>
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright {new Date().getFullYear()} TradesFlow. All rights reserved.</p>
        <p>Built for small trade teams that need the record straight before the invoice goes out.</p>
      </div>
    </footer>
  );
}

function FooterGroup({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h2 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-white">{title}</h2>
      <div className="flex flex-col gap-2 [&_a]:text-slate-400 [&_a]:transition-colors [&_a:hover]:text-white">
        {children}
      </div>
    </div>
  );
}
