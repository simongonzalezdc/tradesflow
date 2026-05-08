# TradesFlow

Field service management platform for Canadian trades businesses. Scheduling, invoicing, customer management, equipment tracking, and notifications — built for HVAC, plumbing, electrical, and other trades.

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

```
src/
├── app/
│   ├── (auth)/              # Auth pages (login, signup)
│   ├── api/
│   │   └── auth/            # NextAuth routes + registration
│   │   └── user/            # Data export & deletion (PIPEDA)
│   ├── auth/error/          # Auth error page
│   ├── privacy-policy/      # Privacy policy page
│   ├── terms-of-service/    # Terms of service page
│   ├── cookie-policy/       # Cookie policy page
│   ├── layout.tsx           # Root layout with SessionProvider
│   └── page.tsx             # Landing page
├── components/
│   ├── Providers.tsx        # Client-side session provider
│   └── ui/                  # Button, Input components
├── lib/
│   ├── auth/
│   │   ├── config.ts        # NextAuth options (providers, callbacks, cookies)
│   │   └── route-guards.ts  # Public/protected/auth route definitions
│   ├── db/
│   │   └── client.ts        # Prisma client singleton
│   ├── rate-limit.ts        # In-memory rate limiter
│   └── utils/
│       └── cn.ts            # Tailwind class merge utility
├── middleware.ts             # Auth middleware (route protection)
├── types/
│   ├── next-auth.d.ts       # Extended session types (businessId, role)
│   └── jest-dom.d.ts        # jest-dom type declarations
└── generated/
    └── prisma/              # Generated Prisma client
```

## Data Model

13 models covering the full field service lifecycle:

- **User** — accounts with roles (OWNER, TECHNICIAN, ADMIN), linked to a Business
- **Business** — company profile with slug, phone, timezone, branding
- **Customer** — client records with contact info and address
- **Appointment** — scheduled visits with status tracking and confirmation codes
- **Invoice / InvoiceItem** — billing with draft/sent/paid/overdue lifecycle
- **Equipment** — the Equipment Passport (brand, model, serial, warranty, photos)
- **ServiceHistory** — maintenance records tied to equipment and appointments
- **PriceBookItem** — standardized service pricing per business
- **Notification** — reminder/confirmation/follow-up message queue
- **Consent** — PIPEDA consent records with timestamp, version, IP, user agent
- **AuditLog** — data access tracking for compliance

## Getting Started

### Prerequisites

- Node.js 20+
- PostgreSQL database
- npm

### Setup

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your DATABASE_URL and NEXTAUTH_SECRET

# Generate Prisma client
npm run db:generate

# Push schema to database (dev)
npm run db:push

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

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

## PIPEDA Compliance

TradesFlow is designed for compliance with Canada's Personal Information Protection and Electronic Documents Act:

- **Consent tracking** — every signup records consent with IP, user agent, version, and timestamp
- **Data subject rights** — API endpoints for data export and account deletion
- **Audit logging** — AuditLog model tracks access to personal data
- **Security safeguards** — bcrypt password hashing, secure cookies, TLS, CSP headers, HSTS, rate limiting
- **Legal pages** — privacy policy, terms of service, cookie policy covering all 10 PIPEDA principles
- **Data residency** — database hosted in Canada, no cross-border transfers without consent

## Route Protection

The middleware enforces authentication:

- **Public**: `/`, `/login`, `/signup`, legal pages
- **Protected**: `/dashboard`, `/customers`, `/quotes`, `/jobs`, `/invoices`, `/reports`, `/settings`
- **Ignored**: `/api/*`, `/_next/*`, static assets

## License

Private. All rights reserved.
