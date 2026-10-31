import { ReactNode } from 'react';
import styles from './Section.module.scss';

type Props = {
  variant?: string;
  children: ReactNode;
};

export default function Section({ variant, children }: Props) {
  return (
    <section className={styles.wrapper} data-variant={variant}>
      {children}
    </section>
  );
}
