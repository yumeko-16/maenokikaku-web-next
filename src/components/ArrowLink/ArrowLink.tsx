import Link from 'next/link';
import styles from './ArrowLink.module.scss';

type Props = {
  href: string;
  text: string;
};

export default function ArrowLink({ href, text }: Props) {
  return (
    <Link className={styles.link} href={href}>
      {text}
    </Link>
  );
}
