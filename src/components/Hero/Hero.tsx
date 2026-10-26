import InlineHtmlText from '@/components/InlineHtmlText';
import styles from './Hero.module.scss';

type Props = {
  title: string;
  subtitle: string;
  page: string;
  hasEnglish?: boolean;
};

export default function Hero({
  title,
  subtitle,
  page,
  hasEnglish = false,
}: Props) {
  return (
    <div className={styles.wrapper} data-page={page}>
      <div className={styles.container}>
        <div className={styles.text} data-page={page}>
          <h1 className={styles.title}>
            <InlineHtmlText text={title} />
          </h1>

          <p className={styles.subtitle} data-lang-en={hasEnglish || undefined}>
            <InlineHtmlText text={subtitle} />
          </p>
        </div>
      </div>
    </div>
  );
}
