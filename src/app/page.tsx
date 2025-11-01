import Hero from '@/components/Hero/Hero';
import Problem from '@/components/Problem/Problem';
import Expert from '@/components/Expert/Expert';
import Service from '@/components/Service/Service';
import Company from '@/components/Company/Company';
import Flow from '@/components/Flow/Flow';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <>
      <Hero
        heading="寺院管理の課題を前野企画が解決します"
        lead="当社は、ご寺院さまの運営を支援する寺院管理ソフトを提供しています。檀家管理から法要・棚経管理まで、日常業務の効率化を幅広くサポートいたします。"
        imageOn
      />
      <Problem />
      <Expert />
      <Service />
      <Company />
      <Flow />
      <Contact />
    </>
  );
}
