import React, {useState} from 'react'
import Head from 'next/head'
import axios from 'axios'
import AppBar from '../../components/menu'
import dynamic from 'next/dynamic'

const BlogDetail = ({detail}) => {
  return (
    <div>
      <body>
        <AppBar>
          <div>{detail.title}</div>
          <div>{detail.content}</div>
          <div>{detail.date}</div>
        </AppBar>
      </body>
    </div>
  )
}

BlogDetail.getInitialProps = async (context) => {
  const query = JSON.stringify(context.query)
  const response = await axios.get(
    `http://localhost:3000/api/blog/detail?query=${query}`
  )
  console.log('블로그 정보는 : ', response.data)
  return {
    detail: response.data
  }
}

export default BlogDetail