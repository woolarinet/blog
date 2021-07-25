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
              <Link href="mailto:zerozzung@gmail.com">
                <a>
                  <Image
                    src="/images/gmail.png"
                    alt="mail"
                    width={25}
                    height={20}
                  />
                </a>
              </Link>
            </li>
            <li className="sns">
              <Link href="https://www.github.com/woolarinet">
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
            <li className="linkedin">
              <Link href="https://www.linkedin.com/in/sunhojw">
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
          </ul>
        </div>
      
        <div className="info">
          <span>
            <p>{footerText.name} </p>
            <p>|</p> 
            <p> mail: </p> 
            <p> {footerText.email} </p>
            <p>|</p>
            <p> github - </p>
            <p> {footerText.github} </p>
            <p>|</p>
            <p> linkedIn - </p>
            <p> {footerText.linkedIn} </p>
          </span>
          <div>Copyright ⓒ 2021 sunho All Rights Reserved.</div>
        </div>
      </footer>
    </>
  );
};

  
export default Footer;
