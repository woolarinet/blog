import React from 'react'
import styles from '/styles/Post.module.css'
import ReactMarkdown from 'react-markdown'
import Image from 'next/image'

const BlogDetail = (props) => {
  // const content = props.detail.content.replace(/\n/gi, '  \n')
  const Heading1 = ({node, ...props}) => <h1 style={{
        borderBottom: '4px double',
        paddingBottom: '1rem'
      }} {...props}
    />
  const CodeBlock = ({node, ...props}) => <code style={{
        backgroundColor: '#e5eaee',
        // padding: '2rem',
        // lineHeight: '1.5rem',
        // margin: '2rem auto',
      }} {...props}
    />
  const BlockQuoteStyle = ({node, ...props}) => <div style={{
        padding: '1rem',
        border: '1px dashed black',
      }} {...props}
    />
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
          <div className={styles.contentImg}>
            <Image src='/images/backend.png' width={100} height={100} />
          </div>
          <div className={styles.contentDetail}>
            {/* {ReactHtmlParser(props.detail.content)} */}
            <ReactMarkdown
              components={{
                blockquote: BlockQuoteStyle,
                h1: Heading1,
                code: CodeBlock,
              }}
              children={props.detail.content}
            ></ReactMarkdown>
          </div>
        </section>
        {/* Comment */}
        <section className={styles.comment}>
          <div></div>
        </section>
      </div>
    </>
  )
}

export default BlogDetail
