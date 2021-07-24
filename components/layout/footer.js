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
                    width={25}
                    height={20}
                  />
                </a>
              </Link>
            </li>
            <li className="linkedin">
              <Link href="/">
                <a>
                  <Image
                    src="/images/linkedin.png"
                    alt="linkedin"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
            </li>
            <li className="sns">
              <Link href="/">
                <a>
                  <Image
                    src="/images/github2.png"
                    alt="github"
                    width={25}
                    height={25}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>
      
        <div className="info">
          <span>
            <p>{footerText.name} </p>
            <p>|</p> 
            <p> 이메일 </p> 
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
