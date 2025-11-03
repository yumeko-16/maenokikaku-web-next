import Container from '@/components/Container/Container';
import Br from '@/components/Br/Br';
import Heading from '@/components/Heading/Heading';
import PostBody from '@/components/PostBody/PostBody';
import styles from './Company.module.scss';

export default function Company() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>会社情報</Heading>

        <PostBody>
          <p>
            当社は株式会社エクシオテック（旧
            大東工業株式会社）の指定販売店として、
            <Br device="pc" />
            寺院用ソフト「寺院エキスパートシステム」の販売、導入指導、サポートを行っています。
          </p>

          <p>
            IT業界を取り巻く環境は日々変化しています。
            <Br />
            そんな中、当社はメーカーや販売店、ユーザーさまのご要望を反映し、改善を重ねてまいりました。
          </p>

          <p>
            今後も、ユーザーさまの信頼に応えられるサービス提供に努めてまいります。
          </p>
        </PostBody>
      </Container>
    </section>
  );
}
