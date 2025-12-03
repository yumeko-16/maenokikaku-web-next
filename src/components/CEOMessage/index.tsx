import Container from '@/components/Container';
import Br from '@/components/Br';
import Heading from '@/components/Heading';
import styles from './index.module.scss';

export default function CEOMessage() {
  return (
    <Container>
      <Heading>代表メッセージ</Heading>

      <div className={styles.message}>
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
      </div>
    </Container>
  );
}
