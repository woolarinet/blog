import React from 'react'
import styles from '/styles/Blog.module.css'
import Link from 'next/link'
import blogText from '../../public/texts/blog'
import ReactHtmlParser from 'react-html-parser'
import PropTypes from 'prop-types'
import { useState } from 'react'

const BlogLayout = ({ children, cate, cnt }) => {
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
                    <a>전체 보기 ({cnt})</a>
                  </Link>
                </div>
                <br />
                <div className={styles.subCategory}>
                  {cate.map((lst) => (
                    <div key={lst.id}>
                      <Link href="/">
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
            <div id={showLinks ? "hiddenCate" : "mobileCate"}>
              <div className={styles.category}>
                <div>
                  <Link href="/blog">
                    <a>전체 보기 ({cnt})</a>
                  </Link>
                </div>
                <br />
                <div className={styles.subCategory}>
                  {cate.map((lst) => (
                    <div key={lst.id}>
                      <Link href="/">
                        <a>{lst.name}</a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  cate: PropTypes.node,
  cnt: PropTypes.number.isRequired,
}

export default BlogLayout