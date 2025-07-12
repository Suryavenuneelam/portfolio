import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>

      <div className={styles.about}>
        <p>
          I'm a dedicated and curious B.Tech Computer Science and Engineering student at VIT Chennai (CGPA 9.12),
          currently working full-time as a Software Engineer at Scienaptic Systems after a successful 6-month internship.
          I enjoy designing end-to-end systems that blend robust backends with intuitive frontends and am passionate about
          building impactful, user-centric technology products.
        </p>
      </div>

      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutme.jpg")}
          alt="Me standing formally"
          className={styles.aboutImage}
        />

        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/website.png")} alt="Full Stack Icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Engineer @ Scienaptic</h3>
              <p>
                Contributing to intelligent credit decisioning systems using Scala and Play Framework. I’ve also built
                hybrid mobile apps and full-stack systems during my internships at Mile Deep Works and IdeaEdu.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/achievement.png")} alt="Academic Icon" />
            <div className={styles.aboutItemText}>
              <h3>Academics & Credentials</h3>
              <p>
                I hold a utility patent for a Baby Monitoring System and have published in Springer’s
                <i> Cluster Computing </i> journal on IoT data placement optimization. I ranked in the top 1% in Ethical
                Hacking (NPTEL) and completed certifications in Data Analytics with Python, highlighting my strengths in
                both security and data science.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/certificate.png")} alt="Leadership Icon" />
            <div className={styles.aboutItemText}>
              <h3>Leadership & Community</h3>
              <p>
                Assistant Team Lead at Smart India Hackathon 2023, Core Member of the Sahayatha Club, and former School
                Pupil Leader — I bring communication, empathy, and coordination into every team I work with.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
