import React from 'react'
import styles from '/styles/Blog.module.css'
import Link from 'next/link'
import blogText from '../../public/texts/blog'
import ReactHtmlParser from 'react-html-parser'
import PropTypes from 'prop-types'
import { useState } from 'react'

const BlogLayout = ({ children, cate }) => {
  const [showLinks, setShowLinks] = useState(false)
  return (
    <>
      <div className={styles.blogContainer}>
        {/* Header */}
        <main className={styles.header}>
          <div>
            <br />
            <br />
            <div>
              블로그
            </div>
            <br />
            <div>
              <div className={styles.headerDesc}>
                {ReactHtmlParser(blogText.header)}
              </div>
            </div>
          </div>
        </main>
        {/* Body */}
        <section>
          <div className={styles.listLayout}>
            {/* Side Bar */}
            <aside>
              <div className={styles.category}>
                <div>
                  <Link href="/blog">
                    <a>전체 보기</a>
                  </Link>
                </div>
                <br />
                <div className={styles.subCategory}>
                  {cate.map((lst) => (
                    <div key={lst.name}>
                      <Link href={`/blog/${lst.name}`}>
                        <a>{lst.name}</a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
            {/* Components (entry or detail) */}
            <article>
              {children}
            </article>
          </div>
        </section>
      </div>
    </>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  cate: PropTypes.array,
  cnt: PropTypes.number.isRequired,
}

export default BlogLayout