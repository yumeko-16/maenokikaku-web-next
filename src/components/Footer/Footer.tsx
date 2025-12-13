import Link from 'next/link';
import Container from '@/components/Container';
import Logo from '@/components/Logo';
import styles from './Footer.module.scss';

const data = {
  contents: [
    {
      href: '/',
      label: 'ホーム',
    },
    {
      href: '/about/',
      label: '会社情報',
    },
    {
      href: '/expert/',
      label: '寺院エキスパートシステム',
    },
    {
      href: '/contact/',
      label: 'お問い合わせ',
    },
  ],
};

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />

          <ul className={styles.nav}>
            {data.contents.map((link) => (
              <li key={link.href}>
                <Link className={styles.link} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className={styles.copyright}>&copy; 2025 前野企画</p>
      </Container>
    </footer>
  );
}
