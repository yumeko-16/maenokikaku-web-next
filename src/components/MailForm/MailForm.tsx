import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import styles from './MailForm.module.scss';

export default function MailForm() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>メールフォーム</Heading>
      </Container>
    </section>
  );
}
