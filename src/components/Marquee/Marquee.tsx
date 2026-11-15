import styles from './Marquee.module.scss';

export default function Marquee() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.track}>
        <span>Seiran System 496</span>
        <span>Temple Management</span>
        <span>Support for Temples</span>
        <span>Maeno Kikaku</span>
        <span>Seiran System 496</span>
        <span>Temple Management</span>
        <span>Support for Temples</span>
        <span>Maeno Kikaku</span>
      </div>
    </div>
  );
}
