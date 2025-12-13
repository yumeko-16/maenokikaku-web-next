import Container from '@/components/Container';
import Heading from '@/components/Heading';
import styles from './Problem.module.scss';

const data = {
  contents: [
    '万一の災害で寺務に必要な書類が消失する恐れがある。',
    '住職しか分からない情報が多く、引き継ぎに不安がある。',
    '寺院管理ソフトは難しそうで導入に踏み切れない。',
    '寺院管理ソフトの種類が多くて、どれを選べば良いか分からない。',
  ],
};

export default function Problem() {
  return (
    <Container>
      <Heading>寺院管理で、こんな課題に直面していませんか？</Heading>

      <ul className={styles.cards}>
        {data.contents.map((problem) => (
          <li key={problem} className={styles.card}>
            <span className={styles.avatar}></span>
            {problem}
          </li>
        ))}
      </ul>
    </Container>
  );
}
