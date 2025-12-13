import Container from '@/components/Container';
import Heading from '@/components/Heading';
import styles from './CompanyProfile.module.scss';

const data = {
  contents: {
    heading: '会社概要',
    companyInfo: [
      {
        key: 'name',
        label: '会社名',
        values: ['株式会社前野企画'],
      },
      {
        key: 'representative',
        label: '代表者',
        values: ['代表取締役社長 前野 太'],
      },
      {
        key: 'location',
        label: '所在地',
        values: ['〒350-0405', '埼玉県入間郡越生町津久根672-4'],
      },
      {
        key: 'contact',
        label: '連絡先',
        values: [
          'FAX: 049-292-5186',
          'TEL: 090-2679-3570',
          'MAIL: maenokikaku@email.plala.or.jp',
        ],
      },
      {
        key: 'business',
        label: '事業内容',
        values: [
          '寺務支援',
          '墓地図制作',
          '過去帳和綴じ制作',
          '塔婆システムサポート',
          'コピー（複合機）／パソコン・LANシステム サポート',
          '防犯用監視カメラ 導入／運用サポート',
          'Webサイト制作 サポート',
        ],
      },
    ],
  },
};

export default function CompanyProfile() {
  const { heading, companyInfo } = data.contents;

  return (
    <Container>
      <Heading>{heading}</Heading>

      <dl className={styles.definitionlist}>
        {companyInfo.map(({ key, label, values }) => (
          <div key={key} className={styles.unit}>
            <dt className={styles.term}>{label}</dt>
            <dd className={styles.description}>
              <ul>
                {values.map((value, index) => (
                  <li key={index}>{value}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Container>
  );
}
