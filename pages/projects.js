import React, { useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header';

function Projects() {
  const projects = [
    {
      title: 'Plant Disease Detection Pathfinder',
      imageSrc: ['/pathfinder1.jpg', '/pathfinder2.jpg'],
      description: '- Coordinated a team of interdisciplinary engineers in building an automated pathfinder which was programmed to weave through rows of plants on its own, avoiding obstacles and detecting signs of disease in plants.\n\n- Temperature sensor, humidity sensor, and ultrasonic distance sensor were wired and programmed using Arduino, a hyperspectral camera was also wired into the design and programmed using C via a Raspberry Pi, and important data points were transmitted using a Wi-Fi module.\n\n🏆 Won first place at the F20 bioinstrumentation design competition! 🏆',
    },
    {
      title: 'This Website',
      imageSrc: ['/square.png'],
      description: 'Description of project 2\nPortfolio website',
    },
    {
      title: 'Project 3',
      imageSrc: ['/square.png'],
      description: 'Description of project 3\nNew project',
    },
    {
      title: 'Project 4',
      imageSrc: ['/square.png'],
      description: 'Description of project 4\nAnother new project',
    },
  ];

  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const currentProject = projects[currentProjectIndex];

  const goToNextProject = () => {
    const nextIndex = (currentProjectIndex + 1) % projects.length;
    setCurrentProjectIndex(nextIndex);
  };

  const goToPreviousProject = () => {
    const previousIndex =
      (currentProjectIndex - 1 + projects.length) % projects.length;
    setCurrentProjectIndex(previousIndex);
  };

  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>

      <Header />

      <div style={{ textAlign: 'center', marginTop: '80px' }}>
        <h1 style={{ marginBottom: '30px' }}>projects</h1>

        <div style={projectBoxStyle}>
          <h2>{currentProject.title}</h2>
          <div style={projectImagesContainerStyle}>
            {currentProject.imageSrc.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`${currentProject.title} - Image ${index + 1}`}
                style={projectImageStyle}
              />
            ))}
          </div>
          <p style={{ whiteSpace: 'pre-line' }}>{currentProject.description}</p>
        </div>

        <div style={navigationButtonsStyle}>
          <button onClick={goToPreviousProject}>&larr; Previous</button>
          <button onClick={goToNextProject}>Next &rarr;</button>
        </div>
      </div>
    </div>
  );
}

const projectBoxStyle = {
  borderRadius: '8px',
  padding: '20px',
  maxWidth: '600px',
  margin: '0 auto',
};

const projectImagesContainerStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px',
  marginTop: '20px',
};

const projectImageStyle = {
  width: '50%',
  height: 'auto',
  marginBottom: '20px',
  objectFit: 'cover',
};

const navigationButtonsStyle = {
  marginTop: '20px',
};

export default Projects;
