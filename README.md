# TradesFlow

TradesFlow is a portfolio prototype for asset-heavy field-service businesses: customer records, scheduled work, equipment history, service notes, deficiencies, and billing handoffs in one focused workspace.

## Quick start

```bash
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
```

## Docs

- See source tree and package metadata for authoritative usage.
