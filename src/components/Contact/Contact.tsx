import Link from 'next/link';
import Container from '@/components/Container/Container';
import Br from '@/components/Br/Br';
import Heading from '@/components/Heading/Heading';
import PostBody from '@/components/PostBody/PostBody';
import styles from './Contact.module.scss';

export default function Flow() {
  return (
    <Container>
      <Heading>お問い合わせ</Heading>

      <PostBody>
        <p>
          サービスに関するお問い合わせは、お電話またはメールフォームで承っております。
          <Br />
          お悩みやご相談は、いつでもお気軽にお問い合わせください。
        </p>
      </PostBody>

      <div className={styles.contact}>
        <div className={styles.phone}>
          <Link className={styles.num} href="tel:+90.2679.3570">
            090-2679-3570
          </Link>
        </div>

        <div className={styles.btn}>
          <Link className={styles.link} href="/contact/">
            メールフォームでお問い合わせ
          </Link>
        </div>
      </div>
    </Container>
  );
}
