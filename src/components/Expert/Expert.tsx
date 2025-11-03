import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import PostBody from '@/components/PostBody/PostBody';
import styles from './Expert.module.scss';

export default function Expert() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>寺院エキスパートシステム</Heading>

        <PostBody>
          <p>お悩みは、すべて「寺院エキスパートシステム」で解決できます</p>
        </PostBody>
      </Container>
    </section>
  );
}
