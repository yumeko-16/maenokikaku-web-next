import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import styles from './Company.module.scss';

export default function Company() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>会社情報</Heading>
      </Container>
    </section>
  );
}
