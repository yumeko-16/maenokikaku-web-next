import './globals.css';
import type { Metadata } from 'next';
import { siteMeta } from '@/lib/constants';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

export const metadata: Metadata = {
  title: {
    default: siteMeta.siteTitle,
    template: `%s - ${siteMeta.siteTitle}`,
  },
  description: siteMeta.siteDesc,
  openGraph: {
    title: siteMeta.siteTitle,
    description: siteMeta.siteDesc,
    url: siteMeta.siteUrl,
    siteName: siteMeta.siteTitle,
    locale: siteMeta.siteLocale,
    type: siteMeta.siteType,
    images: [
      {
        url: `${siteMeta.siteUrl}ogp.jpg`,
        width: 1200,
        height: 630,
        alt: siteMeta.siteTitle,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteMeta.siteTitle,
    description: siteMeta.siteDesc,
    images: [`${siteMeta.siteUrl}ogp.jpg`],
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon-512.png',
  },
  alternates: {
    canonical: siteMeta.siteUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
