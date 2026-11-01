import Link from 'next/link';
import Image from 'next/image';
import styles from './Expert.module.scss';

const EXPERT_POINTS = [
  '寺院管理ソフトの決定版',
  '檀家・会計管理を連動',
  '豊富な帳票で業務効率化',
  '安心の保守機能',
  '寺院内LANで信徒検索',
];

export default function Expert() {
  return (
    <>
      <div className={styles.expert}>
        <div className={styles.gridContainer}>
          <figure className={styles.image}>
            <Image
              src="/images/expert.webp"
              alt="寺院エキスパートシステムのメイン画面"
              width={434}
              height={446}
              loading="lazy"
            />
          </figure>

          <ul className={styles.points}>
            {EXPERT_POINTS.map((point) => (
              <li key={point} className={styles.point}>
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
    </>
  );
}
