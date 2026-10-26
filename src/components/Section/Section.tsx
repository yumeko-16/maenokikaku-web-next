import { ReactNode } from 'react';
import styles from './Section.module.scss';

type Props = {
  isHero?: boolean;
  children: ReactNode;
};

export default function Section({ children, isHero = false }: Props) {
  return (
    <section className={styles.wrapper} data-hero={isHero || undefined}>
      {children}
    </section>
  );
}
