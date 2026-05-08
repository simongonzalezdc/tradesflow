import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">TradesFlow</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#how-it-works" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">How It Works</a>
              <a href="#pricing" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#faq" className="text-sm text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
            </div>
            <div className="flex items-center gap-4">
              <Link href="/login">
                <Button variant="outline" size="sm">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button size="sm">Start Free Trial</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 via-white to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Built for HVAC, Plumbing, Electrical, Roofing & Appliance Pros
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
              The Field Service Platform for{' '}
              <span className="text-blue-600">Trade Businesses</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Sign up today. Customer management, scheduling, invoicing, and equipment tracking are rolling out through 2026 — built specifically for tradespeople.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/signup">
                <Button size="lg" className="w-full sm:w-auto px-8">
                  Start 14-Day Free Trial
                  <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </Link>
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                <svg className="mr-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch 3-Min Demo
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">No credit card required • Setup in under 5 minutes</p>
          </div>
        </div>
      </section>

      {/* Value Props Bar */}
      <section className="py-8 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-white">5</div>
              <div className="text-blue-200 text-sm">Trades Supported</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">$79</div>
              <div className="text-blue-200 text-sm">For Up to 5 Users</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5 min</div>
              <div className="text-blue-200 text-sm">Setup Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">0</div>
              <div className="text-blue-200 text-sm">Per-User Fees</div>
            </div>
          </div>
        </div>
      </section>

      {/* What Is TradesFlow */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                What Is TradesFlow?
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                TradesFlow is an all-in-one field service management platform built specifically for trade businesses—HVAC technicians, plumbers, electricians, roofers, and appliance repair professionals.
              </p>
              <p className="text-gray-600 mb-4">
                Unlike generic CRM or project management tools, TradesFlow understands the unique needs of field service work: tracking customer equipment, managing service history, handling on-site quotes, and getting paid faster.
              </p>
              <p className="text-gray-600 mb-6">
                Whether you&apos;re a solo technician or managing a team of 50, TradesFlow is being built to scale with your business while keeping everything simple and organized.
              </p>
              <div className="flex flex-wrap gap-3">
                {['HVAC', 'Plumbing', 'Electrical', 'Roofing', 'Appliance Repair'].map((trade) => (
                  <span key={trade} className="px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                    {trade}
                  </span>
                ))}
              </div>
            </div>
            <div className="bg-gray-100 rounded-2xl p-8">
              <h3 className="font-semibold text-gray-900 mb-4">Core Capabilities <span className="text-xs font-normal text-gray-500 block mt-1">Sign up today — features rolling out through 2026</span></h3>
              <ul className="space-y-3">
                {[
                  'Customer Relationship Management (CRM)',
                  'Appointment & Job Scheduling',
                  'Quote & Estimate Creation',
                  'Professional Invoicing',
                  'Equipment Passport™ Tracking',
                  'Service History Records',
                  'SMS & Email Notifications',
                  'Price Book Management',
                  'Team & Role Management',
                  'Business Reporting & Analytics',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-700">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features - Detailed */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Features We're Building
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From the first customer call to the final payment, TradesFlow is being designed to handle every step of your workflow. Sign up today — features are rolling out through 2026.
            </p>
          </div>

          {/* Customer Management */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Customer Management <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full ml-2">Q1 2026</span></h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Customer Profiles</h4>
                <p className="text-gray-600 text-sm">Store complete customer information: name, phone, email, service address, and custom notes. Access everything in seconds.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Service History</h4>
                <p className="text-gray-600 text-sm">See every job, quote, and invoice for each customer. Never forget what work you&apos;ve done or when.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Quick Search</h4>
                <p className="text-gray-600 text-sm">Find any customer instantly by name, phone, address, or email. No more scrolling through spreadsheets.</p>
              </div>
            </div>
          </div>

          {/* Scheduling */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center text-green-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Appointment Scheduling <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full ml-2">Q2 2026</span></h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Visual Calendar</h4>
                <p className="text-gray-600 text-sm">Drag-and-drop scheduling with daily, weekly, and monthly views. See technician availability at a glance.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Job Status Tracking</h4>
                <p className="text-gray-600 text-sm">Track jobs through every stage: Pending → Confirmed → In Progress → Completed. Know exactly where every job stands.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Duration Estimates</h4>
                <p className="text-gray-600 text-sm">Set expected job durations. Prevent overbooking and give customers accurate time windows.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Technician Assignment</h4>
                <p className="text-gray-600 text-sm">Assign jobs to specific team members. Balance workloads and match skills to job requirements.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Confirmation Codes</h4>
                <p className="text-gray-600 text-sm">Auto-generate confirmation codes for appointments. Professional and easy to reference.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">No-Show Handling</h4>
                <p className="text-gray-600 text-sm">Mark no-shows and track patterns. Protect your time and improve scheduling accuracy.</p>
              </div>
            </div>
          </div>

          {/* Equipment Passport - KEY DIFFERENTIATOR */}
          <div className="mb-16 p-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Equipment Passport™ <span className="text-xs font-medium text-amber-200 bg-white/15 px-2 py-0.5 rounded-full ml-2">Q2 2026</span></h3>
                <span className="text-blue-200 text-sm">Our Signature Feature</span>
              </div>
            </div>
            <p className="text-blue-100 mb-6 max-w-3xl">
              The Equipment Passport is what makes TradesFlow different from every other field service tool. It&apos;s a complete digital record of every piece of equipment at your customer&apos;s property—HVAC units, water heaters, electrical panels, and more.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-1">Equipment Types</h4>
                <p className="text-blue-200 text-sm">HVAC, Plumbing, Electrical, Appliances, Roofing systems</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-1">Full Details</h4>
                <p className="text-blue-200 text-sm">Brand, model, serial number, install date, location</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-1">Warranty Tracking</h4>
                <p className="text-blue-200 text-sm">Never miss a warranty expiration. Proactively reach out.</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-semibold mb-1">Photo Documentation</h4>
                <p className="text-blue-200 text-sm">Attach photos of nameplates, installations, and conditions.</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/10 rounded-lg">
              <h4 className="font-semibold mb-2">Complete Service History</h4>
              <p className="text-blue-200 text-sm">Every repair, maintenance visit, and inspection is logged to the equipment record. See exactly what was done, when, by whom, and what notes were left. Perfect for diagnosing recurring issues and demonstrating value to customers.</p>
            </div>
          </div>

          {/* Invoicing */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Professional Invoicing <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full ml-2">Q2 2026</span></h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">One-Click Invoices</h4>
                <p className="text-gray-600 text-sm">Convert completed jobs to professional invoices instantly. Include line items, rates, and descriptions.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Invoice Status Tracking</h4>
                <p className="text-gray-600 text-sm">Draft → Sent → Paid → Overdue. Know exactly where every invoice stands.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Automatic Calculations</h4>
                <p className="text-gray-600 text-sm">Subtotals, taxes, and totals calculated automatically. Eliminate math errors.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Line Item Details</h4>
                <p className="text-gray-600 text-sm">Add multiple line items with quantities, rates, and descriptions. Transparent and professional.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Due Date Management</h4>
                <p className="text-gray-600 text-sm">Set due dates and track overdue invoices. Follow up before payments become problems.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Payment Recording</h4>
                <p className="text-gray-600 text-sm">Mark invoices as paid with payment date tracking. Simple cash flow management.</p>
              </div>
            </div>
          </div>

          {/* Notifications */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Automated Notifications <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full ml-2">Q3 2026</span></h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">24-Hour Reminders</h4>
                <p className="text-gray-600 text-sm">Automatically remind customers about upcoming appointments. Reduce no-shows significantly.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">48-Hour Reminders</h4>
                <p className="text-gray-600 text-sm">Early reminders give customers time to prepare or reschedule. Better planning for everyone.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Appointment Confirmations</h4>
                <p className="text-gray-600 text-sm">Instant confirmation when a job is scheduled. Professional touch that builds trust.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Follow-Up Messages</h4>
                <p className="text-gray-600 text-sm">Automated follow-ups after job completion. Great for reviews and future bookings.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Invoice Alerts</h4>
                <p className="text-gray-600 text-sm">Notify customers when invoices are sent and due. Faster payments without awkward calls.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">SMS & Email</h4>
                <p className="text-gray-600 text-sm">Choose SMS for urgency, email for details. Reach customers the way they prefer.</p>
              </div>
            </div>
          </div>

          {/* Price Book */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center text-indigo-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Price Book <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full ml-2">Q3 2026</span></h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Service Catalog</h4>
                <p className="text-gray-600 text-sm">Build a complete catalog of your services organized by category. Easy to find, easy to quote.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Flat-Rate Pricing</h4>
                <p className="text-gray-600 text-sm">Set flat rates for standard services. Consistent pricing eliminates guesswork and builds trust.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Time Estimates</h4>
                <p className="text-gray-600 text-sm">Store estimated completion times with each service. Better scheduling and customer expectations.</p>
              </div>
            </div>
          </div>

          {/* Team Management */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center text-red-600">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Team & Role Management <span className="text-xs font-medium text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full ml-2">Q2 2026</span></h3>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Owner Role</h4>
                <p className="text-gray-600 text-sm">Full access to everything. Manage team, billing, and all business settings.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Admin Role</h4>
                <p className="text-gray-600 text-sm">Manage day-to-day operations. Create jobs, invoices, and manage customers.</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">Technician Role</h4>
                <p className="text-gray-600 text-sm">View assigned jobs, update status, add notes. Perfect for field staff.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              How TradesFlow Will Work
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A simple workflow that mirrors how you already work — just faster and more organized. Core features are rolling out through 2026.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Customer Calls',
                description: 'A customer reaches out for service. Look them up or add them in seconds with all their details.',
              },
              {
                step: '2',
                title: 'Schedule & Quote',
                description: 'Book the appointment on your calendar. Create a professional quote from your price book.',
              },
              {
                step: '3',
                title: 'Complete the Job',
                description: 'Show up, do the work, log it to their Equipment Passport. Add photos and notes for records.',
              },
              {
                step: '4',
                title: 'Invoice & Get Paid',
                description: 'Convert the job to an invoice with one click. Send it and track payment. Done.',
              },
            ].map((item) => (
              <div key={item.step} className="relative">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Problem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Problem We're Solving
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trade businesses lose thousands of dollars every year to disorganized operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center text-red-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0-8v8m0 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Lost Customer Information</h3>
              <p className="text-gray-600 text-sm">Spreadsheets, sticky notes, and memory gaps mean lost jobs and frustrated customers. Every time you can&apos;t instantly recall a customer&apos;s history, you lose credibility.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center text-yellow-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scheduling Chaos</h3>
              <p className="text-gray-600 text-sm">Double-bookings, missed appointments, and endless phone tag waste hours every week. Poor scheduling can cost a trade business over $20,000 annually.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 mb-4">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0-8v8m0 0h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Forgotten Follow-Ups</h3>
              <p className="text-gray-600 text-sm">40% of service quotes never convert due to lack of follow-up. When invoices get forgotten, money goes uncollected.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Simple, Honest Pricing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              No hidden fees. No per-technician charges. No long-term contracts. Cancel anytime.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Starter</h3>
              <p className="text-gray-500 text-sm mb-4">For solo technicians</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$29</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {[
                  'Up to 50 customers',
                  'Unlimited appointments',
                  'Basic invoicing',
                  'Email support',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/signup">
                <Button variant="outline" className="w-full">Start Free Trial</Button>
              </Link>
            </div>

            {/* Professional */}
            <div className="bg-blue-600 rounded-xl p-8 border-2 border-blue-600 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full border border-blue-500">
                MOST POPULAR
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Professional</h3>
              <p className="text-blue-200 text-sm mb-4">For growing businesses</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$79</span>
                <span className="text-blue-200">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {[
                  'Unlimited customers',
                  'Everything in Starter',
                  'Equipment Passport™ (Q2 2026)',
                  'SMS notifications (Q3 2026)',
                  'Price book (Q3 2026)',
                  'Up to 5 team members (Q2 2026)',
                  'Priority support',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-blue-100">
                    <svg className="w-4 h-4 text-blue-200 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/signup">
                <Button className="w-full bg-white text-blue-600 hover:bg-blue-50">Start Free Trial</Button>
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enterprise</h3>
              <p className="text-gray-500 text-sm mb-4">For larger teams</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">$199</span>
                <span className="text-gray-500">/month</span>
              </div>
              <ul className="space-y-3 mb-8 text-sm">
                {[
                  'Everything in Pro',
                  'Unlimited team members',
                  'API access',
                  'Custom integrations',
                  'Dedicated account manager',
                  'Custom onboarding',
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button variant="outline" className="w-full">Contact Sales</Button>
            </div>
          </div>

          <p className="text-center text-sm text-gray-500 mt-8">
            All plans include 14-day free trial. No credit card required.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'What trades does TradesFlow support?',
                a: 'TradesFlow is built for HVAC, plumbing, electrical, roofing, and appliance repair businesses. If you do field service work, we\'re designed for you.',
              },
              {
                q: 'Can I import my existing customer data?',
                a: 'CSV import is planned for our customer management release (Q1 2026). Until then, you can add customers manually once the feature is live.',
              },
              {
                q: 'How does the Equipment Passport work?',
                a: 'Every piece of equipment you service gets a digital record. You log the brand, model, serial number, and attach photos. Every service visit is added to its history. Next time you visit, you have the complete story.',
              },
              {
                q: 'Do my technicians need smartphones?',
                a: 'Our mobile app is planned for Q4 2026. Until then, TradesFlow works on any browser, including phones and tablets.',
              },
              {
                q: 'Can customers book appointments online?',
                a: 'Online booking is on our roadmap. For now, you schedule appointments and customers get automatic confirmations and reminders.',
              },
              {
                q: 'What payment methods do you accept?',
                a: 'We accept credit cards for your TradesFlow subscription. Invoicing payments (for your customers) is planned for 2026 with integrations to payment processors like Stripe.',
              },
              {
                q: 'Is my data secure?',
                a: 'We take data security seriously. Passwords are hashed with bcrypt, all connections use TLS encryption, session cookies are secured with httpOnly and SameSite attributes, and our database is hosted in Canada. For full details, see our Privacy Policy.',
              },
              {
                q: 'Can I cancel anytime?',
                a: 'Yes. No long-term contracts. You can cancel your subscription at any time with no penalties.',
              },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600 text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Trade Business?
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Start your free trial today. No credit card required.
          </p>
          <Link href="/signup">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 px-8">
              Start Your Free 14-Day Trial
              <svg className="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Button>
          </Link>
          <p className="text-blue-200 text-sm mt-4">No credit card required • Setup in 5 minutes</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-xl font-bold text-white">TradesFlow</span>
              </div>
              <p className="text-sm">
                Field service management built for tradespeople. Simpler tools, better business.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
                <li><span className="text-gray-500 cursor-default">Integrations (Coming Soon)</span></li>
                <li><span className="text-gray-500 cursor-default">Mobile App (Coming Soon)</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
                <li><span className="text-gray-500 cursor-default">Help Center (Coming Soon)</span></li>
                <li><span className="text-gray-500 cursor-default">Contact Us (Coming Soon)</span></li>
                <li><span className="text-gray-500 cursor-default">Status (Coming Soon)</span></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm">&copy; {new Date().getFullYear()} TradesFlow. All rights reserved.</p>
            <p className="text-sm">Made with ♥ for tradespeople everywhere</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
