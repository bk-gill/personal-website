import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        {/* Title */}
        <a href="#" className={styles.link}>
          <span className={styles.titlesymbol}>&lt;</span>
          <span className={styles.title}>balkarn gill</span>
          <span className={styles.titlesymbol}>/&gt;</span>
        </a>
      </div>
      <div>
        {/* Links */}
        <a href="#about" className={styles.link}>
          about <span className={styles.linksymbol}>/&gt;</span>
        </a>
        <a href="#projects" className={styles.link}>
          projects <span className={styles.linksymbol}>/&gt;</span>
        </a>
        <a href="#resume" className={styles.link}>
          resume <span className={styles.linksymbol}>/&gt;</span>
        </a>
      </div>
    </header>
  );
}

export default Header;
