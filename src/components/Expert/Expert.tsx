import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import Lead from '../Lead/Lead';
import styles from './Expert.module.scss';

export default function Expert() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>寺院エキスパートシステム</Heading>

        <Lead>
          <p>お悩みは、すべて「寺院エキスパートシステム」で解決できます</p>
        </Lead>
      </Container>
    </section>
  );
}
