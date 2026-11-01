import { ReactNode } from 'react';
import styles from './Lead.module.scss';

type Props = {
  text: ReactNode[];
};

export default function Lead({ text }: Props) {
  return (
    <div className={styles.wrapper}>
      {text.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}
