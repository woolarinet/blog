import styles from '../../styles/Home.module.css'
import Image from "next/image"
import homeText from '../../public/texts/home'
import ReactHtmlParser from 'react-html-parser'

const HomePage = ({}) => {
  return (
    <div className={styles.container}>
      {/* 이미지 + 메세지 */}
      <section className={styles.visualContainer}>
        <div className={styles.visual}>
          <div className={styles.introImg}>
            <div className={styles.favicon}>
              <Image src="/favicon.png" width={80} height={80} />
            </div>
            <div className={styles.sunhodev}>
              <Image src="/sunhodev.png" width={600} height={50}/>
            </div>
          </div>
          <br /><br />
          <div className={styles.introBox}>
            <div className={styles.typingAni}>
              <div>
                <Image src="/ohaor.png" width={400} height={30}/>
              </div>
              <div>
                {ReactHtmlParser(homeText.myself)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 기술스택 */}
      <section className={styles.skillContainer}>
        <div className={styles.skills}>
          <Image src="/skills.png" width={100} height={20}/>
        </div>
        {/*이미지 + 설명 */}
        {homeText.skills.infos.map((lst) => (
          <ul className={styles.skillsContent} key={lst.name}>
            <div className={styles.skillsType}>
              {lst.name}
            </div>
            {lst.content.map((el) => (
              <div className={styles.skillsStack} key={el.name}>
                <li>
                  <Image src={el.img} width={50} height={50} />
                  &nbsp;&nbsp;<div>{el.name}</div>
                </li>
              </div>
            ))}
          </ul>
        ))}
      </section>
    </div>
  )
}

export default HomePage