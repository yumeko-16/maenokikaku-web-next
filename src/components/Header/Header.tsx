import Logo from '@/components/Logo/Logo';
import Nav from '@/components/Nav/Nav';
import styles from './Header.module.scss';

export default function Header() {
  return (
    <header>
      <div className={styles.flexContainer}>
        <Logo />
        <Nav />
      </div>
    </header>
  );
}
