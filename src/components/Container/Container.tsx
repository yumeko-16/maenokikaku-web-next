import { ReactNode } from 'react';
import styles from './Container.module.scss';

type Props = {
  children: ReactNode;
  large?: boolean;
};

export default function Container({ children, large = false }: Props) {
  return (
    <div className={styles.wrapper} data-size={large ? 'large' : 'default'}>
      {children}
    </div>
  );
}
