import Hero from '@/components/Hero/Hero';
import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import Spacer from '@/components/Spacer/Spacer';
import Lead from '@/components/Lead/Lead';
import Problem from '@/components/Problem/Problem';
import Seiran496 from '@/components/Seiran496/Seiran496';
import Marquee from '@/components/Marquee/Marquee';
import Service from '@/components/Service/Service';
import Flow from '@/components/Flow/Flow';
import ContactCta from '@/components/ContactCta/ContactCta';

const PAGE_CONTENT = {
  hero: {
    heading: (
      <>
        寺院管理の課題を、
        <br />
        前野企画が解決します。
      </>
    ),
    subHeading: (
      <>
        Solving temple management
        <br />
        with sincere support.
      </>
    ),
  },
  problem: {
    heading: (
      <>
        寺院管理で、
        <br />
        こんな課題に
        <br />
        直面していませんか？
      </>
    ),
  },
  seiran496: {
    heading: '青藍システム496',
  },
  service: {
    heading: '当社サービスのご案内',
  },
  flow: {
    heading: 'お取引のステップ',
  },
};

export default function Home() {
  return (
    <>
      <Hero
        heading={PAGE_CONTENT.hero.heading}
        subHeading={PAGE_CONTENT.hero.subHeading}
        page="home"
        hasEnglish
      />

      <Section>
        <Container>
          <Heading>{PAGE_CONTENT.problem.heading}</Heading>
          <Spacer size="sm" />
          <Problem />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading>{PAGE_CONTENT.seiran496.heading}</Heading>
          <Spacer size="sm" />
          <Lead>
            <p>お悩みは、すべて「青藍システム496」で解決できます。</p>
          </Lead>
          <Spacer size="sm" />
          <Seiran496 />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading>{PAGE_CONTENT.service.heading}</Heading>
          <Spacer size="sm" />
          <Lead>
            <p>
              当社は青藍システム496に加え、
              <wbr />
              ご寺院さまの業務をサポートする幅広いサービスをご用意しています。
            </p>
          </Lead>
          <Spacer size="sm" />
          <Service />
        </Container>
      </Section>

      <Marquee />

      <Section>
        <Container>
          <Heading>{PAGE_CONTENT.flow.heading}</Heading>
          <Spacer size="sm" />
          <Flow />
        </Container>
      </Section>

      <Section>
        <Container>
          <ContactCta />
        </Container>
      </Section>
    </>
  );
}
