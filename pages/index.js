import React, { useEffect, useRef, useState } from "react";
import Head from "next/head";
import Header from "../components/Header";
import indexStyles from "../styles/Index.module.css";
import aboutStyles from "../styles/About.module.css";
import projectsStyles from "../styles/Projects.module.css";
import resumeStyles from "../styles/Resume.module.css";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
import { Timeline } from "../components/Timeline";
import { Event } from "../components/Event";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Modal from "../components/Modal";

export default function Home() {
  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
  };

  const closeModal = () => {
    setCurrentProject(null);
  };

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

  return (
    <div>
      <Head>
        <title>Balkarn Gill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className={indexStyles.main}>
        <div className={indexStyles.centeredContent}>
          <div className={indexStyles.signatureAnimation}>
            <video
              className={indexStyles.signatureVideo}
              autoPlay
              muted
              playsInline
            >
              <source src="signature.mp4" type="video/mp4" />
            </video>
          </div>
          <div className={indexStyles.socialIconsContainer}>
            <a
              href="https://www.linkedin.com/in/balkarn-gill-826881240/"
              target="_blank"
              rel="noopener noreferrer"
              className={indexStyles.socialIcon}
            >
              <FaLinkedin color="#0077B5" size={20} />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/bk-gill"
              target="_blank"
              rel="noopener noreferrer"
              className={indexStyles.socialIcon}
            >
              <FaGithub size={20} />
              <span>GitHub</span>
            </a>
            <a
              href="https://twitter.com/bksgill"
              target="_blank"
              rel="noopener noreferrer"
              className={indexStyles.socialIcon}
            >
              <FaTwitter color="#1DA1F2" size={20} />
              <span>Twitter</span>
            </a>
          </div>
        </div>

        <div id="about" className={aboutStyles.aboutTitle}>
          <h1 className={aboutStyles.aboutTitle}>about</h1>
        </div>
        <div className={aboutStyles.aboutContainer}>
          <div className={aboutStyles.textbox}>
            <p className={aboutStyles.aboutParagraph}>
              Hi, I'm Balkarn! I'm currently a Master's student in Electrical
              and Computer Engineering with a specialization in Software
              Engineering.
            </p>
            <p className={aboutStyles.aboutParagraph}>
              I will be using this website to post new updates regarding
              projects and myself while I pursue my passion for software!
            </p>
            <p className={aboutStyles.aboutParagraph}>
              In my free time, I enjoy hiking, trying new foods, playing video
              games, and watching sports (let's go Raptors)!
            </p>

            <LazyLoadImage
              src="/IMG_0048.png"
              alt="Balkarn's Picture"
              className={aboutStyles.aboutImage}
              effect="blur"
            />
          </div>
        </div>
        <Timeline>
          <Event year="2023" title="Systems Analyst" subtitle="Zedcor">
            <p>Add a sentence here, okay!</p>
          </Event>
          <Event year="" title="Full Stack Developer" subtitle="Neo Financial">
            <p>Add a sentence here, okay!</p>
          </Event>

          <Event year="2022" title="IT Consultant" subtitle="Carnostic Inc.">
            <p>Add a sentence here, okay!</p>
          </Event>

          <Event
            year="2021"
            title="Software Development Intern"
            subtitle="Carnostic Inc."
          >
            <p>Add a sentence here, okay!</p>
          </Event>
        </Timeline>
        <div id="projects" className={projectsStyles.projectPageTitle}>
          <h1 className={projectsStyles.projectPageTitle}>projects</h1>
        </div>
        <div className={projectsStyles.projectsContainer}>
          {projects.map((project, index) => (
            <div
              key={index}
              className={projectsStyles.projectCard}
              onClick={() => openModal(project)}
            >
              <LazyLoadImage
                src={project.imageSrc[0]}
                alt={project.title}
                effect="blur"
                className={projectsStyles.projectImage}
              />
              <div className={projectsStyles.projectContent}>
                <h2 className={projectsStyles.projectTitle}>{project.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {currentProject && (
          <Modal project={currentProject} onClose={closeModal} />
        )}

        <div id="resume" className={resumeStyles.resumeTitle}>
          <h1 className={resumeStyles.resumeTitle}>resume</h1>
        </div>
        <div className={resumeStyles.resumeContainer}>
          <iframe
            src="https://drive.google.com/file/d/1NrziSgUxLAT-HEp6hkIrEMgEOnNecFzx/preview"
            className={resumeStyles.resumeIframe}
          />
        </div>
      </main>

      <footer className={indexStyles.footer}>
        <p> </p>
      </footer>
    </div>
  );
}
