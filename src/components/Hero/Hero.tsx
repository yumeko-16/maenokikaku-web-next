'use client';

import { useState } from 'react';
import Container from '@/components/Container/Container';
import Image from 'next/image';
import heroImg from '@/images/hero.webp';
import styles from './Hero.module.scss';

type Props = {
  heading: string;
  lead: string;
  imageOn?: boolean;
};

export default function Hero({ heading, lead, imageOn = false }: Props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Container>
      <div className={styles.gridContainer}>
        <div>
          <h1 className={styles.heading}>{heading}</h1>
          <div className={styles.lead}>
            <p>{lead}</p>
          </div>
        </div>

        {imageOn && (
          <figure>
            <Image
              className={isImageLoaded ? styles.removeBlur : styles.blur}
              src={heroImg}
              alt=""
              sizes="(min-width: 1024px) 700px, (min-width: 768px) 50vw, 100vw"
              priority
              onLoad={() => setIsImageLoaded(true)}
            />
          </figure>
        )}
      </div>
    </Container>
  );
}
