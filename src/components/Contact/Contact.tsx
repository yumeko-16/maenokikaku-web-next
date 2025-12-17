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

export default function Contact() {
  return (
    <div className={styles.contact}>
      <div className={styles.phone}>
        <Link className={styles.num} href={data.contents.phone.href}>
          {data.contents.phone.num}
        </Link>
      </div>

      <div className={styles.btn}>
        <Link className={styles.link} href={data.contents.button.href}>
          {data.contents.button.text}
        </Link>
      </div>
    </div>
  );
}
