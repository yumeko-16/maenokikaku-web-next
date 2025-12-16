import { Fragment } from 'react';
import Br from '@/components/Br';
import styles from './CEOMessage.module.scss';

const data = {
  contents: [
    {
      lines: [
        '当社は株式会社エクシオテック（旧 大東工業株式会社）の指定販売店として、',
        '寺院用ソフト「寺院エキスパートシステム」の販売、導入指導、サポートを行っています。',
      ],
      brDevice: 'pc',
    },
    {
      lines: [
        'IT業界を取り巻く環境は日々変化しています。',
        'そんな中、当社はメーカーや販売店、ユーザーさまのご要望を反映し、改善を重ねてまいりました。',
      ],
    },
    {
      lines: [
        '今後も、ユーザーさまの信頼に応えられるサービス提供に努めてまいります。',
      ],
    },
  ],
};

export default function CEOMessage() {
  return (
    <div className={styles.message}>
      {data.contents.map((paragraph, pIndex) => (
        <p key={pIndex}>
          {paragraph.lines.map((line, lIndex) => (
            <Fragment key={lIndex}>
              {line}
              {lIndex < paragraph.lines.length - 1 && (
                <Br device={paragraph.brDevice} />
              )}
            </Fragment>
          ))}
        </p>
      ))}
    </div>
  );
}
