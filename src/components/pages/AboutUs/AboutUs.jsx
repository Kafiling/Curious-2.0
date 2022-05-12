import React from 'react'
import {HeroSectionNoBtn,HeroSectionToGithub} from '../HeroSection'
import {homeObjOne,homeObjThree} from './Data'

function AboutUs() {
  return (
    <>
        <HeroSectionToGithub {...homeObjOne}/>
        <HeroSectionNoBtn {...homeObjThree}/>
    </>
  )
}

export default AboutUs