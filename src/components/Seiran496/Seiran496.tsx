import Link from 'next/link';
import Image from 'next/image';
import styles from './Seiran496.module.scss';

const SEIRAN496_POINTS = [
  '寺院管理ソフトの決定版',
  '檀家・会計管理を連動',
  '豊富な帳票で業務効率化',
  '安心の保守機能',
  '寺院内LANで信徒検索',
];

export default function Seiran496() {
  return (
    <>
      <div className={styles.expert}>
        <div className={styles.gridContainer}>
          <figure className={styles.image}>
            <Image
              src="/images/seiran496/main.webp"
              alt="青藍システム496のメイン画面"
              width={434}
              height={446}
              loading="lazy"
            />
          </figure>

          <ul className={styles.points}>
            {SEIRAN496_POINTS.map((point) => (
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
