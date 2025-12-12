import { ReactNode } from 'react';
import styles from './Heading.module.scss';

type Props = {
  children: ReactNode;
};

export default function Heading({ children }: Props) {
  return <h2 className={styles.wrapper}>{children}</h2>;
}
