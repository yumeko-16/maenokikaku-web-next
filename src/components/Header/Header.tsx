import Container from '@/components/Container';
import Logo from '@/components/Logo';
import Nav from '@/components/Nav';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo boxOn />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
