import {
  Cormorant_Garamond,
  Noto_Sans_JP,
  Zen_Old_Mincho,
} from 'next/font/google';

export const cormorantGaramond = Cormorant_Garamond({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-cormorant-garamond',
  display: 'swap',
});

export const notoSansJp = Noto_Sans_JP({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
});

export const zenOldMincho = Zen_Old_Mincho({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-zen-old-mincho',
  display: 'swap',
});
