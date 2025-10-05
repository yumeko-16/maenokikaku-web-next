import styles from './Hero.module.scss';

type Props = {
  heading: string;
  lead: string;
  imageOn?: boolean;
};

export default function Hero({ heading, lead, imageOn = false }: Props) {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>{heading}</h1>

      <div className={styles.lead}>
        <p>{lead}</p>
      </div>

      {imageOn && <figure> [画像] </figure>}

      <div className={styles.btn}>お問い合わせ</div>
    </div>
  );
}
