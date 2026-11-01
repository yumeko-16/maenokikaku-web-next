import Container from '@/components/Container/Container';
import Logo from '@/components/Logo/Logo';
import Nav from '@/components/Nav/Nav';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header className={styles.wrapper}>
      <Container large>
        <div className={styles.flexContainer}>
          <Logo />
          <Nav />
        </div>
      </Container>
    </header>
  );
}
