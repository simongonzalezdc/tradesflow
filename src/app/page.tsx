import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { BrandLockup, MarketingFooter } from '@/components/marketing/Brand';

const operatingMetrics = [
  { value: '14 days', label: 'trial before billing' },
  { value: '$79', label: 'professional plan for up to 5 users' },
  { value: '0', label: 'per-user fees on published plans' },
  { value: '2026', label: 'core workflow rollout' },
];

const workflowSteps = [
  {
    title: 'Capture the caller',
    body: 'Create the customer, service address, notes, and known equipment before the request becomes another loose paper trail.',
  },
  {
    title: 'Schedule the work',
    body: 'Assign the appointment, status, technician, duration, and customer reminders from the same operating record.',
  },
  {
    title: 'Record the job',
    body: 'Attach service notes, photos, warranty dates, and equipment history so the next visit starts with context.',
  },
  {
    title: 'Bill cleanly',
    body: 'Turn completed work into invoices, track paid and overdue status, and keep the admin handoff visible.',
  },
];

const productModules = [
  {
    eyebrow: 'Customer record',
    title: 'One place for the call, site, and history.',
    body: 'Profiles connect contact details, service addresses, appointments, invoices, equipment, and notes so the office and field crew work from the same story.',
  },
  {
    eyebrow: 'Scheduling',
    title: 'A job board that respects technician time.',
    body: 'Status, assignment, duration, confirmations, no-shows, and reminders are designed around how small service teams actually move through a day.',
  },
  {
    eyebrow: 'Equipment Passport',
    title: 'The record that makes repeat service easier.',
    body: 'Track model, serial number, location, warranty, photos, and every service visit attached to the asset instead of scattered across texts and invoices.',
  },
  {
    eyebrow: 'Billing handoff',
    title: 'Invoices should not need detective work.',
    body: 'Line items, status, due dates, and payment tracking are built to reduce the gap between completed work and money collected.',
  },
];

const readiness = [
  ['Live foundation', 'Authentication, account setup, business profile creation, privacy consent, and route protection are in place.'],
  ['In active development', 'Customer management, scheduling, invoicing, Equipment Passport, notifications, and team management are rolling out through 2026.'],
  ['Planned integrations', 'Payments, online booking, QuickBooks sync, API access, and inventory belong after the core workflow proves itself.'],
];

const pricing = [
  {
    name: 'Starter',
    price: '$29',
    detail: 'For solo technicians getting out of spreadsheets.',
    features: ['Up to 50 customers', 'Basic invoicing', 'Appointment records', 'Email support'],
    featured: false,
  },
  {
    name: 'Professional',
    price: '$79',
    detail: 'For small teams that need shared records.',
    features: ['Unlimited customers', 'Up to 5 users', 'Equipment Passport rollout', 'SMS and email notifications'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: '$199',
    detail: 'For larger crews that need API access and support.',
    features: ['Unlimited users', 'API access', 'Custom integrations', 'Dedicated onboarding'],
    featured: false,
  },
];

const faqs = [
  {
    q: 'What is live today?',
    a: 'The account foundation is live: registration, login, business setup, privacy consent, protected routes, and data-rights endpoints. The operational modules are rolling out through 2026.',
  },
  {
    q: 'Which trades is this for?',
    a: 'TradesFlow is designed for HVAC, plumbing, electrical, roofing, appliance repair, and adjacent field-service teams that need recurring customer and equipment records.',
  },
  {
    q: 'Why focus on equipment history?',
    a: 'Repeat service depends on memory. The Equipment Passport keeps model, serial, warranty, photos, and service history attached to the asset so the next job starts faster.',
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
            <a className="transition-colors hover:text-slate-950" href="#pricing">Pricing</a>
            <a className="transition-colors hover:text-slate-950" href="#faq">FAQ</a>
          </div>
          <div className="flex items-center gap-2">
            <Link href="/login">
              <Button variant="outline" size="sm">Sign In</Button>
            </Link>
            <Link href="/signup">
              <Button size="sm">Start Free Trial</Button>
            </Link>
          </div>
        </nav>
      </header>

      <section id="main-content" className="surface-grid px-5 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="inline-flex rounded-md border border-amber-300 bg-amber-100 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-amber-900">
              Built for small trade teams
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.95] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
              Field service records that hold up after the job is done.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 text-pretty">
              TradesFlow gives small contractors a focused operating workspace for customers,
              scheduled work, equipment history, service notes, and billing handoffs. No
              enterprise maze. No mystery pricing. Just the record straight before the invoice goes out.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto">Start 14-Day Free Trial</Button>
              </Link>
              <a
                href="#workflow"
                className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-lg font-semibold text-slate-800 transition-all duration-300 hover:border-slate-500 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:translate-y-px sm:w-auto"
              >
                See the workflow
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-500">No credit card required. Core workflow modules are rolling out through 2026.</p>
          </div>

          <ProductPreview />
        </div>
      </section>

      <section className="border-y border-slate-200 bg-white px-5 py-8 sm:px-6 lg:px-8">
        <dl className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {operatingMetrics.map((metric) => (
            <div key={metric.label} className="rounded-lg bg-slate-50 p-5 ring-1 ring-slate-200">
              <dt className="text-sm font-semibold text-slate-500">{metric.label}</dt>
              <dd className="mt-2 text-3xl font-black tracking-[-0.04em] text-slate-950">{metric.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="workflow" className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Operating flow"
            title="From first call to paid invoice, one record keeps moving."
            body="The product is designed around the practical path a small field-service team repeats every day."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-4">
            {workflowSteps.map((step, index) => (
              <article key={step.title} className="rounded-lg bg-white p-5 ring-1 ring-slate-200">
                <span className="font-mono text-sm font-black text-amber-700">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-black tracking-[-0.03em]">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{step.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="bg-slate-950 px-5 py-20 text-white sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">Signature module</p>
            <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.05em] sm:text-5xl">
              Equipment Passport makes service history visible.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">
              When a customer calls about the same unit six months later, the team should not be hunting
              through invoices, texts, and memory. TradesFlow keeps the asset record close to the work.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {productModules.map((module) => (
              <article key={module.title} className="rounded-lg bg-white/6 p-5 ring-1 ring-white/10">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-amber-300">{module.eyebrow}</p>
                <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-white">{module.title}</h3>
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
            title="Clear enough for a serious buyer to trust the path."
            body="TradesFlow separates the live account foundation, the active operational build, and the integrations that come after the core workflow proves itself."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {readiness.map(([title, body]) => (
              <article key={title} className="rounded-lg bg-white p-6 ring-1 ring-slate-200">
                <h3 className="text-xl font-black tracking-[-0.03em]">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="border-y border-slate-200 bg-white px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            eyebrow="Pricing"
            title="Simple plans for the stage of the crew."
            body="Published pricing keeps the first decision easy. The Professional plan is the default fit for a small team moving beyond one-person admin."
          />
          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {pricing.map((plan) => (
              <article
                key={plan.name}
                className={`flex min-h-[28rem] flex-col rounded-lg p-6 ring-1 ${
                  plan.featured
                    ? 'bg-slate-950 text-white ring-slate-950'
                    : 'bg-[#f7f4ee] text-slate-950 ring-slate-200'
                }`}
              >
                <div className="min-h-[9rem]">
                  {plan.featured && (
                    <p className="mb-4 inline-flex rounded-md bg-amber-300 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-slate-950">
                      Recommended
                    </p>
                  )}
                  <h3 className="text-2xl font-black tracking-[-0.04em]">{plan.name}</h3>
                  <p className={`mt-3 text-sm leading-6 ${plan.featured ? 'text-slate-300' : 'text-slate-600'}`}>{plan.detail}</p>
                  <p className="mt-5">
                    <span className="text-5xl font-black tracking-[-0.055em]">{plan.price}</span>
                    <span className={plan.featured ? 'text-slate-400' : 'text-slate-500'}>/month</span>
                  </p>
                </div>
                <ul className={`mt-6 space-y-3 text-sm ${plan.featured ? 'text-slate-300' : 'text-slate-700'}`}>
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 flex-none rounded-sm bg-amber-500" aria-hidden="true" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  {plan.name === 'Enterprise' ? (
                    <a
                      href="https://github.com/simongonzalezdc/tradesflow/issues"
                      className={`inline-flex w-full items-center justify-center rounded-md px-4 py-3 text-sm font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 active:translate-y-px ${
                        plan.featured
                          ? 'bg-white text-slate-950 hover:bg-slate-100'
                          : 'border border-slate-300 bg-white text-slate-800 hover:border-slate-500'
                      }`}
                    >
                      Contact sales
                    </a>
                  ) : (
                    <Link href="/signup">
                      <Button className="w-full" variant={plan.featured ? 'secondary' : 'outline'}>
                        Start free trial
                      </Button>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="px-5 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.6fr_1fr]">
          <SectionHeader
            eyebrow="FAQ"
            title="The questions a serious buyer should ask first."
            body="Clear expectations are part of the product. These answers explain the current state without pretending the whole platform is already complete."
          />
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <article key={faq.q} className="rounded-lg bg-white p-5 ring-1 ring-slate-200">
                <h3 className="text-lg font-black tracking-[-0.025em]">{faq.q}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{faq.a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-lg bg-slate-950 p-8 text-white sm:p-10 lg:flex lg:items-center lg:justify-between lg:gap-10">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-300">Start with the record</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-none tracking-[-0.05em]">Get the work out of memory and into a system.</h2>
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">Create account</Button>
            </Link>
            <a href="https://github.com/simongonzalezdc/tradesflow/issues" className="inline-flex items-center justify-center rounded-md border border-white/20 px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-slate-950 active:translate-y-px">
              Ask a question
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
      <p className="text-xs font-black uppercase tracking-[0.22em] text-amber-700">{eyebrow}</p>
      <h2 className="mt-4 text-4xl font-black leading-none tracking-[-0.05em] text-slate-950 sm:text-5xl">{title}</h2>
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
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">Today</p>
            <h2 className="mt-1 text-2xl font-black tracking-[-0.04em] text-slate-950">Service board</h2>
          </div>
          <div className="rounded-md bg-amber-100 px-3 py-2 text-right">
            <p className="font-mono text-lg font-black text-amber-900">7</p>
            <p className="text-xs font-semibold text-amber-900">open jobs</p>
          </div>
        </div>

        <div className="grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-3">
            {[
              ['08:30', 'Northline HVAC', 'AC diagnostic', 'Confirmed'],
              ['10:15', 'Harbor Electric', 'Panel inspection', 'In progress'],
              ['13:40', 'Cedar Roofworks', 'Follow-up quote', 'Needs invoice'],
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
                <p className="text-xs font-black uppercase tracking-[0.18em] text-blue-700">Equipment Passport</p>
                <h3 className="mt-2 text-xl font-black tracking-[-0.04em] text-slate-950">Rooftop unit RTU-04</h3>
                <p className="mt-1 text-sm text-slate-500">Model: TRN-XR90 - Serial: 4C9-28A</p>
              </div>
              <span className="rounded-md bg-emerald-100 px-2 py-1 text-xs font-bold text-emerald-800">Active</span>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2">
              {['Nameplate', 'Install', 'Condition'].map((label) => (
                <div key={label} className="flex aspect-[4/3] items-end rounded-md bg-slate-100 p-2 text-xs font-bold text-slate-500 ring-1 ring-slate-200">
                  {label}
                </div>
              ))}
            </div>
            <div className="mt-5 space-y-3">
              {[
                ['2026-05-12', 'Condenser fan replaced. Warranty note attached.'],
                ['2025-10-18', 'Seasonal maintenance completed. Filter set updated.'],
                ['2024-11-04', 'Initial record created from installation invoice.'],
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
