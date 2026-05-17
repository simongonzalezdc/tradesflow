import { LegalShell } from '@/components/marketing/LegalShell';

export default function CookiePolicyPage() {
  return (
    <LegalShell title="Cookie Policy" updated="Last updated: May 8, 2026">
          <section>
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit our website. They help us authenticate your session and provide our service.
            </p>
          </section>

          <section>
            <h2>Cookies We Use</h2>
            <div className="overflow-x-auto rounded-lg ring-1 ring-slate-200">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 text-left font-bold text-slate-950">Cookie</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-950">Purpose</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-950">Duration</th>
                    <th className="px-4 py-3 text-left font-bold text-slate-950">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 bg-white">
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">next-auth.session-token</td>
                    <td className="px-4 py-3">Authenticates your session</td>
                    <td className="px-4 py-3">30 days</td>
                    <td className="px-4 py-3">Essential</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">next-auth.csrf-token</td>
                    <td className="px-4 py-3">Prevents cross-site request forgery</td>
                    <td className="px-4 py-3">Session</td>
                    <td className="px-4 py-3">Essential</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-mono text-xs">next-auth.callback-url</td>
                    <td className="px-4 py-3">Remembers your redirect after login</td>
                    <td className="px-4 py-3">Session</td>
                    <td className="px-4 py-3">Essential</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2>Essential Cookies Only</h2>
            <p>
              TradesFlow currently uses only essential cookies required for authentication and security. We do not use analytics, advertising, or tracking cookies. If we add non-essential cookies in the future, we will update this policy and obtain your consent before enabling them.
            </p>
          </section>

          <section>
            <h2>Managing Cookies</h2>
            <p>
              You can manage or delete cookies through your browser settings. Disabling essential cookies will prevent you from logging in and using TradesFlow.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Questions about our use of cookies? Contact{' '}
              <a href="mailto:privacy@tradesflow.app">privacy@tradesflow.app</a>.
            </p>
          </section>
    </LegalShell>
  );
}
