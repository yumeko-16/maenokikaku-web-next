'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/Container/Container';
import styles from './Hero.module.scss';

type Props = {
  heading: ReactNode;
  subHeading: ReactNode;
  imageOn?: boolean;
};

export default function Hero({ heading, subHeading, imageOn = false }: Props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section className={styles.wrapper}>
      <Container>
        <div className={styles.flexContainer}>
          <div className={styles.text}>
            <h1 className={styles.heading}>{heading}</h1>

            <p className={styles.subHeading}>{subHeading}</p>
          </div>

          {imageOn && (
            <figure className={styles.image}>
              <Image
                className={isImageLoaded ? styles.removeBlur : styles.blur}
                src="/images/hero.webp"
                alt=""
                width={700}
                height={500}
                sizes="(min-width: 1024px) 700px, (min-width: 768px) 50vw, 100vw"
                priority
                onLoad={() => setIsImageLoaded(true)}
              />
            </figure>
          )}
        </div>
      </Container>
    </section>
  );
}
