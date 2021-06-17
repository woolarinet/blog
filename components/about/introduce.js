import styles from '../../styles/About.module.css'
import React from 'react';  
import aboutText from '../../public/texts/about'
import ReactHtmlParser from 'react-html-parser'

const Introduce = ({}) => {

    return (
      <>
        <div className={styles.container}>
          {/* INTRODUCE */}
          <section className={styles.introduce}>
            <div>
              <h2>개발자 소개</h2>
              {ReactHtmlParser(aboutText.introduce)}
            </div>
          </section>
          {/* SECTION_LINE */}
          <div id={styles.section_line}></div>
        </div>
      </>
    );
  };

export default Introduce;