import React from 'react';  
import AboutTitle from '../components/about/title';
import Brand from '../components/about/brand';
import Introduce from '../components/about/introduce';
import Keyword from '../components/about/keyword';
import Skills from '../components/about/skills';


const about = () => {
    return (
      <>
        <AboutTitle></AboutTitle>
        <Keyword></Keyword>
        <Introduce></Introduce>
        <Skills></Skills>
        <Brand></Brand>
      </>
    )
}

export default about