# TradesFlow

TradesFlow is a portfolio prototype for asset-heavy field-service businesses: customer records, scheduled work, equipment history, service notes, deficiencies, and billing handoffs in one focused workspace.

The current public posture is intentionally honest. This is not being presented as a production SaaS with customers, published plans, or finished integrations. It is a working product foundation and a visualizable direction for small operators who need better operational memory before work turns into invoices.

Public brief: https://simongonzalezdc.github.io/tradesflow/

## Why It Exists

Small service teams often run on a messy chain of calls, texts, spreadsheets, photos, invoices, and memory. That gets especially painful when the work is recurring, asset-based, or inspection-driven: the team needs to know what was found, what was fixed, what still needs follow-up, and what should become a billable handoff.

TradesFlow explores a simpler operating record:

- Capture the caller, customer, site, and known equipment.
- Schedule the work and keep job status visible.
- Record service notes, photos, deficiencies, and asset history.
- Hand clean operational context to billing or accounting.

## Example Workflows

The strongest positioning pattern is not one narrow industry. It is a cluster of businesses where the same operational pain repeats: a site, a physical asset, recurring visits, evidence capture, unresolved findings, and a billing or accounting handoff.

Examples that fit the shape:

- **Backup power and generator service** - recurring maintenance, transfer-switch records, test logs, battery photos, repair quotes, and invoice handoff.
- **Commercial kitchen equipment service** - ovens, fryers, walk-ins, warranty notes, parts history, service photos, and repeat-call context.
- **Access-control and security integrators** - door controllers, cameras, panels, site maps, device history, follow-up quotes, and customer approvals.
- **Fire and life-safety service** - inspections, deficiencies, report-ready records, service history, and accounting handoff.

These examples are meant to help an operator visualize their own business in the workflow. They are not claims that TradesFlow is production-ready for any regulated environment yet.

## Current State

Live in the repository:

- Public GitHub Pages landing page.
- Next.js App Router application shell.
- Credentials-based authentication with JWT sessions.
- Signup/login flow and business profile creation.
- Protected route middleware for app areas.
- Prisma domain model for users, businesses, customers, appointments, invoices, equipment, service history, notifications, consent records, and audit logs.
- Data export and account deletion endpoints.
- Privacy, terms, and cookie pages for the prototype surface.

Prototype / planned next:

- Customer management UI.
- Scheduling board connected to real appointment data.
- Equipment Passport UI for model, serial, location, photos, service history, and deficiencies.
- Inspection and deficiency workflow for report-ready service records.
- Invoice handoff and QuickBooks-style accounting integration.
- Notifications and reminders.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5.4 (ES2022) |
| UI | React 19, Tailwind CSS 3.4 |
| Auth | NextAuth v4 (Credentials, JWT sessions) |
| Database | PostgreSQL via Prisma 5.14 |
| Validation | Zod |
| Forms | React Hook Form |
| Testing | Jest 29, React Testing Library 15 |
| Linting | ESLint 9 (flat config) |

## Project Structure

```text
src/
├── app/
│   ├── (auth)/              # Auth pages (login, signup)
│   ├── api/
│   │   ├── auth/            # NextAuth routes + registration
│   │   └── user/            # Data export & deletion
│   ├── auth/error/          # Auth error page
│   ├── privacy-policy/      # Privacy policy page
│   ├── terms-of-service/    # Terms of service page
│   ├── cookie-policy/       # Cookie policy page
│   ├── layout.tsx           # Root layout with SessionProvider
│   └── page.tsx             # Landing page
├── components/
│   ├── Providers.tsx        # Client-side session provider
│   ├── marketing/           # Public brand, auth, and legal shells
│   └── ui/                  # Button, Input components
├── lib/
│   ├── auth/
│   │   ├── config.ts        # NextAuth options
│   │   └── route-guards.ts  # Public/protected/auth route definitions
│   ├── db/
│   │   └── client.ts        # Prisma client singleton
│   ├── rate-limit.ts        # In-memory rate limiter
│   └── utils/
│       └── cn.ts            # Tailwind class merge utility
├── middleware.ts            # Auth middleware
├── types/
│   ├── next-auth.d.ts       # Extended session types
│   └── jest-dom.d.ts        # jest-dom type declarations
└── generated/
    └── prisma/              # Generated Prisma client
```

## Data Model

13 models covering the field-service operating record:

- **User** - accounts with roles (OWNER, TECHNICIAN, ADMIN), linked to a Business
- **Business** - company profile with slug, phone, timezone, and branding
- **Customer** - client records with contact info and address
- **Appointment** - scheduled visits with status tracking and confirmation codes
- **Invoice / InvoiceItem** - billing with draft/sent/paid/overdue lifecycle
- **Equipment** - the Equipment Passport for brand, model, serial, warranty, and photos
- **ServiceHistory** - maintenance records tied to equipment and appointments
- **PriceBookItem** - standardized service catalog entries per business
- **Notification** - reminder, confirmation, and follow-up message queue
- **Consent** - privacy consent records with timestamp, version, IP, and user agent
- **AuditLog** - data access tracking

## Privacy And Trust Foundation

TradesFlow has the beginnings of a privacy-aware account foundation:

- **Consent tracking** - signup records consent with IP, user agent, version, and timestamp.
- **Data rights endpoints** - API endpoints for data export and account deletion.
- **Audit logging model** - AuditLog is available for future operational visibility.
- **Security safeguards** - bcrypt password hashing, secure cookies, CSP headers, HSTS, and rate limiting.
- **Legal pages** - privacy, terms, and cookie pages are present for the prototype surface.

This is not a legal certification or a production compliance claim. Any real deployment would need jurisdiction-specific legal review, hosting review, and operator-specific policies before handling live customer records.

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database
- npm

### Setup

```bash
npm install
cp .env.example .env
npm run db:generate
npm run db:push
npm run dev
```

Open http://localhost:3000.

### Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `DATABASE_URL` | Yes | PostgreSQL connection string |
| `NEXTAUTH_SECRET` | Yes | Session encryption key (`openssl rand -base64 32`) |
| `NEXTAUTH_URL` | Yes | App URL (`http://localhost:3000` in dev) |

## Scripts

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
| `npm test` | Run test suite |
| `npm run test:watch` | Run tests in watch mode |
| `npm run test:coverage` | Run tests with coverage report |
| `npm run db:generate` | Regenerate Prisma client |
| `npm run db:push` | Push schema changes to DB |
| `npm run db:migrate` | Create and run migrations |
| `npm run db:studio` | Open Prisma Studio |

## Route Protection

The middleware enforces authentication:

- **Public**: `/`, `/login`, `/signup`, legal pages
- **Protected**: `/dashboard`, `/customers`, `/quotes`, `/jobs`, `/invoices`, `/reports`, `/settings`
- **Ignored**: `/api/*`, `/_next/*`, static assets

## License

Private. All rights reserved.
