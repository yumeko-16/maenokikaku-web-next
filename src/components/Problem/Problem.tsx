import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import styles from './Problem.module.scss';

export default function Problem() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>寺院管理で、こんな課題に直面していませんか？</Heading>
      </Container>
    </section>
  );
}
