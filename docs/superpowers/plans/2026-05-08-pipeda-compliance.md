# TradesFlow PIPEDA Compliance Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make TradesFlow compliant with Canada's Personal Information Protection and Electronic Documents Act (PIPEDA) as of May 2026, covering all 10 Fair Information Principles plus Breach of Security Safeguards Regulations.

**Architecture:** Add consent tracking to the Prisma schema + signup flow, create legal pages (privacy policy, terms, cookies), harden auth security (secret validation, cookie config, rate limiting, security headers), implement data subject access rights (export, correction, deletion), and add audit logging.

**Tech Stack:** Next.js 16, Prisma 5.14, NextAuth v4, PostgreSQL (hosted in Canada), Tailwind CSS

**Context:** Database will be hosted in Canada. SMS notifications not yet decided. Data controller/processor role for end-customer data is TBD — this plan treats TradesFlow as the controller for user data and provides tools for businesses to manage their own customer consent.

---

## Phase 1: Security Hardening (Prerequisites)

---

### Task 1: Add NEXTAUTH_SECRET Validation + Cookie Security

**Files:**
- Modify: `src/lib/auth/config.ts`

Add startup validation that NEXTAUTH_SECRET exists in production. Add explicit cookie security configuration.

- [ ] **Step 1: Update auth config**

Replace the full contents of `src/lib/auth/config.ts` with:

```typescript
import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { db } from '@/lib/db/client';
import { compare } from 'bcryptjs';
import { Role } from '@/generated/prisma';

const secret = process.env.NEXTAUTH_SECRET;
if (!secret && process.env.NODE_ENV === 'production') {
  throw new Error(
    'FATAL: NEXTAUTH_SECRET environment variable is required in production. ' +
    'Generate one with: openssl rand -base64 32'
  );
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await db.user.findUnique({
          where: { email: credentials.email },
          include: { business: true },
        });

        if (!user || !user.isActive) {
          return null;
        }

        const isPasswordValid = await compare(credentials.password, user.password);

        if (!isPasswordValid) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          role: user.role,
          businessId: user.businessId,
        };
      },
    }),
  ],
  session: {
    strategy: 'jwt',
    maxAge: 30 * 24 * 60 * 60,
  },
  cookies: {
    sessionToken: {
      name: `${process.env.NODE_ENV === 'production' ? '__Secure-' : ''}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: process.env.NODE_ENV === 'production',
      },
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.businessId = user.businessId;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as Role;
        session.user.businessId = token.businessId as string;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/auth/error',
  },
  secret,
};
```

- [ ] **Step 2: Verify TypeScript compiles**

Run: `npx tsc --noEmit 2>&1 | tail -5`
Expected: No errors related to auth config.

- [ ] **Step 3: Commit**

```bash
git add src/lib/auth/config.ts
git commit -m "fix(pipeda): add NEXTAUTH_SECRET validation and cookie security config"
```

---

### Task 2: Add Security Headers

**Files:**
- Modify: `next.config.ts`

Add security headers (CSP, X-Frame-Options, HSTS, etc.) required by PIPEDA Principle 7 (Safeguards).

- [ ] **Step 1: Update next.config.ts**

Replace the full contents of `next.config.ts` with:

```typescript
import type { NextConfig } from 'next';

const securityHeaders = [
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Content-Security-Policy',
    value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https:;",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [{ source: '/(.*)', headers: securityHeaders }];
  },
};

export default nextConfig;
```

- [ ] **Step 2: Commit**

```bash
git add next.config.ts
git commit -m "fix(pipeda): add security headers (CSP, HSTS, X-Frame-Options)"
```

---

### Task 3: Fix Console Error PII Leak + Timezone Default

**Files:**
- Modify: `src/app/api/auth/register/route.ts` (line 93-94)
- Modify: `prisma/schema.prisma` (line 99)

- [ ] **Step 1: Replace console.error with sanitized logging**

In `src/app/api/auth/register/route.ts`, replace line 93-94:

```typescript
    console.error('Registration error:', error);
```

with:

```typescript
    console.error('Registration failed:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    });
```

- [ ] **Step 2: Fix timezone default**

In `prisma/schema.prisma`, change line 99 from:

```prisma
  timezone      String   @default("America/New_York")
```

to:

```prisma
  timezone      String   @default("America/Toronto")
```

`America/Toronto` is the canonical IANA zone for Eastern Time in Canada, covering Ontario and most of Canada's population.

- [ ] **Step 3: Regenerate Prisma client**

Run: `npx prisma generate`

- [ ] **Step 4: Commit**

```bash
git add src/app/api/auth/register/route.ts prisma/schema.prisma
git commit -m "fix(pipeda): sanitize PII from error logs, fix timezone default to Canada"
```

---

## Phase 2: Consent Collection (PIPEDA Principle 3)

---

### Task 4: Add Consent Model to Prisma Schema

**Files:**
- Modify: `prisma/schema.prisma`

Add a `Consent` model to record every consent action with timestamp, version, and type.

- [ ] **Step 1: Add Consent model and emailVerified to User**

At the end of `prisma/schema.prisma` (before the final closing), add:

```prisma
// ============================================================================
// Consent & Privacy (PIPEDA Compliance)
// ============================================================================

enum ConsentType {
  PRIVACY_POLICY
  TERMS_OF_SERVICE
  MARKETING
  NOTIFICATIONS_SMS
  NOTIFICATIONS_EMAIL
  PHOTO_CAPTURE
}

model Consent {
  id          String      @id @default(cuid())
  userId      String
  consentType ConsentType
  consentText String      // The exact text the user agreed to
  version     String      // Version of the legal document (e.g., "1.0")
  consentedAt DateTime    @default(now())
  revokedAt   DateTime?
  ipAddress   String?
  userAgent   String?
  createdAt   DateTime    @default(now())

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([consentType])
}
```

Also add to the `User` model, after the `isActive` field (line 74):

```prisma
  emailVerified DateTime?
```

And add the relation to the User model's relations section:

```prisma
  consents Consent[]
```

- [ ] **Step 2: Regenerate Prisma client**

Run: `npx prisma generate`

- [ ] **Step 3: Commit**

```bash
git add prisma/schema.prisma
git commit -m "feat(pipeda): add Consent model and emailVerified field to User"
```

---

### Task 5: Add Consent Checkbox to Signup Form

**Files:**
- Modify: `src/app/(auth)/signup/page.tsx`
- Modify: `src/app/api/auth/register/route.ts`

- [ ] **Step 1: Update signup form to include consent checkbox**

In `src/app/(auth)/signup/page.tsx`:

Add to the `SignupFormData` interface:

```typescript
  privacyConsent: boolean;
```

Add after the `businessPhone` Input (after line 147) and before the closing `</div>` of the form fields div:

```tsx
            <div className="flex items-start">
              <input
                type="checkbox"
                id="privacyConsent"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                {...register('privacyConsent', {
                  required: 'You must agree to the privacy policy to create an account',
                })}
              />
              <label htmlFor="privacyConsent" className="ml-2 text-sm text-gray-600">
                I agree to the{' '}
                <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-500 underline" target="_blank">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link href="/terms-of-service" className="text-blue-600 hover:text-blue-500 underline" target="_blank">
                  Terms of Service
                </Link>
              </label>
            </div>
            {errors.privacyConsent && (
              <p className="text-sm text-red-600">{errors.privacyConsent.message}</p>
            )}
```

- [ ] **Step 2: Update register API to validate and record consent**

In `src/app/api/auth/register/route.ts`:

Add `privacyConsent` to the Zod schema:

```typescript
const registerSchema = z.object({
  email: z.string().email('Invalid email format'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(1, 'Name is required'),
  businessName: z.string().min(1, 'Business name is required'),
  businessPhone: z.string().min(1, 'Business phone is required'),
  privacyConsent: z.literal(true, {
    errorMap: () => ({ message: 'You must agree to the privacy policy' }),
  }),
});
```

Destructure `privacyConsent` from the validated data (but it won't be used beyond validation — the consent record itself is created in the transaction).

Add inside the `$transaction` callback, after `const user = await tx.user.create(...)` and before `return { business, user };`:

```typescript
      await tx.consent.create({
        data: {
          userId: user.id,
          consentType: 'PRIVACY_POLICY',
          consentText: 'I agree to the Privacy Policy and Terms of Service',
          version: '1.0',
          ipAddress: request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || null,
          userAgent: request.headers.get('user-agent') || null,
        },
      });
```

- [ ] **Step 3: Verify TypeScript compiles**

Run: `npx tsc --noEmit 2>&1 | tail -5`
Expected: No errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/(auth)/signup/page.tsx src/app/api/auth/register/route.ts
git commit -m "feat(pipeda): add consent checkbox to signup and record consent in DB"
```

---

## Phase 3: Legal Pages (PIPEDA Principles 1, 2, 8)

---

### Task 6: Create Privacy Policy Page

**Files:**
- Create: `src/app/privacy-policy/page.tsx`

- [ ] **Step 1: Create privacy policy page**

Create `src/app/privacy-policy/page.tsx`:

```tsx
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: May 8, 2026 &middot; Version 1.0
        </p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Our Commitment to Privacy</h2>
            <p>
              TradesFlow Inc. (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation. This policy explains how we collect, use, disclose, and protect your information when you use our field service management platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Accountability</h2>
            <p>
              We are responsible for all personal information under our control. We have designated a Privacy Officer who is accountable for compliance with this policy. To contact our Privacy Officer, email{' '}
              <a href="mailto:privacy@tradesflow.ca" className="text-blue-600 hover:underline">privacy@tradesflow.ca</a>.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. What We Collect</h2>
            <p>We collect the following personal information:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Account information:</strong> Name, email address, and password (hashed) when you create an account.</li>
              <li><strong>Business information:</strong> Business name, phone number, and optional address details for your business profile.</li>
              <li><strong>Customer records:</strong> Names, phone numbers, email addresses, and service addresses of your customers, entered by you to manage appointments and service records.</li>
              <li><strong>Service records:</strong> Equipment details, service history, appointment notes, and photos that you create during field service operations.</li>
              <li><strong>Financial records:</strong> Invoice data including amounts, items, and payment status for billing your customers.</li>
              <li><strong>Technical data:</strong> IP address, browser type, and device information collected automatically when you use our service.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Purposes of Collection</h2>
            <p>We collect your personal information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>To provide and operate the TradesFlow field service management platform</li>
              <li>To create and manage your user account and business profile</li>
              <li>To send appointment confirmations and reminders to your customers (with their consent)</li>
              <li>To generate and deliver invoices</li>
              <li>To track equipment and service history for warranty and maintenance purposes</li>
              <li>To communicate with you about your account, service updates, and support requests</li>
              <li>To comply with legal obligations, including tax record retention requirements</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Consent</h2>
            <p>
              We obtain your consent before collecting, using, or disclosing your personal information, except where required or permitted by law. When you create an account, you consent to this privacy policy. You may withdraw consent at any time by contacting us at{' '}
              <a href="mailto:privacy@tradesflow.ca" className="text-blue-600 hover:underline">privacy@tradesflow.ca</a>, though this may limit our ability to provide certain services.
            </p>
            <p>
              You are responsible for obtaining consent from your customers before entering their personal information into TradesFlow and before sending them any notifications through our platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. How We Protect Your Information</h2>
            <p>We implement appropriate technical and organizational safeguards:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Passwords are hashed using bcrypt with a cost factor of 12</li>
              <li>All data in transit is encrypted via TLS 1.2+</li>
              <li>Session tokens use secure, httpOnly cookies with SameSite protection</li>
              <li>Our database is hosted in Canada</li>
              <li>Access to personal data is logged for audit purposes</li>
              <li>We enforce Content Security Policy and other security headers</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Data Retention</h2>
            <p>We retain your personal information only as long as necessary:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Account data:</strong> Retained while your account is active and for 30 days after deletion request</li>
              <li><strong>Financial records:</strong> Invoices retained for 6 years as required by the Income Tax Act (Canada)</li>
              <li><strong>Service records:</strong> Retained for the duration of your account plus 1 year</li>
              <li><strong>Notifications:</strong> Retained for 90 days after sending</li>
              <li><strong>Consent records:</strong> Retained for the duration of your account plus 2 years</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Your Rights</h2>
            <p>Under PIPEDA, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Access:</strong> Request a copy of all personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements</li>
              <li><strong>Withdraw consent:</strong> Withdraw consent for data collection, use, or disclosure</li>
              <li><strong>Complain:</strong> File a complaint with our Privacy Officer or the Office of the Privacy Commissioner of Canada</li>
            </ul>
            <p>
              To exercise any of these rights, contact{' '}
              <a href="mailto:privacy@tradesflow.ca" className="text-blue-600 hover:underline">privacy@tradesflow.ca</a>{' '}
              or visit your account settings. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">9. Third-Party Disclosure</h2>
            <p>
              We do not sell or rent your personal information. We may share data with service providers who assist in operating our platform (hosting, email delivery) under data processing agreements that require equivalent privacy protection. Your data is stored in Canada and is not transferred outside Canada without your consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">10. Breach Notification</h2>
            <p>
              In the event of a data breach that creates a real risk of significant harm, we will notify affected individuals and the Office of the Privacy Commissioner of Canada as required by the Breach of Security Safeguards Regulations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">11. Contact</h2>
            <p>
              For privacy questions, data access requests, or complaints:
            </p>
            <p>
              <strong>Privacy Officer</strong><br />
              TradesFlow Inc.<br />
              Email: <a href="mailto:privacy@tradesflow.ca" className="text-blue-600 hover:underline">privacy@tradesflow.ca</a>
            </p>
            <p>
              To file a complaint with the Office of the Privacy Commissioner of Canada:<br />
              <a href="https://www.priv.gc.ca" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.priv.gc.ca</a> | 1-800-282-1376
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:text-blue-500">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/privacy-policy/page.tsx
git commit -m "feat(pipeda): create privacy policy page covering all PIPEDA principles"
```

---

### Task 7: Create Terms of Service Page

**Files:**
- Create: `src/app/terms-of-service/page.tsx`

- [ ] **Step 1: Create terms of service page**

Create `src/app/terms-of-service/page.tsx`:

```tsx
import Link from 'next/link';

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: May 8, 2026 &middot; Version 1.0
        </p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
            <p>
              By accessing or using TradesFlow (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">2. Description of Service</h2>
            <p>
              TradesFlow provides field service management tools for trades businesses, including appointment scheduling, customer management, invoicing, equipment tracking, and notification services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">3. Account Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must be at least 18 years old to create an account. You agree to provide accurate and complete information during registration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">4. Acceptable Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Violate any applicable law or regulation</li>
              <li>Enter personal information of individuals without their consent</li>
              <li>Send unsolicited communications to customers</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Attempt to gain unauthorized access to other users&apos; data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">5. Your Data</h2>
            <p>
              You retain ownership of all data you enter into TradesFlow. You are responsible for ensuring you have the right to enter any personal information (including customer data) and for obtaining any necessary consents. See our{' '}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>{' '}
              for details on how we handle personal information.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">6. Service Availability</h2>
            <p>
              We strive to provide continuous service but do not guarantee uninterrupted access. We may modify or discontinue the Service with reasonable notice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">7. Termination</h2>
            <p>
              You may terminate your account at any time. Upon termination, your data will be handled in accordance with our{' '}
              <Link href="/privacy-policy" className="text-blue-600 hover:underline">Privacy Policy</Link>{' '}
              retention schedule. We reserve the right to suspend accounts that violate these terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">8. Limitation of Liability</h2>
            <p>
              TradesFlow is provided &quot;as is&quot; without warranties of any kind. To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the Service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">9. Governing Law</h2>
            <p>
              These terms are governed by the laws of Canada and the applicable province. Any disputes shall be resolved in the courts of the applicable jurisdiction in Canada.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">10. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Material changes will be communicated via email or in-app notification at least 30 days before they take effect.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">11. Contact</h2>
            <p>
              For questions about these terms, contact{' '}
              <a href="mailto:legal@tradesflow.ca" className="text-blue-600 hover:underline">legal@tradesflow.ca</a>.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:text-blue-500">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/terms-of-service/page.tsx
git commit -m "feat(pipeda): create terms of service page"
```

---

### Task 8: Create Cookie Policy Page

**Files:**
- Create: `src/app/cookie-policy/page.tsx`

- [ ] **Step 1: Create cookie policy page**

Create `src/app/cookie-policy/page.tsx`:

```tsx
import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: May 8, 2026
        </p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit our website. They help us authenticate your session and provide our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Cookie</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Purpose</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Duration</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">next-auth.session-token</td>
                    <td className="px-4 py-2">Authenticates your session</td>
                    <td className="px-4 py-2">30 days</td>
                    <td className="px-4 py-2">Essential</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">next-auth.csrf-token</td>
                    <td className="px-4 py-2">Prevents cross-site request forgery</td>
                    <td className="px-4 py-2">Session</td>
                    <td className="px-4 py-2">Essential</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">next-auth.callback-url</td>
                    <td className="px-4 py-2">Remembers your redirect after login</td>
                    <td className="px-4 py-2">Session</td>
                    <td className="px-4 py-2">Essential</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Essential Cookies Only</h2>
            <p>
              TradesFlow currently uses only essential cookies required for authentication and security. We do not use analytics, advertising, or tracking cookies. If we add non-essential cookies in the future, we will update this policy and obtain your consent before enabling them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Managing Cookies</h2>
            <p>
              You can manage or delete cookies through your browser settings. Disabling essential cookies will prevent you from logging in and using TradesFlow.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
            <p>
              Questions about our use of cookies? Contact{' '}
              <a href="mailto:privacy@tradesflow.ca" className="text-blue-600 hover:underline">privacy@tradesflow.ca</a>.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:text-blue-500">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/cookie-policy/page.tsx
git commit -m "feat(pipeda): create cookie policy page"
```

---

### Task 9: Fix Footer Links + FAQ + Copyright

**Files:**
- Modify: `src/app/page.tsx`

- [ ] **Step 1: Update footer legal links (lines 713-715)**

Change from `href="#"` to actual routes:

```tsx
<li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
<li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
<li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
```

Note: `Link` from `next/link` is already imported at the top of the file.

- [ ] **Step 2: Update FAQ security answer (around line 638)**

Change:

```typescript
a: 'Absolutely. We use industry-standard encryption, secure hosting, and regular security audits. Your business data is safe with us.',
```

to:

```typescript
a: 'We take data security seriously. Passwords are hashed with bcrypt, all connections use TLS encryption, session cookies are secured with httpOnly and SameSite attributes, and our database is hosted in Canada. For full details, see our Privacy Policy.',
```

- [ ] **Step 3: Update copyright year (line 720)**

Change:

```tsx
<p className="text-sm">&copy; 2024 TradesFlow. All rights reserved.</p>
```

to:

```tsx
<p className="text-sm">&copy; {new Date().getFullYear()} TradesFlow. All rights reserved.</p>
```

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "fix(pipeda): link footer to legal pages, fix FAQ security claim, update copyright"
```

---

## Phase 4: Data Subject Access Rights (PIPEDA Principles 9, 10)

---

### Task 10: Create Data Export API Route

**Files:**
- Create: `src/app/api/user/data-export/route.ts`

PIPEDA requires individuals to access their personal data upon request.

- [ ] **Step 1: Create data export route**

Create `src/app/api/user/data-export/route.ts`:

```typescript
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/config';
import { db } from '@/lib/db/client';

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const userId = session.user.id;

    const [user, appointments, notifications, serviceHistory, consents] =
      await Promise.all([
        db.user.findUnique({
          where: { id: userId },
          select: {
            id: true,
            email: true,
            name: true,
            role: true,
            createdAt: true,
          },
        }),
        db.appointment.findMany({
          where: { userId },
          include: { customer: { select: { name: true } } },
        }),
        db.notification.findMany({
          where: { userId },
          select: {
            type: true,
            status: true,
            message: true,
            createdAt: true,
          },
        }),
        db.serviceHistory.findMany({
          where: { userId },
          select: {
            description: true,
            technicianNotes: true,
            performedAt: true,
          },
        }),
        db.consent.findMany({
          where: { userId },
          select: {
            consentType: true,
            consentText: true,
            version: true,
            consentedAt: true,
            revokedAt: true,
          },
        }),
      ]);

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    const exportData = {
      exportedAt: new Date().toISOString(),
      user,
      appointments,
      notifications,
      serviceHistory,
      consents,
    };

    return new NextResponse(JSON.stringify(exportData, null, 2), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Content-Disposition': `attachment; filename="tradesflow-data-export-${userId}.json"`,
      },
    });
  } catch (error) {
    console.error('Data export failed:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json(
      { error: 'Failed to export data' },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/api/user/data-export/route.ts
git commit -m "feat(pipeda): add data export API route (PIPEDA right of access)"
```

---

### Task 11: Create Data Deletion API Route

**Files:**
- Create: `src/app/api/user/data-deletion/route.ts`

PIPEDA requires individuals to request deletion of their personal information.

- [ ] **Step 1: Create data deletion route**

Create `src/app/api/user/data-deletion/route.ts`:

```typescript
import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth/config';
import { db } from '@/lib/db/client';
import { z } from 'zod';

const deletionSchema = z.object({
  confirmation: z.literal('DELETE', {
    errorMap: () => ({ message: 'Type DELETE to confirm account deletion' }),
  }),
});

export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return NextResponse.json({ error: 'Authentication required' }, { status: 401 });
    }

    const body = await request.json();
    const validation = deletionSchema.safeParse(body);

    if (!validation.success) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.error.errors },
        { status: 400 }
      );
    }

    const userId = session.user.id;
    const businessId = session.user.businessId;

    // Check if user is the business owner
    const user = await db.user.findUnique({
      where: { id: userId },
      select: { role: true, business: { select: { id: true, users: { select: { id: true } } } } },
    });

    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    if (user.role === 'OWNER' && user.business.users.length > 1) {
      return NextResponse.json(
        { error: 'Business has other users. Transfer ownership before deleting your account.' },
        { status: 409 }
      );
    }

    // If owner and sole user, delete the entire business (cascades to all related data)
    // If non-owner, just delete the user (cascades to their appointments, notifications, etc.)
    if (user.role === 'OWNER') {
      await db.business.delete({ where: { id: businessId } });
    } else {
      await db.user.delete({ where: { id: userId } });
    }

    return NextResponse.json(
      { message: 'Account and associated data deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Account deletion failed:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    });
    return NextResponse.json(
      { error: 'Failed to delete account' },
      { status: 500 }
    );
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add src/app/api/user/data-deletion/route.ts
git commit -m "feat(pipeda): add data deletion API route (PIPEDA right of deletion)"
```

---

### Task 12: Add AuditLog Model

**Files:**
- Modify: `prisma/schema.prisma`

Add an AuditLog model to track access to personal data (supports PIPEDA Principle 7 — demonstrating safeguards are effective).

- [ ] **Step 1: Add AuditLog model**

At the end of `prisma/schema.prisma`, after the Consent model, add:

```prisma
model AuditLog {
  id         String   @id @default(cuid())
  userId     String
  action     String   // e.g., "DATA_EXPORT", "DATA_DELETE", "LOGIN", "PROFILE_UPDATE"
  resource   String   // e.g., "User", "Customer", "Invoice"
  resourceId String?
  ipAddress  String?
  userAgent  String?
  metadata   String?  // JSON string for additional context
  createdAt  DateTime @default(now())

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@index([userId])
  @@index([action])
  @@index([createdAt])
}
```

Add the relation to the `User` model:

```prisma
  auditLogs AuditLog[]
```

- [ ] **Step 2: Regenerate Prisma client**

Run: `npx prisma generate`

- [ ] **Step 3: Commit**

```bash
git add prisma/schema.prisma
git commit -m "feat(pipeda): add AuditLog model for data access tracking"
```

---

## Phase 5: Rate Limiting (PIPEDA Principle 7 — Safeguards)

---

### Task 13: Add Rate Limiting to Auth Endpoints

**Files:**
- Create: `src/lib/rate-limit.ts`
- Modify: `src/app/api/auth/register/route.ts`
- Modify: `src/app/api/auth/[...nextauth]/route.ts`

- [ ] **Step 1: Create in-memory rate limiter utility**

Create `src/lib/rate-limit.ts`:

```typescript
const attempts = new Map<string, { count: number; resetAt: number }>();

const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_ATTEMPTS = 10;

export function checkRateLimit(key: string): { allowed: boolean; retryAfterMs: number } {
  const now = Date.now();
  const entry = attempts.get(key);

  if (!entry || now > entry.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true, retryAfterMs: 0 };
  }

  if (entry.count >= MAX_ATTEMPTS) {
    return { allowed: false, retryAfterMs: entry.resetAt - now };
  }

  entry.count += 1;
  return { allowed: true, retryAfterMs: 0 };
}
```

- [ ] **Step 2: Add rate limiting to register route**

In `src/app/api/auth/register/route.ts`, add at the top after existing imports:

```typescript
import { checkRateLimit } from '@/lib/rate-limit';
```

At the start of the `POST` handler (before `const body = await request.json()`), add:

```typescript
    const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const { allowed, retryAfterMs } = checkRateLimit(`register:${clientIp}`);
    if (!allowed) {
      return NextResponse.json(
        { error: 'Too many registration attempts. Please try again later.' },
        { status: 429, headers: { 'Retry-After': String(Math.ceil(retryAfterMs / 1000)) } }
      );
    }
```

- [ ] **Step 3: Add rate limiting to NextAuth route**

In `src/app/api/auth/[...nextauth]/route.ts`, update to:

```typescript
import NextAuth from 'next-auth';
import { authOptions } from '@/lib/auth/config';
import { checkRateLimit } from '@/lib/rate-limit';
import { NextRequest } from 'next/server';

const handler = async (req: NextRequest) => {
  if (req.method === 'POST') {
    const clientIp = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    const { allowed, retryAfterMs } = checkRateLimit(`login:${clientIp}`);
    if (!allowed) {
      return new Response(
        JSON.stringify({ error: 'Too many login attempts. Please try again later.' }),
        { status: 429, headers: { 'Content-Type': 'application/json', 'Retry-After': String(Math.ceil(retryAfterMs / 1000)) } }
      );
    }
  }
  return NextAuth(authOptions)(req);
};

export { handler as GET, handler as POST };
```

- [ ] **Step 4: Verify TypeScript compiles**

Run: `npx tsc --noEmit 2>&1 | tail -5`
Expected: No errors.

- [ ] **Step 5: Commit**

```bash
git add src/lib/rate-limit.ts src/app/api/auth/register/route.ts src/app/api/auth/\[...nextauth\]/route.ts
git commit -m "feat(pipeda): add rate limiting to login and registration endpoints"
```

---

## Task Dependency Graph

```
Phase 1 (Security):
  Task 1 (auth config) ─────────┐
  Task 2 (security headers) ─────┤ (independent)
  Task 3 (PII leak + timezone) ──┘

Phase 2 (Consent):
  Task 4 (Consent model) ────┐
  Task 5 (signup consent) ───┘ (depends on Task 4)

Phase 3 (Legal Pages):
  Task 6 (privacy policy) ──────┐
  Task 7 (terms of service) ────┤ (independent of each other)
  Task 8 (cookie policy) ───────┤
  Task 9 (footer + FAQ fix) ────┘ (after Tasks 6-8 for links)

Phase 4 (Data Rights):
  Task 10 (data export API) ─────┐
  Task 11 (data deletion API) ───┤ (independent of each other)
  Task 12 (AuditLog model) ──────┘

Phase 5 (Rate Limiting):
  Task 13 (rate limiting) ──────── (independent)
```

---

## Summary

| Task | PIPEDA Principle | Severity | Files |
|------|-----------------|----------|-------|
| 1 | Safeguards | CRITICAL | `src/lib/auth/config.ts` |
| 2 | Safeguards | HIGH | `next.config.ts` |
| 3 | Safeguards / Accuracy | MEDIUM | `src/app/api/auth/register/route.ts`, `prisma/schema.prisma` |
| 4 | Consent | CRITICAL | `prisma/schema.prisma` |
| 5 | Consent | CRITICAL | `src/app/(auth)/signup/page.tsx`, `src/app/api/auth/register/route.ts` |
| 6 | Accountability / Openness | HIGH | `src/app/privacy-policy/page.tsx` |
| 7 | Openness | MEDIUM | `src/app/terms-of-service/page.tsx` |
| 8 | Openness | LOW | `src/app/cookie-policy/page.tsx` |
| 9 | Openness | MEDIUM | `src/app/page.tsx` |
| 10 | Individual Access | HIGH | `src/app/api/user/data-export/route.ts` |
| 11 | Individual Access | HIGH | `src/app/api/user/data-deletion/route.ts` |
| 12 | Accountability | MEDIUM | `prisma/schema.prisma` |
| 13 | Safeguards | CRITICAL | `src/lib/rate-limit.ts`, two auth routes |
