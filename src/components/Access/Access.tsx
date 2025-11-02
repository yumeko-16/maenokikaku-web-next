import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import styles from './Access.module.scss';

export default function Access() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>アクセス</Heading>
      </Container>
    </section>
  );
}
