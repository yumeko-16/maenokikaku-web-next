import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import styles from './Service.module.scss';

export default function Service() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>当社サービスのご案内</Heading>
      </Container>
    </section>
  );
}
