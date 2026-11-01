import type { ReactNode } from 'react';
import styles from './Section.module.scss';

type Props = {
  children: ReactNode;
};

export default function Section({ children }: Props) {
  return <section className={styles.wrapper}>{children}</section>;
}
