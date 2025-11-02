import Container from '@/components/Container/Container';
import Br from '@/components/Br/Br';
import Heading from '@/components/Heading/Heading';
import Lead from '@/components/Lead/Lead';
import styles from './Service.module.scss';

export default function Service() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Heading>当社サービスのご案内</Heading>

        <Lead>
          <p>
            当社は寺院エキスパートシステムに加え、
            <Br device="pc" />
            ご寺院さまの業務をサポートする幅広いサービスをご用意しています。
          </p>
        </Lead>
      </Container>
    </section>
  );
}
