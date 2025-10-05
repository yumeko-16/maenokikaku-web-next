import Container from '@/components/Container/Container';
import Hero from '@/components/Hero/Hero';

export default function Home() {
  return (
    <Container>
      <Hero
        heading="寺院管理の課題を前野企画が解決します"
        lead="当社は、ご寺院さまの運営を支援する寺院管理ソフトを提供しています。檀家管理から法要・棚経管理まで、日常業務の効率化を幅広くサポートいたします。"
        imageOn
      />
    </Container>
  );
}
