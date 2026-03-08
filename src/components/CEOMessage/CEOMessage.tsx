import InlineHtmlText from '@/components/InlineHtmlText';
import styles from './CEOMessage.module.scss';

type HtmlString = string;

type CEOMessage = {
  contents: HtmlString;
};

const data: CEOMessage = {
  contents:
    '<p>当社は、寺院向けシステムの販売、導入指導、サポートを行っております。<br>かつては株式会社エクシオテック（旧 大東工業株式会社）の指定販売店として「寺院エキスパート」を取り扱っておりましたが、現在は株式会社フィンチジャパンが提供する「青藍システム496」（寺院エキスパートと高い互換性を持つ寺院向けシステム）を取り扱っております。</p><p>IT業界を取り巻く環境は日々変化しています。<br>そんな中、当社はメーカーや販売店、ユーザーさまのご要望を反映し、改善を重ねてまいりました。</p><p>今後も、ユーザーさまの信頼に応えられるサービス提供に努めてまいります。</p>',
};

export default function CEOMessage() {
  return (
    <div className={styles.message}>
      <InlineHtmlText text={data.contents} />
    </div>
  );
}
