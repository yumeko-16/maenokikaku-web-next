import React from 'react';
import Link from 'next/link';
import Container from '@/components/Container';
import Br from '@/components/Br';
import Heading from '@/components/Heading';
import Lead from '@/components/Lead';
import styles from './Contact.module.scss';

const data = {
  contents: {
    heading: 'お問い合わせ',
    lead: [
      'サービスに関するお問い合わせは、お電話またはメールフォームで承っております。',
      'お悩みやご相談は、いつでもお気軽にお問い合わせください。',
    ],
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

export default function Flow() {
  return (
    <Container>
      <Heading>{data.contents.heading}</Heading>

      <Lead>
        <p>
          {data.contents.lead.map((text, index) => (
            <React.Fragment key={index}>
              {text}
              {index < data.contents.lead.length - 1 && <Br />}
            </React.Fragment>
          ))}
        </p>
      </Lead>

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
    </Container>
  );
}
