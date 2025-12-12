import Container from '@/components/Container/Container';
import Heading from '@/components/Heading/Heading';
import styles from './Access.module.scss';

export default function Access() {
  return (
    <Container>
      <Heading>アクセス</Heading>

      <iframe
        className={styles.map}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3228.9922032128884!2d139.28256401526082!3d35.97161608012751!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60192b7dfb36647d%3A0xde55bd5dd4051c17!2z44CSMzUwLTA0MDUg5Z-8546J55yM5YWl6ZaT6YOh6LaK55Sf55S65aSn5a2X5rSl5LmF5qC577yW77yX77yS4oiS77yU!5e0!3m2!1sja!2sjp!4v1596107085486!5m2!1sja!2sjp"
        title="株式会社前野企画 本社の所在地を表示する地図"
        style={{ border: 'none' }}
        allowFullScreen
        aria-hidden="false"
        tabIndex={0}
        loading="lazy"
      ></iframe>
    </Container>
  );
}
