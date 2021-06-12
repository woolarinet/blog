import React, { Component, useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import styles from '../styles/Editor.module.css'
import Link from 'next/link'
import ReactHtmlParser from 'react-html-parser'
import axios from 'axios'

const Editor = (props) => {
  const [ post, setPost ] = useState({
    category: '',
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
      category: post.category,
      title: post.title,
      content: post.content,
    }).then(() => {
      alert('등록이 완료되었습니다.')
      location.replace('/blog')
    })
  }
  return (
    <>
      <div className={styles.Editor}>
        <div>
          <select
            className={styles.category}
            name="category"
            onChange={getValue}
          >
            <option value="">카테고리 선택</option>
            {props.category.map((lst) => (
              <option
                value={lst.name}
                key={lst.id}
              >
                {lst.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            className={styles.title}
            type="text"
            placeholder="제목"
            onChange={getValue}
            name="title"
          />
        </div>
        <br />
        <div>
          <CKEditor
              editor={ ClassicEditor }
              data=""
              onReady={ editor => {
                  // You can store the "editor" and use when it is needed.
                  editor.editing.view.change(writer => {
                    writer.setStyle(
                      "min-height",
                      "400px",
                      editor.editing.view.document.getRoot()
                    )
                    writer.setStyle(
                      "border",
                      "1px solid #9080a6",
                      editor.editing.view.document.getRoot()
                    )
                  })
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