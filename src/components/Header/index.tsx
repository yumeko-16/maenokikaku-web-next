import Container from '@/components/Container';
import Logo from '@/components/Logo';
import Nav from '@/components/Nav';
import styles from './index.module.scss';

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
