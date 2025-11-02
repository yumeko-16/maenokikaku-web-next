import Container from '@/components/Container/Container';
import Br from '@/components/Br/Br';
import Heading from '@/components/Heading/Heading';
import Lead from '../Lead/Lead';
import styles from './Contact.module.scss';

export default function Flow() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>お問い合わせ</Heading>

        <Lead>
          <p>
            サービスに関するお問い合わせは、お電話またはメールフォームで承っております。
            <Br />
            お悩みやご相談は、いつでもお気軽にお問い合わせください。
          </p>
        </Lead>
      </Container>
    </section>
  );
}
