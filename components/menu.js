import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Menu.module.css'

const MenuBar = ({ children }) => {
  return (
    <>
      <div className={styles.MenuBar}>
        <span>
          <Link href="/">
            <Image className={styles.Logo} src="/favicon-96x96.png" width={60} height={60} />
          </Link>
        </span>
        <span className={styles.Category}>
          <span className={styles.Items}>
            <Link href="/about">
              소개
            </Link>
          </span>
          <span className={styles.Items}>
            <Link href="/blog">
              블로그
            </Link>
          </span>
          <span className={styles.Items}>
            <Link href="/project">
              프로젝트
            </Link>
          </span>
          <span className={styles.Items}>
            <Link href="https://www.github.com/woolarinet">
              Github
            </Link>
          </span>
        </span>
      </div>
    </>
  )
}

export default MenuBar