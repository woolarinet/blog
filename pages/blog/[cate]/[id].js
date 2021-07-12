import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import BlogLayout from '../../../components/blog/layout'
import BlogDetail from '../../../components/blog/detail'
import Comments from '../../../components/blog/comment'

const BlogPost = ({ detail, cate, cnt }) => {
  return (
    <div>
      <Head>
        <title>PKK Blog</title>
        <meta name="description" content={detail.desc} />
        <link rel="icon" href="/favicon.png?v=2" />
      </Head>
      <BlogLayout cate={cate}>
        <BlogDetail detail={detail} />
        <Comments />
      </BlogLayout>
    </div>
  )
}

BlogPost.getInitialProps = async (context) => {
  const query = context.query
  const response = await axios.get(
    `http://localhost:3000/api/blog/${query.id}?cate=${query.cate}`
  )
  return {
    detail: response.data.detail,
    cate: response.data.cate
  }
}

export default BlogPost