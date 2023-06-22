import Head from 'next/head';
import Header from '../components/Header';

export default function Resume() {
  return (
    <div>
      <Head>
        <title>Resume | Your Name</title>
      </Head>

      <Header />

      <div style={{ textAlign: 'center' }}>
        <h1 style={{ marginBottom: '2rem' }}>Resume</h1>
      </div>

      <div style={{ width: '80%', margin: '0 10%' }}>
        <iframe
          src="https://drive.google.com/file/d/1y32g6vIXBuJ8f9NCM6wtjnjojYVpJV5m/preview"
          width="100%"
          height="800px"
          style={{ border: '1px solid white' }}
        />
      </div>

      {/* Additional content for your resume page */}
    </div>
  );
}
