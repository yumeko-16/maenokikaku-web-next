import Container from '@/components/Container';
import Heading from '@/components/Heading';
import styles from './index.module.scss';

export default function CompanyProfile() {
  return (
    <Container>
      <Heading>会社概要</Heading>

      <dl className={styles.definitionlist}>
        <div className={styles.unit}>
          <dt className={styles.term}>会社名</dt>
          <dd className={styles.description}>株式会社前野企画</dd>
        </div>

        <div className={styles.unit}>
          <dt className={styles.term}>代表者</dt>
          <dd className={styles.description}>
            <span>代表取締役社長</span> 前野 太
          </dd>
        </div>

        <div className={styles.unit}>
          <dt className={styles.term}>所在地</dt>
          <dd className={styles.description}>
            〒350-0405
            <br />
            埼玉県入間郡越生町津久根672-4
          </dd>
        </div>

        <div className={styles.unit}>
          <dt className={styles.term}>連絡先</dt>
          <dd className={styles.description}>
            <ul>
              <li>FAX: 049-292-5186</li>
              <li>TEL: 090-2679-3570</li>
              <li>MAIL: maenokikaku@email.plala.or.jp</li>
            </ul>
          </dd>
        </div>

        <div className={styles.unit}>
          <dt className={styles.term}>事業内容</dt>
          <dd className={styles.description}>
            <ul>
              <li>寺務支援</li>
              <li>墓地図制作</li>
              <li>過去帳和綴じ制作</li>
              <li>塔婆システムサポート</li>
              <li>コピー（複合機）／パソコン・LANシステム サポート</li>
              <li>防犯用監視カメラ 導入／運用サポート</li>
              <li>Webサイト制作 サポート</li>
            </ul>
          </dd>
        </div>
      </dl>
    </Container>
  );
}
