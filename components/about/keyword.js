import styles from '../../styles/About.module.css'
import aboutText from '../../public/texts/about'
import Image from "next/image";
import ReactHtmlParser from 'react-html-parser'

const Keyword = ({}) => {
    return (
      <>
        <div className={styles.container}>
            {/* KEYWORD */}
            <section className={styles.keywords}>
                <div>
                  <ul>
                    {aboutText.keywords.map((lst) => (
                      <li key={lst.content}>
                        <div className={styles.kwimages}>
                          <Image src={lst.img} width={64} height={64} />
                        </div>
                        {ReactHtmlParser(lst.content)}
                      </li>
                    ))}
                  </ul>
                </div>
            </section>
        </div>
      </>
    );
  };

export default Keyword;