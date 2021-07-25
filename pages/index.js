import React from 'react'
import axios from 'axios'
import styles from '/styles/Home.module.css'
import Head from 'next/head'
import HomePage from '../components/home/homePage'

const Home = ({ blogs }) => {
  return (
    <div className={styles.container}>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.png?v=2" />

        <title>sunhodev</title>
        <meta name="author" content="sunho" />
        <meta name="description" content="sunhodev - 주니어 백엔드 개발자 기술 블로그" />
        <meta name="keywords" content="backend, frontend, devops, nodejs, 백엔드, 프론트엔드, 데브옵스, 기술블로그" />
        <meta property="og:title" content="💻 sunhodev" />
        <meta property="og:description" content="sunhodev - 주니어 백엔드 개발자 기술 블로그" />
        <meta property="og:url" content="https://sunhodev.com" />
        <meta property="og:site_name" content="sunhodev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sunhodev.com/meta-sunhodev.png" />
      </Head>
      <HomePage />
    </div>
  )
}

Home.getInitialProps = async () => {
  const response = await axios.get('http://localhost:3000/api/blog')
  const data = response.data
  return {
    blogs : data
  }
}

export default Home
