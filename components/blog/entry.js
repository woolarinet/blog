import React from 'react'
import styles from '/styles/Blog.module.css'
import Link from 'next/link'
import Image from 'next/image'

const BlogEntry = (props) => {
  return (
    <>
      <div className={styles.postBox}>
        {/* Post Card */}
        {props.posts.map((lst) => (
          <div className={styles.postInfo} key={props.posts.indexOf(lst)}>
            {/* Image */}
            <div className={styles.postImg}>
              <Link href={`/blog/${lst.category}/${lst.name}`}>
                <a>
                  <Image src={`/images/blog/${lst.thumb}.png`} width={200} height={200} />
                </a>
              </Link>
            </div>
            <br />
            {/* Title */}
            <div className={styles.postTitle}>
              <div>
                <Link href={`/blog/${lst.category}/${lst.name}`}>
                  <a>{lst.title}</a>
                </Link>
              </div>
            </div>
            {/* Description */}
            <div className={styles.postContent}>
              <p>
                {lst.desc}
              </p>
            </div>
            <br className={styles.hideMobile} />
            {/* Date */}
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