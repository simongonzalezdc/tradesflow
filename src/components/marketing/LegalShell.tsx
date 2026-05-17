import Link from 'next/link';
import type { ReactNode } from 'react';
import { BrandLockup, MarketingFooter } from './Brand';

export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <main className="min-h-[100dvh] bg-[#f7f4ee] text-slate-950">
      <header className="border-b border-slate-200 bg-white/90 px-5 py-4 backdrop-blur sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <BrandLockup compact />
          <Link href="/" className="rounded-md px-3 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-amber-500">
            Back to home
          </Link>
        </div>
      </header>

      <section className="px-5 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.55fr_1fr]">
          <aside>
            <p className="text-xs font-bold uppercase tracking-normal text-amber-700">Trust center</p>
            <h1 className="mt-4 text-4xl font-black tracking-normal sm:text-5xl">{title}</h1>
            <p className="mt-4 text-sm text-slate-500">{updated}</p>
            <div className="mt-8 rounded-lg bg-white p-5 text-sm leading-6 text-slate-600 ring-1 ring-slate-200">
              TradesFlow is an early portfolio prototype. These pages set expectations for account records, customer data, and essential service cookies without making production compliance claims.
            </div>
          </aside>
          <article className="rounded-lg bg-white p-6 shadow-[0_24px_70px_-60px_rgba(15,23,42,0.55)] ring-1 ring-slate-200 sm:p-8">
            <div className="space-y-8 text-sm leading-7 text-slate-700 [&_a]:font-semibold [&_a]:text-blue-700 [&_a:hover]:text-blue-900 [&_h2]:text-xl [&_h2]:font-black [&_h2]:tracking-normal [&_h2]:text-slate-950 [&_li]:pl-1 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5">
              {children}
            </div>
          </article>
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}
