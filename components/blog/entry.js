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
                <Image src={`/images/${lst.thumb}.png`} width={200} height={200} />
              </Link>
            </div>
            <br />
            {/* Title */}
            <div className={styles.postTitle}>
              <div>
                <Link href={`/blog/${lst.category}/${lst.name}`}>
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