import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import styles from './Expert.module.scss';

export default function Expert() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>寺院エキスパートシステム</Heading>
      </Container>
    </section>
  );
}
