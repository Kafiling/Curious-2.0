import React from 'react'
import {Button} from './Button'
import { Link } from 'react-router-dom'
import './HeroSection.css'
function HeroSection({
    lightBg, topLine , lightText , lightTextDesc , headline , headline2 , description , buttonLabel , img , alt , imgStart
}) {
  return (
    <>
        <div className= {lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>

            <div className="container">
                <div className="row home__hero-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className= {lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <h1 className= {lightText ? 'heading' : 'heading dark'} style = {{}}>{headline2}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                            <Link to = '/login'>
                                <Button buttonSize = 'btn--wide'  buttonColor='blue'>{buttonLabel}</Button>
                            </Link>
                        </div>
                    </div>

                    <div className="col">
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img" />
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </>
  )
}

export default HeroSection

export function HeroSectionNoBtn({
    lightBg, topLine , lightText , lightTextDesc , headline , headline2 , description , description2 , description3 , buttonLabel , img , alt , imgStart
}) {
  return (
    <>
        <div className= {lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>

            <div className="container">
                <div className="row home__hero-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className= {lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <h1 className= {lightText ? 'heading' : 'heading dark'} style = {{}}>{headline2}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description2}</p>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description3}</p>
                        </div>
                    </div>

                    <div className="col">
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img" />
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </>
  )
}

export function HeroSectionToGithub({
    lightBg, topLine , lightText , lightTextDesc , headline , headline2 , description , buttonLabel , img , alt , imgStart
}) {
  return (
    <>
        <div className= {lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>

            <div className="container">
                <div className="row home__hero-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className= {lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <h1 className= {lightText ? 'heading' : 'heading dark'} style = {{}}>{headline2}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                            <a href='https://github.com/Kafiling'><Button buttonSize = 'btn--wide'  buttonColor='blue' >{buttonLabel}</Button></a>
                  
                        </div>
                    </div>

                    <div className="col">
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img" />
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </>
  )
}
export function HeroSectionToV1({
    lightBg, topLine , lightText , lightTextDesc , headline , headline2 , description , buttonLabel , img , alt , imgStart
}) {
  return (
    <>
        <div className= {lightBg ? 'home__hero-section' : 'home__hero-section darkBg'}>

            <div className="container">
                <div className="row home__hero-row" style={{display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'}}>
                    <div className="col">
                        <div className="home__hero-text-wrapper">
                            <div className="top-line">{topLine}</div>
                            <h1 className= {lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <h1 className= {lightText ? 'heading' : 'heading dark'} style = {{}}>{headline2}</h1>
                            <p className={lightTextDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                            <a href='https://keep-curious.web.app/'> <Button buttonSize = 'btn--wide'  buttonColor='blue'>{buttonLabel}</Button></a>
                           
                            
                        </div>
                    </div>

                    <div className="col">
                        <div className="home__hero-img-wrapper">
                            <img src={img} alt={alt} className="home__hero-img" />
                        </div>
                    </div>
                </div>
            </div>    
        </div>
    </>
  )
}
