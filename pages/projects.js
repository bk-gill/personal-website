import React, { useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import Modal from "../components/Modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import styles from "../styles/Projects.module.css";

function Projects() {
  const projects = [
    {
      title: "Neo Financial's Tech Thursdays Web Application",
      imageSrc: ["/nfwa1.png"],
      description: [
        "- Worked with a team of software developers to create a web application for Neo Financial's weekly Tech Thursdays events.",
        "- Utiltized Figma to design the website, React for front-end development, and Drupal for back-end.",
        "- Ownership was transferred to Neo Financial, who are currently responsible for maintaining the web app.",
      ],
    },
    {
      title: "Autonomous Plant Disease Detection Pathfinder",
      imageSrc: ["/pathfinder1.jpg", "/pathfinder2.jpg"],
      description: [
        "- Coordinated a team of interdisciplinary engineers in building an automated pathfinder which was programmed to weave through rows of plants on its own, avoiding obstacles and detecting signs of disease in plants.",
        "- Temperature sensor, humidity sensor, and ultrasonic distance sensor were wired and programmed using Arduino, a hyperspectral camera was also wired into the design and programmed using C via a Raspberry Pi, and important data points were transmitted using a Wi-Fi module.",
        "🏆 Won first place at the F22 bioinstrumentation design competition! 🏆",
      ],
    },
    {
      title: "This Website",
      imageSrc: ["/website.png"],
      description: [
        "- Created this website as a way to learn the React framework Next.js.",
        "- Initial designs were created using Sketch, features were implemented using Javascript.",
        "- Integrated with Git version control and deployed the website on Vercel for continuous deployment.",
      ],
    },
    {
      title: "French Bulldog CT-Scan Apparatus",
      imageSrc: ["/bulldog1.png", "/bulldog2.png", "/bulldog3.png"],
      description: [
        "- Team chosen out of 60+ applicants to design product for Dr. Alex Zur Linden from the Ontario Veterinary College.",
        "- Purpose of the project was to create an apparatus that reduces visibility obstructions during CT-Scans for Brachycephalic dog breeds.",
        "- Extensive research into material selection as apparatus must be constructed without using any metals (and any other materials that interfere with CT-Scan imaging) while being able to withstand all relevant forces.",
        "- SolidWorks and ANSYS were utilized to create a fully-working model that met all constraints and criteria of the client.",
      ],
    },
    {
      title: "Current Project",
      imageSrc: ["/p4.png"],
      description: [
        "- Currently working on an iOS application",
        "- Stay tuned!",
      ],
    },
  ];

  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
  };

  const closeModal = () => {
    setCurrentProject(null);
  };

  return (
    <div>
      <Head>
        <title>Projects</title>
      </Head>

      <Header />
      <div style={{ textAlign: "center", marginTop: "80px" }}>
        <h1 className={styles.projectPageTitle}>projects</h1>
      </div>

      <div className={styles.projectsContainer}>
        {projects.map((project, index) => (
          <div
            key={index}
            className={styles.projectCard}
            onClick={() => openModal(project)}
          >
            <LazyLoadImage
              src={project.imageSrc[0]}
              alt={project.title}
              effect="blur"
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <h2 className={styles.projectTitle}>{project.title}</h2>
            </div>
          </div>
        ))}
      </div>

      {currentProject && (
        <Modal project={currentProject} onClose={closeModal} />
      )}
    </div>
  );
}

export default Projects;
