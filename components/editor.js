import React, { useState, useRef } from 'react'
import { Editor as TUEditor, EditorProps } from "@toast-ui/react-editor"
import '@toast-ui/editor/dist/toastui-editor.css'
import styles from '../styles/Editor.module.css'
import Link from 'next/link'
import axios from 'axios'

const Editor = (props) => {
  const handleFocus = () => {
    console.log('focus?')
  }
  const editorRef = useRef()

  const [ post, setPost ] = useState({
    category: '',
    title: '',
    desc: '',
    content: '',
  })

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
      desc: post.desc,
      content: post.content,
    }).then(() => {
      alert('등록이 완료되었습니다.')
      location.replace('/blog')
    })
  }

  return(
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
      <div>
        <input
          className={styles.desc}
          type="text"
          placeholder="설명"
          onChange={getValue}
          name="desc"
        />
      </div>
      <br /><br />
      <div id="TUE">
        <TUEditor
          initialValue="hello react editor world!"
          previewStyle="none"
          height="550px"
          initialEditType="markdown"
          onFocus={handleFocus}
          useCommandShortcut={true}
          ref={editorRef}
          onChange={() => {
            const data = editorRef.current.getInstance().getMarkdown()
            // const html_data = editorRef.current.getInstance().getHTML()
            setPost({
              ...post,
              content: data,
            })
            console.log(post)
          }}
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
  )
}

export default Editor