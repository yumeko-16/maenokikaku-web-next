import Link from 'next/link';
import styles from './Contact.module.scss';

const data = {
  contents: {
    phone: {
      num: '090-2679-3570',
      href: 'tel:+90.2679.3570',
    },
    button: {
      href: '/contact/',
      text: 'メールフォームでお問い合わせ',
    },
  },
};

const { phone, button } = data.contents;

export default function Contact() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.item}>
        <div className={styles.heading}>お電話からのご相談はこちら</div>
        <div className={styles.phone}>
          <Link className={styles.num} href={phone.href}>
            {phone.num}
          </Link>
        </div>
      </div>

      <div className={styles.item}>
        <div className={styles.heading}>フォームからのご相談はこちら</div>
        <Link className={styles.link} href={button.href}>
          {button.text}
        </Link>
      </div>
    </div>
  );
}
