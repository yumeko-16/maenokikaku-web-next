'use client';

import { useState } from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import Lead from '@/components/Lead';
import heroImg from '@/images/hero.webp';
import styles from './Hero.module.scss';

type Props = {
  heading: string | string[];
  lead: string;
  imageOn?: boolean;
};

export default function Hero({ heading, lead, imageOn = false }: Props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <Container>
      <div className={styles.flexContainer}>
        <div className={styles.text}>
          <Heading text={heading} />

          <div className={styles.lead}>
            <Lead>
              <p>{lead}</p>
            </Lead>
          </div>
        </div>

        {imageOn && (
          <figure className={styles.image}>
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
