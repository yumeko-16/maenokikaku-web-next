import { ReactNode } from 'react';
import styles from './Section.module.scss';

type Props = {
  children: ReactNode;
  bgc?: string;
};

export default function Section({ children, bgc }: Props) {
  return (
    <section className={styles.wrapper} data-bgc={bgc}>
      {children}
    </section>
  );
}
