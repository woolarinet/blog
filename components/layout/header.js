import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useState } from 'react';


const Header = ({}) => {
  const [showLinks, setShowLinks] = useState(false);
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="container-left">
            <div className="logo">
              <Link href="/"><a><Image
                    src="/mainlogo.png"
                    alt="logo"
                    width={50}
                    height={50}
              /></a></Link>
            </div>
            <ul id={showLinks ? "hidden" : ""} className="menu" onClick={() => setShowLinks(!showLinks)}>
              <li className="menu-item"><Link href="/about"><a>About</a></Link></li>
              <li className="menu-item"><Link href="/project"><a>Projects</a></Link></li>
              <li className="menu-item"><Link href="/blog"><a>Blog</a></Link></li>
              <li className="menu-item"><Link href="https://github.com/woolarinet"><a>GitHub</a></Link></li>
            </ul>
          </div>
          
          {/* 토글버튼 */}
          <div id="toggle-btn" onClick={() => setShowLinks(!showLinks)}>Header Menu Toggle Button</div>

        </div>
      </div>
      {/* {children} */}
    </>
  );
};

export default Header;
