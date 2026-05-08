# TradesFlow Technical Specifications

**For IT and Security Reviewers**

---

## Architecture Overview

### Technology Stack

| Layer | Technology | Version |
|-------|------------|---------|
| **Framework** | Next.js (App Router) | 16.2.4 |
| **UI Framework** | React | 19.2.6 |
| **Styling** | Tailwind CSS | 3.4.3 |
| **Database** | PostgreSQL | Latest |
| **ORM** | Prisma | 5.14.0 |
| **Authentication** | NextAuth.js | 4.24.7 |
| **Password Hashing** | bcryptjs | 2.4.3 |
| **Validation** | Zod | 3.23.8 |
| **Forms** | React Hook Form | 7.51.5 |
| **Language** | TypeScript | 5.4.5 |
| **Testing** | Jest + React Testing Library | 29 / 15 |
| **Linting** | ESLint | 9 (flat config) |

### Deployment Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Production Environment                   │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│   ┌─────────────┐     ┌─────────────┐     ┌─────────────┐  │
│   │   Vercel    │────▶│  Next.js    │────▶│ PostgreSQL  │  │
│   │   (CDN/Edge)│     │  App Server │     │  (Canada)   │  │
│   └─────────────┘     └─────────────┘     └─────────────┘  │
│         │                    │                    │         │
│         │                    │                    │         │
│         ▼                    ▼                    ▼         │
│   ┌───────────┐     ┌───────────────┐    ┌─────────────┐   │
│   │   HTTPS   │     │  JWT Session  │    │  Encrypted  │   │
│   │   TLS     │     │  (httpOnly)   │    │  at Rest    │   │
│   └───────────┘     └───────────────┘    └─────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Authentication System

### Implementation Details

| Component | Implementation |
|-----------|----------------|
| Provider | Credentials (email/password) |
| Session Strategy | JWT |
| Session Duration | 30 days |
| Password Storage | bcrypt (12 rounds) |
| Token Storage | httpOnly, Secure, SameSite=Lax cookies |
| Rate Limiting | 10 attempts per 15 minutes per IP |

### Session Management

```typescript
session: {
  strategy: 'jwt',
  maxAge: 30 * 24 * 60 * 60, // 30 days
},
cookies: {
  sessionToken: {
    name: '__Secure-next-auth.session-token', // production
    options: {
      httpOnly: true,
      sameSite: 'lax',
      path: '/',
      secure: true, // production only
    },
  },
}
```

### JWT Token Contents

| Claim | Description |
|-------|-------------|
| id | User unique identifier |
| email | User email address |
| role | OWNER | ADMIN | TECHNICIAN |
| businessId | Business context for multi-tenancy |

### Password Security

- **Algorithm**: bcrypt
- **Cost Factor**: 12 rounds
- **Minimum Length**: 8 characters
- **Requirements**: Email + password required
- **Secret Validation**: NEXTAUTH_SECRET validated at runtime in production

---

## Data Model

### Entity Relationship Diagram

```
┌─────────────┐       ┌─────────────┐
│   Business  │◀──────│    User     │
└──────┬──────┘       └──────┬──────┘
       │                     │
       │                     │
       ▼                     ▼
┌─────────────┐       ┌─────────────┐
│   Customer  │◀──────│ Appointment │
└──────┬──────┘       └──────┬──────┘
       │                     │
       │              ┌──────┴──────┐
       │              │             │
       ▼              ▼             ▼
┌─────────────┐ ┌───────────┐ ┌───────────────┐
│  Equipment  │ │  Invoice  │ │ Notification  │
└──────┬──────┘ └─────┬─────┘ └───────────────┘
       │              │
       ▼              ▼
┌───────────────┐ ┌─────────────┐     ┌─────────────┐
│ServiceHistory │ │InvoiceItem  │     │PriceBookItem │
└───────────────┘ └─────────────┘     └─────────────┘

       ┌─────────────┐     ┌─────────────┐
       │   Consent   │     │  AuditLog   │
       └─────────────┘     └─────────────┘
```

### Core Models

#### User

| Field | Type | Description |
|-------|------|-------------|
| id | String (CUID) | Unique identifier |
| email | String | Login email (unique) |
| password | String | bcrypt hash |
| name | String | Display name |
| role | Enum | OWNER, ADMIN, TECHNICIAN |
| isActive | Boolean | Account status |
| emailVerified | DateTime? | Email verification timestamp |
| businessId | String | Business association |

#### Business

| Field | Type | Description |
|-------|------|-------------|
| id | String (CUID) | Unique identifier |
| name | String | Business name |
| slug | String | URL-safe identifier (unique) |
| phone | String | Business phone |
| timezone | String | Business timezone (default: America/Toronto) |
| primaryColor | String | Brand color (default: #3B82F6) |

#### Customer

| Field | Type | Description |
|-------|------|-------------|
| id | String (CUID) | Unique identifier |
| name | String | Customer name |
| phone | String | Contact phone |
| email | String? | Contact email (optional) |
| address | String? | Service address |
| businessId | String | Business association |

#### Equipment (Equipment Passport)

| Field | Type | Description |
|-------|------|-------------|
| id | String (CUID) | Unique identifier |
| type | Enum | HVAC, PLUMBING, ELECTRICAL, APPLIANCE, ROOFING, OTHER |
| brand | String? | Manufacturer |
| model | String? | Model number |
| serialNumber | String? | Serial number |
| installDate | DateTime? | Installation date |
| warrantyExpires | DateTime? | Warranty expiration |
| photos | String[] | Photo URLs |
| customerId | String | Customer association |

#### Consent (PIPEDA)

| Field | Type | Description |
|-------|------|-------------|
| id | String (CUID) | Unique identifier |
| userId | String | User who consented |
| consentType | Enum | PRIVACY_POLICY, TERMS_OF_SERVICE, MARKETING, etc. |
| consentText | String | Exact text agreed to |
| version | String | Document version (e.g., "1.0") |
| consentedAt | DateTime | When consent was given |
| revokedAt | DateTime? | When consent was withdrawn |
| ipAddress | String? | Client IP at time of consent |
| userAgent | String? | Client browser at time of consent |

#### AuditLog

| Field | Type | Description |
|-------|------|-------------|
| id | String (CUID) | Unique identifier |
| userId | String | User who performed action |
| action | String | DATA_EXPORT, DATA_DELETE, LOGIN, etc. |
| resource | String | User, Customer, Invoice, etc. |
| resourceId | String? | ID of affected record |
| ipAddress | String? | Client IP |
| createdAt | DateTime | When action occurred |

---

## API Structure

### Current REST Endpoints

#### Authentication

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/auth/register | Create new account (with consent recording) |
| POST | /api/auth/signin | Authenticate user (rate limited) |
| POST | /api/auth/signout | End session |
| GET | /api/auth/session | Get current session |

#### Data Subject Rights (PIPEDA)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/user/data-export | Export all personal data as JSON |
| POST | /api/user/data-deletion | Delete account and associated data |

### Planned Endpoints

#### Customers (Wave 2)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/customers | List customers |
| POST | /api/customers | Create customer |
| GET | /api/customers/:id | Get customer details |
| PUT | /api/customers/:id | Update customer |
| DELETE | /api/customers/:id | Delete customer |

#### Appointments (Wave 3)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/appointments | List appointments |
| POST | /api/appointments | Create appointment |
| GET | /api/appointments/:id | Get appointment |
| PUT | /api/appointments/:id | Update appointment |
| PATCH | /api/appointments/:id/status | Update status |

#### Invoices (Wave 4)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/invoices | List invoices |
| POST | /api/invoices | Create invoice |
| GET | /api/invoices/:id | Get invoice |
| PUT | /api/invoices/:id | Update invoice |
| POST | /api/invoices/:id/send | Send invoice |

#### Equipment (Wave 5)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/equipment | List equipment |
| POST | /api/equipment | Create equipment |
| GET | /api/equipment/:id | Get equipment |
| PUT | /api/equipment/:id | Update equipment |
| POST | /api/equipment/:id/photos | Upload photos |

---

## Security Measures

### HTTP Security Headers

All responses include:

| Header | Value |
|--------|-------|
| Content-Security-Policy | default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; ... |
| Strict-Transport-Security | max-age=63072000; includeSubDomains; preload |
| X-Frame-Options | DENY |
| X-Content-Type-Options | nosniff |
| Referrer-Policy | strict-origin-when-cross-origin |
| Permissions-Policy | camera=(), microphone=(), geolocation=() |

### In Transit

- HTTPS/TLS for all connections
- HSTS headers with preload
- Secure cookie flags (httpOnly, Secure, SameSite=Lax)

### At Rest

- Database encryption enabled
- Password hashing via bcrypt (cost factor 12)
- NEXTAUTH_SECRET required in production (validated at startup)

### Authentication

- bcrypt password hashing (12 rounds)
- JWT tokens with 30-day expiry
- Rate limiting: 10 login/register attempts per 15 minutes per IP
- NEXTAUTH_SECRET validated at runtime

### Application

- Input validation on all endpoints (Zod)
- SQL injection prevention (Prisma parameterized queries)
- XSS prevention (React automatic escaping + CSP headers)
- CSRF protection (SameSite cookies + CSRF tokens)
- Sanitized error logging (no PII in console output)
- Atomic database transactions for critical operations (registration)

---

## PIPEDA Compliance

TradesFlow is designed for compliance with Canada's Personal Information Protection and Electronic Documents Act. Database is hosted in Canada.

| PIPEDA Principle | Implementation |
|-----------------|----------------|
| 1. Accountability | Designated Privacy Officer (privacy@YOUR_DOMAIN), AuditLog model |
| 2. Identifying Purposes | Privacy policy lists all collection purposes |
| 3. Consent | Consent model with timestamp, version, IP, user agent; required at signup |
| 4. Limiting Collection | Only data necessary for service is collected |
| 5. Limiting Use/Disclosure | No data sold; data processing agreements with providers |
| 6. Accuracy | User-editable profiles, data correction available |
| 7. Safeguards | bcrypt, TLS, secure cookies, CSP headers, rate limiting, audit logs |
| 8. Openness | Public privacy policy, terms of service, cookie policy |
| 9. Individual Access | Data export API (GET /api/user/data-export) |
| 10. Challenging Compliance | Complaint process to Privacy Officer and OPC |

### Breach Notification

In the event of a data breach creating real risk of significant harm, affected individuals and the Office of the Privacy Commissioner of Canada will be notified as required by the Breach of Security Safeguards Regulations.

### Data Retention

| Data Type | Purpose | Retention |
|-----------|---------|-----------|
| User credentials | Authentication | Account lifetime |
| Business info | Account management | Account lifetime |
| Customer data | Service delivery | Account lifetime + 30 days |
| Equipment records | Service history | Account lifetime |
| Appointment data | Scheduling | Account lifetime + 1 year |
| Invoice data | Financial records | 6 years (Income Tax Act) |
| Consent records | Compliance | Account lifetime + 2 years |
| Audit logs | Security | Account lifetime + 2 years |

---

## Hosting & Infrastructure

### Current Setup

| Component | Provider | Configuration |
|-----------|----------|---------------|
| Application Hosting | Vercel | Serverless functions |
| Database | Managed PostgreSQL | Encrypted at rest, hosted in Canada |
| File Storage | Cloud storage | Encrypted |
| CDN | Vercel Edge | Global distribution |

### Scalability

- **Horizontal Scaling**: Vercel handles automatically
- **Database**: Can scale vertically; read replicas available
- **File Storage**: Unlimited with cloud provider
- **Rate Limiting**: Per-endpoint limits (10 requests / 15 min / IP)

---

## Route Protection

| Route Pattern | Access | Examples |
|--------------|--------|---------|
| `/`, `/login`, `/signup`, legal pages | Public | Landing, auth, privacy policy |
| `/dashboard`, `/customers`, `/invoices`, etc. | Authenticated | All business routes |
| `/api/*` | API-level auth | Data export, deletion require session |

---

## Access Controls

| Role | Customer Data | Business Data | User Data |
|------|---------------|---------------|-----------|
| Owner | Full | Full | Full |
| Admin | Full | Limited | Own only |
| Technician | Assigned jobs | None | Own only |

---

## Compliance

| Standard | Status |
|----------|--------|
| PIPEDA | Implemented (consent, access, deletion, audit logging) |
| GDPR (Data Export/Deletion) | Compatible with PIPEDA implementation |
| SOC 2 Type I | Not started |
| SOC 2 Type II | Not started |

---

## Integration Capabilities

### Current

| Integration | Method | Notes |
|-------------|--------|-------|
| NextAuth | Built-in | Credentials provider |

### Planned (2026)

| Integration | Method | ETA |
|-------------|--------|-----|
| SMS Notifications | TBD | 2026 |
| Stripe | API | Payment processing |
| QuickBooks | API | Accounting sync |
| Email | SMTP/API | Transactional emails |

---

## Technical Support

### For IT Teams

- **Documentation**: README and inline code documentation
- **Security Inquiries**: security@YOUR_DOMAIN
- **Privacy Officer**: privacy@YOUR_DOMAIN
- **Enterprise Support**: Dedicated channel for Enterprise customers

### Onboarding Assistance

- CSV data import support
- User provisioning guidance
- Custom integration consultation

---

## Questions?

**Technical Inquiries**: support@YOUR_DOMAIN
**Security Concerns**: security@YOUR_DOMAIN
**Privacy Officer**: privacy@YOUR_DOMAIN

---

*Last updated: May 2026. For the most current technical information, contact our team.*
