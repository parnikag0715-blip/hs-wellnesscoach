import type { Metadata, Viewport } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#4d7d53',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    default: 'HS Wellness Coach | Certified Herbalife Nutrition & Weight Management',
    template: '%s | HS Wellness Coach',
  },
  description:
    'Transform your body and health with certified Herbalife wellness coaching. Personalized nutrition plans, sustainable fat loss, active lifestyle habits, and daily 1-on-1 WhatsApp guidance.',
  keywords: [
    'wellness coach',
    'Herbalife coach India',
    'weight management',
    'weight loss diet plan',
    'Formula 1 shake',
    'personalized nutrition coaching',
    'healthy lifestyle habits',
    'fat loss coach',
    'online wellness coaching',
  ],
  authors: [{ name: 'HS Wellness Coach' }],
  creator: 'HS Wellness Coach',
  publisher: 'HS Wellness Coach',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: '/',
    siteName: 'HS Wellness Coach',
    title: 'HS Wellness Coach | Certified Herbalife Nutrition & Wellness Coaching',
    description:
      'Transform your health with personalized Herbalife nutrition plans and 1-on-1 expert coaching.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HS Wellness Coach | Certified Herbalife Nutrition & Coaching',
    description:
      'Transform your health with personalized Herbalife nutrition plans and 1-on-1 expert coaching.',
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
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'HS Wellness Coach',
  url: 'http://localhost:3000',
  description:
    'Certified Herbalife Wellness Coach offering customized weight management programs, nutrition meal charts, and 1-on-1 coaching.',
  priceRange: '₹₹',
  telephone: '+91-9999999999',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '200',
    bestRating: '5',
    worstRating: '1',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Wellness Coaching Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: '12-Week Weight Management Transformation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Active Lifestyle Coaching',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Holistic Herbalife Nutrition Planning',
        },
      },
    ],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
