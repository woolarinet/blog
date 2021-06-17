import styles from '../../styles/About.module.css'
import React from 'react';  
import aboutText from '../../public/texts/about'
import ReactHtmlParser from 'react-html-parser'

const AboutTitle = ({}) => {

    return (
      <>
        <div className={styles.container}>

            {/* PATH */}
            <section className={styles.location}>
                <p>
                    <span className={styles.path}>블로그 메인</span>
                    <span className={styles.arrow} />
                    <span className={styles.on}>소개</span>
                </p>
            </section>

            {/* TITLE */}
            <section className={styles.title}>
                <div>
                    <h2>{ReactHtmlParser(aboutText.title)}</h2>
                </div>
            </section>
        </div>
      </>
    );
  };

  
export default AboutTitle;