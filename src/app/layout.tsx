import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import '@/app/globals.css';
import { cormorantGaramond, notoSansJp, zenOldMincho } from '@/lib/fonts';
import { siteMeta } from '@/constants/siteMeta';
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
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon-512.png',
  },
  alternates: {
    canonical: siteMeta.siteUrl,
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${cormorantGaramond.variable} ${notoSansJp.variable} ${zenOldMincho.variable}`}
    >
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
