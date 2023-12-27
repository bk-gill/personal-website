import Head from "next/head";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";
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
          <div
            className="social-icons"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <a
                href="https://www.linkedin.com/in/balkarn-gill-826881240/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginBottom: "30px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <FaLinkedin color="#0077B5" size={20} />
                  <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                    LinkedIn
                  </span>
                </div>
              </a>
              <a
                href="https://github.com/bk-gill"
                target="_blank"
                rel="noopener noreferrer"
                style={{ marginBottom: "30px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "10px",
                  }}
                >
                  <FaGithub size={20} />
                  <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                    GitHub
                  </span>
                </div>
              </a>
              <a
                href="https://twitter.com/bksgill"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <FaTwitter color="#1DA1F2" size={20} />
                  <span style={{ marginLeft: "10px", cursor: "pointer" }}>
                    Twitter
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p> </p>
      </footer>
    </div>
  );
}
