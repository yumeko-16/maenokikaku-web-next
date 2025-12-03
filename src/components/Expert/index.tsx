import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Lead from '@/components/Lead';
import expertImg from '@/images/expert.webp';
import styles from './index.module.scss';

const points = [
  '寺院管理ソフトの決定版',
  '檀家・会計管理を連動',
  '豊富な帳票で業務効率化',
  '安心の保守機能',
  '寺院内LANで信徒検索',
];

export default function Expert() {
  return (
    <Container>
      <Heading>寺院エキスパートシステム</Heading>

      <Lead>
        <p>お悩みは、すべて「寺院エキスパートシステム」で解決できます。</p>
      </Lead>

      <div className={styles.expert}>
        <div className={styles.gridContainer}>
          <figure className={styles.image}>
            <Image
              src={expertImg}
              alt="寺院エキスパートシステムのメイン画面"
              width="434"
              height="446"
              loading="lazy"
            />
          </figure>

          <ul className={styles.points}>
            {points.map((point, index) => (
              <li className={styles.point} key={index}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.btn}>
        <Link className={styles.link} href="/expert/">
          もっと詳しく
        </Link>
      </div>
    </Container>
  );
}
