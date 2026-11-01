import type { Metadata } from 'next';
import { siteMeta } from '@/lib/constants';
import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';
import Heading from '@/components/Heading/Heading';
import CEOMessage from '@/components/CEOMessage/CEOMessage';
import CompanyProfile from '@/components/CompanyProfile/CompanyProfile';
import Access from '@/components/Access/Access';

const PAGE_CONTENT = {
  hero: {
    heading: '会社情報',
    subHeading: (
      <>
        ご寺院さまの運営を幅広く支えるため、
        <wbr />
        業務に寄り添ったサービスとサポートを提供しています。
      </>
    ),
  },
  ceoMessage: {
    heading: '代表メッセージ',
  },
  companyProfile: {
    heading: '会社概要',
  },
  access: {
    heading: 'アクセス',
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = '会社情報';
  const description =
    '当社は株式会社エクシオテック（旧 大東工業株式会社）の指定販売店として、寺院用ソフト「青藍システム496」の販売、導入指導、サポートを行っています。';
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
      <Hero
        heading={PAGE_CONTENT.hero.heading}
        subHeading={PAGE_CONTENT.hero.subHeading}
      />

      <Section>
        <Container>
          <Heading>{PAGE_CONTENT.ceoMessage.heading}</Heading>
          <CEOMessage />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading>{PAGE_CONTENT.companyProfile.heading}</Heading>
          <CompanyProfile />
        </Container>
      </Section>

      <Section variant="base">
        <Container>
          <Heading>{PAGE_CONTENT.access.heading}</Heading>
          <Access />
        </Container>
      </Section>
    </>
  );
}
