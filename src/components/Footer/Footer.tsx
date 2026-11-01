import Link from 'next/link';
import { NAVIGATION } from '@/constants/navigation';
import Container from '@/components/Container/Container';
import Logo from '@/components/Logo/Logo';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <Logo />

          <ul className={styles.nav}>
            {NAVIGATION.map((item) => (
              <li key={item.href}>
                <Link className={styles.link} href={item.href}>
                  {item.text}
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
