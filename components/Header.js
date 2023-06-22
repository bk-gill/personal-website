import Link from 'next/link';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/" className={styles.link}>balkarn</Link>
      </div>
      <div>
        <Link href="/projects" className={styles.link}>Projects</Link>
        <Link href="/resume" className={styles.link}>Resume</Link>
        <Link href="/elsewhere" className={styles.link}>Elsewhere</Link>
      </div>
    </header>
  )
}

export default Header;
