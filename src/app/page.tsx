import Link from 'next/link';
import Image from 'next/image';
import Hero from '@/components/Hero/Hero';
import Section from '@/components/Section/Section';
import Container from '@/components/Container/Container';
import {
  SplitColumns,
  SplitColumnsFirst,
  SplitColumnsSecond,
} from '@/components/SplitColumns/SplitColumns';
import Heading from '@/components/Heading/Heading';
import Spacer from '@/components/Spacer/Spacer';
import Lead from '@/components/Lead/Lead';
import Introduction from '@/components/Introduction/Introduction';
import Problem from '@/components/Problem/Problem';
import Seiran496Caption from '@/components/Seiran496Caption/Seiran496Caption';
import Marquee from '@/components/Marquee/Marquee';
import Service from '@/components/Service/Service';
import Flow from '@/components/Flow/Flow';
import ContactCta from '@/components/ContactCta/ContactCta';
import styles from './page.module.scss';

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
  introduction: {
    heading: (
      <>
        ご寺院さまの運営を、
        <wbr />
        仕組みで支える。
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
          <SplitColumns>
            <SplitColumnsFirst>
              <Heading>{PAGE_CONTENT.introduction.heading}</Heading>
            </SplitColumnsFirst>

            <SplitColumnsSecond>
              <Introduction />

              <div className={styles.links}>
                <Link href="/expert/">青藍システム496を見る</Link>
                <Link href="/about/">会社情報</Link>
              </div>
            </SplitColumnsSecond>
          </SplitColumns>
        </Container>
      </Section>

      <Section variant="main">
        <Container>
          <SplitColumns>
            <SplitColumnsFirst>
              <Heading>{PAGE_CONTENT.problem.heading}</Heading>
            </SplitColumnsFirst>

            <SplitColumnsSecond>
              <Problem />
            </SplitColumnsSecond>
          </SplitColumns>
        </Container>
      </Section>

      <Section>
        <Container>
          <SplitColumns>
            <SplitColumnsFirst>
              <figure>
                <Image
                  src="/images/seiran496/main.webp"
                  alt="青藍システム496のメイン画面"
                  width={434}
                  height={446}
                  loading="lazy"
                />
              </figure>
            </SplitColumnsFirst>

            <SplitColumnsSecond>
              <Heading>{PAGE_CONTENT.seiran496.heading}</Heading>
              <Spacer size="sm" />

              <Lead>
                <p>お悩みは、すべて「青藍システム496」で解決できます。</p>
              </Lead>

              <Spacer size="sm" />
              <Seiran496Caption />
              <Spacer size="sm" />

              <Link className={styles.link} href="/expert/">
                もっと詳しく
              </Link>
            </SplitColumnsSecond>
          </SplitColumns>
        </Container>
      </Section>

      <Marquee />

      <Section>
        <Container>
          <SplitColumns>
            <SplitColumnsFirst>
              <Heading>{PAGE_CONTENT.service.heading}</Heading>
            </SplitColumnsFirst>

            <SplitColumnsSecond>
              <Lead>
                <p>
                  当社は青藍システム496に加え、
                  <wbr />
                  ご寺院さまの業務をサポートする幅広いサービスをご用意しています。
                </p>
              </Lead>
            </SplitColumnsSecond>
          </SplitColumns>

          <Spacer size="sm" />
          <Service />
        </Container>
      </Section>

      <Section variant="accent">
        <Container>
          <Heading variant="white">{PAGE_CONTENT.flow.heading}</Heading>
          <Spacer size="sm" />

          <Lead>
            <p>お問い合わせからご契約まで、丁寧にご案内いたします。</p>
          </Lead>

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
