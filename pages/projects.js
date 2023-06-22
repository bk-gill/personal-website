import Head from 'next/head';
import Header from '../components/Header';

function Projects() {
  const projects = [
    {
      title: 'Project 1',
      imageSrc: '/square.png', 
      description: 'Description of project 1\nPathfinder project',
    },
    {
      title: 'Project 2',
      imageSrc: '/square.png',
      description: 'Description of project 2\nPortfolio website',
    },
    {
      title: 'Project 3',
      imageSrc: '/square.png',
      description: 'Description of project 3\nNew project',
    },
    {
      title: 'Project 4',
      imageSrc: '/square.png',
      description: 'Description of project 4\nAnother new project',
    },
  ];

  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>

      <Header />

      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <h1 style={{ marginBottom: '30px' }}>projects</h1>

        <div style={projectGridStyle}>
          {projects.map((project, index) => (
            <div key={index} style={projectBoxStyle}>
              <h2>{project.title}</h2>
              <img src={project.imageSrc} alt={project.title} style={projectImageStyle} />
              <p style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const projectGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(2, 1fr)',
  gap: '20px',
  justifyContent: 'center',
  marginTop: '20px',
};

const projectBoxStyle = {
  borderRadius: '8px',
  padding: '20px',
};

const projectImageStyle = {
  width: '200px',
  height: '200px',
  objectFit: 'cover',
  marginBottom: '20px',
  marginTop: '20px',
};

export default Projects;
