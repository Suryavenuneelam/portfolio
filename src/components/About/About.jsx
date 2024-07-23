import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.about}>
              <p>
                I am a highly motivated B.Tech student in Computer Science and Engineering at Vellore Institute of Technology, Chennai, with a CGPA of 9.06. I have a strong passion for technology and am proficient in programming, data structures, and algorithms. I excel as a team player and possess excellent problem-solving skills. I am seeking opportunities to make a positive impact in the tech industry.
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
            <img src={getImageUrl("about/website.png")} alt="full stack icon" />
            <div className={styles.aboutItemText}>
              <h3>Full Stack Developer</h3>
              <p>
                I am developing a Call Management System using the MERN stack and Twilio in my internship at IdeaEdu.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/achievement.png")} alt="academic icon" />
            <div className={styles.aboutItemText}>
              <h3>Academic Contributions</h3>
              <p>
                I have a publication in SpringerLink's Cluster Computing and a patent for a baby monitoring device.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/certificate.png")} alt="Certificate icon" />
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3>
              <p>
                I hold certifications in Data Analytics with Python and Ethical Hacking from NPTEL.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
