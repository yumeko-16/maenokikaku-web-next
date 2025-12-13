import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Lead from '@/components/Lead';
import expertImg from '@/images/expert.webp';
import styles from './Expert.module.scss';

const data = {
  contents: {
    heading: '寺院エキスパートシステム',
    lead: 'お悩みは、すべて「寺院エキスパートシステム」で解決できます。',
    image: {
      url: expertImg,
      alt: '寺院エキスパートシステムのメイン画面',
      width: 434,
      height: 446,
    },
    points: [
      '寺院管理ソフトの決定版',
      '檀家・会計管理を連動',
      '豊富な帳票で業務効率化',
      '安心の保守機能',
      '寺院内LANで信徒検索',
    ],
    button: {
      href: '/expert/',
      text: 'もっと詳しく',
    },
  },
};

export default function Expert() {
  return (
    <Container>
      <Heading>{data.contents.heading}</Heading>

      <Lead>
        <p>{data.contents.lead}</p>
      </Lead>

      <div className={styles.expert}>
        <div className={styles.gridContainer}>
          <figure className={styles.image}>
            <Image
              src={expertImg}
              alt={data.contents.image.alt}
              width={data.contents.image.width}
              height={data.contents.image.height}
              loading="lazy"
            />
          </figure>

          <ul className={styles.points}>
            {data.contents.points.map((point, index) => (
              <li key={index} className={styles.point}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.btn}>
        <Link className={styles.link} href={data.contents.button.href}>
          {data.contents.button.text}
        </Link>
      </div>
    </Container>
  );
}
