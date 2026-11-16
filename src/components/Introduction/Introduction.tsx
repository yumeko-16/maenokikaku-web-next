import PostBody from '@/components/PostBody/PostBody';
import styles from './Introduction.module.scss';

export default function Introduction() {
  return (
    <PostBody>
      <p className={styles.default}>
        当社は、ご寺院さまの運営を支援する
        <wbr />
        寺院管理ソフトを提供しています。
      </p>

      <p className={styles.default}>
        檀家管理から法要・棚経管理まで、
        <wbr />
        日常業務の効率化を幅広くサポートいたします。
      </p>

      <p className={styles.large}>
        寺院管理の課題を
        <wbr />
        <em>前野企画</em>
        が解決します。
      </p>
    </PostBody>
  );
}
