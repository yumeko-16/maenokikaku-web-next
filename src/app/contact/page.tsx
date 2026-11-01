import type { Metadata } from 'next';
import { siteMeta } from '@/constants/siteMeta';
import Hero from '@/components/Hero/Hero';
import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import MailForm from '@/components/MailForm/MailForm';

const PAGE_CONTENT = {
  hero: {
    heading: 'お問い合わせ',
    subHeading: (
      <>
        サービスに関するお問い合わせは、お電話またはメールフォームで承っております。
        <br />
        お悩みやご相談は、いつでもお気軽にお問い合わせください。
      </>
    ),
  },
  mailForm: {
    heading: 'メールフォーム',
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
  return (
    <>
      <Hero
        heading={PAGE_CONTENT.hero.heading}
        subHeading={PAGE_CONTENT.hero.subHeading}
      />

      <Section variant="base">
        <Container>
          <Heading>{PAGE_CONTENT.mailForm.heading}</Heading>
          <MailForm />
        </Container>
      </Section>
    </>
  );
}
