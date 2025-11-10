import type { Metadata } from 'next';
import { siteMeta } from '@/lib/constants';
import Section from '@/components/Section/Section';
import Hero from '@/components/Hero/Hero';
import CompanyProfile from '@/components/CompanyProfile/CompanyProfile';
import Access from '@/components/Access/Access';

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = '会社情報';
  const description =
    '当社は株式会社エクシオテック（旧 大東工業株式会社）の指定販売店として、寺院用ソフト「寺院エキスパートシステム」の販売、導入指導、サポートを行っています。';
  const url = `${siteMeta.siteUrl}about/`;

  return {
    title: {
      default: pageTitle,
      template: `%s - ${siteMeta.siteTitle}`,
    },
    description,
    openGraph: {
      description,
      url,
      siteName: siteMeta.siteTitle,
      locale: siteMeta.siteLocale,
      type: 'website',
    },
    alternates: {
      canonical: url,
    },
  };
}

export default function About() {
  return (
    <>
      <Section bgc="hero">
        <Hero
          heading="会社情報"
          lead="当社は株式会社エクシオテック（旧 大東工業株式会社）の指定販売店として、寺院用ソフト「寺院エキスパートシステム」の販売、導入指導、サポートを行っています。"
        />
      </Section>

      <Section>
        <CompanyProfile />
      </Section>

      <Section bgc="base">
        <Access />
      </Section>
    </>
  );
}
