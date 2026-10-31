import type { Metadata } from 'next';
import { siteMeta } from '@/lib/constants';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Heading from '@/components/Heading';
import MailForm from '@/components/MailForm';

const data = {
  contents: {
    hero: {
      heading: 'お問い合わせ',
      subHeading:
        'サービスに関するお問い合わせは、お電話またはメールフォームで承っております。<br />お悩みやご相談は、いつでもお気軽にお問い合わせください。',
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
  return (
    <>
      <Hero
        heading={data.contents.hero.heading}
        subHeading={data.contents.hero.subHeading}
      />

      <Section variant="base">
        <Container>
          <Heading>{data.contents.mailForm.heading}</Heading>
          <MailForm />
        </Container>
      </Section>
    </>
  );
}
