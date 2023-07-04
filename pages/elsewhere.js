import Head from 'next/head';
import Header from '../components/Header';

export default function Elsewhere() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <Header />

      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <h1 style={{ marginBottom: '30px' }}>about</h1>

        <div className="textbox" style={{ maxWidth: '600px', margin: '0 auto' }}>
        <p style={{ marginBottom: '10px', fontSize: '18px'}}>Hi, I'm Balkarn! I'm currently a Master's student in Electrical and Computer Engineering with a specialization in Software Engineering.</p>
        <p style={{ marginBottom: '10px', fontSize: '18px'}}>I will be using this website to post new updates regarding projects and myself while I pursue my passion of software! </p>
        </div>
      </div>
    </div>
  );
}
