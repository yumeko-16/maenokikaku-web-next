import Link from 'next/link';
import styles from './Logo.module.scss';

export default function Logo() {
  return (
    <Link className={styles.text} href="/">
      株式会社前野企画
    </Link>
  );
}
