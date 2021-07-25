import React from 'react'
import Project2 from '../components/project/project'
import Head from 'next/head'

const Project = ({}) => {
  return (
    <>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.png?v=2" />

        <title>sunhodev - projects</title>
        <meta name="author" content="sunho" />
        <meta name="description" content="sunhodev - 프로젝트" />
        <meta name="keywords" content="web, javascript, os, sunhomusic, sunhodev, graphql, aws, linux, vue, nuxt, node, frontend, backend, 백엔드, 프론트엔드, 데브옵스, 기술블로그" />
        <meta property="og:title" content="💻 sunhodev" />
        <meta property="og:description" content="sunhodev - 프로젝트" />
        <meta property="og:url" content="https://sunhodev.com/project" />
        <meta property="og:site_name" content="sunhodev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sunhodev.com/meta-sunhodev.png" />
      </Head>
      <Project2></Project2>
    </>
  )
}

export default Project