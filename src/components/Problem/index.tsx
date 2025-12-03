import Container from '@/components/Container';
import Heading from '@/components/Heading';
import styles from './index.module.scss';

const problems = [
  '万一の災害で寺務に必要な書類が消失する恐れがある。',
  '住職しか分からない情報が多く、引き継ぎに不安がある。',
  '寺院管理ソフトは難しそうで導入に踏み切れない。',
  '寺院管理ソフトの種類が多くて、どれを選べば良いか分からない。',
];

export default function Problem() {
  return (
    <Container>
      <Heading>寺院管理で、こんな課題に直面していませんか？</Heading>

      <ul className={styles.cards}>
        {problems.map((problem, index) => (
          <li className={styles.card} key={index}>
            <span className={styles.avatar}></span>
            {problem}
          </li>
        ))}
      </ul>
    </Container>
  );
}
