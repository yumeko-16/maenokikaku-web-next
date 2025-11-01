import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import styles from './Flow.module.scss';

export default function Flow() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>お取引のステップ</Heading>
      </Container>
    </section>
  );
}
