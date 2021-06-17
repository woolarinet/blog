import React from 'react'
import styles from '/styles/Blog.module.css'
import Link from 'next/link'
import Image from 'next/image'

const BlogEntry = (props) => {
  return (
    <>
      <div className={styles.postBox}>
        {/* Post Card */}
        {props.blogs.map((lst) => (
          <div className={styles.postInfo} key={lst.id}>
            {/* Image */}
            <div className={styles.postImg}>
              <Image src="/images/backend.png" width={300} height={300} />
            </div>
            <br />
            {/* Title */}
            <div className={styles.postTitle}>
              <div>
                <Link href={`/blog/${lst.id}`}>
                  {lst.title}
                </Link>
              </div>
            </div>
            {/* Description */}
            <div className={styles.postContent}>
              <p>
                {lst.desc}
              </p>
            </div>
            <br />
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