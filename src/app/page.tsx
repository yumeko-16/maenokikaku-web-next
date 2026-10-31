import Section from '@/components/Section';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Heading from '@/components/Heading';
import Lead from '@/components/Lead';
import Problem from '@/components/Problem';
import Seiran496 from '@/components/Seiran496';
import Service from '@/components/Service';
import Flow from '@/components/Flow';
import Contact from '@/components/Contact';
import styles from './page.module.scss';

const data = {
  contents: {
    hero: {
      heading: '寺院管理の課題を、<br />前野企画が解決します。',
      subHeading:
        '当社は、ご寺院さまの運営を支援する寺院管理ソフトを提供しています。<br />檀家管理から法要・棚経管理まで、日常業務の効率化を幅広くサポートいたします。',
    },
    problem: {
      heading: '寺院管理で、こんな課題に直面していませんか？',
    },
    seiran496: {
      heading: '青藍システム496',
      lead: '<p>お悩みは、すべて「青藍システム496」で解決できます。</p>',
    },
    service: {
      heading: '当社サービスのご案内',
      lead: '<p>当社は青藍システム496に加え、<br />ご寺院さまの業務をサポートする幅広いサービスをご用意しています。</p>',
    },
    flow: {
      heading: 'お取引のステップ',
    },
    contact: {
      heading: 'お問い合わせ',
      lead: '<p>サービスに関するお問い合わせは、お電話またはメールフォームで承っております。<br />お悩みやご相談は、いつでもお気軽にお問い合わせください。</p>',
    },
  },
};

export default function Home() {
  return (
    <>
      <Hero
        heading={data.contents.hero.heading}
        subHeading={data.contents.hero.subHeading}
        imageOn
      />

      <Section variant="base">
        <Container>
          <Heading>{data.contents.problem.heading}</Heading>
          <Problem />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading>{data.contents.seiran496.heading}</Heading>

          <div className={styles.lead}>
            <Lead text={data.contents.seiran496.lead} />
          </div>

          <Seiran496 />
        </Container>
      </Section>

      <Section variant="base">
        <Container>
          <Heading>{data.contents.service.heading}</Heading>

          <div className={styles.lead}>
            <Lead text={data.contents.service.lead} />
          </div>

          <Service />
        </Container>
      </Section>

      <Section variant="base">
        <Container>
          <Heading>{data.contents.flow.heading}</Heading>
          <Flow />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading>{data.contents.contact.heading}</Heading>

          <div className={styles.lead}>
            <Lead text={data.contents.contact.lead} />
          </div>

          <Contact />
        </Container>
      </Section>
    </>
  );
}
