import styles from './Spacer.module.scss';

type Props = {
  size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'jump';
};

export default function Spacer({ size }: Props) {
  return <div className={styles.space} data-size={size} aria-hidden="true" />;
}
