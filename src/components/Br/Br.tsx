import styles from './Br.module.scss';

type Props = {
  device: string;
};

export default function Br({ device }: Props) {
  return (
    <br className={styles.lineBreak} data-br={device} aria-hidden="true" />
  );
}
