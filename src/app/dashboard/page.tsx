import type { Metadata } from 'next';
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/config';
import { Button } from '@/components/ui/Button';
import { BrandLockup, MarketingFooter } from '@/components/marketing/Brand';

export const metadata: Metadata = {
  title: 'Dashboard',
  description: 'Signed-in landing for the TradesFlow portfolio prototype.',
};

const PLANNED_AREAS = [
  { name: 'Customers', detail: 'Who you serve, and how to reach them.' },
  { name: 'Quotes', detail: 'What you proposed, before the work starts.' },
  { name: 'Jobs', detail: 'The work in progress, and who owns it.' },
  { name: 'Invoices', detail: 'What is owed, and what is paid.' },
  { name: 'Reports', detail: 'How the work is going, in one view.' },
  { name: 'Settings', detail: 'Your business, your team, your account.' },
];

export default async function DashboardPage() {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email ?? null;

  return (
    <div className="flex min-h-screen flex-col bg-[#f7f4ee] text-slate-950">
      <header className="sticky top-0 z-10 border-b border-slate-200 bg-[#f7f4ee]/92 px-5 py-4 backdrop-blur sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4" aria-label="Primary">
          <BrandLockup compact />
          <form action="/api/auth/signout" method="post">
            <input type="hidden" name="callbackUrl" value="/" />
            <Button type="submit" variant="outline" size="sm">
              Sign out
            </Button>
          </form>
        </nav>
      </header>
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 py-16">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-600">
          Signed in
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
          Your account is live. The service board is not built yet.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
          Login works. The customer, quote, job, invoice, and report
          screens are still on the roadmap, so there is nothing here to
          operate yet.
        </p>
        <p className="mt-4 text-sm text-slate-700">
          {email ? (
            <>
              Signed in as <span className="font-semibold">{email}</span>.
            </>
          ) : (
            'Signed in.'
          )}
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex min-h-11 items-center justify-center rounded-md border border-slate-300 bg-white px-4 py-2 text-base font-semibold text-slate-800 transition-colors hover:border-slate-400 hover:bg-slate-50"
          >
            Back to the overview
          </Link>
        </div>

        <section className="mt-16 border-t border-slate-200 pt-10" aria-labelledby="planned-areas">
          <h2 id="planned-areas" className="text-xl font-semibold text-slate-950">
            Planned, not built
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
            These six areas are named in the product but have no screens
            yet. None of them is a link, because none of them exists.
          </p>
          <ul className="mt-8 grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            {PLANNED_AREAS.map((area) => (
              <li key={area.name} className="border-t border-slate-200 pt-4">
                <p className="font-semibold text-slate-950">{area.name}</p>
                <p className="mt-1 text-sm leading-6 text-slate-600">{area.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <MarketingFooter />
    </div>
  );
}
