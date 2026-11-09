import Link from 'next/link';
import styles from './ContactCta.module.scss';

export default function ContactCta() {
  return (
    <div className={styles.frame}>
      <div>
        <h2 className={styles.heading}>お問い合わせ</h2>
        <p className={styles.lead}>
          サービスに関するお問い合わせは、
          <wbr />
          お電話またはメールフォームで承っております。
          <br />
          お悩みやご相談は、
          <wbr />
          いつでもお気軽にお問い合わせください。
        </p>
      </div>

      <div className={styles.actions}>
        <Link className={styles.link} href="tel:09026793570">
          <span className={styles.gridContainer}>
            <small className={styles.label}>お電話からのご相談はこちら</small>
            <span className={styles.tel}>090-2679-3570</span>
          </span>
        </Link>

        <Link className={styles.link} href="/contact/">
          <span className={styles.gridContainer}>
            <small className={styles.label}>フォームからのご相談はこちら</small>
            <strong className={styles.text}>
              メールフォームで
              <wbr />
              お問い合わせ
            </strong>
          </span>
        </Link>
      </div>
    </div>
  );
}
