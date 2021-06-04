import React, { Component, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import styles from '../styles/Editor.module.css'
import Link from 'next/link'
import ReactHtmlParser from 'react-html-parser'
import axios from 'axios'

const Editor = ({}) => {
  const [ post, setPost ] = useState({
    title: '',
    content: '',
  })
  const [ viewPost, setViewPost ] = useState([])
  const getValue = e => {
    const { name, value } = e.target
    setPost({
      ...post,
      [name]: value
    })
    console.log(post)
  }
  const submitPost = async () => {
    await axios.post('http://localhost:3000/api/blog/create', {
      title: post.title,
      content: post.content,
    }).then(() => {
      alert('등록이 완료되었습니다.')
    })
  }
  return (
    <>
      <div className={styles.Editor}>
        {viewPost.map(element => 
          <div>
            {element.title}
            {ReactHtmlParser(element.content)}
          </div>
        )}
        <div>
          <input
            className={styles.title}
            type="text"
            placeholder="제목"
            onChange={getValue}
            name="title"
          />
        </div>
        <div>
          <CKEditor
              editor={ ClassicEditor }
              data="<p>Hello from CKEditor 5!</p>"
              onReady={ editor => {
                  // You can store the "editor" and use when it is needed.
                  console.log( 'Editor is ready to use!', editor )
              } }
              onChange={ ( event, editor ) => {
                  const data = editor.getData()
                  console.log( { event, editor, data } )
                  setPost({
                    ...post,
                    content: data
                  })
                  console.log(post)
              } }
              onBlur={ ( event, editor ) => {
                  console.log( 'Blur.', editor )
              } }
              onFocus={ ( event, editor ) => {
                  console.log( 'Focus.', editor )
              } }
          />
        </div>
        <button className={styles.back}>
          <Link href="/blog">
            취소
          </Link>
        </button>
        <button
          className={styles.submit}
          onClick={submitPost}
        >
          등록하기
        </button>
      </div>
    </>
  )
}

export default Editor