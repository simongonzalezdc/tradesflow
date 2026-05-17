import { LegalShell } from '@/components/marketing/LegalShell';

export default function PrivacyPolicyPage() {
  return (
    <LegalShell title="Privacy Policy" updated="Last updated: May 8, 2026 - Version 1.0">
          <section>
            <h2>1. Our Commitment to Privacy</h2>
            <p>
              TradesFlow Inc. (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) is committed to protecting your personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable provincial privacy legislation. This policy explains how we collect, use, disclose, and protect your information when you use our field service management platform.
            </p>
          </section>

          <section>
            <h2>2. Accountability</h2>
            <p>
              We are responsible for all personal information under our control. We have designated a Privacy Officer who is accountable for compliance with this policy. To contact our Privacy Officer, email{' '}
              <a href="mailto:privacy@tradesflow.app">privacy@tradesflow.app</a>.
            </p>
          </section>

          <section>
            <h2>3. What We Collect</h2>
            <p>We collect the following personal information:</p>
            <ul>
              <li><strong>Account information:</strong> Name, email address, and password (hashed) when you create an account.</li>
              <li><strong>Business information:</strong> Business name, phone number, and optional address details for your business profile.</li>
              <li><strong>Customer records:</strong> Names, phone numbers, email addresses, and service addresses of your customers, entered by you to manage appointments and service records.</li>
              <li><strong>Service records:</strong> Equipment details, service history, appointment notes, and photos that you create during field service operations.</li>
              <li><strong>Financial records:</strong> Invoice data including amounts, items, and payment status for billing your customers.</li>
              <li><strong>Technical data:</strong> IP address, browser type, and device information collected automatically when you use our service.</li>
            </ul>
          </section>

          <section>
            <h2>4. Purposes of Collection</h2>
            <p>We collect your personal information for the following purposes:</p>
            <ul>
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
            <h2>5. Consent</h2>
            <p>
              We obtain your consent before collecting, using, or disclosing your personal information, except where required or permitted by law. When you create an account, you consent to this privacy policy. You may withdraw consent at any time by contacting us at{' '}
              <a href="mailto:privacy@tradesflow.app">privacy@tradesflow.app</a>, though this may limit our ability to provide certain services.
            </p>
            <p>
              You are responsible for obtaining consent from your customers before entering their personal information into TradesFlow and before sending them any notifications through our platform.
            </p>
          </section>

          <section>
            <h2>6. How We Protect Your Information</h2>
            <p>We implement appropriate technical and organizational safeguards:</p>
            <ul>
              <li>Passwords are hashed using bcrypt with a cost factor of 12</li>
              <li>All data in transit is encrypted via TLS 1.2+</li>
              <li>Session tokens use secure, httpOnly cookies with SameSite protection</li>
              <li>Our database is hosted in Canada</li>
              <li>Access to personal data is logged for audit purposes</li>
              <li>We enforce Content Security Policy and other security headers</li>
            </ul>
          </section>

          <section>
            <h2>7. Data Retention</h2>
            <p>We retain your personal information only as long as necessary:</p>
            <ul>
              <li><strong>Account data:</strong> Retained while your account is active and for 30 days after deletion request</li>
              <li><strong>Financial records:</strong> Invoices retained for 6 years as required by the Income Tax Act (Canada)</li>
              <li><strong>Service records:</strong> Retained for the duration of your account plus 1 year</li>
              <li><strong>Notifications:</strong> Retained for 90 days after sending</li>
              <li><strong>Consent records:</strong> Retained for the duration of your account plus 2 years</li>
            </ul>
          </section>

          <section>
            <h2>8. Your Rights</h2>
            <p>Under PIPEDA, you have the right to:</p>
            <ul>
              <li><strong>Access:</strong> Request a copy of all personal information we hold about you</li>
              <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information, subject to legal retention requirements</li>
              <li><strong>Withdraw consent:</strong> Withdraw consent for data collection, use, or disclosure</li>
              <li><strong>Complain:</strong> File a complaint with our Privacy Officer or the Office of the Privacy Commissioner of Canada</li>
            </ul>
            <p>
              To exercise any of these rights, contact{' '}
              <a href="mailto:privacy@tradesflow.app">privacy@tradesflow.app</a>{' '}
              or visit your account settings. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2>9. Third-Party Disclosure</h2>
            <p>
              We do not sell or rent your personal information. We may share data with service providers who assist in operating our platform (hosting, email delivery) under data processing agreements that require equivalent privacy protection. Your data is stored in Canada and is not transferred outside Canada without your consent.
            </p>
          </section>

          <section>
            <h2>10. Breach Notification</h2>
            <p>
              In the event of a data breach that creates a real risk of significant harm, we will notify affected individuals and the Office of the Privacy Commissioner of Canada as required by the Breach of Security Safeguards Regulations.
            </p>
          </section>

          <section>
            <h2>11. Contact</h2>
            <p>
              For privacy questions, data access requests, or complaints:
            </p>
            <p>
              <strong>Privacy Officer</strong><br />
              TradesFlow Inc.<br />
              Email: <a href="mailto:privacy@tradesflow.app">privacy@tradesflow.app</a>
            </p>
            <p>
              To file a complaint with the Office of the Privacy Commissioner of Canada:<br />
              <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer">www.priv.gc.ca</a> | 1-800-282-1376
            </p>
          </section>
    </LegalShell>
  );
}
