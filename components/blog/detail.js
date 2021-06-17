import React from 'react'
import styles from '/styles/Post.module.css'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import Image from 'next/image'

const BlogDetail = (props) => {
  return (
    <>
      <div>
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
            {ReactHtmlParser(props.detail.content)}
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
