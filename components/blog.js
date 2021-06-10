import React from 'react'
import styles from '/styles/Blog.module.css'
import Link from 'next/link'
import PropTypes from 'prop-types'

const BlogLayout = (props, { children }) => {
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
                개발과 관련된 공부 내용들을<br />
                자세히 기록하고 있습니다.
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
                    <a>전체 보기</a>
                  </Link>
                </div>
                <br />
                <div className={styles.subCategory}>
                  {props.cate.map((lst) => (
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
              { children }
            </article>
          </div>
        </section>
      </div>
    </>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node,
}

export default BlogLayout