import React, {useState} from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import AppBar from '../../components/menu'
import styles from '/styles/Blog.module.css'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('../../components/editor'), {ssr: false})

const Create = ({ cate }) => {
  return (
    <div>
      <Head>
        <title>PKK Blog</title>
        <meta name="description" content="Generated by PKK" />
        <link rel="icon" href="/favicon.png?v=2" />
      </Head>

      <body>
        <AppBar>
          <Editor category={cate} />
        </AppBar>
      </body>
    </div>
  )
}

Create.getInitialProps = async () => {
  const response = await axios.get('http://localhost:3000/api/cate')
  const data = response.data
  console.log('\n\n\n\n', data, '\n\n\n\n\n')
  return {
    cate: data,
  }
}

export default Create
