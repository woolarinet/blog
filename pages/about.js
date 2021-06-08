import styles from '../styles/About.module.css'
import Image from "next/image";
import React from 'react';  
import AppBar from '../components/menu'

const About = () => {
    return (
        <AppBar>
            <div className={styles.container}>

                {/* PATH */}
                <section className={styles.location}>
                    <p>
                        <span className={styles.path}>블로그 메인</span>
                        <span className={styles.arrow}></span>
                        <span className={styles.on}> 소개</span>
                    </p>
                </section>

                {/* TITLE */}
                <section className={styles.title}>
                    <div>
                        <h2>
                            <p>웹 브라우저로 사람을 연결하는 개발자</p>
                            <p>박정우에 대해 알아보세요!</p>
                        </h2>
                    </div>
                </section>


                {/* KEYWORD */}
                <section className={styles.keywords}>
                    <div>
                        <ul>
                            <li>
                                <div className={styles.kwimages}>
                                    <Image src="/images/leaf.png" alt="주니어" data-tippy-content="주니어" width={64} height={64}/>
                                </div>
                                <p>사회 새싹</p>
                                <p>주니어</p>
                            </li>

                            <li>
                                <div className={styles.kwimages}>
                                    <Image src="/images/language.png" alt="JS" width={64} height={64} />
                                </div>
                                <p>매력적인</p>
                                <p>Javascript</p>
                            </li>
                            <li>
                                <div className={styles.kwimages}>
                                    <Image src="/images/flow.png" alt="문제의식 " width={64} height={64} />
                                </div>
                                <p>문제의식</p>
                                <p>해결과정</p>
                            </li>
                            <li>
                                <div className={styles.kwimages}>
                                    <Image src="/images/root.png" alt="뿌리깊은" width={64} height={64} className={styles.kwimages}/>
                                </div>
                                <p>뿌리깊은</p>
                                <p>개발자</p>
                            </li>
                            <li>
                                <div className={styles.kwimages}>
                                    <Image src="/images/trust.png" alt="신뢰" width={64} height={64} className={styles.kwimages}/>
                                </div>
                                <p>핵심가치</p>
                                <p>신뢰</p>
                            </li>
                        </ul>
                    </div>
                </section>

                {/* INTRODUCE */}
                <section className={styles.introduce}>
                    <div>
                        <h2>개발자 소개</h2>
                        <p>웹 브라우저를 통해 사람을 연결하고 현실 문제를 해결, 개선하는 매력에 푹 빠져 웹 개발을 길을 걷고 있습니다.</p>
                        <p>Python으로 프로그래밍을 시작하여 Javascript의 매력에 푹빠져있고 사회와 코딩을 조금씩 알아가고 있는 사회 초년생입니다.</p>
                        <p>문제의식과 해결의 과정으로 성장하고 있으며 항상 새로운 기술에 적극적으로 도전합니다.</p>
                        <br/>
                        <p>다양한 개발 스코프를 공부하면서 웹 기획부터 배포·유지보수까지의 과정에 대해 경험해 보았습니다.</p>
                        <p>최근에는 프론트엔드에 관심을 가지고 뿌리깊은 개발자를 목표로 노력하고 있습니다.</p>
                        <br/>
                        <p>반갑습니다, 신뢰를 가장 중요시하는 개발자 박정우입니다.</p>
                    </div>
                </section>

                {/* SECTION_LINE */}
                <div id={styles.section_line}></div>

                {/* SKILLS */}
                <section className={styles.skills}>
                    <div>
                        <h2>기술스택 소개</h2>
                        <p>현업에서 사용하여 프로젝트를 진행하거나 관심있게 학습해본 경험이 있는 기술스택입니다.</p>
                        <p>실무·토이는 해당 언어를 사용하여 결과물을 도출해본 경험이 있으며 개발된 소스코드를 이해할 수 있습니다.</p>
                        <p>기초 단계는 관심있게 학습 중이며 일정 학습정도가 되면 토이 프로젝트를 진행할 계획이 있습니다.</p>

                        <div className={styles.category}>

                            <div className={styles.detail}>
                                <div className={styles.default}>
                                    <div className={styles.defaultImg}>
                                        <Image src="/images/frontend.png" alt="frontend" width={40} height={40} />
                                    </div>
                                    <div>
                                        <h3>Frontend</h3>
                                        <p>퍼블리싱 & SPA 프레임워크</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.list}>
                                <ul>
                                    <li>
                                        <div className={styles.listImg}>
                                            <Image src="/images/skill_html.png" alt="html" width={36} height={36} />
                                        </div>
                                        <div className={styles.description}>
                                            <h3>
                                                HTML
                                            </h3>
                                            <span className={styles.desc}>태그를 활용한 마크업</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.listImg}>
                                            <Image src="/images/skill_css.png" alt="css" width={36} height={36} />
                                        </div>
                                        <div className={styles.description}>
                                            <h3>
                                                CSS
                                            </h3>
                                            <span className={styles.desc}>PSD 화면 퍼블리싱</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.listImg}>
                                            <Image src="/images/skill_javascript.png" alt="JS" width={36} height={36} />
                                        </div>
                                        <div className={styles.description}>
                                            <h3>
                                                Javascript
                                            </h3>
                                            <span className={styles.desc}>VanillaJS·ES6 기본 문법 활용</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.listImg}>
                                            <Image src="/images/skill_vue.png" alt="VUE" width={36} height={36} />
                                        </div>
                                        <div className={styles.description}>
                                            <h3>
                                                Javascript
                                            </h3>
                                            <span className={styles.desc}>VanillaJS·ES6 기본 문법 활용</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.listImg}>
                                            <Image src="/images/skill_jquery.png" alt="VUE" width={36} height={36} />
                                        </div>
                                        <div className={styles.description}>
                                            <h3>
                                                JQuery
                                            </h3>
                                            <span className={styles.desc}>VanillaJS·ES6 기본 문법 활용</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.listImg}>
                                            <Image src="/images/skill_react.png" alt="VUE" width={36} height={36} />
                                        </div>
                                        <div className={styles.description}>
                                            <h3>
                                                React.JS
                                            </h3>
                                            <span className={styles.desc}>VanillaJS·ES6 기본 문법 활용</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className={styles.category}>

                            <div className={styles.detail}>
                                <div className={styles.default}>
                                    <div className={styles.defaultImg}>
                                        <Image src="/images/backend.png" alt="backend" width={40} height={40} />
                                    </div>
                                    <div>
                                        <h3>Backend</h3>
                                        <p>MVC웹 개발 & RestAPI 서버 구축</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.list}>
                                <ul>
                                    <li>
                                        <div className={styles.listImg}>
                                            <Image src="/images/skill_java.png" alt="java" width={36} height={36} />
                                        </div>
                                        <div className={styles.description}>
                                            <h3>
                                                Java
                                            </h3>
                                            <span className={styles.desc}>객체지향에 대한 이해와 람다 활용</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.listImg}>
                                            <Image src="/images/skill_springboot.png" alt="springboot" width={36} height={36} />
                                        </div>
                                        <div className={styles.description}>
                                            <h3>
                                                SpringBoot
                                            </h3>
                                            <span className={styles.desc}>기본 환경 셋팅 및 라이브러리를 활용한 웹 개발</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.listImg}>
                                            <Image src="/images/skill_nodejs.png" alt="nodejs" width={36} height={36} />
                                        </div>
                                        <div className={styles.description}>
                                            <h3>
                                                NodeJS
                                            </h3>
                                            <span className={styles.desc}>Express기반의 REST API 구축</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.listImg}>
                                            <Image src="/images/skill_mysql.png" alt="mysql" width={36} height={36} />
                                        </div>
                                        <div className={styles.description}>
                                            <h3>
                                                MySQL       
                                            </h3>
                                            <span className={styles.desc}>JOIN, INDEX에 대한 이해를 바탕으로 SQL 작성</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.listImg}>
                                            <Image src="/images/skill_ts.png" alt="TS" width={36} height={36} />
                                        </div>
                                        <div className={styles.description}>
                                            <h3>
                                                TypeScript
                                            </h3>
                                            <span className={styles.desc}>타입 선언과 간단한 활용</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>

                        <div className={styles.category}>

                            <div className={styles.detail}>
                                <div className={styles.default}>
                                    <div className={styles.defaultImg}>
                                        <Image src="/images/server.png" alt="server" width={40} height={40} />
                                    </div>
                                    <div>
                                        <h3>Devops</h3>
                                        <p>형상관리와 유지보수 & 서버 구축</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className={styles.list}>
                                <ul>
                                    <li>
                                        <div className={styles.listImg}>
                                            <Image src="/images/skill_aws.png" alt="AWS" width={36} height={36} />
                                        </div>
                                        <div className={styles.description}>
                                            <h3>
                                                AWS
                                            </h3>
                                            <span className={styles.desc}>EC2 서버 구축 및 운영</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.listImg}>
                                            <Image src="/images/skill_linux.png" alt="Linux" width={36} height={36} />
                                        </div>
                                        <div className={styles.description}>
                                            <h3>
                                                Linux
                                            </h3>
                                            <span className={styles.desc}>기본 명령어 숙지 및 서버 환경 설정</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className={styles.listImg}>
                                            <Image src="/images/skill_git.png" alt="Git" width={36} height={36} />
                                        </div>
                                        <div className={styles.description}>
                                            <h3>
                                                Git
                                            </h3>
                                            <span className={styles.desc}>형상관리에 필요한 기본적인 사용법 숙지</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </section>

                {/* SECTION_LINE */}
                <div id={styles.section_line}></div>


                {/* BRAND */}
                <section className={styles.brand}>
                    <div>
                        <h2>박정우 소개</h2>
                        <p>어떤 사람인지, 어떤 것에 열정적인지를 파악하여 확립한 펄스널 브랜딩입니다.</p>
                        <p>세상에 많은 개발자들 중 '박정우'가 추구하는 가치를 브랜드화 하였습니다.</p>
                    </div>
                    {/* IDENTITY_IMG */}
                    <div className={styles.identity}></div>

                    <div className={styles.logoBox}>
                        <div className={styles.desc}>
                            <p>dev sunho는</p>
                            <p>아버지와 어머니의 이름을 따서 만든 이름입니다.</p>
                            <br />
                            <p>심볼은 저의 개인 사업 상표이며 음악의 낮은음자리표를 추상화 하였습니다.</p>
                            <br />
                            <p>색은 몽환적인 느낌을 주는 색상이며 편안함을 상징합니다.</p>
                        </div>

                        <div className={styles.bi}>
                            <div className={styles.biImage}></div>
                        </div>
                    </div>
                </section>
            </div>
        </AppBar>
    )
}

export default About