import Link from 'next/link';
import { LegalShell } from '@/components/marketing/LegalShell';

export default function TermsOfServicePage() {
  return (
    <LegalShell title="Terms of Service" updated="Last updated: May 17, 2026 - Prototype version">
      <section>
        <h2>1. Acceptance of Terms</h2>
        <p>
          By accessing or using TradesFlow, you agree to these Terms of Service. If you do not
          agree, do not use the prototype.
        </p>
      </section>

      <section>
        <h2>2. Description of Service</h2>
        <p>
          TradesFlow is a portfolio prototype for field-service operations. It explores workflows
          for customer records, appointment scheduling, equipment history, service notes, invoices,
          and future accounting handoffs. It is not currently presented as production-ready software.
        </p>
      </section>

      <section>
        <h2>3. Account Responsibilities</h2>
        <p>
          You are responsible for maintaining the confidentiality of your account credentials and
          for all activity under your account. You agree to provide accurate and complete information
          during registration.
        </p>
      </section>

      <section>
        <h2>4. Acceptable Use</h2>
        <p>You agree not to use TradesFlow to:</p>
        <ul>
          <li>Violate any applicable law or regulation</li>
          <li>Enter personal information of individuals without the right or consent to do so</li>
          <li>Send unsolicited communications to customers</li>
          <li>Interfere with or disrupt the prototype</li>
          <li>Attempt to gain unauthorized access to other users&apos; data</li>
        </ul>
      </section>

      <section>
        <h2>5. Your Data</h2>
        <p>
          You retain ownership of data you enter into TradesFlow. You are responsible for ensuring
          that you have the right to enter any customer, employee, or business information. See the{' '}
          <Link href="/privacy-policy">Privacy Policy</Link>{' '}
          for details on intended data handling.
        </p>
      </section>

      <section>
        <h2>6. Prototype Availability</h2>
        <p>
          TradesFlow is provided as a prototype and may change, break, or be reset while development
          continues. Do not use it as the sole system of record for live business operations without
          a separate production deployment and review.
        </p>
      </section>

      <section>
        <h2>7. Termination</h2>
        <p>
          You may stop using TradesFlow at any time. Account data will be handled according to the{' '}
          <Link href="/privacy-policy">Privacy Policy</Link>. Accounts that violate these terms may
          be suspended or removed.
        </p>
      </section>

      <section>
        <h2>8. Limitation of Liability</h2>
        <p>
          TradesFlow is provided &quot;as is&quot; without warranties of any kind. To the maximum
          extent permitted by law, the maintainer is not liable for indirect, incidental, or
          consequential damages arising from prototype use.
        </p>
      </section>

      <section>
        <h2>9. Governing Law</h2>
        <p>
          Any production deployment should define governing law and dispute handling based on the
          operator, jurisdiction, and customer base for that deployment.
        </p>
      </section>

      <section>
        <h2>10. Changes to Terms</h2>
        <p>
          These terms may be updated as the prototype evolves. Material changes will be reflected
          on this page.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          For questions about these terms, contact{' '}
          <a href="https://github.com/simongonzalezdc/tradesflow/issues">the project maintainer</a>.
        </p>
      </section>
    </LegalShell>
  );
}
