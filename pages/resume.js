import Head from 'next/head';
import Header from '../components/Header';

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Resume</title>
      </Head>

      <Header />

      <div style={{ textAlign: 'center', marginTop: '80px'  }}>
        <h1 style={{ marginBottom: '2rem' }}>resume</h1>
      </div>
      <div style={{ width: '80%', margin: '0 10%' }}>
        <iframe
          src="https://drive.google.com/file/d/1fkyt8NKM6mDa80a1L3yXDs9_FjLoU1v0/preview"
          width="100%"
          height="800px"
          style={{ border: '1px solid white' }}
        />
      </div>


      
    </div>
  );
}
