import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import seiran496MainImg from '@/images/seiran496/main.webp';
import styles from './Seiran496.module.scss';

type Seiran496Content = {
  image: {
    url: StaticImageData;
    alt: string;
    width: number;
    height: number;
    loading: 'lazy' | 'eager';
  };
  points: string[];
  button: {
    href: string;
    text: string;
  };
};

const data: { contents: Seiran496Content } = {
  contents: {
    image: {
      url: seiran496MainImg,
      alt: '青藍システム496のメイン画面',
      width: 434,
      height: 446,
      loading: 'lazy',
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

export default function Seiran496() {
  const { image, points, button } = data.contents;

  return (
    <>
      <div className={styles.expert}>
        <div className={styles.gridContainer}>
          <figure className={styles.image}>
            <Image
              src={image.url}
              alt={image.alt}
              width={image.width}
              height={image.height}
              loading={image.loading}
            />
          </figure>

          <ul className={styles.points}>
            {points.map((point) => (
              <li key={point} className={styles.point}>
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.btn}>
        <Link className={styles.link} href={button.href}>
          {button.text}
        </Link>
      </div>
    </>
  );
}
