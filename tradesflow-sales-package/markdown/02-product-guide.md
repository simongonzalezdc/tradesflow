# TradesFlow Product Guide

**Complete Feature Walkthrough for Evaluators**

---

## Development Status

| Status | Features |
|--------|----------|
| **Available Now** | Authentication, business setup, account management |
| **In Development (2026)** | Customer management, scheduling, invoicing, Equipment Passport, notifications, price book, team management |
| **Planned (2027+)** | Online booking, payments, integrations, inventory |

> **Note:** This guide describes our full product vision. Features marked with their expected delivery date are currently in development. Our [Roadmap](06-roadmap.md) has the latest timeline.

---

## Platform Overview

TradesFlow is a cloud-based field service management platform designed specifically for trade businesses. Built on modern, scalable infrastructure, it is being developed to manage customers, schedule jobs, create quotes, send invoices, and track equipment history — all from one place.

### Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                      TradesFlow Platform                     │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────────────┐ │
│  │ Web App │  │ Mobile  │  │   API   │  │  Notifications  │ │
│  │  (Next) │  │(iOS/And)│  │ (REST)  │  │ (SMS + Email)   │ │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────────┬────────┘ │
│       │            │            │                │          │
│       └────────────┴────────────┴────────────────┘          │
│                          │                                   │
│  ┌───────────────────────┴───────────────────────────────┐  │
│  │                    Business Logic                      │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌───────────┐ │  │
│  │  │Customer  │ │Schedule  │ │ Invoice  │ │ Equipment │ │  │
│  │  │   CRM    │ │ Engine   │ │  System  │ │ Passport  │ │  │
│  │  └──────────┘ └──────────┘ └──────────┘ └───────────┘ │  │
│  └───────────────────────────────────────────────────────┘  │
│                          │                                   │
│  ┌───────────────────────┴───────────────────────────────┐  │
│  │              PostgreSQL Database (Prisma)              │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

### Supported Trades

- HVAC (Heating, Ventilation, Air Conditioning)
- Plumbing
- Electrical
- Roofing
- Appliance Repair

---

## 1. Customer Management *(In Development — Expected Q1 2026)*

### Customer Profiles

Store complete customer information in one place:

| Field | Description |
|-------|-------------|
| Name | Customer full name |
| Phone | Primary contact number |
| Email | Email address (optional) |
| Address | Service address |
| City, State, ZIP | Location details |
| Notes | Custom notes about the customer |

### Service History

Every customer record shows:

- All past appointments
- All invoices (paid and pending)
- All equipment at their property
- Notes and special instructions

### Quick Search

Find any customer instantly by:
- Name
- Phone number
- Address
- Email

No more scrolling through spreadsheets or paper files.

---

## 2. Appointment Scheduling *(In Development — Expected Q2 2026)*

### Visual Calendar

```
┌────────────────────────────────────────────────────┐
│              March 2026                           │
├──────────┬──────────┬──────────┬──────────┬───────┤
│  Mon     │  Tue     │  Wed     │  Thu     │ Fri   │
├──────────┼──────────┼──────────┼──────────┼───────┤
│          │          │          │          │       │
│  9:00    │  9:00    │  8:30    │  9:00    │ 9:00  │
│ ┌──────┐ │ ┌──────┐ │ ┌──────┐ │ ┌──────┐ │┌────┐ │
│ │Smith │ │ │Johnson│ │ │Garcia │ │ │Lee   │ ││Kim │ │
│ │HVAC  │ │ │Plumb │ │ │Elect │ │ │Roof  │ ││HVAC│ │
│ └──────┘ │ └──────┘ │ └──────┘ │ └──────┘ │└────┘ │
│          │          │          │          │       │
│  11:00   │  10:30   │  11:00   │          │ 11:00 │
│ ┌──────┐ │ ┌──────┐ │ ┌──────┐ │          │┌────┐ │
│ │Brown │ │ │Davis │ │ │Wilson │ │   Open   ││Chen│ │
│ │Appl  │ │ │HVAC  │ │ │Plumb │ │          │└────┘ │
│ └──────┘ │ └──────┘ │ └──────┘ │          │       │
└──────────┴──────────┴──────────┴──────────┴───────┘
```

### Appointment Status Flow

```
PENDING → CONFIRMED → IN_PROGRESS → COMPLETED
    │         │            │
    │         │            └──→ CANCELLED
    │         │
    │         └──→ NO_SHOW
    │
    └──→ CANCELLED
```

### Key Scheduling Features

| Feature | Description |
|---------|-------------|
| Duration Estimates | Set expected job duration (default: 60 minutes) |
| Technician Assignment | Assign jobs to specific team members |
| Confirmation Codes | Auto-generated for each appointment |
| Status Tracking | Track every stage of the job |
| Notes | Add job-specific notes and instructions |

---

## 3. Equipment Passport™ (Key Differentiator) *(In Development — Expected Q2 2026)*

### What It Is

The Equipment Passport is TradesFlow's signature feature—a complete digital record of every piece of equipment at your customer's property.

### Equipment Types Supported

| Type | Examples |
|------|----------|
| HVAC | Furnaces, AC units, heat pumps, thermostats |
| Plumbing | Water heaters, sump pumps, fixtures, pipes |
| Electrical | Panels, circuits, generators |
| Appliance | Refrigerators, washers, dryers, dishwashers |
| Roofing | Shingles, gutters, skylights |
| Other | Custom equipment types |

### Equipment Record Details

```
┌─────────────────────────────────────────────────────────┐
│  Equipment Passport: Water Heater                       │
├─────────────────────────────────────────────────────────┤
│  Customer: John Smith                                   │
│  Location: Basement Utility Room                        │
├─────────────────────────────────────────────────────────┤
│  Brand: Rheem          Model: XR90                     │
│  Serial: RH12345678    Install Date: 2022-03-15        │
│  Warranty Expires: 2032-03-15                          │
├─────────────────────────────────────────────────────────┤
│  📸 Photos:                                             │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐                   │
│  │Nameplate│ │Install  │ │Condition│                   │
│  └─────────┘ └─────────┘ └─────────┘                   │
├─────────────────────────────────────────────────────────┤
│  Service History:                                       │
│  • 2024-01-15: Annual maintenance - Replaced anode rod │
│  • 2023-01-20: Annual maintenance - Flushed tank       │
│  • 2022-03-15: Initial installation                    │
└─────────────────────────────────────────────────────────┘
```

### Service History Integration

Every service visit can be logged to the equipment record:

| Field | Description |
|-------|-------------|
| Date | When the service was performed |
| Technician | Who performed the work |
| Description | What was done |
| Notes | Technical notes for future reference |
| Photos | Before/after documentation |

### Use Cases

1. **Repeat Service**: Pull up the complete history instantly when a customer calls about the same unit
2. **Warranty Tracking**: Proactively reach out before warranties expire
3. **Diagnostics**: See patterns in equipment issues over time
4. **Customer Trust**: Demonstrate expertise with detailed records

---

## 4. Professional Invoicing *(In Development — Expected Q2 2026)*

### Invoice Creation Flow

```
Completed Job → One-Click Invoice → Review Line Items → Send → Track Payment
```

### Invoice Structure

```
┌─────────────────────────────────────────────────────────┐
│  INVOICE #TF-2024-00123                                 │
│  Status: SENT                    Due: March 30, 2026    │
├─────────────────────────────────────────────────────────┤
│  Bill To:                      From:                    │
│  John Smith                    ABC Plumbing Co.         │
│  123 Main Street               456 Commerce Way        │
│  Anytown, ST 12345             Business Town, ST 67890  │
├─────────────────────────────────────────────────────────┤
│  Description           Qty    Rate      Amount         │
│  ─────────────────────────────────────────────────────  │
│  Water Heater Repair    1    $150.00    $150.00        │
│  Anode Rod Replacement  1     $45.00     $45.00        │
│  Labor (1.5 hours)      2     $85.00    $170.00        │
│  ─────────────────────────────────────────────────────  │
│  Subtotal:                               $365.00        │
│  Tax (8%):                                $29.20        │
│  ─────────────────────────────────────────────────────  │
│  TOTAL:                                  $394.20        │
└─────────────────────────────────────────────────────────┘
```

### Invoice Status Flow

```
DRAFT → SENT → PAID
           │
           └──→ OVERDUE
           │
           └──→ CANCELLED
```

### Key Features

- **Automatic calculations**: Subtotals, taxes, totals
- **Line item details**: Quantity, rate, description
- **Due date management**: Set and track payment deadlines
- **Payment recording**: Mark as paid with date tracking
- **Link to appointments**: Connect invoices to completed jobs

---

## 5. Automated Notifications *(In Development — Expected Q3 2026)*

### Notification Types

| Type | Trigger | Purpose |
|------|---------|---------|
| 24-Hour Reminder | 24 hours before appointment | Reduce no-shows |
| 48-Hour Reminder | 48 hours before appointment | Allow rescheduling time |
| Confirmation | When appointment is created | Professional touch |
| Follow-Up | After job completion | Reviews and future bookings |
| Invoice Alert | When invoice is sent/due | Faster payments |

### Delivery Channels

- **SMS** (via Twilio): For urgent, time-sensitive notifications
- **Email**: For detailed information and records

### Notification Management

```
┌─────────────────────────────────────────────────────────┐
│  Notification Center                                     │
├─────────────────────────────────────────────────────────┤
│  Type        │ Recipient    │ Status │ Sent At         │
│  ────────────┼──────────────┼────────┼─────────────────│
│  CONFIRM     │ +15551234567  │ SENT   │ Mar 13 9:00am  │
│  REMINDER_48H│ +15551234567  │ SENT   │ Mar 14 9:00am  │
│  REMINDER_24H│ +15551234567  │ PENDING│ Mar 15 9:00am  │
│  FOLLOW_UP   │ john@smith.com│ PENDING│ Mar 16 10:00am │
└─────────────────────────────────────────────────────────┘
```

---

## 6. Price Book *(In Development — Expected Q3 2026)*

### Service Catalog Structure

```
┌─────────────────────────────────────────────────────────┐
│  Price Book                                              │
├─────────────────────────────────────────────────────────┤
│  Category: HVAC                                          │
│  ┌───────────────────────────────────────────────────┐  │
│  │ Service Type          │ Flat Rate │ Est. Time    │  │
│  │ ──────────────────────┼───────────┼──────────────│  │
│  │ AC Tune-Up            │ $149.00   │ 60 min       │  │
│  │ Furnace Inspection    │ $129.00   │ 45 min       │  │
│  │ Refrigerant Recharge  │ $199.00   │ 90 min       │  │
│  │ Duct Cleaning         │ $299.00   │ 120 min      │  │
│  └───────────────────────────────────────────────────┘  │
│                                                          │
│  Category: Plumbing                                      │
│  ┌───────────────────────────────────────────────────┐  │
│  │ Service Type          │ Flat Rate │ Est. Time    │  │
│  │ ──────────────────────┼───────────┼──────────────│  │
│  │ Faucet Replacement    │ $175.00   │ 45 min       │  │
│  │ Toilet Repair         │ $125.00   │ 30 min       │  │
│  │ Water Heater Flush    │ $99.00    │ 30 min       │  │
│  └───────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────┘
```

### Benefits

- **Consistent pricing**: Eliminate guesswork
- **Faster quoting**: Pull from catalog instantly
- **Better scheduling**: Time estimates inform capacity planning
- **Professional presentation**: Standardized service offerings

---

## 7. Team Management *(In Development — Expected Q2 2026)*

### Role-Based Access

| Role | Permissions |
|------|-------------|
| **Owner** | Full access: manage team, billing, all settings, all data |
| **Admin** | Manage day-to-day operations: create jobs, invoices, manage customers |
| **Technician** | View assigned jobs, update status, add notes, access equipment records |

### User Management Features

- Add/remove team members
- Assign roles and permissions
- Activate/deactivate users
- Track user activity on jobs

---

## Getting Started

### Setup Process

1. **Create Account**: 14-day free trial, no credit card — **available now**
2. **Add Business Info**: Company name, logo, colors, timezone — **available now**
3. **Import Customers**: CSV import or manual entry — *coming Q1 2026*
4. **Build Price Book**: Add your services and rates — *coming Q3 2026*
5. **Invite Team**: Add technicians and admins — *coming Q2 2026*
6. **Start Scheduling**: Book your first appointment — *coming Q2 2026*

### Time to Value

- **Setup**: Under 5 minutes
- **First appointment**: Same day
- **Full adoption**: 1-2 weeks

---

## Support & Resources

- **Email Support**: support@YOUR_DOMAIN
- **Help Center**: Comprehensive documentation
- **Video Tutorials**: Step-by-step guides
- **Priority Support**: Professional and Enterprise plans

---

*For pricing details, see the Business Case document. For competitive positioning, see the Competitive Analysis document.*
