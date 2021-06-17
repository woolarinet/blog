import React from 'react'
import styles from '/styles/Blog.module.css'
import Link from 'next/link'
import Image from 'next/image'
import ReactHtmlParser from 'react-html-parser'

const BlogEntry = (props) => {
  return (
    <>
      <div className={styles.postBox}>
        {props.blogs.map((lst) => (
          <div className={styles.postInfo} key={lst.id}>
            <div className={styles.postImg}>
              <Image src="/images/backend.png" width={300} height={300} />
            </div>
            <br />
            <div className={styles.postTitle}>
              <div>
                <Link href={`/blog/${lst.id}`}>
                  {lst.title}
                </Link>
              </div>
            </div>
            <div className={styles.postContent}>
              <p>
                {lst.desc}
              </p>
            </div>
            <br />
            <div className={styles.postDate}>
              {lst.date}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default BlogEntry