import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { BrandLockup, MarketingFooter } from '@/components/marketing/Brand';

const operatingSignals = [
  { value: 'Portfolio', label: 'honest prototype posture' },
  { value: 'Live', label: 'account and auth foundation' },
  { value: 'Several', label: 'workflow examples, not one target' },
  { value: 'Planned', label: 'QBO-style billing handoff' },
];

const workflowSteps = [
  {
    title: 'Capture the site',
    body: 'Create the customer, service address, caller notes, and known equipment before the request disappears into texts and memory.',
  },
  {
    title: 'Schedule the work',
    body: 'Assign the visit, technician, duration, status, and follow-up expectations from the same operating record.',
  },
  {
    title: 'Record the findings',
    body: 'Attach service notes, photos, deficiencies, warranty dates, and asset history so the next visit starts with context.',
  },
  {
    title: 'Hand off to billing',
    body: 'Turn completed work and unresolved deficiencies into a clean admin handoff instead of a reconstruction job.',
  },
];

const productModules = [
  {
    eyebrow: 'Customer record',
    title: 'One place for the call, site, and history.',
    body: 'Profiles connect contact details, service addresses, visits, invoices, equipment, and notes so the office and field crew work from the same story.',
  },
  {
    eyebrow: 'Evidence-heavy work',
    title: 'Designed for jobs that leave evidence behind.',
    body: 'Recurring maintenance, deficiency notes, photos, follow-ups, and report-ready service records are the strongest example of the product shape.',
  },
  {
    eyebrow: 'Equipment Passport',
    title: 'The asset record that makes repeat service easier.',
    body: 'Track model, serial number, location, warranty, photos, and every service visit attached to the asset instead of scattered across texts and invoices.',
  },
  {
    eyebrow: 'Billing handoff',
    title: 'Invoices should not need detective work.',
    body: 'Line items, service status, unresolved findings, due dates, and accounting handoff belong next to the operational record.',
  },
];

const readiness = [
  ['Live foundation', 'Authentication, account setup, business profile creation, privacy consent, data-rights endpoints, and route protection are in place.'],
  ['Prototype workflow', 'Customer management, scheduling, invoicing, Equipment Passport, notifications, and team management are the next visible product layers.'],
  ['Example patterns', 'Backup power, kitchen equipment, access-control, and life-safety work all share the same site, asset, evidence, follow-up, and billing pain.'],
];

const fitCases = [
  {
    title: 'Backup power service',
    body: 'Generator and transfer-switch work needs maintenance logs, test evidence, battery notes, repair quotes, and clean invoice handoff.',
  },
  {
    title: 'Commercial kitchen equipment',
    body: 'Ovens, fryers, walk-ins, warranty notes, parts history, and repeat calls all benefit from one visible asset record.',
  },
  {
    title: 'Access-control integrators',
    body: 'Panels, door controllers, cameras, site notes, customer approvals, and follow-up quotes need durable context across visits.',
  },
  {
    title: 'Life-safety inspections',
    body: 'Fire and safety work is still a good example, but only as one workflow pattern among several evidence-heavy service operations.',
  },
];

const faqs = [
  {
    q: 'What is live today?',
    a: 'The account foundation is live: registration, login, business setup, privacy consent, protected routes, and data-rights endpoints. The deeper operational modules are prototype/roadmap work.',
  },
  {
    q: 'Is this customized for one company?',
    a: 'No. The page uses several workflow examples because good B2B positioning should help different operators map their own work to the same problem shape without pretending the prototype is bespoke.',
  },
  {
    q: 'Why focus on equipment history?',
    a: 'Repeat service depends on memory. The Equipment Passport keeps model, serial, location, warranty, photos, and service history attached to the asset so the next job starts faster.',
  },
  {
    q: 'Does it replace accounting software?',
    a: 'No. TradesFlow focuses on operational records and invoice workflow. Accounting integrations such as QuickBooks are planned after the core product workflow is stable.',
  },
];

export default function Home() {
  return (
    <main className="min-h-[100dvh] bg-[#f7f4ee] text-slate-950">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-20 focus:rounded-md focus:bg-white focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-slate-950 focus:ring-2 focus:ring-amber-500">
        Skip to content
      </a>

      <header className="sticky top-0 z-10 border-b border-slate-200 bg-[#f7f4ee]/92 px-5 py-4 backdrop-blur sm:px-6 lg:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4" aria-label="Primary">
          <BrandLockup compact />
          <div className="hidden items-center gap-6 text-sm font-semibold text-slate-600 md:flex">
            <a className="transition-colors hover:text-slate-950" href="#workflow">Workflow</a>
            <a className="transition-colors hover:text-slate-950" href="#equipment">Equipment</a>
            <a className="transition-colors hover:text-slate-950" href="#fit">Fit</a>
            <a className="transition-colors hover:text-slate-950" href="#faq">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Open Prototype</Button>
            </Link>
          </div>
        </nav>
      </header>

      <section id="main-content" className="surface-grid px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-md border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-black uppercase tracking-normal text-amber-900">
              Portfolio prototype for asset-heavy field service
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-none tracking-normal text-slate-950 sm:text-6xl lg:text-7xl">
              Field service records that hold up after the job is done.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 text-pretty">
              TradesFlow helps operators visualize a cleaner workspace for customers,
              scheduled work, equipment history, service notes, deficiencies, and billing
              handoffs. It is presented honestly as a working portfolio foundation, not a
              launched SaaS with invented proof.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/simongonzalezdc/tradesflow"
                className="inline-flex items-center justify-center rounded-md bg-slate-950 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:translate-y-px sm:w-auto"
              >
                View the repository
              </a>
              <a
                href="#fit"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-lg font-semibold text-slate-800 transition-all duration-300 hover:border-slate-500 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:translate-y-px sm:w-auto"
              >
                See where it fits
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">Account setup is live. The deeper workflow is the product direction to validate with serious operators.</p>
          </div>

          <ProductPreview />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-8 sm:px-6 lg:px-8">
        <dl className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {operatingSignals.map((metric) => (
            <div key={metric.label} className="rounded-lg bg-slate-50 p-5 ring-1 ring-slate-200">
              <dt className="text-sm font-semibold text-slate-500">{metric.label}</dt>
              <dd className="mt-2 text-3xl font-black tracking-normal text-slate-950">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="workflow" className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Operating flow"
            title="From first call to clean handoff, one record keeps moving."
            body="The product direction follows the practical path an asset-heavy service team repeats every day."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <article key={step.title} className="rounded-lg bg-white p-5 ring-1 ring-slate-200">
                <span className="font-mono text-sm font-black text-amber-700">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-black tracking-normal">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-normal text-amber-300">Signature module</p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-normal sm:text-5xl">
              Equipment Passport makes service history visible.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              When a customer calls about the same system months later, the team should not be
              hunting through invoices, photos, and memory. TradesFlow keeps the asset record
              close to the work.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {productModules.map((module) => (
              <article key={module.title} className="rounded-lg bg-white/6 p-5 ring-1 ring-white/10">
                <p className="text-xs font-black uppercase tracking-normal text-amber-300">{module.eyebrow}</p>
                <h3 className="mt-3 text-xl font-black tracking-normal text-white">{module.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-300">{module.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Truthful roadmap"
            title="Strong enough to show, clear enough to trust."
            body="The public story separates what is live, what is prototype direction, and what should be validated before anyone treats this like production software."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {readiness.map(([title, body]) => (
              <article key={title} className="rounded-lg bg-white p-6 ring-1 ring-slate-200">
                <h3 className="text-xl font-black tracking-normal">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fit" className="border-y border-slate-200 bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Problem fit"
            title="Several ways operators can recognize the same workflow."
            body="The pattern is a site plus physical assets plus evidence from the field plus follow-up work. These examples are meant to make the workflow visible, not to overclaim specialization."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {fitCases.map((item) => (
              <article key={item.title} className="rounded-lg bg-[#f7f4ee] p-6 ring-1 ring-slate-200">
                <h3 className="text-xl font-black tracking-normal">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.6fr_1fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="The questions a serious collaborator should ask first."
            body="Clear expectations are part of the product. These answers explain the current state without pretending the full platform is already complete."
          />
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.q} className="rounded-lg bg-white p-5 ring-1 ring-slate-200">
                <h3 className="text-lg font-black tracking-normal">{faq.q}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg bg-slate-950 p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-xs font-black uppercase tracking-normal text-amber-300">Use it as a conversation starter</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-none tracking-normal">
              Show the workflow clearly, then decide what is worth building for real.
            </h2>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">Open account prototype</Button>
            </Link>
            <a href="https://github.com/simongonzalezdc/tradesflow/issues" className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-950 active:translate-y-px">
              Start a discussion
            </a>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </main>
  );
}

function SectionHeader({ eyebrow, title, body }: { eyebrow: string; title: string; body: string }) {
  return (
    <div className="max-w-3xl">
      <p className="text-xs font-black uppercase tracking-normal text-amber-700">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black leading-none tracking-normal text-slate-950 sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-7 text-slate-600 text-pretty">{body}</p>
    </div>
  );
}

function ProductPreview() {
  return (
    <div className="rounded-lg bg-slate-950 p-3 shadow-[0_36px_100px_-55px_rgba(15,23,42,0.95)] ring-1 ring-slate-900/10">
      <div className="rounded-md bg-[#f9faf8] p-4 ring-1 ring-white/20">
        <div className="mb-4 flex items-center justify-between border-b border-slate-200 pb-4">
          <div>
            <p className="text-xs font-black uppercase tracking-normal text-slate-500">Today</p>
            <h2 className="mt-1 text-2xl font-black tracking-normal text-slate-950">Service board</h2>
          </div>
          <div className="rounded-md bg-amber-100 px-3 py-2 text-right">
            <p className="font-mono text-lg font-black text-amber-900">7</p>
            <p className="text-xs font-semibold text-amber-900">open items</p>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {[
              ['08:30', 'Maple Ridge Apartments', 'Annual sprinkler inspection', 'Confirmed'],
              ['10:15', 'Harbor Kitchen Group', 'Walk-in cooler service', 'In progress'],
              ['13:40', 'Cedar Street Offices', 'Access-control follow-up', 'Quote needed'],
            ].map(([time, company, job, status]) => (
              <div key={company} className="rounded-lg bg-white p-4 ring-1 ring-slate-200">
                <div className="flex items-start justify-between gap-3">
                  <p className="font-mono text-sm font-black text-slate-500">{time}</p>
                  <span className="rounded-md bg-slate-100 px-2 py-1 text-xs font-bold text-slate-600">{status}</span>
                </div>
                <h3 className="mt-3 text-base font-black text-slate-950">{company}</h3>
                <p className="mt-1 text-sm text-slate-600">{job}</p>
              </div>
            ))}
          </div>

          <div className="rounded-lg bg-white p-4 ring-1 ring-slate-200">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-black uppercase tracking-normal text-blue-700">Equipment Passport</p>
                <h3 className="mt-2 text-xl font-black tracking-normal text-slate-950">Transfer switch ATS-02</h3>
                <p className="mt-1 text-sm text-slate-500">Model: TX-200 - Serial: ATS-28A</p>
              </div>
              <span className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-800">Active</span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {['Nameplate', 'Load test', 'Condition'].map((label) => (
                <div key={label} className="flex aspect-[4/3] items-end rounded-md bg-slate-100 p-2 text-xs font-bold text-slate-500 ring-1 ring-slate-200">
                  {label}
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-3">
              {[
                ['2026-05-12', 'Monthly exercise test completed. Battery replacement recommended.'],
                ['2025-10-18', 'Transfer switch cleaned and tagged for follow-up verification.'],
                ['2024-11-04', 'Initial asset record created from prior service invoice.'],
              ].map(([date, note]) => (
                <div key={date} className="grid grid-cols-[5.5rem_1fr] gap-3 border-t border-slate-100 pt-3 text-sm">
                  <p className="font-mono text-xs font-bold text-slate-500">{date}</p>
                  <p className="text-slate-700">{note}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
