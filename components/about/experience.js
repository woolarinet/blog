import styles from '../../styles/About.module.css'
import React from 'react';  
import aboutText from '../../public/texts/about'
import Image from "next/image";

const Experience = ({}) => {
    return (
      <>
        <div className={styles.container}>
          {/* BRAND */}
          <section className={styles.aboutSection}>
              <div>
                  <h1>Work Experience</h1>
                  {aboutText.workExperience.map((el) => (
                  <div className={styles.card} key={el.name}>
                      <li>
                          <span className={styles.thumb}>
                            <Image src={el.img} width={100} height={100} />
                          </span>
                          <h2>{el.name}</h2>
                          <span>
                            <p>{el.content}</p>
                            <p className={styles.date}>{el.date}</p>
                          </span>
                      </li>
                  </div>
            ))}
              </div>
          </section>
          {/* SECTION_LINE */}
          <div id={styles.section_line}></div>
        </div>
      </>
    )
  }
export default Experience;