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
            <li>ホーム</li>
            <li>会社情報</li>
            <li>寺院エキスパート</li>
            <li>お問い合わせ</li>
          </ul>
        </div>

        <p className={styles.copyright}>&copy; 2025 前野企画</p>
      </Container>
    </footer>
  );
}
