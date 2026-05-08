# TradesFlow — Unfiltered Adversarial Audit

**Confidential. Not for external distribution.**

---

## Executive Summary

This audit found **critical issues that must be addressed before any sales materials are shared with investors, partners, or customers.** The gap between what the sales package claims and what the codebase actually delivers is severe. Below is every hole, every vulnerability, and every competitive attack vector — no punches pulled.

---

## SECTION 1: CODEBASE REALITY vs. SALES CLAIMS

### What Actually Exists (Verified by Code Inspection)

The entire TradesFlow product consists of:

| Component | Status | Evidence |
|-----------|--------|----------|
| Landing page | Built | `src/app/page.tsx` — 745 lines, marketing page |
| Login page | Built | `src/app/(auth)/login/page.tsx` — 129 lines |
| Signup page | Built | `src/app/(auth)/signup/page.tsx` — 174 lines |
| Registration API | Built | `src/app/api/auth/register/route.ts` — creates user + business |
| Database schema | Designed | `prisma/schema.prisma` — 302 lines, 10 models defined |
| UI components | Minimal | `Button.tsx`, `Input.tsx` — 2 components total |
| Test suite | Exists | 10 test files, ~269 test cases (mostly schema validation + UI components) |

**Total source code: ~1,562 lines across ~13 files.**

### What Does NOT Exist (But Is Claimed as Available or Coming Soon)

| Claimed Feature | Sales Material Says | Reality |
|----------------|--------------------|---------|
| Customer Management | "Live — complete customer profiles" | **Zero code.** No routes, no pages, no API. |
| Appointment Scheduling | "Visual calendar, status tracking" | **Zero code.** No routes, no pages, no API. |
| Invoicing | "One-click invoices, payment tracking" | **Zero code.** No routes, no pages, no API. |
| Equipment Passport | "Full equipment tracking with photos" | **Zero code.** No routes, no pages, no API. |
| Automated Notifications | "SMS/email reminders via Twilio" | Twilio is in `package.json` but **zero notification code exists.** |
| Price Book | "Flat-rate catalog with time estimates" | **Zero code.** Schema model exists, no implementation. |
| Team Management | "Owner/Admin/Technician roles" | Schema has roles. **No UI to add/remove users or assign roles.** |
| Dashboard | Referenced in route guards | **Page does not exist.** |
| Business Settings | "Company name, logo, colors, timezone" | Schema has fields. **No settings page.** |
| Mobile App | "Q4 2026" | **Zero mobile code.** No React Native, Capacitor, or PWA. |

### The Database Schema is Well-Designed — But Unused

The Prisma schema at `prisma/schema.prisma` defines 10 models and 6 enums. It's thoughtful and complete. But no application code reads from or writes to any of these tables except `User` and `Business`. The schema is a blueprint, not a building.

---

## SECTION 2: FABRICATED METRICS — CRITICAL LEGAL EXPOSURE

### The Claims

The landing page (`src/app/page.tsx`, lines 82-92), executive brief, and all sales materials display:

> - 500+ Active Businesses
> - 50,000+ Jobs Completed
> - $15M+ Invoices Processed
> - 4.9/5 Customer Rating

### The Reality

**These numbers appear to be fabricated. Evidence:**

1. No customer management code exists — there are no customers.
2. No scheduling code exists — there are no jobs.
3. No invoicing code exists — there are no invoices.
4. No payment processing exists — no money has been processed.
5. No production deployment exists — no live product to have customers on.
6. The `.env.example` points to `localhost:5432` — this is a local development project.
7. No analytics, reporting, or billing code exists that could track these metrics.

The testimonials on the landing page ("Mike Rodriguez, Owner, Rodriguez HVAC", "Sarah Chen, Owner, Chen Electric", "David Thompson, Thompson Plumbing") also appear to be fabricated — there is no customer data, no review system, and no way these could be real.

### Legal/Regulatory Risk

These claims create exposure under:

- **FTC Act Section 5** — False or misleading advertising. Displaying fabricated business metrics and testimonials to attract customers or investors is deceptive.
- **SEC regulations** — If these materials are shared with investors, fabricated metrics could constitute securities fraud.
- **State consumer protection laws** — Most states have their own deceptive trade practices acts with penalties.
- **Lanham Act** — Competitors could challenge false comparative advertising claims.
- **Common law fraud** — Misrepresentation of material facts in business dealings.

**Recommendation: Remove all fabricated metrics and testimonials immediately, or replace with accurate "vision/roadmap" language.**

---

## SECTION 3: COMPETITIVE INTELLIGENCE — WHAT THE COMPETITION WILL SAY

### ServiceTitan (NASDAQ: TTAN) — The 800-Pound Gorilla

**Real pricing:** $245-$500+/technician/month. NOT $398 for 5 users total — that's per user.

**What they'll say to kill TradesFlow:**
1. "We process $68.5 billion in transactions. TradesFlow processes nothing."
2. "We have 100 million service calls training our AI. TradesFlow has no AI."
3. "We're a public company with 9,500+ customers. TradesFlow has unverified claims."
4. "Our equipment tracking handles complex multi-location assets. TradesFlow's doesn't exist."
5. "We have integrated payments, financing, and insurance. TradesFlow has none of this."
6. "You'll outgrow TradesFlow in 6 months. Migration will cost $50K+."

**ServiceTitan's real weaknesses (exploitable):**
- BBB rating: 1/5 stars (21 reviews). "Customer support is atrocious."
- 3-4 month implementation. $5K-$50K onboarding fees.
- Customers call it "basically a micromanagement tool"
- Steep learning curve, expensive add-ons
- Forces updates that overwhelm users

**Their pricing is actually worse than claimed in TradesFlow's sales materials.** TradesFlow understates ServiceTitan's cost. For 5 techs on Essentials: $1,500-$2,000/month ($18K-$24K/year), plus implementation fees. TradesFlow could be more aggressive here.

### Housecall Pro — The SMB Competitor

**Real pricing (2026):**
- Basic: $59/mo (1 user)
- Essentials: $129/mo (up to 5 users)
- Max: $299/mo (up to 15 users)

**What they'll say:**
1. "We have a working product with 100K+ businesses. TradesFlow is pre-launch."
2. "We have online booking today. TradesFlow doesn't."
3. "We have GPS tracking and drag-and-drop scheduling. TradesFlow has neither."
4. "Our QuickBooks integration works now."

**Housecall Pro weaknesses:**
- Trustpilot: 3.0/5 (574 reviews). "Predatory billing practices."
- Payment processing problems
- Limited reporting/analytics
- Manual invoicing is tedious
- No true equipment tracking

**TradesFlow's claim that Housecall Pro is "$199+/mo for 5 users" is inaccurate.** Essentials tier is $129/mo for up to 5 users. TradesFlow's sales materials overstate the competitor's price, which undermines credibility.

### Jobber — The Small Business Favorite

**Real pricing (2026):**
- Core: $39/mo (1 user)
- Connect: $119/mo (up to 5 users)
- Grow: $199/mo (up to 15 users)
- $29/mo per additional user

**What they'll say:**
1. "We have 250,000+ professionals on our platform."
2. "Our product actually works. TradesFlow is vaporware."
3. "We're $119/mo for 5 users — TradesFlow's $79 claim requires proof of value."

**Jobber weaknesses:**
- BBB: F rating (7 complaints)
- "$68,000 client payment automatically refunded"
- QuickBooks sync is ONE-WAY only (Jobber → QB, not bidirectional)
- Per-user pricing escalates fast
- No real equipment tracking (confirms TradesFlow's differentiator — if it existed)

**TradesFlow's claim that Jobber is "$249+/mo for 5 users" is inaccurate.** Connect tier is $119/mo for 5 users. Again, the sales materials overstate competitor pricing, which is a credibility risk.

### FieldEdge — The QuickBooks Specialist

**Real pricing:** Custom quote, ~$100-$125/user/month + $500 setup fee.

**Their superpower:** Bidirectional QuickBooks sync — the deepest in the industry. They invented it.

**What they'll say:**
1. "We have real equipment tracking by customer location — not vaporware."
2. "Our QuickBooks sync is bidirectional and real-time. TradesFlow has nothing."
3. "Our app works offline. TradesFlow doesn't even have a mobile app."

**FieldEdge weaknesses:**
- Dated interface
- Locked into Clearent payment processor
- Limited reporting
- Costly for small teams

### Service Fusion — The Dark Horse

**Pricing:** $245-$489/month with **unlimited users** (no per-user fees).

**This directly undercuts TradesFlow's "no per-user fees" differentiator.**

### New Entrants (2024-2026)

- **QuoteIQ:** Founded by contractors, $29.99/mo flat, all-in-one
- **Fieldr:** AI-driven, $10-$20/mo
- **Service Storm:** No monthly fees, per-job model

These newer entrants are cheaper, AI-native, and targeting the same market.

---

## SECTION 4: PRICING CLAIMS THAT DON'T HOLD UP

### TradesFlow's Competitor Pricing Table vs. Reality

| Competitor | TradesFlow Claims | Actual Price (5 users) | Discrepancy |
|-----------|-------------------|----------------------|-------------|
| ServiceTitan | $398+/mo | $1,500-$2,000+/mo | TradesFlow **understates** (better for TradesFlow) |
| Housecall Pro | $199+/mo | $129/mo (Essentials, 5 users) | TradesFlow **overstates by 54%** |
| Jobber | $249+/mo | $119/mo (Connect, 5 users) | TradesFlow **overstates by 109%** |

**The Housecall Pro and Jobber prices are wrong.** This is a credibility landmine. If a prospect checks pricing on competitor websites, they'll catch the discrepancy immediately and question everything else.

---

## SECTION 5: MARKET STATISTIC VERIFICATION

### "40% of service quotes never convert due to lack of follow-up"

**Verdict: Actually conservative. Real data suggests 60-75% non-conversion.**

Sources: Leap/Estimate Rocket 2023 Home Services Sales Report, HubSpot sales follow-up research (80% of sales require 5-12 follow-ups, 44% of salespeople give up after 1).

**Safe to keep, but should cite sources or soften to "industry studies suggest 40-60%."**

### "$20,000+ annual cost of scheduling problems"

**Verdict: True, possibly understated.**

Sources: FieldAx research shows manual scheduling wastes 15 hrs/week = ~$30K/year. Poor routing costs up to 20% of annual revenue. Failed visits cost 25-44% of total service costs.

**Safe to keep.**

---

## SECTION 6: TECHNICAL VULNERABILITIES

### No Production Deployment
- No Vercel config, no CI/CD, no deployment scripts
- `.env.example` points to localhost PostgreSQL
- No production environment variables
- `docker-compose.yml` only has PostgreSQL

### No Security Hardening
- No rate limiting
- No CSRF protection beyond NextAuth defaults
- No input sanitization beyond Zod validation
- No audit logging
- No security headers configured
- Session tokens have 30-day expiration with no refresh mechanism

### No Data Migration Strategy
- No import/export functionality
- No CSV parser
- No QuickBooks sync code
- Competitors will use this as a switching cost weapon: "You'll never get your data out."

### No Error Handling or Monitoring
- No Sentry, Datadog, or equivalent
- No error boundaries in React components
- No logging infrastructure
- No health check endpoints

### No Scalability Plan
- Single database instance
- No caching layer
- No CDN configuration
- No load balancing

---

## SECTION 7: COMPETITIVE ATTACK MATRIX

### What Each Competitor Will Lead With

| Attack | ServiceTitan | Housecall Pro | Jobber | FieldEdge |
|--------|-------------|---------------|--------|-----------|
| "They're pre-launch" | **Yes** | **Yes** | **Yes** | Maybe |
| "Their metrics are fake" | **Yes** | **Yes** | **Yes** | Maybe |
| "You'll outgrow them" | **Yes** | **Yes** | Maybe | No |
| "No payments integration" | **Yes** | **Yes** | Yes | **Yes** |
| "No QuickBooks sync" | Maybe | **Yes** | Maybe | **Yes** |
| "No AI/predictive" | **Yes** | Maybe | Maybe | No |
| "No mobile app" | **Yes** | **Yes** | **Yes** | **Yes** |
| "We'll match their price" | **Yes** | **Yes** | **Yes** | **Yes** |

**Column "Yes" = this is the most dangerous attack that competitor will use.**

### The Deadliest Single Attack

>"TradesFlow has no working product. Their own website claims 500 businesses and $15M processed, but their code has zero customer management, zero invoicing, and zero scheduling. You'd be buying a prototype, not a platform."

This attack is **irrefutable** based on the current codebase.

---

## SECTION 8: WHAT CUSTOMERS WILL ASK THAT CAN'T BE ANSWERED

1. "Can I see a live demo with real data?"
2. "How many active customers do you actually have?"
3. "Can I talk to a current customer for a reference?"
4. "What happens to my data if you go out of business?"
5. "How do I migrate my data from [current software]?"
6. "When exactly will [feature X] ship? Can you guarantee that?"
7. "Where is your SOC 2 compliance documentation?"
8. "What's your uptime SLA?"
9. "How do you handle GDPR data requests?"
10. "Can I see your terms of service and privacy policy?"

**None of these can be answered with the current state of the product.**

---

## SECTION 9: RECOMMENDATIONS — PRIORITIZED

### CRITICAL (Do Before Sharing Any Materials)

1. **Remove or reframe all fabricated metrics.** Replace "500+ Active Businesses" with honest language like "Building the future of trade management" or "Currently in development." The current claims are legally toxic.

2. **Remove fabricated testimonials.** "Sarah Chen, Chen Electric" and others do not appear to be real. Using fake testimonials is illegal under FTC guidelines (16 CFR Part 255).

3. **Fix competitor pricing data.** Housecall Pro is $129/mo for 5 users (not $199+). Jobber is $119/mo for 5 users (not $249+). Get current pricing from each competitor's website and update.

4. **Add clear "in development" labeling.** The sales materials mix "what exists" with "what's planned" without clear distinction. The product guide reads like everything is available. Add clear "Available Now" / "Planned" / "Roadmap" labels.

5. **Create legal documents.** Terms of service, privacy policy, and cookie policy are required before any product can be offered. None exist.

### HIGH PRIORITY (Before Any Customer-Facing Launch)

6. **Build customer management first.** This is Wave 2 and the foundation for everything else. Without customers, there are no appointments, invoices, or equipment records.

7. **Build basic invoicing.** Even a simple PDF invoice generator adds real value and credibility.

8. **Implement data export.** Even a CSV export shows you take data portability seriously and counters the "you'll never get your data out" attack.

9. **Add a "We're building in public" page.** Transparency about development status builds trust and defuses the "vaporware" attack. Consider a public changelog or roadmap page.

10. **Get at least one real beta customer.** Even a free pilot with one trade business gives you a real testimonial and real usage data.

### MEDIUM PRIORITY (Before Competing Seriously)

11. **Build the Equipment Passport.** This is the claimed differentiator. Without it, there's nothing to distinguish TradesFlow from cheaper alternatives like QuoteIQ ($29.99/mo) or Fieldr ($10-$20/mo).

12. **Add integrated payments.** This is table stakes. Every competitor has it. Without payments, TradesFlow can't process revenue or take a transaction cut.

13. **Implement basic QuickBooks sync.** Even one-way (TradesFlow → QB) removes a major objection.

14. **Build a mobile-responsive PWA.** Full native apps are expensive. A PWA gives 80% of the benefit at 20% of the cost.

15. **Add AI features.** The market is moving toward AI-native tools. Even basic AI (smart scheduling suggestions, follow-up recommendations) prevents the "no AI" attack.

---

## SECTION 10: THE UNCOMFORTABLE TRUTH

TradesFlow has:
- A well-designed database schema
- A solid authentication foundation
- A beautiful landing page
- Comprehensive sales materials
- A clear vision for the market

TradesFlow does NOT have:
- A working product beyond signup/login
- Any real customers or usage data
- Any of the features described in the sales materials
- Legal documentation (ToS, privacy policy)
- Production infrastructure
- Any competitive moat beyond pricing claims that are undercut by competitors like Service Fusion

**The sales package describes a product that is 90% aspirational. The adversarial audit in the sales package (document 05) admits some gaps but dramatically understates the reality.**

The good news: the schema and auth foundation are solid. The vision is clear. The market opportunity is real (ServiceTitan customers hate the price and complexity). But the gap between the sales materials and the codebase is a liability that needs to be closed before anyone sees these materials.

---

*This audit was conducted by inspecting all source code, database schemas, test files, configuration files, and deployment artifacts in the TradesFlow repository, combined with public competitive intelligence gathered from competitor websites, review platforms (Trustpilot, BBB, G2, Capterra), industry reports, and community forums (Reddit HVAC).*
