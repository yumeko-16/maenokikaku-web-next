import Link from 'next/link';
import styles from './Logo.module.scss';

const data = {
  contents: {
    headingJa: '株式会社前野企画',
    headingEn: 'MAENO KIKAKU',
    href: '/',
  },
};

export default function Logo({ invertTextColor = false }) {
  return (
    <Link
      className={invertTextColor ? styles.inverted : styles.basic}
      href={data.contents.href}
    >
      <span className={styles.ja}>{data.contents.headingJa}</span>
      <span className={styles.en}>{data.contents.headingEn}</span>
    </Link>
  );
}
