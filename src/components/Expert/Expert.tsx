import Link from 'next/link';
import Image from 'next/image';
import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import PostBody from '@/components/PostBody/PostBody';
import expertImg from '@/images/expert.webp';
import styles from './Expert.module.scss';

export default function Expert() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>寺院エキスパートシステム</Heading>

        <PostBody>
          <p>お悩みは、すべて「寺院エキスパートシステム」で解決できます</p>
        </PostBody>

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
              <li className={styles.point}>寺院管理ソフトの決定版</li>
              <li className={styles.point}>檀家・会計管理を連動</li>
              <li className={styles.point}>豊富な帳票で業務効率化</li>
              <li className={styles.point}>安心の保守機能</li>
              <li className={styles.point}>寺院内LANで信徒検索</li>
            </ul>
          </div>
        </div>

        <div className={styles.btn}>
          <Link className={styles.link} href="/expert/">
            もっと詳しく
          </Link>
        </div>
      </Container>
    </section>
  );
}
