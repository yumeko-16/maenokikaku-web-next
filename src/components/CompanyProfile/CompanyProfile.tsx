import styles from './CompanyProfile.module.scss';

const COMPANY_PROFILE = [
  {
    term: '会社名',
    values: ['株式会社前野企画'],
  },
  {
    term: '代表者',
    values: ['代表取締役社長 前野 太'],
  },
  {
    term: '所在地',
    values: ['〒350-0405', '埼玉県入間郡越生町津久根672-4'],
  },
  {
    term: '連絡先',
    values: [
      'FAX: 049-292-5186',
      'TEL: 090-2679-3570',
      'MAIL: maenokikaku@email.plala.or.jp',
    ],
  },
  {
    term: '事業内容',
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
];

export default function CompanyProfile() {
  return (
    <dl className={styles.definitionlist}>
      {COMPANY_PROFILE.map((item) => (
        <div key={item.term} className={styles.unit}>
          <dt className={styles.term}>{item.term}</dt>
          <dd className={styles.description}>
            <ul>
              {item.values.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
