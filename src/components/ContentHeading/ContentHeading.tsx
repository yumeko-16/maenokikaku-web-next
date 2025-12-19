import { ReactNode } from 'react';
import styles from './ContentHeading.module.scss';

type Props = {
  children: ReactNode;
};

export default function ContentHeading({ children }: Props) {
  return <h2 className={styles.wrapper}>{children}</h2>;
}
