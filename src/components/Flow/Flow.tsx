import styles from './Flow.module.scss';

const FLOW_STEPS = [
  {
    heading: 'お問い合わせ',
    description: 'お問い合わせフォームまたはお電話で、お悩みをご相談ください。',
  },
  {
    heading: '調査',
    description: 'ご相談内容を当社で確認いたします。',
  },
  {
    heading: 'ご提案',
    description: 'お客様のご相談内容に沿った最適なご提案をいたします。',
  },
  {
    heading: 'お申し込み／ご契約',
    description:
      '仕様やお見積りにご納得いただいた上で、お申し込み・ご契約いただきます。',
  },
];

export default function Flow() {
  return (
    <ol className={styles.steps}>
      {FLOW_STEPS.map((step, index) => (
        <li key={index} className={styles.step}>
          <span className={styles.number}>STEP.{index + 1}</span>
          <dl className={styles.definitionlist}>
            <dt className={styles.heading}>{step.heading}</dt>
            <dd>{step.description}</dd>
          </dl>
        </li>
      ))}
    </ol>
  );
}
