import Link from 'next/link';
import styles from './Logo.module.scss';

type Props = {
  invertTextColor?: boolean;
};

export default function Logo({ invertTextColor = false }: Props) {
  return (
    <Link className={invertTextColor ? styles.inverted : styles.basic} href="/">
      <span className={styles.ja}>株式会社前野企画</span>
      <span className={styles.en}>MAENO KIKAKU</span>
    </Link>
  );
}
