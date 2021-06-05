import React from 'react'
import axios from 'axios'
import styles from '/styles/Home.module.css'
import Image from 'next/image'
import Head from 'next/head'
import AppBar from '../components/menu'

const HomePage = ({ blogs }) => {
  return (
    <div className={styles.container}>

      <Head>
        <title>PKK Blog</title>
        <meta name="description" content="Generated by PKK" />
        <link rel="icon" href="/favicon.png?v=2" />
      </Head>

      <body>
        <AppBar>
          <main className={styles.main}>
            <div className={styles.headerContent}>
              <div className={styles.headerImg}>
                <div className={styles.headerAni}>
                  <Image src="/images/tag.png" width={50} height={50} />
                </div>
                <div>
                  <Image src="/images/human.png" width={400} height={300} />
                </div>
              </div>
              <div className={styles.msg}>
                안녕하세요,
              </div>
              <br />
              <div className={styles.msgAni}>
                개발자 박정우입니다.
              </div>
            </div>
          </main>
          <section className={styles.category}>
            <div className={styles.categoryTitle}>
              <div>Skills</div>
            </div>
            <div className={styles.categorySub}>
              웹 개발 관련 간략 기술 스택입니다.<br />
              더 자세한 내용은 소개 페이지에서 확인 가능합니다.
            </div>
            <ul className={styles.skillImg}>
              <li>
                <div>
                  <Image src="/images/frontend.png" width={80} height={80} />
                  <h3>Frontend</h3>
                </div>
                <p>HTML, CSS<br />Vue, React SPA 개발</p>
              </li>
              <li>
                <div>
                  <Image src="/images/backend.png" width={80} height={80} />
                  <h3>Backend</h3>
                </div>
                <p>Nginx 웹서버 구축, NodeJS API 구축<br />MYSQL DB 스키마 설계, Sequelize</p>
              </li>
              <li>
                <div>
                  <Image src="/images/server.png" width={80} height={80} />
                  <h3>Devops</h3>
                </div>
                <p>Linux, AWS 서버구축<br />S3, RDS, 53, 로드밸런서 활용 배포</p>
              </li>
            </ul>
          </section>
          <section className={styles.category}>
            <div className={styles.categoryTitle}>
              <div>Project</div>
            </div>
            <div className={styles.categorySub}>
              학습 및 간단한 서비스 등의 개발을 담은 포트폴리오 입니다.
            </div>
            <div className={styles.blogContent}>

            </div>
          </section>
          <section className={styles.category}>
            <div className={styles.categoryTitle}>
              <div>Blog</div>
            </div>
            <div className={styles.categorySub}>
              기초 CS 개념 및 자격증과 개발에 관한 공부내용을 기록하고 있습니다.
            </div>
            <div className={styles.blogContent}>

            </div>
          </section>
        </AppBar>
      </body>
    </div>
  )
}

HomePage.getInitialProps = async () => {
  const response = await axios.get('http://localhost:3000/api/blog')
  const data = response.data
  console.log('data를 보자~ : ', data)
  return {
    blogs : data
  }
}

export default HomePage
