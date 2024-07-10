import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import CV from '../../../assets/hero/Neelam-Naga-Saivenkata-Suryavenu-Resume.pdf';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Neelam Naga Saivenkata Suryavenu</h1>
        <p className={styles.description}>
          I'm a full-stack developer. Reach out if you'd like to collaborate!
        </p>
        <div className={styles.buttons}>
        <a href="mailto:suryavenunnsv@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
        <a href={CV} download className={styles.contactBtn}>
          Resume
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("hero/hero.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
