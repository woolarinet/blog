import React, { createRef, useEffect } from 'react'
import styles from '../../styles/Post.module.css'

const Comments = () => {
  const commentRef = createRef()
  useEffect(() => {
    const isComment = commentRef.current.firstChild
    if(isComment) commentRef.current.removeChild(isComment)
    const utterances = document.createElement('script')
    const config = {
      src: "https://utteranc.es/client.js",
      repo: "woolarinet/blog_content",
      'issue-term': "pathname",
      label: "comments",
      theme: "github-light",
      crossorigin: "anonymous",
      async: true,
    }
    Object.entries(config).forEach(([key, value]) => {
      utterances.setAttribute(key, value)
    })
    commentRef.current.appendChild(utterances)
  }, [])

  return (
    <div>
      <h1 className={styles.comment}>Comment</h1>
      <div ref={commentRef} />
    </div>
  )
}

export default Comments