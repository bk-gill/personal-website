import Link from "next/link";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/" className={styles.link}>
          <span className={styles.titlesymbol}>&lt;</span>
          <span className={styles.title}>balkarn gill</span>
          <span className={styles.titlesymbol}>/&gt;</span>
        </Link>
      </div>
      <div>
        <Link href="/projects" className={styles.link}>
          projects <span className={styles.linksymbol}>/&gt;</span>
        </Link>
        <Link href="/resume" className={styles.link}>
          resume <span className={styles.linksymbol}>/&gt;</span>
        </Link>
        <Link href="/elsewhere" className={styles.link}>
          about <span className={styles.linksymbol}>/&gt;</span>
        </Link>
      </div>
    </header>
  );
}

export default Header;
