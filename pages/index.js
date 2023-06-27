import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

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
        </div>
      </main>

      <footer className={styles.footer}>
        <p> </p>
      </footer>
    </div>
  );
}
