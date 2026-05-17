import Link from 'next/link';
import { BrandLockup, MarketingFooter } from '@/components/marketing/Brand';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <main className="min-h-[100dvh] bg-[#f7f4ee] text-slate-950">
      <section className="flex min-h-[72dvh] items-center px-5 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <BrandLockup />
            <p className="mt-12 text-xs font-black uppercase tracking-[0.22em] text-amber-700">Missing route</p>
            <h1 className="mt-4 max-w-2xl text-5xl font-black leading-[0.95] tracking-[-0.055em] sm:text-6xl">
              This record is not on the board.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600">
              The page may have moved, or the link may be pointing at an old workspace path.
              Start from the public homepage or sign in to your account.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/">
                <Button size="lg" className="w-full sm:w-auto">Go home</Button>
              </Link>
              <Link
                href="/login"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-lg font-semibold text-slate-800 transition-all duration-300 hover:border-slate-500 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:translate-y-px"
              >
                Sign in
              </Link>
            </div>
          </div>
          <div className="rounded-lg bg-slate-950 p-4 shadow-[0_36px_100px_-60px_rgba(15,23,42,0.9)]">
            <div className="rounded-md bg-white p-5 ring-1 ring-white/20">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Route check</p>
                  <h2 className="mt-1 text-2xl font-black tracking-[-0.04em]">404</h2>
                </div>
                <span className="rounded-md bg-amber-100 px-3 py-2 text-sm font-bold text-amber-900">Needs dispatch</span>
              </div>
              <div className="mt-5 space-y-3">
                {['Homepage available', 'Account access available', 'Requested page missing'].map((item, index) => (
                  <div key={item} className="flex items-center justify-between rounded-lg bg-slate-50 p-4 ring-1 ring-slate-200">
                    <span className="text-sm font-semibold text-slate-700">{item}</span>
                    <span className="font-mono text-xs font-black text-slate-500">0{index + 1}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <MarketingFooter />
    </main>
  );
}
