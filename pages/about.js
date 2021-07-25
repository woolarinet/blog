import React from 'react';  
import Experience from '../components/about/experience';
import Introduce from '../components/about/introduce';
import Keyword from '../components/about/keyword'
import Education from '../components/about/education';


const about = () => {
    return (
      <>
        <Head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="icon" href="/favicon.png?v=2" />

          <title>sunhodev - about</title>
          <meta name="author" content="sunho" />
          <meta name="description" content="sunhodev - 소개" />
          <meta name="keywords" content="단국대, 백엔드, 주니어, 개발자, 소개" />
          <meta property="og:title" content="💻 sunhodev" />
          <meta property="og:description" content="sunhodev - 소개" />
          <meta property="og:url" content="https://sunhodev.com/about" />
          <meta property="og:site_name" content="sunhodev" />
          <meta property="og:type" content="website" />
          <meta property="og:image" content="https://sunhodev.com/meta-sunhodev.png" />
        </Head>
        <Introduce></Introduce>
        <Education></Education>
        <Experience></Experience>
        <Keyword></Keyword>
      </>
    )
}

export default about