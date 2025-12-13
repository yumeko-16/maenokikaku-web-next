import Link from 'next/link';
import styles from './Logo.module.scss';

const data = {
  contents: {
    heading: '株式会社前野企画',
    href: '/',
  },
};

export default function Logo({ boxOn = false }) {
  return (
    <Link
      className={boxOn ? styles.box : styles.basic}
      href={data.contents.href}
    >
      {data.contents.heading}
    </Link>
  );
}
