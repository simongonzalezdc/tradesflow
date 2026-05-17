import Link from 'next/link';
import { LegalShell } from '@/components/marketing/LegalShell';

export default function TermsOfServicePage() {
  return (
    <LegalShell title="Terms of Service" updated="Last updated: May 8, 2026 - Version 1.0">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or using TradesFlow (&quot;the Service&quot;), you agree to be bound by these Terms of Service. If you do not agree, do not use the Service.
            </p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>
              TradesFlow provides field service management tools for trades businesses, including appointment scheduling, customer management, invoicing, equipment tracking, and notification services.
            </p>
          </section>

          <section>
            <h2>3. Account Responsibilities</h2>
            <p>
              You are responsible for maintaining the confidentiality of your account credentials and for all activities under your account. You must be at least 18 years old to create an account. You agree to provide accurate and complete information during registration.
            </p>
          </section>

          <section>
            <h2>4. Acceptable Use</h2>
            <p>You agree not to use the Service to:</p>
            <ul>
              <li>Violate any applicable law or regulation</li>
              <li>Enter personal information of individuals without their consent</li>
              <li>Send unsolicited communications to customers</li>
              <li>Interfere with or disrupt the Service</li>
              <li>Attempt to gain unauthorized access to other users&apos; data</li>
            </ul>
          </section>

          <section>
            <h2>5. Your Data</h2>
            <p>
              You retain ownership of all data you enter into TradesFlow. You are responsible for ensuring you have the right to enter any personal information (including customer data) and for obtaining any necessary consents. See our{' '}
              <Link href="/privacy-policy">Privacy Policy</Link>{' '}
              for details on how we handle personal information.
            </p>
          </section>

          <section>
            <h2>6. Service Availability</h2>
            <p>
              We strive to provide continuous service but do not guarantee uninterrupted access. We may modify or discontinue the Service with reasonable notice.
            </p>
          </section>

          <section>
            <h2>7. Termination</h2>
            <p>
              You may terminate your account at any time. Upon termination, your data will be handled in accordance with our{' '}
              <Link href="/privacy-policy">Privacy Policy</Link>{' '}
              retention schedule. We reserve the right to suspend accounts that violate these terms.
            </p>
          </section>

          <section>
            <h2>8. Limitation of Liability</h2>
            <p>
              TradesFlow is provided &quot;as is&quot; without warranties of any kind. To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from your use of the Service.
            </p>
          </section>

          <section>
            <h2>9. Governing Law</h2>
            <p>
              These terms are governed by the laws of Canada and the applicable province. Any disputes shall be resolved in the courts of the applicable jurisdiction in Canada.
            </p>
          </section>

          <section>
            <h2>10. Changes to Terms</h2>
            <p>
              We may update these terms from time to time. Material changes will be communicated via email or in-app notification at least 30 days before they take effect.
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
