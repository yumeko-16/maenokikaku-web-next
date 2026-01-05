import styles from './Flow.module.scss';

type StepContent = {
  id: number;
  heading: string;
  desc: string;
};

const data: { contents: StepContent[] } = {
  contents: [
    {
      id: 1,
      heading: 'お問い合わせ',
      desc: 'お問い合わせフォームまたはお電話で、お悩みをご相談ください。',
    },
    {
      id: 2,
      heading: '調査',
      desc: 'ご相談内容を当社で確認いたします。',
    },
    {
      id: 3,
      heading: 'ご提案',
      desc: 'お客様のご相談内容に沿った最適なご提案をいたします。',
    },
    {
      id: 4,
      heading: 'お申し込み／ご契約',
      desc: '仕様やお見積りにご納得いただいた上で、お申し込み・ご契約いただきます。',
    },
  ],
};

export default function Flow() {
  return (
    <ol className={styles.steps}>
      {data.contents.map(({ id, heading, desc }) => (
        <li key={id} className={styles.step}>
          <span className={styles.num}>STEP.{String(id)}</span>
          <dl className={styles.definitionlist}>
            <dt className={styles.heading}>{heading}</dt>
            <dd>{desc}</dd>
          </dl>
        </li>
      ))}
    </ol>
  );
}
