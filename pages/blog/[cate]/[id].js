import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import BlogLayout from '../../../components/blog/layout'
import BlogDetail from '../../../components/blog/detail'
import Comments from '../../../components/blog/comment'

const BlogPost = ({ detail, cate, query }) => {
  return (
    <div>
      <Head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.png?v=2" />

        <title>sunhodev - {detail.title}</title>
        <meta name="author" content="sunho" />
        <meta name="description" content={`sunhodev - ${detail.title}`} />
        <meta name="keywords" content={`${detail.title}, ${detail.category}, ${query.id}, ${query.cate}`} />
        <meta property="og:title" content="💻 sunhodev" />
        <meta property="og:description" content={`${detail.title}, ${detail.category}, ${query.id}, ${query.cate}`} />
        <meta property="og:url" content={`https://sunhodev.com/blog/${query.cate}/${query.id}`} />
        <meta property="og:site_name" content="sunhodev" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://sunhodev.com/meta-sunhodev.png" />
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
    cate: response.data.cate,
    query: query,
  }
}

export default BlogPost