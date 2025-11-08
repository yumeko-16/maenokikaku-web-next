import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import styles from './Flow.module.scss';

const steps = [
  {
    num: '01',
    heading: 'お問い合わせ',
    desc: 'お問い合わせフォームまたはお電話で、お悩みをご相談ください。',
  },
  {
    num: '02',
    heading: '調査',
    desc: 'ご相談内容を当社で確認いたします。',
  },
  {
    num: '03',
    heading: 'ご提案',
    desc: 'お客様のご相談内容に沿った最適なご提案をいたします。',
  },
  {
    num: '04',
    heading: 'お申し込み／ご契約',
    desc: '仕様やお見積りにご納得いただいた上で、お申し込み・ご契約いただきます。',
  },
];

export default function Flow() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>お取引のステップ</Heading>

        <ol className={styles.steps}>
          {steps.map(({ num, heading, desc }) => {
            return (
              <li className={styles.step} key={num}>
                <span className={styles.num}>STEP.{num}</span>
                <dl className={styles.definitionlist}>
                  <dt className={styles.heading}>{heading}</dt>
                  <dd>{desc}</dd>
                </dl>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
