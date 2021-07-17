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
          <div className={styles.mainImg}>
            <div className={styles.codeAni}>
              <Image src="/images/tag.png" width={80} height={50.78} />
            </div>
            <div className={styles.humanImg}>
              <Image src="/images/human.png" width={399} height={287}/>
            </div>
          </div>
          <div className={styles.typing}>
            안녕하세요,
          </div>
          <div className={styles.typingAni}>
            {ReactHtmlParser(homeText.myself)}
          </div>
        </div>
      </section>

      {/* 기술스택 */}
      <section className={styles.skillContainer}>
        <div className={styles.skills}>
          <div>Skills</div>
        </div>
        <div className={styles.explain}>
          {ReactHtmlParser(homeText.explain)}
        </div>
        {/*이미지 + 설명 */}
        {homeText.skills.infos.map((lst) => (
          <ul className={styles.skillsImg} key={lst.name}>
            <li>
              <div>
                <Image src={lst.img} width={80} height={80} />
                <h3>{lst.name}</h3>
              </div>
              <p>{ReactHtmlParser(lst.content)}</p>
            </li>
          </ul>
        ))}
      </section>
    </div>
  )
}

export default HomePage