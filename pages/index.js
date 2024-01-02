import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Index.module.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Balkarn Gill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.centeredContent}>
          <div className={styles.signatureAnimation}>
            <video className={styles.signatureVideo} autoPlay muted playsInline>
              <source src="signature.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={styles.socialIconsContainer}>
            <a
              href="https://www.linkedin.com/in/balkarn-gill-826881240/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaLinkedin color="#0077B5" size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/bk-gill"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://twitter.com/bksgill"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialIcon}
            >
              <FaTwitter color="#1DA1F2" size={20} />
              <span>Twitter</span>
            </a>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p> </p>
      </footer>
    </div>
  );
}
