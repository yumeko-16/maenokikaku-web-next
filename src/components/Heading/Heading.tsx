import { Fragment } from 'react/jsx-runtime';
import styles from './Heading.module.scss';

type Props = {
  text: string | string[];
};

export default function Heading({ text }: Props) {
  const textSegments: string[] = Array.isArray(text) ? text : [text];

  return (
    <h1 className={styles.wrapper}>
      {textSegments.map((segment, i) => (
        <Fragment key={i}>
          {segment}
          {i < textSegments.length - 1 && <br />}
        </Fragment>
      ))}
    </h1>
  );
}
