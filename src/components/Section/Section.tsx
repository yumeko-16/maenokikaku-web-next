import type { ReactNode } from 'react';
import styles from './Section.module.scss';

type Props = {
  variant?: 'main' | 'accent';
  children: ReactNode;
};

export default function Section({ variant, children }: Props) {
  return (
    <section className={styles.wrapper} data-variant={variant}>
      {children}
    </section>
  );
}
