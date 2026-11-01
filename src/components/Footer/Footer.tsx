import Link from 'next/link';
import Container from '@/components/Container/Container';
import Logo from '@/components/Logo/Logo';
import Copyright from '@/components/Copyright/Copyright';
import { NAVIGATION } from '@/constants/navigation';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.wrapper}>
      <Container>
        <div className={styles.content}>
          <div className={styles.flexContainer}>
            <Logo invertTextColor />

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
        </div>

        <Copyright />
      </Container>
    </footer>
  );
}
