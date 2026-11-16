import type { CSSProperties, ReactNode } from 'react';
import styles from './SplitColumns.module.scss';

type Props = {
  firstFlex?: number;
  secondFlex?: number;
  children: ReactNode;
};

export function SplitColumns({
  firstFlex = 1,
  secondFlex = 1,
  children,
}: Props) {
  return (
    <div
      className={styles.flexContainer}
      style={
        {
          '--first-flex': firstFlex,
          '--second-flex': secondFlex,
        } as CSSProperties
      }
    >
      {children}
    </div>
  );
}

export function SplitColumnsFirst({ children }: Pick<Props, 'children'>) {
  return <div className={styles.first}>{children}</div>;
}

export function SplitColumnsSecond({ children }: Pick<Props, 'children'>) {
  return <div className={styles.second}>{children}</div>;
}
