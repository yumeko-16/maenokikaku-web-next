import Link from 'next/link';
import { NAVIGATION } from '@/constants/navigation';
import Container from '@/components/Container/Container';
import Logo from '@/components/Logo/Logo';
import Copyright from '@/components/Copyright/Copyright';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.content}>
          <div className={styles.flexContainer}>
            <div>
              <Logo invertTextColor />

              <address className={styles.address}>
                〒350-0405 埼玉県入間郡越生町津久根672-4
                <br />
                TEL 090-2679-3570 ／ FAX 049-292-5186
              </address>
            </div>

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

        <div className={styles.copyright}>
          <Copyright />
        </div>
      </Container>
    </footer>
  );
}
