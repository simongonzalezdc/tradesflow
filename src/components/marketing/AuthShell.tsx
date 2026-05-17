import type { ReactNode } from 'react';
import { BrandLockup } from './Brand';

export function AuthShell({
  title,
  subtitle,
  children,
  panelTitle,
  panelText,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  panelTitle: string;
  panelText: string;
}) {
  return (
    <main className="min-h-[100dvh] bg-[#f7f4ee] px-4 py-6 text-slate-950 sm:px-6 lg:px-8">
      <div className="mx-auto grid min-h-[calc(100dvh-3rem)] max-w-6xl overflow-hidden rounded-lg bg-white shadow-[0_28px_80px_-55px_rgba(15,23,42,0.55)] ring-1 ring-slate-200 lg:grid-cols-[0.95fr_1.05fr]">
        <section className="flex flex-col justify-between border-b border-slate-200 bg-white p-6 sm:p-8 lg:border-b-0 lg:border-r">
          <div>
            <BrandLockup />
            <div className="mt-12 max-w-md">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-700">Account access</p>
              <h1 className="mt-4 text-3xl font-black tracking-[-0.04em] text-slate-950 sm:text-4xl">{title}</h1>
              <p className="mt-4 text-sm leading-6 text-slate-600">{subtitle}</p>
            </div>
          </div>
          <div className="mt-10 grid gap-3 text-sm text-slate-600 sm:grid-cols-3 lg:grid-cols-1">
            <p className="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">Customer, job, and equipment records in one workspace.</p>
            <p className="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">Built for owner, admin, and technician roles.</p>
            <p className="rounded-lg bg-slate-50 p-3 ring-1 ring-slate-200">PIPEDA-aware account and data-rights foundation.</p>
          </div>
        </section>

        <section className="flex flex-col justify-center bg-slate-950 p-6 text-white sm:p-8">
          <div className="mx-auto w-full max-w-md">
            <div className="mb-8 rounded-lg bg-white/6 p-5 ring-1 ring-white/10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-300">{panelTitle}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{panelText}</p>
            </div>
            <div className="rounded-lg bg-white p-6 text-slate-950 shadow-[0_22px_70px_-48px_rgba(0,0,0,0.8)]">
              {children}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
