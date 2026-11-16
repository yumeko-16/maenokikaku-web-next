import styles from './Seiran496Points.module.scss';

const POINTS = [
  '寺院管理ソフトの決定版',
  '檀家・会計管理を連動',
  '豊富な帳票で業務効率化',
  '安心の保守機能',
  '寺院内LANで信徒検索',
];

export default function Seiran496Points() {
  return (
    <ul className={styles.points}>
      {POINTS.map((point) => (
        <li key={point} className={styles.point}>
          {point}
        </li>
      ))}
    </ul>
  );
}
