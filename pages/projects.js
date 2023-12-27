import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";

function Projects() {
  const projects = [
    {
      title: "Neo Financial's Tech Thursdays Web Application",
      imageSrc: ["/nfwa1.png"],
      description:
        "- Worked with a team of software developers to create a web application for Neo Financial's weekly Tech Thursdays events.\n\n- Utiltized Figma to design the website, React for front-end development, and Drupal for back-end.\n\n- Ownership was transferred to Neo Financial, who are currently responsible for maintaining the web app.",
    },
    {
      title: "Autonomous Plant Disease Detection Pathfinder",
      imageSrc: ["/pathfinder1.jpg", "/pathfinder2.jpg"],
      description:
        "- Coordinated a team of interdisciplinary engineers in building an automated pathfinder which was programmed to weave through rows of plants on its own, avoiding obstacles and detecting signs of disease in plants.\n\n- Temperature sensor, humidity sensor, and ultrasonic distance sensor were wired and programmed using Arduino, a hyperspectral camera was also wired into the design and programmed using C via a Raspberry Pi, and important data points were transmitted using a Wi-Fi module.\n\n🏆 Won first place at the F22 bioinstrumentation design competition! 🏆",
    },
    {
      title: "This Website",
      imageSrc: ["/website.png"],
      description:
        "- Created this website as a way to learn the React framework Next.js.\n\n- Initial designs were created using Sketch, features were implemented using Javascript. \n\n- Integrated with Git version control and deployed the website on Vercel for continuous deployment.",
    },
    {
      title: "French Bulldog CT-Scan Apparatus",
      imageSrc: ["/bulldog1.png", "/bulldog2.png", "/bulldog3.png"],
      description:
        "- Team chosen out of 60+ applicants to design product for Dr. Alex Zur Linden from the Ontario Veterinary College.\n\n- Purpose of the project was to create an apparatus that reduces visibility obstructions during CT-Scans for Brachycephalic dog breeds.\n\n- Extensive research into material selection as apparatus must be constructed without using any metals (and any other materials that interfere with CT-Scan imaging) while being able to withstand all relevant forces.\n\n- SolidWorks and ANSYS were utilized to create a fully-working model that met all constraints and criteria of the client.",
    },
    {
      title: "Current Project",
      imageSrc: ["/p4.png"],
      description: "- Currently working on an iOS application\n\n- Stay tuned!",
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

      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1 style={{ marginBottom: "30px" }}>projects</h1>

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
          <p style={{ whiteSpace: "pre-line" }}>{currentProject.description}</p>
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
  borderRadius: "8px",
  padding: "20px",
  maxWidth: "600px",
  margin: "0 auto",
};

const projectImagesContainerStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginTop: "20px",
};

const projectImageStyle = {
  width: "50%",
  height: "auto",
  marginBottom: "20px",
  objectFit: "cover",
};

const navigationButtonsStyle = {
  marginTop: "20px",
};

export default Projects;
