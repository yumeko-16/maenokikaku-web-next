import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import styles from './CompanyProfile.module.scss';

export default function CompanyProfile() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>会社概要</Heading>
      </Container>
    </section>
  );
}
