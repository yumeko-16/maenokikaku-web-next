export type NavItem = {
  href: `/${string}`;
  label: string;
};

export const NAV_ITEMS: NavItem[] = [
  {
    href: '/',
    label: 'ホーム',
  },
  {
    href: '/about/',
    label: '会社情報',
  },
  {
    href: '/expert/',
    label: '寺院エキスパートシステム',
  },
  {
    href: '/contact/',
    label: 'お問い合わせ',
  },
];
