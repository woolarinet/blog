import React from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import axios from 'axios'
import styles from '../../styles/Post.module.css'
// graphql 변경

const BlogDetail = (props) => {
  console.log('----------------------------------')
  const content = props.detail.content.replace(/\n/gi, '  \n')

  const Heading1 = ({ node, ...props }) => (
    <h1
      style={{
        borderBottom: '4px double',
        paddingBottom: '1rem',
      }}
      {...props}
    />
  )
  const CodeBlock = ({ node, ...props }) => (
    <code
      style={{
        backgroundColor: '#e5eaee',
        // padding: '2rem',
        // lineHeight: '1.5rem',
        // margin: '2rem auto',
      }}
      {...props}
    />
  )
  const BlockQuoteStyle = ({ node, ...props }) => (
    <div
      style={{
        padding: '1rem',
        border: '1px dashed black',
      }}
      {...props}
    />
  )
  const imageStyle = ({ node, ...props }) => (
    <img
      style={{
        maxWidth: '100%',
      }}
      {...props}
    />
  )
  return (
    <>
      <div className={styles.container}>
        {/* Title */}
        <section className={styles.title}>
          <h2>{props.detail.title}</h2>
          <div>{props.detail.date}</div>
        </section>
        {/* Content */}
        <section className={styles.content}>
          <div className={styles.contentDetail}>
            <ReactMarkdown
              components={{
                blockquote: BlockQuoteStyle,
                h1: Heading1,
                code: CodeBlock,
                img: imageStyle,
              }}
              children={content}
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogDetail