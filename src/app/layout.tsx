import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'TradesFlow',
  description: 'Field Service Management SaaS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
