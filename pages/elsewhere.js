import Head from "next/head";
import Header from "../components/Header";
import { Timeline } from "../components/Timeline";
import { Event } from "../components/Event";
import styles from "../styles/About.module.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export default function Elsewhere() {
  return (
    <div>
      <Head>
        <title>About</title>
      </Head>

      <Header />
      <div className={styles.aboutContainer}>
        <h1 className={styles.aboutTitle}>abo123ut</h1>

        <div className={styles.textbox}>
          <p className={styles.aboutParagraph}>
            Hi, I'm Balkarn! I'm currently a Master's student in Electrical and
            Computer Engineering with a specialization in Software Engineering.
          </p>
          <p className={styles.aboutParagraph}>
            I will be using this website to post new updates regarding projects
            and myself while I pursue my passion for software!
          </p>
          <p className={styles.aboutParagraph}>
            In my free time, I enjoy hiking, trying new foods, playing video
            games, and watching sports (let's go Raptors)!
          </p>

          <LazyLoadImage
            src="/IMG_0048.png"
            alt="Balkarn's Picture"
            className={styles.aboutImage}
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
    </div>
  );
}
