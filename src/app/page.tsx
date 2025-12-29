import Section from '@/components/Section';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import ContentHeading from '@/components/ContentHeading';
import Lead from '@/components/Lead';
import Problem from '@/components/Problem';
import Expert from '@/components/Expert';
import Service from '@/components/Service';
import Flow from '@/components/Flow';
import Contact from '@/components/Contact';
import styles from './page.module.scss';

const data = {
  contents: {
    hero: {
      heading: '寺院管理ソフトの課題を<wbr>前野企画が解決します',
      lead: '<p>当社は、ご寺院さまの運営を支援する寺院管理ソフトを提供しています。<br>檀家管理から法要・棚経管理まで、日常業務の効率化を幅広くサポートいたします。</p>',
    },
    problem: {
      heading: '寺院管理で、こんな課題に直面していませんか？',
    },
    expert: {
      heading: '寺院エキスパートシステム',
      lead: '<p>お悩みは、すべて「寺院エキスパートシステム」で解決できます。</p>',
    },
    service: {
      heading: '当社サービスのご案内',
      lead: '<p>当社は寺院エキスパートシステムに加え、<br>ご寺院さまの業務をサポートする幅広いサービスをご用意しています。</p>',
    },
    flow: {
      heading: 'お取引のステップ',
    },
    contact: {
      heading: 'お問い合わせ',
      lead: '<p>サービスに関するお問い合わせは、お電話またはメールフォームで承っております。<br>お悩みやご相談は、いつでもお気軽にお問い合わせください。</p>',
    },
  },
};

export default function Home() {
  const { hero, problem, expert, service, flow, contact } = data.contents;

  return (
    <>
      <Section bgc="hero">
        <Hero heading={hero.heading} lead={hero.lead} imageOn />
      </Section>

      <Section bgc="base">
        <Container>
          <ContentHeading>{problem.heading}</ContentHeading>
          <Problem />
        </Container>
      </Section>

      <Section>
        <Container>
          <ContentHeading>{expert.heading}</ContentHeading>

          <div className={styles.lead}>
            <Lead text={expert.lead} />
          </div>

          <Expert />
        </Container>
      </Section>

      <Section bgc="base">
        <Container>
          <ContentHeading>{service.heading}</ContentHeading>

          <div className={styles.lead}>
            <Lead text={service.lead} />
          </div>

          <Service />
        </Container>
      </Section>

      <Section bgc="base">
        <Container>
          <ContentHeading>{flow.heading}</ContentHeading>
          <Flow />
        </Container>
      </Section>

      <Section>
        <Container>
          <ContentHeading>{contact.heading}</ContentHeading>

          <div className={styles.lead}>
            <Lead text={contact.lead} />
          </div>

          <Contact />
        </Container>
      </Section>
    </>
  );
}
