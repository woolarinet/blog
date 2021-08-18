import React from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import gfm from 'remark-gfm'
import styles from '../../styles/Post.module.css'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {tomorrow} from 'react-syntax-highlighter/dist/cjs/styles/prism'

const BlogDetail = (props) => {
  console.log('----------------------------------')
  const content = props.detail.content

  const components = {
    code({node, inline, className, children, ...props}) {
      const match = /language-(\w+)/.exec(className || '')
      return !inline && match ? (
        <SyntaxHighlighter style={tomorrow} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} {...props} />
      ) : (
        <code className={className} {...props} />
      )
    }
  }
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
              components={components}
              plugins={gfm}
              children={content}
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogDetail