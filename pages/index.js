import Head from 'next/head';
import Header from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>balkarn's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={styles.main}>
        <div className={styles.centeredContent}>
          <h1>Welcome to my Portfolio</h1>
          <p>This is a description about myself and my work.</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <p> </p>
      </footer>
    </div>
  )
}
