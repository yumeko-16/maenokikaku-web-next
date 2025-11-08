import Container from '@/components/Container/Container';
import Br from '@/components/Br/Br';
import Heading from '@/components/Heading/Heading';
import PostBody from '@/components/PostBody/PostBody';
import styles from './MailForm.module.scss';

export default function MailForm() {
  return (
    <Container>
      <Heading>メールフォーム</Heading>

      <PostBody>
        <p>
          サービスに関するお問い合わせは、お電話またはメールフォームで承っております。
          <Br />
          お悩みやご相談は、いつでもお気軽にお問い合わせください。
        </p>
      </PostBody>
    </Container>
  );
}
