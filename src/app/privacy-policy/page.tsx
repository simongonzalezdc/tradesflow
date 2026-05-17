import { LegalShell } from '@/components/marketing/LegalShell';

export default function PrivacyPolicyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="Last updated: May 17, 2026 - Prototype version">
      <section>
        <h2>1. Our Commitment to Privacy</h2>
        <p>
          TradesFlow is an early portfolio prototype for field-service operations. This policy
          explains how the prototype is intended to handle account, business, customer, equipment,
          and service-record information. It is not a production compliance certification.
        </p>
      </section>

      <section>
        <h2>2. Accountability</h2>
        <p>
          The project maintainer is responsible for the current prototype surface. Until a dedicated
          support inbox is configured, contact the maintainer through{' '}
          <a href="https://github.com/simongonzalezdc/tradesflow/issues">GitHub Issues</a>.
        </p>
      </section>

      <section>
        <h2>3. What We Collect</h2>
        <p>The prototype may collect the following information when features are used:</p>
        <ul>
          <li><strong>Account information:</strong> Name, email address, and password hash when you create an account.</li>
          <li><strong>Business information:</strong> Business name, phone number, and optional address details for your business profile.</li>
          <li><strong>Customer records:</strong> Names, phone numbers, email addresses, and service addresses entered by you for appointments and service records.</li>
          <li><strong>Service records:</strong> Equipment details, service history, appointment notes, and photos created during field-service workflows.</li>
          <li><strong>Financial records:</strong> Invoice data including amounts, items, and payment status if billing features are enabled.</li>
          <li><strong>Technical data:</strong> IP address, browser type, and device information collected for authentication, security, and abuse prevention.</li>
        </ul>
      </section>

      <section>
        <h2>4. Purposes of Collection</h2>
        <p>Information is collected to support the field-service prototype:</p>
        <ul>
          <li>To create and manage a user account and business profile</li>
          <li>To organize customer, site, appointment, equipment, and service records</li>
          <li>To support future appointment reminders and customer communications</li>
          <li>To support future invoice and accounting handoff workflows</li>
          <li>To communicate with users about account or support requests</li>
          <li>To maintain security, auditability, and system reliability</li>
        </ul>
      </section>

      <section>
        <h2>5. Consent</h2>
        <p>
          Account creation records consent to this privacy policy. You are responsible for obtaining
          permission before entering any customer or third-party personal information into TradesFlow.
          You may request export or deletion of your account data through the prototype where supported
          or by contacting the project maintainer through{' '}
          <a href="https://github.com/simongonzalezdc/tradesflow/issues">GitHub Issues</a>.
        </p>
      </section>

      <section>
        <h2>6. How We Protect Information</h2>
        <p>The prototype includes technical safeguards intended to reduce risk:</p>
        <ul>
          <li>Passwords are hashed using bcrypt</li>
          <li>Session tokens use secure, httpOnly cookies with SameSite protection</li>
          <li>Personal data access can be modeled through audit logs</li>
          <li>Content Security Policy and other security headers are configured</li>
          <li>Rate limiting is present on sensitive account endpoints</li>
        </ul>
        <p>
          Any real deployment should receive a hosting, security, and legal review before live
          customer records are entered.
        </p>
      </section>

      <section>
        <h2>7. Data Retention</h2>
        <p>Prototype retention periods should be treated as implementation defaults, not legal advice:</p>
        <ul>
          <li><strong>Account data:</strong> Retained while the account is active and during reasonable deletion processing.</li>
          <li><strong>Service records:</strong> Retained while needed for the operator workflow or until deletion is requested where supported.</li>
          <li><strong>Financial records:</strong> Retention depends on the operator&apos;s accounting and legal obligations.</li>
          <li><strong>Consent records:</strong> Retained while needed to show account consent history.</li>
        </ul>
      </section>

      <section>
        <h2>8. Your Rights</h2>
        <p>Depending on the law that applies to a real deployment, you may have rights to:</p>
        <ul>
          <li><strong>Access:</strong> Request a copy of personal information associated with your account.</li>
          <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information.</li>
          <li><strong>Deletion:</strong> Request deletion of personal information, subject to legal retention requirements.</li>
          <li><strong>Withdraw consent:</strong> Withdraw consent where supported by applicable law and product functionality.</li>
        </ul>
        <p>
          To make a request, contact{' '}
          <a href="https://github.com/simongonzalezdc/tradesflow/issues">the project maintainer</a>{' '}
          or use account settings where available.
        </p>
      </section>

      <section>
        <h2>9. Third-Party Disclosure</h2>
        <p>
          TradesFlow does not sell personal information. A production deployment may use service
          providers for hosting, email, logging, payments, or accounting integrations. Those providers
          should be reviewed and documented before live customer data is processed.
        </p>
      </section>

      <section>
        <h2>10. Breach Notification</h2>
        <p>
          If a real deployment experiences a data breach, affected users and authorities should be
          notified as required by applicable law and the operator&apos;s incident response process.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          For privacy questions, data access requests, or complaints, contact the project maintainer
          through{' '}
          <a href="https://github.com/simongonzalezdc/tradesflow/issues">GitHub Issues</a>.
        </p>
      </section>
    </LegalShell>
  );
}
