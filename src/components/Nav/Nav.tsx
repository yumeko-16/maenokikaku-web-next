'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NAV_ITEMS } from '@/constants/navigation';
import styles from './Nav.module.scss';

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
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <Link className={styles.link} href={item.href} onClick={closeNav}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
