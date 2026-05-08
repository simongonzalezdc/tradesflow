# TradesFlow Adversarial Audit

**Radical Transparency: What We're Building and What's Missing**

---

> **Current Status:** TradesFlow's authentication system and business setup are live. All other features described in our sales materials are in active development with expected delivery through 2026. See our [Roadmap](06-roadmap.md).

---

## Purpose

This document exists for one reason: **we believe informed customers make better decisions.**

We're not perfect. We don't have every feature. We're still building. But we're building fast, with quality as our foundation.

Here's our honest assessment of where we stand, where we're weak, and how we're addressing it.

---

## 1. Competitive Gaps

### Features Our Competitors Have That We Don't

| Feature | ServiceTitan | Housecall Pro | Jobber | TradesFlow | Our Plan |
|---------|:------------:|:-------------:|:------:|:----------:|----------|
| Online Booking | ✓ | ✓ | ✓ | ✗ | Q2 2026 |
| Integrated Payments | ✓ | ✓ | ✓ | ✗ | Q2 2026 |
| QuickBooks Sync | ✓ | ✓ | ✓ | ✗ | Q3 2026 |
| Marketing Automation | ✓ | ✓ | Limited | ✗ | Q4 2026 |
| Inventory Management | ✓ | ✗ | ✗ | ✗ | 2027 |
| Vendor Integrations | ✓ | Limited | ✗ | ✗ | 2027 |
| Fleet Tracking | ✓ | ✗ | ✗ | ✗ | Not planned |
| Call Recording | ✓ | ✗ | ✗ | ✗ | Not planned |

### What This Means for You

**If you need online booking today**: We're not there yet. You can schedule appointments and customers get automatic confirmations, but they can't self-book.

**If you need integrated payments**: We invoice and track payment, but don't process credit cards. You'll need a separate payment processor until Q2 2026.

**If you need QuickBooks sync**: Manual export is available. Automatic sync coming Q3 2026.

**Mitigation**: We offer 14-day free trials specifically so you can evaluate if our current features meet your needs today.

---

## 2. Security & Compliance

### Current State

| Aspect | Status | Notes |
|--------|--------|-------|
| Data Encryption | ✓ | HTTPS/TLS in transit, encrypted at rest |
| Authentication | ✓ | NextAuth with bcrypt password hashing |
| Session Management | ✓ | JWT tokens, 30-day expiration |
| Role-Based Access | ✓ | Owner/Admin/Technician roles |
| Audit Logging | Partial | Basic action logging, detailed audit in progress |
| SOC 2 | ✗ | Planned for 2026 |
| GDPR Compliance | Partial | Data export available, deletion in progress |
| HIPAA | ✗ | Not applicable to our use case |

### Risks

1. **No SOC 2 certification yet**: For enterprise customers requiring compliance documentation, this may be a blocker.
2. **Limited audit trails**: We track who does what, but not at the granular level some enterprises require.
3. **No SSO**: Single sign-on is not currently available.

### Mitigations

- We use industry-standard security practices (encryption, secure authentication)
- Regular security reviews and dependency updates
- Data is isolated by business (multi-tenant isolation)
- Full data export available on request
- SOC 2 certification on 2026 roadmap

---

## 3. Technical Debt

### Known Architectural Weaknesses

| Issue | Impact | Priority | Status |
|-------|--------|----------|--------|
| No API versioning | Future breaking changes possible | High | Planning |
| Limited caching | Performance under heavy load | Medium | Q2 2026 |
| Single database instance | No read replicas | Low | Future |
| No offline mobile mode | Field work requires connectivity | Medium | Q3 2026 |

### Test Coverage

| Layer | Coverage | Notes |
|-------|----------|-------|
| Authentication | 269+ tests | Comprehensive coverage |
| Landing Page | Included | Full component tests |
| Core Business Logic | Building | Expanding with each wave |
| API Endpoints | Planned | Wave 2+ |

We follow test-driven development (TDD) for new features, ensuring quality at every step.

---

## 4. Market Risks

### Adoption Barriers

| Barrier | Impact | Mitigation |
|---------|--------|------------|
| Brand awareness | Low | Word-of-mouth, customer success stories |
| Feature parity concerns | Medium | Transparent roadmap, fast shipping |
| Switching costs | Medium | Free onboarding, CSV import |
| Trust (new company) | Medium | Free trial, transparent roadmap |

### Price Sensitivity

**Risk**: Price increases could alienate early customers.

**Mitigation**:
- Grandfather existing customers at current rates
- Annual price lock for Enterprise customers
- Transparent pricing with no hidden fees
- Value delivery exceeds cost (10x+ ROI documented)

### Competition Risk

**Risk**: Larger competitors could replicate Equipment Passport.

**Mitigation**:
- First-mover advantage with trade-specific focus
- Simpler, more focused implementation
- Customer relationships and trust
- Continuous innovation on roadmap

---

## 5. Blind Spots

### What We Might Be Missing

We acknowledge these potential blind spots:

| Area | Concern | Action |
|------|---------|--------|
| International markets | Currently US-focused | Monitoring demand |
| Additional trades | May not fit all trades perfectly | Gathering feedback |
| Enterprise features | Large org needs differ | Enterprise tier development |
| Mobile-first users | Some users mobile-only | Enhanced mobile app Q3 2026 |
| Offline scenarios | Rural areas with poor connectivity | Offline mode planned |

### How We Stay Aware

- Customer feedback channels (support, surveys)
- Sales team insights
- Competitive monitoring
- Industry trend analysis

---

## 6. Missed Opportunities

### Valuable Features Not Yet Built

| Feature | Value | Timeline | Why Delayed |
|---------|-------|----------|-------------|
| Customer portal | High | Q3 2026 | Focusing on core first |
| Route optimization | Medium | 2027 | Requires density data |
| Predictive maintenance | High | 2027+ | Requires AI/ML investment |
| Parts marketplace | Medium | 2027+ | Partnership requirements |
| Review management | Medium | Q4 2026 | Post-core features |

### Why We're Not Building Everything Now

**Quality over quantity.** We'd rather have 10 features that work perfectly than 50 that work poorly.

Our TDD approach means we ship reliable code. This takes longer but reduces bugs and builds trust.

---

## 7. Mitigation Roadmap

### How We're Addressing Each Weakness

#### Competitive Gaps

| Gap | Mitigation | ETA |
|-----|------------|-----|
| Online Booking | Wave 9 development | Q2 2026 |
| Payments | Stripe integration | Q2 2026 |
| QuickBooks Sync | Partnership/integration | Q3 2026 |
| Marketing | Email sequences | Q4 2026 |

#### Security & Compliance

| Gap | Mitigation | ETA |
|-----|------------|-----|
| SOC 2 | Audit preparation | 2026 |
| Audit Logging | Enhanced logging system | Q2 2026 |
| SSO | SAML/OAuth integration | Q3 2026 |
| GDPR Full | Complete data handling | Q2 2026 |

#### Technical Debt

| Debt | Mitigation | ETA |
|------|------------|-----|
| API Versioning | Version header system | Q2 2026 |
| Caching | Redis implementation | Q2 2026 |
| Offline Mode | PWA with sync | Q3 2026 |
| Read Replicas | Database scaling | As needed |

---

## 8. What to Expect

### Our Commitment to You

1. **Honesty**: We'll always tell you what we can and can't do
2. **Transparency**: Our roadmap is public (within reason)
3. **Quality**: We ship tested, reliable code
4. **Communication**: Major changes communicated in advance
5. **Support**: Responsive support for all customers

### What We Ask of You

1. **Feedback**: Tell us what's working and what's not
2. **Patience**: Some features take time to build right
3. **Partnership**: Work with us to make the product better

---

## Decision Framework

### Should You Choose TradesFlow Today?

**Choose TradesFlow if:**
- Equipment Passport™ is valuable to your business
- You want simple, focused software
- Transparent pricing matters to you
- You can work without online booking (for now)
- You're comfortable with a newer platform

**Wait or choose alternatives if:**
- You need online booking immediately
- QuickBooks sync is a hard requirement today
- You need SOC 2 certification for compliance
- You require extensive third-party integrations
- You prefer established vendors only

---

## Our Guarantee

**14-day free trial. No credit card required.**

We're confident that if TradesFlow fits your needs, you'll know within the trial period. If it doesn't, we'll help you understand what's missing and when it's coming.

**No hard sell. No contracts. Cancel anytime.**

---

*This document is updated quarterly. Last updated: March 2026.*

*Questions? Contact our team: sales@tradesflow.com*
