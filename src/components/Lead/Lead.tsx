import { ReactNode } from 'react';
import styles from './Lead.module.scss';

type Props = {
  children: ReactNode;
};

export default function Lead({ children }: Props) {
  return <div className={styles.wrapper}>{children}</div>;
}
