import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {AiTwotoneExperiment} from 'react-icons/ai'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Button} from './Button'

import './Navbar.css'

function Navbar(){
    const [click, setClick] = useState(false)
    const [button, setBotton] = useState(true)

    const handleClick = ()=> setClick(!click)
    const closeMoblieMenu = ()=> setClick(false)

    const showButton = () => {
        if(window.innerWidth <= 650) {
            setBotton(false)
        }

        else{
            setBotton(true)
        }
    }

    useEffect(() => {
        showButton()
    }, [])
 
    window.addEventListener('resize',showButton) 
    return (
        <>
        <div className="navbar">
            <div className="navbar-container container"> 
                <Link to= '/' className="navbar-logo">
                <AiTwotoneExperiment className='navbar-icon'/>
                Curious
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to= '/' className="nav-links">
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/Playground' className="nav-links">
                            Playground
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/aboutUs' className="nav-links">
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/help' className="nav-links">
                            Help
                        </Link>
                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link to= '/sign-up' className="btn-link">
                                <Button buttonStyle = 'btn--outline'> Sign Up</Button>
                            </Link>
                        ): (
                            <Link to= '/sign-up' className="btn-link">
                                <Button buttonStyle = 'btn--outline' buttonSize ='btn--mobile'> Sign Up</Button>
                            </Link>
                        )}
                    </li>
                </ul>

            </div>
        </div>
        
        </>
    )
}

export default Navbar