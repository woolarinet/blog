import Link from 'next/link'
import Image from 'next/image'
import footerText from '../../public/texts/footer'


const Footer = ({}) => {
  return (
    <>
      <footer className="footerContainer">
        <div className="footerContents">
          <span>{footerText.name}</span>
          {/* 링크 */}
          <ul className="footerLinks">
            <li className="mail">
              <Link href="/">
                <a>
                  <Image
                    src="/images/mail.png"
                    alt="mail"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </li>
            <li className="kakao">
              <Link href="/">
                <a>
                  <Image
                    src="/images/kakao.png"
                    alt="kakao"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </li>
            <li className="sns">
              <Link href="/">
                <a>
                  <Image
                    src="/images/git.png"
                    alt="github"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      
        <div className="info">
          <span>
            <p>{footerText.name} </p> 
            <p> 이메일 </p> 
            <p>|</p> 
            <p> {footerText.email} </p>
            <p>|</p> 
            <p>카카오톡 {footerText.kakao} </p>
            <p>|</p> 
            <p> 깃허브 {footerText.github} </p>
          </span>
          <div>Copyright ⓒ 2021 sunho All Rights Reserved.</div>
        </div>
      </footer>
    </>
  );
};

  
export default Footer;
