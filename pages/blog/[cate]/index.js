import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import BlogLayout from '../../../components/blog/layout'
import BlogEntry from '../../../components/blog/entry'

const Blog = ({ entries, cnt, posts }) => {
  return (
    <div>
      <Head>
        <title>PKK Blog</title>
        <meta name="description" content="Generated by PKK" />
        <link rel="icon" href="/favicon.png?v=2" />
      </Head>
      <BlogLayout cate={entries}>
        <BlogEntry posts={posts} />
      </BlogLayout>
    </div>
  )
}

Blog.getInitialProps = async (context) => {
  const response = await axios.get(`http://localhost:3000/api/blog/category?cate=${context.query.cate}`)
  const data = response.data
  return {
    entries: data.entries,
    posts: data.posts,
  }
}

export default Blog