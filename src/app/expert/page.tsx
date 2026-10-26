import type { Metadata } from 'next';
import { siteMeta } from '@/lib/constants';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Heading from '@/components/Heading';
import Tab from '@/components/Tab';

const data = {
  contents: {
    hero: {
      title: '青藍システム496',
      subtitle: '寺院エキスパートと高い互換性を持つ寺院管理ソフト',
    },
    tab: {
      heading: '機能',
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = '青藍システム496';
  const description =
    '寺院管理ソフト「青藍システム496」は檀家管理、入金管理、法名・戒名作成、棚経管理など寺務を効率化する多機能システムです。';
  const url = `${siteMeta.siteUrl}expert/`;

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

export default function Expert() {
  return (
    <>
      <Section isHero>
        <Container large>
          <Hero
            title={data.contents.hero.title}
            subtitle={data.contents.hero.subtitle}
            page="expert"
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading>{data.contents.tab.heading}</Heading>
          <Tab />
        </Container>
      </Section>
    </>
  );
}
