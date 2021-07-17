import React from 'react'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
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
  const LinkStyle = ({ node, ...props }) => (
    props.href.match(/^(http?)?\/\//)
      ? <a href={props.href}>{props.children}</a>
      : <Link to={props.href}>{props.children}</Link>
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
              components={components}
              children={content}
            />
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogDetail