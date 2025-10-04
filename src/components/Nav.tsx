import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">ホーム</Link>
        </li>
        <li>
          <Link href="/expert">寺院エキスパートシステム</Link>
        </li>
        <li>
          <Link href="/contact">お問い合わせ</Link>
        </li>
      </ul>
    </nav>
  );
}
