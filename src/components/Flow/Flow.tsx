import styles from './Flow.module.scss';

const data = {
  contents: [
    {
      num: 'STEP.01',
      heading: 'お問い合わせ',
      desc: 'お問い合わせフォームまたはお電話で、お悩みをご相談ください。',
    },
    {
      num: 'STEP.02',
      heading: '調査',
      desc: 'ご相談内容を当社で確認いたします。',
    },
    {
      num: 'STEP.03',
      heading: 'ご提案',
      desc: 'お客様のご相談内容に沿った最適なご提案をいたします。',
    },
    {
      num: 'STEP.04',
      heading: 'お申し込み／ご契約',
      desc: '仕様やお見積りにご納得いただいた上で、お申し込み・ご契約いただきます。',
    },
  ],
};

export default function Flow() {
  return (
    <ol className={styles.steps}>
      {data.contents.map((step) => {
        return (
          <li key={step.num} className={styles.step}>
            <span className={styles.num}>{step.num}</span>
            <dl className={styles.definitionlist}>
              <dt className={styles.heading}>{step.heading}</dt>
              <dd>{step.desc}</dd>
            </dl>
          </li>
        );
      })}
    </ol>
  );
}
