'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './index.module.scss';

const navLinks = [
  { href: '/', label: 'ホーム' },
  { href: '/about/', label: '会社情報' },
  { href: '/expert/', label: '寺院エキスパートシステム' },
  { href: '/contact/', label: 'お問い合わせ' },
];

export default function Nav() {
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggleNav = () => {
    setNavIsOpen((prev) => !prev);
  };

  const closeNav = () => {
    setNavIsOpen(false);
  };

  return (
    <nav className={navIsOpen ? styles.open : styles.close}>
      {navIsOpen && (
        <style jsx global>{`
          @media (max-width: 767px) {
            body {
              overflow: hidden;
              position: fixed;
              width: 100%;
            }
          }
        `}</style>
      )}

      <button className={styles.btn} onClick={toggleNav}>
        <span className={styles.bar}></span>
        <span className={styles.srOnly}>メニュー</span>
      </button>

      <ul className={styles.list}>
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link className={styles.link} href={link.href} onClick={closeNav}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
