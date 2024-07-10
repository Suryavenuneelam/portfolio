import React from "react";
import styles from "./Achievements.module.css";
import data from "../../data/achievements.json";

const Achievements = () => {
  return (
    <section className={styles.container} id="achievements">
      <h2 className={styles.title}>{data.title}</h2>
      {data.sections.map((section, index) => (
        <div key={index} className={styles.section}>
          <h3 className={styles.category}>{section.category}</h3>
          <ul className={styles.items}>
            {section.items.map((item, idx) => (
              <li key={idx} className={styles.item}>
                <div className={styles.itemContent}>
                  <div className={styles.itemDetails}>
                    <strong>{item.title}</strong>
                    {item.organization && <span> [{item.organization}]</span>}
                    {item.date && <span> · {item.date}</span>}
                    {item.type && <span> [{item.type}]</span>}
                    {item.source && <span> [{item.source}]</span>}
                    {item.score && <span> - {item.score}</span>}
                    {item.issuer && <span> [{item.issuer}]</span>}
                    {item.status && <span> [{item.status}]</span>}
                    {item.applicationNumber && (
                      <span> [{item.applicationNumber}]</span>
                    )}
                    {item.description && (
                      <p className={styles.description}>{item.description}</p>
                    )}
                    {item.skills && (
                      <p className={styles.skills}><strong>Skills:</strong> {item.skills}</p>
                    )}
                    {item.link && (
                      <a href={item.link} className={styles.link} target="_blank" rel="noopener noreferrer">
                        {section.category === "Publications" ? "Show Publication" : section.category === "Patents" ? "Show Patent" : item.project ? item.project : "Show Certificate"}
                      </a>
                    )}
                  </div>
                  {item.dateRange && (
                    <div className={styles.itemTimeline}>{item.dateRange}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Achievements;
