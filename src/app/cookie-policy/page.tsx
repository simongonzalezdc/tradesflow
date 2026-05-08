import Link from 'next/link';

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        <p className="text-sm text-gray-500 mb-8">
          Last updated: May 8, 2026
        </p>

        <div className="prose prose-gray max-w-none space-y-6 text-gray-700">
          <section>
            <h2 className="text-xl font-semibold text-gray-900">What Are Cookies</h2>
            <p>
              Cookies are small text files stored on your device when you visit our website. They help us authenticate your session and provide our service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Cookies We Use</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Cookie</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Purpose</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Duration</th>
                    <th className="px-4 py-2 text-left font-medium text-gray-900">Type</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">next-auth.session-token</td>
                    <td className="px-4 py-2">Authenticates your session</td>
                    <td className="px-4 py-2">30 days</td>
                    <td className="px-4 py-2">Essential</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">next-auth.csrf-token</td>
                    <td className="px-4 py-2">Prevents cross-site request forgery</td>
                    <td className="px-4 py-2">Session</td>
                    <td className="px-4 py-2">Essential</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 font-mono text-xs">next-auth.callback-url</td>
                    <td className="px-4 py-2">Remembers your redirect after login</td>
                    <td className="px-4 py-2">Session</td>
                    <td className="px-4 py-2">Essential</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Essential Cookies Only</h2>
            <p>
              TradesFlow currently uses only essential cookies required for authentication and security. We do not use analytics, advertising, or tracking cookies. If we add non-essential cookies in the future, we will update this policy and obtain your consent before enabling them.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Managing Cookies</h2>
            <p>
              You can manage or delete cookies through your browser settings. Disabling essential cookies will prevent you from logging in and using TradesFlow.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-900">Contact</h2>
            <p>
              Questions about our use of cookies? Contact{' '}
              <a href="mailto:privacy@tradesflow.ca" className="text-blue-600 hover:underline">privacy@tradesflow.ca</a>.
            </p>
          </section>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <Link href="/" className="text-blue-600 hover:text-blue-500">
            &larr; Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}
