import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import styles from './Problem.module.scss';

export default function Problem() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>寺院管理で、こんな課題に直面していませんか？</Heading>

        <ul className={styles.cards}>
          <li className={styles.card}>
            <span className={styles.avatar}></span>
            万一の災害で寺務に必要な書類が消失する恐れがある。
          </li>
          <li className={styles.card}>
            <span className={styles.avatar}></span>
            住職しか分からない情報が多く、引き継ぎに不安がある。
          </li>
          <li className={styles.card}>
            <span className={styles.avatar}></span>
            寺院管理ソフトは難しそうで導入に踏み切れない。
          </li>
          <li className={styles.card}>
            <span className={styles.avatar}></span>
            寺院管理ソフトの種類が多くて、どれを選べば良いか分からない。
          </li>
        </ul>
      </Container>
    </section>
  );
}
