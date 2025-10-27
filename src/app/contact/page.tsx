import type { Metadata } from 'next';
import { siteMeta } from '@/lib/constants';
import Hero from '@/components/Hero/Hero';

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = 'お問い合わせ';
  const description =
    '寺院管理ソフト「青藍システム 496」の導入やサポートに関するお問い合わせはこちら。檀家管理や塔婆印刷など、多彩な機能についてお気軽にご相談ください。';
  const url = `${siteMeta.siteUrl}contact/`;

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

export default function Contact() {
  return (
    <Hero
      heading="お問い合わせ"
      lead="サービスに関するお問い合わせは、お電話またはメールフォームで承っております。お悩みやご相談は、いつでもお気軽にお問い合わせください。"
    />
  );
}
