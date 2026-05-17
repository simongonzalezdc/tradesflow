import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://simongonzalezdc.github.io/tradesflow/'),
  title: {
    default: 'TradesFlow - Portfolio prototype for inspection-heavy field service',
    template: '%s - TradesFlow',
  },
  description:
    'TradesFlow is a portfolio prototype for inspection-heavy field-service operators: customer records, equipment history, deficiencies, service notes, and billing handoffs.',
  openGraph: {
    title: 'TradesFlow',
    description:
      'A portfolio prototype for field-service records that hold up after the job is done.',
    url: 'https://simongonzalezdc.github.io/tradesflow/',
    siteName: 'TradesFlow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradesFlow',
    description:
      'Customer records, equipment history, deficiencies, service notes, and billing handoffs for inspection-heavy service teams.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
