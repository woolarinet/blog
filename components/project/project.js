import styles from '../../styles/Project.module.css'
import React from 'react'
import projectText from '../../public/texts/project'
import Image from "next/image"
import Link from 'next/link'
const Project = ({}) => {
    
    return (
      <>
        <div className={styles.container}>
          <div className={styles.sectionTitle}>
            <span>
              <Image src="/projects.png" width={180} height={45} />
            </span>
          </div>
          <section className={styles.projectSection}>
            {projectText.project.map((el) => (
              <div className={styles.eachProject} key={el.name}>
                <div className={styles.imgThumb}>
                  <Image src={el.img} width={450} height={450} />
                </div>
                <div className={styles.projectInfo}>
                  <h1>{el.title}</h1>
                  <h4>{el.info}</h4>
                  <h4>({el.date})</h4>
                  <p>{el.desc}</p>
                  <div className={styles.toLink}>
                    <span>
                      <Link href={el.link}>
                        <a>View Demo</a>
                      </Link>
                    </span>
                    {
                      el.code !== ""
                      ? <span>
                          <Link href={el.code}>
                            <a>Source Code</a>
                          </Link>
                        </span>
                      : null
                    }
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </>
    );
  };

export default Project;