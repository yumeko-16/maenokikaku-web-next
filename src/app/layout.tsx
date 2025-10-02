import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = {
  title: '株式会社前野企画',
  description:
    '寺院管理ソフト「寺院エキスパート」で寺務を効率化。過去帳や塔婆印刷も対応。前野企画がご寺院をサポートします。',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
