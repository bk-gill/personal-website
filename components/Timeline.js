import styles from "../styles/Timeline.module.css"; // This should be the path to your CSS module for Timeline

export const Timeline = ({ children }) => (
  <div className={styles.container}>
    <ul className={styles.timeline}>{children}</ul>
  </div>
);
