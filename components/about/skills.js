import styles from '../../styles/About.module.css'
import Image from "next/image";
import React from 'react';  
import aboutText from '../../public/texts/about'
import ReactHtmlParser from 'react-html-parser'

const Skills = ({}) => {

    return (
      <>
        <div className={styles.container}>
          {/* SKILLS */}
          <section className={styles.skills}>
            <div>
              <h2>기술스택 소개</h2>
              {ReactHtmlParser(aboutText.skills.desc)}
              {aboutText.skills.detail.map((lst) => (
                <div className={styles.category} key={lst.name}>
                  <div className={styles.detail}>
                    <div className={styles.default}>
                      <div className={styles.defaultImg}>
                        <Image src={lst.img} alt={lst.name} width={40} height={40} />
                      </div>
                      <div>
                        <h3>{lst.name}</h3>
                        <p>{lst.content}</p>
                      </div>
                    </div>
                  </div>
                  <div className={styles.list}>
                    <ul>
                      {lst.infos.map((info) => (
                        <li key={info.name}>
                          <div className={styles.listImg}>
                            <Image src={info.img} alt={info.name} width={36} height={36} />
                          </div>
                          <div className={styles.description}>
                            <h3>{info.name}</h3>
                            <span className={styles.desc}>{info.content}</span>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* SECTION_LINE */}
          <div id={styles.section_line}></div>
        </div>
      </>
    );
  };

export default Skills;