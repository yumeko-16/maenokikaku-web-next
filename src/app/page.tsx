import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';
import Heading from '@/components/Heading/Heading';
import Lead from '@/components/Lead/Lead';
import Problem from '@/components/Problem/Problem';
import Seiran496 from '@/components/Seiran496/Seiran496';
import Service from '@/components/Service/Service';
import Flow from '@/components/Flow/Flow';
import Contact from '@/components/Contact/Contact';
import styles from './page.module.scss';

const PAGE_CONTENT = {
  hero: {
    heading: (
      <>
        寺院管理の課題を、
        <wbr />
        前野企画が解決します。
      </>
    ),
    subHeading: (
      <>
        当社は、ご寺院さまの運営を支援する寺院管理ソフトを提供しています。
        <br />
        檀家管理から法要・棚経管理まで、日常業務の効率化を幅広くサポートいたします。
      </>
    ),
  },
  problem: {
    heading: '寺院管理で、こんな課題に直面していませんか？',
  },
  seiran496: {
    heading: '青藍システム496',
    lead: ['お悩みは、すべて「青藍システム496」で解決できます。'],
  },
  service: {
    heading: '当社サービスのご案内',
    lead: [
      <>
        当社は青藍システム496に加え、
        <wbr />
        ご寺院さまの業務をサポートする幅広いサービスをご用意しています。
      </>,
    ],
  },
  flow: {
    heading: 'お取引のステップ',
  },
  contact: {
    heading: 'お問い合わせ',
    lead: [
      <>
        サービスに関するお問い合わせは、お電話またはメールフォームで承っております。
        <br />
        お悩みやご相談は、いつでもお気軽にお問い合わせください。
      </>,
    ],
  },
};

export default function Home() {
  return (
    <>
      <Hero
        heading={PAGE_CONTENT.hero.heading}
        subHeading={PAGE_CONTENT.hero.subHeading}
        page="home"
        imageOn
      />

      <Section>
        <Container>
          <Heading>{PAGE_CONTENT.problem.heading}</Heading>

          <Problem />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading>{PAGE_CONTENT.seiran496.heading}</Heading>

          <div className={styles.lead}>
            <Lead text={PAGE_CONTENT.seiran496.lead} />
          </div>

          <Seiran496 />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading>{PAGE_CONTENT.service.heading}</Heading>

          <div className={styles.lead}>
            <Lead text={PAGE_CONTENT.service.lead} />
          </div>

          <Service />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading>{PAGE_CONTENT.flow.heading}</Heading>
          <Flow />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading>{PAGE_CONTENT.contact.heading}</Heading>

          <div className={styles.lead}>
            <Lead text={PAGE_CONTENT.contact.lead} />
          </div>

          <Contact />
        </Container>
      </Section>
    </>
  );
}
