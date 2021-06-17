import React from 'react'
import styles from '/styles/Blog.module.css'
import Link from 'next/link'
import blogText from '../../public/texts/blog'
import ReactHtmlParser from 'react-html-parser'
import PropTypes from 'prop-types'

const BlogLayout = ({ children, cate, cnt }) => {
  return (
    <>
      <div className={styles.blogContainer}>
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
        <section>
          <div className={styles.listLayout}>
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
  cate: PropTypes.node,
  cnt: PropTypes.number.isRequired,
}

export default BlogLayout