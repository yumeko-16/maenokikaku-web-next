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
    label: '青藍システム496',
  },
  {
    href: '/contact/',
    label: 'お問い合わせ',
  },
];
