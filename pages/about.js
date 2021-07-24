import React from 'react';  
import Experience from '../components/about/experience';
import Introduce from '../components/about/introduce';
import Keyword from '../components/about/keyword'
import Education from '../components/about/education';


const about = () => {
    return (
      <>
        <Introduce></Introduce>
        <Education></Education>
        <Experience></Experience>
        <Keyword></Keyword>
      </>
    )
}

export default about