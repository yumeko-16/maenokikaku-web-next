import Container from '@/components/Container/Container';
import Br from '@/components/Br/Br';
import Heading from '@/components/Heading/Heading';
import Lead from '@/components/Lead/Lead';
import styles from './MailForm.module.scss';

export default function MailForm() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>メールフォーム</Heading>

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
