import InlineHtmlText from '@/components/InlineHtmlText';
import styles from './CEOMessage.module.scss';

type HtmlString = string;

type CEOMessage = {
  contents: HtmlString;
};

const data: CEOMessage = {
  contents:
    '<p>当社は株式会社エクシオテック（旧 大東工業株式会社）の指定販売店として、<wbr>寺院用ソフト「寺院エキスパートシステム」の販売、導入指導、サポートを行っています。</p><p>IT業界を取り巻く環境は日々変化しています。<br>そんな中、当社はメーカーや販売店、ユーザーさまのご要望を反映し、改善を重ねてまいりました。</p><p>今後も、ユーザーさまの信頼に応えられるサービス提供に努めてまいります。</p>',
};

export default function CEOMessage() {
  return (
    <div className={styles.message}>
      <InlineHtmlText text={data.contents} />
    </div>
  );
}
