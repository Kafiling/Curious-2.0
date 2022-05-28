import React from 'react'
import HeroSection,{HeroSectionToV1} from '../HeroSection'
import {homeObjOne,homeObjThree} from './Data'

function Playground() {
  return (
    <>
        <HeroSection {...homeObjOne}/>
        <HeroSectionToV1 {...homeObjThree} />
    </>
  )
}

export default Playground