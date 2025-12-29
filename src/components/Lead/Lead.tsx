import InlineHtmlText from '@/components/InlineHtmlText';
import styles from './Lead.module.scss';

type Props = {
  text: string;
};

export default function Lead({ text }: Props) {
  return (
    <div className={styles.wrapper}>
      <InlineHtmlText text={text} />
    </div>
  );
}
