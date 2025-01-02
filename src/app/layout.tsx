import type { Metadata } from 'next';
import { Space_Mono } from 'next/font/google';
import { SITE_CONFIG } from '@/lib/constants';
import './globals.css';

const spaceMono = Space_Mono({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: SITE_CONFIG.title,
  description: SITE_CONFIG.description,
  openGraph: {
    title: SITE_CONFIG.title,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.author,
    images: [
      {
        url: `${SITE_CONFIG.url}/profile.jpg`,
        width: 1200,
        height: 630,
      }
    ],
    locale: 'en_US',
    type: 'website',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceMono.className}>{children}</body>
    </html>
  );
}