import type { Metadata } from 'next';
import { siteMeta } from '@/lib/constants';
import Section from '@/components/Section/Section';
import Hero from '@/components/Hero/Hero';

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = '寺院エキスパートシステム';
  const description =
    '寺院管理ソフト「寺院エキスパートシステム」は檀家管理、入金管理、法名・戒名作成、棚経管理など寺務を効率化する多機能システムです。';
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

export default function Expert() {
  return (
    <Section bgc="hero">
      <Hero
        heading="寺院エキスパートシステム"
        lead="寺院管理ソフト「寺院エキスパートシステム」は檀家管理、入金管理、法名・戒名作成、棚経管理など寺務を効率化する多機能システムです。"
      />
    </Section>
  );
}
