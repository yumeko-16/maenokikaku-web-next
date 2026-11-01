'use client';

import { ReactNode } from 'react';
import Container from '@/components/Container';
import styles from './Hero.module.scss';

type Props = {
  heading: ReactNode;
  subHeading: ReactNode;
  page: string;
  hasEnglish?: boolean;
};

export default function Hero({
  heading,
  subHeading,
  page,
  hasEnglish = false,
}: Props) {
  return (
    <section className={styles.wrapper}>
      <Container large>
        <div className={styles.frame} data-page={page}>
          <div className={styles.frameContainer}>
            <div className={styles.text} data-page={page}>
              <h1 className={styles.heading}>{heading}</h1>

              <p
                className={styles.subHeading}
                data-lang-en={hasEnglish || undefined}
              >
                {subHeading}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
