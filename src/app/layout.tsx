import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/layout/theme-provider';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://offimesh.com'),
  title: {
    default: 'OffiMesh - Offline-First Payment Infrastructure for Africa',
    template: '%s | OffiMesh',
  },
  description: 'Enable secure digital payments without internet using QR, Bluetooth, and offline communication. Automatically settle transactions through Nomba once connectivity returns.',
  keywords: [
    'offline payments',
    'Africa fintech',
    'mobile payments',
    'QR payments',
    'Bluetooth payments',
    'offline transactions',
    'Nomba integration',
    'financial inclusion',
    'mesh network payments',
    'digital wallet',
  ],
  authors: [{ name: 'OffiMesh Team' }],
  creator: 'OffiMesh',
  publisher: 'OffiMesh',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://offimesh.com',
    siteName: 'OffiMesh',
    title: 'OffiMesh - Offline-First Payment Infrastructure for Africa',
    description: 'Enable secure digital payments without internet using QR, Bluetooth, and offline communication. Automatically settle transactions through Nomba once connectivity returns.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'OffiMesh - Payments That Work, Even Offline',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OffiMesh - Offline-First Payment Infrastructure for Africa',
    description: 'Enable secure digital payments without internet using QR, Bluetooth, and offline communication.',
    images: ['/og-image.png'],
    creator: '@offimesh',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://offimesh.com',
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/apple-icon.png' }],
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0f172a' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://offimesh.com/#organization',
        name: 'OffiMesh',
        url: 'https://offimesh.com',
        logo: {
          '@type': 'ImageObject',
          url: 'https://offimesh.com/logo.png',
        },
        description: 'Offline-First Payment Infrastructure for Africa',
        sameAs: [
          'https://twitter.com/offimesh',
          'https://github.com/offimesh',
          'https://linkedin.com/company/offimesh',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          contactType: 'customer support',
          email: 'support@offimesh.com',
        },
      },
      {
        '@type': 'SoftwareApplication',
        '@id': 'https://offimesh.com/#software',
        name: 'OffiMesh',
        applicationCategory: 'FinanceApplication',
        operatingSystem: 'Android',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '1200',
        },
      },
      {
        '@type': 'WebSite',
        '@id': 'https://offimesh.com/#website',
        url: 'https://offimesh.com',
        name: 'OffiMesh',
        publisher: {
          '@id': 'https://offimesh.com/#organization',
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
