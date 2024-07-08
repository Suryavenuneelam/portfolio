import React from 'react';
import styles from './SkillsStyles.module.css';
import checkMarkIcon from '../../../assets/checkmark-dark.svg';
import SkillList from '../../common/SkillList';

function Skills() {
  return (
    <section id="skills" className={styles.container}>
      {/* Programming Languages */}
      <h3 className={styles.skillCategory}>Programming Languages</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Java" />
        <SkillList src={checkMarkIcon} skill="Python" />
        <SkillList src={checkMarkIcon} skill="C/C++" />
        <SkillList src={checkMarkIcon} skill="JavaScript" />
        <SkillList src={checkMarkIcon} skill="HTML/CSS" />
        <SkillList src={checkMarkIcon} skill="R" />
        <SkillList src={checkMarkIcon} skill="PHP" />
        <SkillList src={checkMarkIcon} skill="TypeScript" />
      </div>
      <hr />
      {/* Frameworks */}
      <h3 className={styles.skillCategory}>Frameworks</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="ReactJS" />
        <SkillList src={checkMarkIcon} skill="Node.js" />
      </div>
      <hr />

      {/* Developer Tools */}
      <h3 className={styles.skillCategory}>Developer Tools</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Git" />
        <SkillList src={checkMarkIcon} skill="GitHub" />
        <SkillList src={checkMarkIcon} skill="Windows" />
        <SkillList src={checkMarkIcon} skill="Linux" />
        <SkillList src={checkMarkIcon} skill="VSCode" />
        <SkillList src={checkMarkIcon} skill="Docker" />
        <SkillList src={checkMarkIcon} skill="Figma" />
        <SkillList src={checkMarkIcon} skill="PyCharm" />
        <SkillList src={checkMarkIcon} skill="IntelliJ" />
        <SkillList src={checkMarkIcon} skill="Eclipse" />
      </div>
      <hr />

      {/* Databases & Cloud */}
      <h3 className={styles.skillCategory}>Databases & Cloud</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="SQL" />
        <SkillList src={checkMarkIcon} skill="MySQL" />
        <SkillList src={checkMarkIcon} skill="MongoDB" />
        <SkillList src={checkMarkIcon} skill="PostgreSQL" />
      </div>
      <hr />

      {/* Other Skills */}
      <h3 className={styles.skillCategory}>Other Skills</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="Material-UI" />
        <SkillList src={checkMarkIcon} skill="Bootstrap" />
        <SkillList src={checkMarkIcon} skill="pandas" />
        <SkillList src={checkMarkIcon} skill="NumPy" />
        <SkillList src={checkMarkIcon} skill="Matplotlib" />
        <SkillList src={checkMarkIcon} skill="TensorFlow" />
      </div>
      <hr />

      {/* Languages */}
      <h3 className={styles.skillCategory}>Languages</h3>
      <div className={styles.skillList}>
        <SkillList src={checkMarkIcon} skill="English" />
        <SkillList src={checkMarkIcon} skill="Hindi" />
        <SkillList src={checkMarkIcon} skill="Telugu" />
        <SkillList src={checkMarkIcon} skill="Tamil" />
        <SkillList src={checkMarkIcon} skill="Sanskrit" />
      </div>
    </section>
  );
}

export default Skills;
