import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import BlogLayout from '../../../components/blog/layout'
import BlogEntry from '../../../components/blog/entry'

const Blog = ({ entries, all, posts }) => {
  return (
    <div>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.png?v=2" />

        <title>sunhodev - blog</title>
        <meta name="author" content="sunho" />
        <meta name="description" content="sunhodev - 주니어 백엔드 개발자 기술 블로그" />
        <meta name="keywords" content="web, javascript, os, graphql, aws, linux, vue, nuxt, node, frontend, backend, 백엔드, 프론트엔드, 데브옵스, 기술블로그" />
        <meta property="og:title" content="💻 sunhodev" />
        <meta property="og:description" content="sunhodev - 주니어 백엔드 개발자 기술 블로그" />
        <meta property="og:url" content="https://sunhodev.com/blog" />
        <meta property="og:site_name" content="sunhodev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sunhodev.com/meta-sunhodev.png" />
      </Head>
      <BlogLayout cate={entries} all = {all}>
        <BlogEntry posts={posts} />
      </BlogLayout>
    </div>
  )
}

Blog.getInitialProps = async (context) => {
  const response = await axios.get(`http://localhost:3000/api/blog/category?cate=${context.query.cate}`)
  const forCnt = await axios.get('http://localhost:3000/api/blog')
  const data = response.data
  return {
    entries: data.entries,
    posts: data.posts,
    all: forCnt.data.all,
  }
}

export default Blog