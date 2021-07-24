import styles from '../../styles/About.module.css'
import aboutText from '../../public/texts/about'
import Image from "next/image";
import ReactHtmlParser from 'react-html-parser'

const Keyword = ({}) => {
    return (
      <>
        <div className={styles.container}>
            {/* KEYWORD */}
            <section className={styles.aboutSection}>
                <div>
                  <h1>What is sunhodev?</h1>
                  <div>
                    <div className={styles.keywordDesc}>
                      {ReactHtmlParser(aboutText.brand)}
                    </div>
                    <div className={styles.keywordImg}>
                      <Image src="/images/about/keywordlogo.png" width={200} height={200} />
                    </div>
                  </div>
                </div>
            </section>
        </div>
      </>
    );
  };

export default Keyword;