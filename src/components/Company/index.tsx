import Container from '@/components/Container';
import Br from '@/components/Br';
import Heading from '@/components/Heading';
import Lead from '@/components/Lead';
import styles from './index.module.scss';

export default function Company() {
  return (
    <Container>
      <Heading>会社情報</Heading>

      <Lead>
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
      </Lead>

      <div className={styles.company}>
        <div className={styles.summary}>
          <h3 className={styles.name}>株式会社前野企画</h3>

          <address className={styles.info}>
            <div className={styles.address}>
              <span>〒350-0405</span>
              <span>埼玉県入間郡越生町津久根672-4</span>
            </div>

            <dl className={styles.contacts}>
              <div className={styles.contact}>
                <dt>FAX:</dt>
                <dd>049-292-5186</dd>
              </div>

              <div className={styles.contact}>
                <dt>TEL:</dt>
                <dd>
                  <a href="tel:+90.2679.3570">090-2679-3570</a>
                </dd>
              </div>

              <div className={styles.contact}>
                <dt>MAIL:</dt>
                <dd>
                  <a href="mailto:maenokikaku@email.plala.or.jp">
                    maenokikaku@email.plala.or.jp
                  </a>
                </dd>
              </div>
            </dl>
          </address>
        </div>

        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.9922032128884!2d139.28256401526082!3d35.97161608012751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60192b7dfb36647d%3A0xde55bd5dd4051c17!2z44CSMzUwLTA0MDUg5Z-8546J55yM5YWl6ZaT6YOh6LaK55Sf55S65aSn5a2X5rSl5LmF5qC577yW77yX77yS4oiS77yU!5e0!3m2!1sja!2sjp!4v1596107085486!5m2!1sja!2sjp"
          title="株式会社前野企画 本社の所在地を表示する地図"
          style={{ border: 'none' }}
          allowFullScreen
          aria-hidden="false"
          tabIndex={0}
          loading="lazy"
        ></iframe>
      </div>
    </Container>
  );
}
