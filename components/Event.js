import styles from "../styles/Timeline.module.css";

export const Event = ({ title, subtitle, interval, year, children }) => (
  <li className={styles.event}>
    <p className={styles.year}>{year}</p>
    <label className={styles.icon} />
    <div className={styles.body}>
      <h3>{title}</h3>
      {subtitle && <h4>{subtitle}</h4>}
      <div className={styles.description}>{children}</div>
    </div>
  </li>
);
