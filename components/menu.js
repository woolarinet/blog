import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Image from 'next/image'
import { useState } from 'react'

const AppBar = ({ children }) => {
  const [ showLinks, setShowLinks ] = useState(false)

  return (
    <>
      <div className="AppBar">
        <div className="container">
          <div className="container-left clearfix">
            <div className="logo">
              <Link href="/">
                <a>
                  <Image
                    src="/mainlogo.png"
                    alt="logo"
                    width={50}
                    height={50}
                  />
                </a>
              </Link>
            </div>
            <div id={showLinks ? "hidden" : ""} className="menu">
              <div className="menu-item"><Link href="/about"><a>소개</a></Link></div>
              <div className="menu-item"><Link href="/project"><a>프로젝트</a></Link></div>
              <div className="menu-item"><Link href="/blog"><a>블로그</a></Link></div>
              <div className="menu-item">
                <Link href="https://github.com/woolarinet">
                  <a>깃허브</a>
                </Link>
              </div>
            </div>
          </div>
          {/* 토글버튼 */}
          <div id="toggle-btn" onClick={() => console.log(showLinks)}>
            Header Menu Toggle Button
          </div>
        </div>
      </div>
      {children}
      <footer className="footerContainer">
        <div className="footerContents">
          <span>sunho</span>
          {/* 링크 */}
          <ul className="footerLinks">
            <li className="mail">
              <Link href="/"><a><Image
                      src="/images/mail.png"
                      alt="mail"
                      width={20}
                      height={20}
              /></a></Link>
            </li>
            <li className="kakao">
              <Link href="/"><a><Image
                      src="/images/kakao.png"
                      alt="kakao"
                      width={20}
                      height={20}
              /></a></Link>
            </li>
            <li className="sns">
              <Link href="/"><a><Image
                      src="/images/git.png"
                      alt="github"
                      width={20}
                      height={20}
              /></a></Link>
            </li>
          </ul>
        </div>
        
        <div className="info">
          <span>
            박정우 
            <p>|</p> 
            이메일 &nbsp;
            zerozzung@gmail.com 
            <p>|</p> 
            카카오톡 &nbsp;
            jw95127985 
            <p>|</p> 
            깃허브 &nbsp;
            woolarinet
          </span>
          <div>Copyright ⓒ 2021 sunho All Rights Reserved.</div>
        </div>
      </footer>
    </>
  )
}

AppBar.propTypes = {
  children: PropTypes.node.isRequired,
}
  
export default AppBar