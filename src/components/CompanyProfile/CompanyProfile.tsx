import styles from './CompanyProfile.module.scss';

type CompanyProfileItem = {
  id: string;
  term: string;
  descriptions: string[];
};

const data: { contents: CompanyProfileItem[] } = {
  contents: [
    {
      id: 'name',
      term: '会社名',
      descriptions: ['株式会社前野企画'],
    },
    {
      id: 'representative',
      term: '代表者',
      descriptions: ['代表取締役社長 前野 太'],
    },
    {
      id: 'location',
      term: '所在地',
      descriptions: ['〒350-0405', '埼玉県入間郡越生町津久根672-4'],
    },
    {
      id: 'contact',
      term: '連絡先',
      descriptions: [
        'FAX: 049-292-5186',
        'TEL: 090-2679-3570',
        'MAIL: maenokikaku@email.plala.or.jp',
      ],
    },
    {
      id: 'business',
      term: '事業内容',
      descriptions: [
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
};

export default function CompanyProfile() {
  return (
    <dl className={styles.definitionlist}>
      {data.contents.map(({ id, term, descriptions }) => (
        <div key={id} className={styles.unit}>
          <dt className={styles.term}>{term}</dt>
          <dd className={styles.description}>
            <ul>
              {descriptions.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}
