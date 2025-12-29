import InlineHtmlText from '@/components/InlineHtmlText';
import styles from './Heading.module.scss';

type Props = {
  text: string;
};

export default function Heading({ text }: Props) {
  return (
    <h1 className={styles.wrapper}>
      <InlineHtmlText text={text} />
    </h1>
  );
}
