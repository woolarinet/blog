import React from 'react'
import Link from 'next/link'
import PropTypes from 'prop-types'
import Image from 'next/image'

const AppBar = ({ children }) => {
    return (
      <>
          <div className="AppBar">
              <div className="container">
                  <div className="container-left clearfix">
                    <div className="logo">
                      <Link href="/"><a><Image
                        src="/mainlogo.png"
                        alt="logo"
                        width={50}
                        height={50}
                      /></a></Link>
                    </div>
                    <div className="menu clearfix">
                      <div className="menu-item"><Link href="/"><a>소개</a></Link></div>
                      <div className="menu-item"><Link href="/project"><a>프로젝트</a></Link></div>
                      <div className="menu-item"><Link href="/blog"><a>블로그</a></Link></div>
                      <div className="menu-item"><Link href="https://github.com/woolarinet"><a>깃허브</a></Link></div>
                    </div>
                  </div>
              </div>
          </div>
        {children}
      </>
    )
  }

AppBar.propTypes = {
  children: PropTypes.node.isRequired,
}
  
export default AppBar