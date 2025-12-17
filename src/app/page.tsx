import { Fragment } from 'react';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Hero from '@/components/Hero';
import Heading from '@/components/Heading';
import Lead from '@/components/Lead';
import Br from '@/components/Br';
import Problem from '@/components/Problem';
import Expert from '@/components/Expert';
import Service from '@/components/Service';
import Flow from '@/components/Flow';
import Contact from '@/components/Contact';

const data = {
  contents: {
    hero: {
      heading: '寺院管理の課題を前野企画が解決します',
      lead: '当社は、ご寺院さまの運営を支援する寺院管理ソフトを提供しています。檀家管理から法要・棚経管理まで、日常業務の効率化を幅広くサポートいたします。',
    },
    problem: {
      heading: '寺院管理で、こんな課題に直面していませんか？',
    },
    expert: {
      heading: '寺院エキスパートシステム',
      lead: 'お悩みは、すべて「寺院エキスパートシステム」で解決できます。',
    },
    service: {
      heading: '当社サービスのご案内',
      lead: [
        '当社は寺院エキスパートシステムに加え、',
        'ご寺院さまの業務をサポートする幅広いサービスをご用意しています。',
      ],
    },
    flow: {
      heading: 'お取引のステップ',
    },
    contact: {
      heading: 'お問い合わせ',
      lead: [
        'サービスに関するお問い合わせは、お電話またはメールフォームで承っております。',
        'お悩みやご相談は、いつでもお気軽にお問い合わせください。',
      ],
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
          <Heading>{problem.heading}</Heading>
          <Problem />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading>{expert.heading}</Heading>

          <Lead>
            <p>{expert.lead}</p>
          </Lead>

          <Expert />
        </Container>
      </Section>

      <Section bgc="base">
        <Container>
          <Heading>{service.heading}</Heading>

          <Lead>
            <p>
              {service.lead.map((text, index) => (
                <Fragment key={index}>
                  {text}
                  {index < service.lead.length - 1 && <Br device="pc" />}
                </Fragment>
              ))}
            </p>
          </Lead>

          <Service />
        </Container>
      </Section>

      <Section bgc="base">
        <Container>
          <Heading>{flow.heading}</Heading>
          <Flow />
        </Container>
      </Section>

      <Section>
        <Container>
          <Heading>{contact.heading}</Heading>

          <Lead>
            <p>
              {contact.lead.map((text, index) => (
                <Fragment key={index}>
                  {text}
                  {index < contact.lead.length - 1 && <Br />}
                </Fragment>
              ))}
            </p>
          </Lead>

          <Contact />
        </Container>
      </Section>
    </>
  );
}
