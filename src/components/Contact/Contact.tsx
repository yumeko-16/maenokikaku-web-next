import Link from 'next/link';
import styles from './Contact.module.scss';

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.heading}>お電話からのご相談はこちら</div>
        <div className={styles.phone}>
          <Link className={styles.number} href="tel:09026793570">
            090-2679-3570
          </Link>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.heading}>フォームからのご相談はこちら</div>
        <Link className={styles.link} href="/contact/">
          メールフォームでお問い合わせ
        </Link>
      </div>
    </div>
  );
}
