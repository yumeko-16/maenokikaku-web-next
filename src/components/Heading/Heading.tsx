import type { ReactNode } from 'react';
import styles from './Heading.module.scss';

type Props = {
  variant?: 'white';
  children: ReactNode;
};

export default function Heading({ variant, children }: Props) {
  return (
    <h2 className={styles.heading} data-variant={variant}>
      {children}
    </h2>
  );
}
