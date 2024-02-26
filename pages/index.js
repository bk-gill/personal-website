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
import { VerticalLine } from "../components/VerticalLine";
import { UnderLine } from "../components/UnderLine";
import StarryBackground from "../components/StarryBackground";
import StarryBackgroundStyles from "../styles/StarryBackground.module.css";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [currentProject, setCurrentProject] = useState(null);

  const openModal = (project) => {
    setCurrentProject(project);
  };

  const closeModal = () => {
    setCurrentProject(null);
  };

  const projects = [
    {
      title: "CircleCVI Database Optimization Project",
      imageSrc: ["circlecvi.jpeg"],
      description: [
        "- Collaborating closely with Circle CVI's software team and interfacing with the front-end team to ensure cohesive development and integration of backend improvements with user-facing elements, fostering a multidisciplinary approach to enhance the overall functionality and user experience of cardiovascular imaging software.",
        "- Enhancing the database backend of Circle’s medical imaging software, focusing on improving testing infrastructure and data management efficiency.",
        "- Developing a suite of Stored Functions in MySQL to cater to the diverse data requirements of various departments within Circle.",
        "- Creating and implementing Stored Procedures to ensure and maintain database consistency, contributing to the overall reliability of the software.",
        "- Utilizing Python for scripting and automation tasks, enhancing the functionality and performance of the database management tools.",
      ],
    },
    {
      title: "Neo Financial's Tech Thursdays Web Application",
      imageSrc: ["/nfwa0.png", "/nfwa1.png"],
      description: [
        "- Worked with a team of software developers to create a web application for Neo Financial's weekly Tech Thursdays events.",
        "- Effectively utilized Azure DevOps and Scrum methodology to streamline project management and collaboration, enabling the swift and agile development of the event management website.",
        "- Utiltized Figma to design the website, React for front-end development, and back-end integration with Drupal, showcasing proactive collaboration with the marketing lead.",
        "- Leveraged APIs and a headless CMS to facilitate features like newsletter subscriptions and automated email notifications, ensuring seamless communication and user interaction.",
        "- Ownership was transferred to Neo Financial, who are currently responsible for maintaining the web app.",
        "- Received a letter of reccomendation for my work.",
      ],
    },

    {
      title: "YYC MedMatch - YYCHacks 2024 Hackathon",
      imageSrc: ["/yychacks.png", "/yychacks1.jpeg", "/yychacks2.jpeg"],
      description: [
        "-Designed and developed a multicultural healthcare connection app for newcomers in Calgary, enhancing accessibility to linguistically aligned healthcare providers.",
        "-Utilized React and TypeScript for the front-end development, creating an intuitive and user-friendly interface that supports multiple languages.",
        "-Implemented a robust backend system using Python and MongoDB, ensuring efficient data management and scalability to handle growing user numbers.",
        "-Integrated advanced search functionalities, enabling users to find healthcare providers by language, specialty, and location, significantly improving the match precision.",
        "-🏆 Won 4th place at the hackathon out of 150 contestants. 🏆",
      ],
      githubUrl: "https://github.com/yyc-hacks/calgary-accessibility",
    },

    {
      title: "Fantasy Basketball Team Analyzer (in progress)",
      imageSrc: ["/fantasybball.png"],
      description: [
        "- Developing an innovative web application for fantasy basketball enthusiasts, providing actionable insights on optimal player selections and matchup predictions.",
        "- Integrating Yahoo's Fantasy Basketball API to access real-time data, ensuring users receive the most current information for strategizing their game plays.",
        "- Implementing advanced machine learning algorithms to analyze player performance and game statistics, offering data-driven recommendations for enhanced gameplay strategies.",
        "- Creating a user-centric platform that simplifies complex data, allowing users to make informed decisions about player picks and matchup outcomes.",
      ],
      // githubUrl:
      //   "https://github.com/bk-gill/Flight-Reservation-Web-Application",
    },

    {
      title: "Flight Web Management Application",
      imageSrc: ["/fwma.png"],
      description: [
        "- Engineered a flight reservation web application to deepen expertise in Spring Boot, demonstrating proficiency in Java-based backend development.",
        "- Implemented a responsive front-end using React, showcasing skills in modern web development technologies and user interface design.",
        "- Focused on creating a user-friendly interface, enabling easy navigation and interaction for users seeking to reserve flights.",
      ],
      githubUrl:
        "https://github.com/bk-gill/Flight-Reservation-Web-Application",
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
      githubUrl: "https://github.com/bk-gill/personal-website",
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
  ];

  return (
    <div>
      <div className={StarryBackgroundStyles.StarryContainer}>
        <StarryBackground scrollPosition={scrollPosition} />
      </div>
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
              href="https://www.linkedin.com/in/balkarn-gill-826881240"
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
            <div
              style={{
                position: "absolute",
                left: "50%",
                transform: "translateX(-50%)",
                height: "100%",
                top: "200px",
                right: "55px",
              }}
            >
              {/* <VerticalLine height="80" /> */}
            </div>
            {/* <div
              style={{
                position: "absolute",
                left: "-15px",
                bottom: "-270px",
              }}
            >
              <UnderLine size="150" color="#5918df" />
            </div> */}
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
          <Event
            year="2023"
            title="Backend Developer (internship)"
            subtitle="CircleCVI"
          >
            <p>
              - Driving backend improvements and database enhancements for
              Circle CVI's medical imaging software, focusing on robust data
              management and software reliability.
            </p>
            <p>
              - Collaborating with software and front-end teams to integrate
              user-centric features, employing Python and MySQL to optimize
              testing infrastructure and user experience.
            </p>
          </Event>
          <Event year="" title="Systems Analyst (part-time)" subtitle="Zedcor">
            <p>
              - Significantly enhanced system reliability and efficiency,
              notably by increasing it by approximately 5% in July 2023 through
              strategic optimizations
            </p>
            <p>
              - Programming sensors in PHP and MySQL for advanced security
              monitoring.
            </p>
          </Event>
          <Event
            year=""
            title="Full Stack Developer (contract)"
            subtitle="Neo Financial"
          >
            <p>
              - Spearheaded the development of Neo Financial's Tech Thursdays
              web app using React and Drupal.
            </p>
            <p>
              - Culminated in a successful transfer of ownership and earned a
              letter of reccomendation from the company.
            </p>
          </Event>

          <Event
            year="2022"
            title="IT Consultant (full-time)"
            subtitle="ATF Logistics"
          >
            <p>
              - Led the integration of new fleet management software,
              customizing solutions to meet unique company needs and resolving
              software errors while keeping staff updated on functionalities.
            </p>
          </Event>

          <Event
            year="2021"
            title="Software Developer (Internship)"
            subtitle="Carnostic Inc."
          >
            <p>
              - Significantly contributed towards the end-to-end development of
              both frontend and backend product features, from conceptualization
              and research to implementation and maintenance.
            </p>
            <p>
              - Enhanced user interface design using Sketch and Figma, and
              implemented with Java, while collaboratively refining user
              experiences based on customer data and feedback.
            </p>
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
            src="https://drive.google.com/file/d/1rlgp2b6rIiM4bxqql9QtWeZe7T93G6vd/preview"
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
