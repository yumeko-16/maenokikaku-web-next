import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import styles from './Contact.module.scss';

export default function Flow() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>お問い合わせ</Heading>
      </Container>
    </section>
  );
}
