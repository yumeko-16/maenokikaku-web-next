import Link from 'next/link';
import Container from '@/components/Container';
import Logo from '@/components/Logo';
import Copyright from '@/components/Copyright';
import { NAV_ITEMS } from '@/constants/navigation';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.flexContainer}>
            <Logo invertTextColor />

            <ul className={styles.nav}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link className={styles.link} href={item.href}>
                    {item.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Copyright />
      </Container>
    </footer>
  );
}
