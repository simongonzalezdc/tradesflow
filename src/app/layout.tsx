import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';

export const metadata: Metadata = {
  metadataBase: new URL('https://tradesflow.app'),
  title: {
    default: 'TradesFlow - Field service records, scheduling, and billing for trade teams',
    template: '%s - TradesFlow',
  },
  description:
    'TradesFlow helps small trade teams organize customer records, scheduled work, equipment history, service notes, and billing handoffs in one focused field-service workspace.',
  openGraph: {
    title: 'TradesFlow',
    description:
      'A focused field-service workspace for small trade teams that need cleaner records before the invoice goes out.',
    url: 'https://tradesflow.app',
    siteName: 'TradesFlow',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TradesFlow',
    description:
      'Customer records, job schedules, equipment history, and billing handoffs for small trade teams.',
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
