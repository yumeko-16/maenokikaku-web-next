import type { Metadata } from 'next';
import { siteMeta } from '@/lib/constants';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import ContentHeading from '@/components/ContentHeading';
import CEOMessage from '@/components/CEOMessage';
import CompanyProfile from '@/components/CompanyProfile';
import Access from '@/components/Access';

const data = {
  contents: {
    hero: {
      heading: '会社情報',
      lead: 'ご寺院さまの運営を幅広く支えるため、業務に寄り添ったサービスとサポートを提供しています。',
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
  },
};

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
  const { hero, ceoMessage, companyProfile, access } = data.contents;

  return (
    <>
      <Section bgc="hero">
        <Hero heading={hero.heading} lead={hero.lead} />
      </Section>

      <Section>
        <Container>
          <ContentHeading>{ceoMessage.heading}</ContentHeading>
          <CEOMessage />
        </Container>
      </Section>

      <Section>
        <Container>
          <ContentHeading>{companyProfile.heading}</ContentHeading>
          <CompanyProfile />
        </Container>
      </Section>

      <Section bgc="base">
        <Container>
          <ContentHeading>{access.heading}</ContentHeading>
          <Access />
        </Container>
      </Section>
    </>
  );
}
