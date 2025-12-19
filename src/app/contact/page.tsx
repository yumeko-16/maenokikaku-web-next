import type { Metadata } from 'next';
import { siteMeta } from '@/lib/constants';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import ContentHeading from '@/components/ContentHeading';
import MailForm from '@/components/MailForm';

const data = {
  contents: {
    hero: {
      heading: 'お問い合わせ',
      lead: 'サービスに関するお問い合わせは、お電話またはメールフォームで承っております。お悩みやご相談は、いつでもお気軽にお問い合わせください。',
    },
    mailForm: {
      heading: 'メールフォーム',
    },
  },
};

export async function generateMetadata(): Promise<Metadata> {
  const pageTitle = 'お問い合わせ';
  const description =
    '寺院管理ソフト「寺院エキスパートシステム」の導入やサポートに関するお問い合わせはこちら。檀家管理や塔婆印刷など、多彩な機能についてお気軽にご相談ください。';
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
  const { hero, mailForm } = data.contents;

  return (
    <>
      <Section bgc="hero">
        <Hero heading={hero.heading} lead={hero.lead} />
      </Section>

      <Section bgc="base">
        <Container>
          <ContentHeading>{mailForm.heading}</ContentHeading>
          <MailForm />
        </Container>
      </Section>
    </>
  );
}
