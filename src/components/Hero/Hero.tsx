'use client';

import { Fragment, useState } from 'react';
import Image from 'next/image';
import Container from '@/components/Container';
import heroImg from '@/images/hero.webp';
import styles from './Hero.module.scss';

type Props = {
  heading: string | string[];
  lead: string;
  imageOn?: boolean;
};

export default function Hero({ heading, lead, imageOn = false }: Props) {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const headingSegments: string[] = Array.isArray(heading)
    ? heading
    : [heading];

  return (
    <Container>
      <div className={styles.gridContainer}>
        <div>
          <h1 className={styles.heading}>
            {headingSegments.map((text, i) => (
              <Fragment key={i}>
                {text}
                {i < headingSegments.length - 1 && <wbr />}
              </Fragment>
            ))}
          </h1>

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
