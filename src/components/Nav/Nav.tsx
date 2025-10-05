import Link from 'next/link';
import styles from './Nav.module.scss';

const navLinks = [
  { href: '/', label: 'ホーム' },
  { href: '/expert', label: '寺院エキスパートシステム' },
  { href: '/contact', label: 'お問い合わせ' },
];

export default function Nav() {
  return (
    <nav className={styles.wrapper}>
      <ul className={styles.list}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link className={styles.link} href={link.href}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
