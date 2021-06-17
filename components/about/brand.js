import styles from '../../styles/About.module.css'
import React from 'react';  
import aboutText from '../../public/texts/about'
import ReactHtmlParser from 'react-html-parser'

const Brand = ({}) => {
    return (
      <>
        <div className={styles.container}>
            {/* BRAND */}
            <section className={styles.brand}>
                <div>
                    <h2>박정우 소개</h2>
                    <p>{ReactHtmlParser(aboutText.brand)}</p>
                </div>
                {/* IDENTITY_IMG */}
                <div className={styles.identity}></div>

                <div className={styles.logoBox}>
                    <div className={styles.desc}>
                        <p>{ReactHtmlParser(aboutText.desc)}</p>
                    </div>

                    <div className={styles.bi}>
                        <div className={styles.biImage}></div>
                    </div>
                </div>
            </section>
            </div>
      </>
    )
  }
export default Brand;