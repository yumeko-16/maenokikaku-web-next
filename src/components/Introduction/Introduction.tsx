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
        <br />
        日常業務の効率化を幅広く
        <wbr />
        サポートいたします。
      </p>

      <h3 className={styles.large}>
        寺院管理の課題を
        <br />
        <em>前野企画</em>
        が解決します。
      </h3>
    </PostBody>
  );
}
