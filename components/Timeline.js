import styles from "../styles/Timeline.module.css";

export const Timeline = ({ children }) => (
  <div className={styles.container}>
    <ul className={styles.timeline}>{children}</ul>
  </div>
);
