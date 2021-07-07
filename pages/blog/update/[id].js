import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import dynamic from 'next/dynamic'
// import UpdateEditor from '../../../components/blog/update'

const UpdateEditor = dynamic(() => import('../../../components/blog/update'), {ssr: false})

const BlogUpdate = ({ detail }) => {
  return (
    <div>
      <Head>
        <title>PKK Blog</title>
        <meta name="description" content="Generated by PKK" />
        <link rel="icon" href="/favicon.png?v=2" />
      </Head>
      <UpdateEditor cate={detail.cate} info={detail} img={detail.imgList} />
    </div>
  )
}

BlogUpdate.getInitialProps = async (context) => {
  console.log('???: ', context.query)
  const query = context.query.id
  const response = await axios.get(
    `http://localhost:3000/api/blog/update/${query}`
  )
  console.log('블로그 정보는 : ', response.data)
  return {
    detail: response.data,
  }
}

export default BlogUpdate