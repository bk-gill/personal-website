import Head from 'next/head';
import Header from '../components/Header';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

export default function Elsewhere() {
  return (
    <div>
      <Head>
        <title>Elsewhere</title>
      </Head>

      <Header />

      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <h1 style={{ marginBottom: '30px' }}>elsewhere</h1>

        <div className="social-icons" style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <a href="https://www.linkedin.com/in/balkarn-vick-gill-826881240/" target="_blank" rel="noopener noreferrer" style={{ marginBottom: '30px' }}>
              <FaLinkedin color="#0077B5" /> 
              <span style={{ marginTop: '10px', cursor: 'pointer' }} onClick={() => window.open('https://www.linkedin.com/in/balkarn-vick-gill-826881240/', '_blank')}>
                LinkedIn
              </span>
            </a>
            <a href="https://github.com/bk-gill" target="_blank" rel="noopener noreferrer" style={{ marginBottom: '30px' }}>
              <FaGithub /> 
              <span style={{ marginTop: '10px', cursor: 'pointer' }} onClick={() => window.open('https://github.com/bk-gill', '_blank')}>
                GitHub
              </span>
            </a>
            <a href="https://twitter.com/bksgill" target="_blank" rel="noopener noreferrer">
              <FaTwitter color="#1DA1F2" /> 
              <span style={{ marginTop: '10px', cursor: 'pointer' }} onClick={() => window.open('https://twitter.com/bksgill', '_blank')}>
                Twitter
              </span>
            </a>
          </div>
        </div>
      </div>





    </div>
  );
}
