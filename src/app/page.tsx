import Section from '@/components/Section';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import ContentHeading from '@/components/ContentHeading';
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
      title: '寺院管理の課題を、<br />前野企画が解決します。',
      subtitle: 'Solving temple management<br />with sincere support.',
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
      <Section isHero>
        <Container large>
          <Hero
            title={data.contents.hero.title}
            subtitle={data.contents.hero.subtitle}
            page="home"
            hasEnglish
          />
        </Container>
      </Section>

      <Section>
        <Container>
          <ContentHeading>{data.contents.problem.heading}</ContentHeading>
          <Problem />
        </Container>
      </Section>

      <Section>
        <Container>
          <ContentHeading>{data.contents.seiran496.heading}</ContentHeading>

          <div className={styles.lead}>
            <Lead text={data.contents.seiran496.lead} />
          </div>

          <Seiran496 />
        </Container>
      </Section>

      <Section>
        <Container>
          <ContentHeading>{data.contents.service.heading}</ContentHeading>

          <div className={styles.lead}>
            <Lead text={data.contents.service.lead} />
          </div>

          <Service />
        </Container>
      </Section>

      <Section>
        <Container>
          <ContentHeading>{data.contents.flow.heading}</ContentHeading>
          <Flow />
        </Container>
      </Section>

      <Section>
        <Container>
          <ContentHeading>{data.contents.contact.heading}</ContentHeading>

          <div className={styles.lead}>
            <Lead text={data.contents.contact.lead} />
          </div>

          <Contact />
        </Container>
      </Section>
    </>
  );
}
