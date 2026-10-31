import { ReactNode } from 'react';
import styles from './Container.module.scss';

type Props = {
  large?: boolean;
  children: ReactNode;
};

export default function Container({ large = false, children }: Props) {
  return (
    <div className={styles.wrapper} data-size={large ? 'large' : 'default'}>
      {children}
    </div>
  );
}
