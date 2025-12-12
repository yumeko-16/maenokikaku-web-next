import Link from 'next/link';
import styles from './Logo.module.scss';

export default function Logo({ boxOn = false }) {
  return (
    <Link className={boxOn ? styles.box : styles.basic} href="/">
      株式会社前野企画
    </Link>
  );
}
