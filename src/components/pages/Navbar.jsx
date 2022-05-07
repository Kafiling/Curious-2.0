import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {AiTwotoneExperiment} from 'react-icons/ai'
import {FaBars, FaTimes} from 'react-icons/fa'
import {Button} from './Button'
import { IconContext } from 'react-icons/lib'
import './Navbar.css'

function Navbar(){
    const [click, setClick] = useState(false)
    const [button, setBotton] = useState(true)

    const handleClick = ()=> setClick(!click)
    const closeMobileMenu = ()=> setClick(false)

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
        <IconContext.Provider value={{color : '#fff'}}>
        <div className="navbar">
            <div className="navbar-container container"> 
                <Link to= '/' className="navbar-logo" onClick={closeMobileMenu}>
                <AiTwotoneExperiment className='navbar-icon' />
                Curious
                </Link>
                <div className="menu-icon" onClick={handleClick}>
                {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to= '/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/playground' className="nav-links" onClick={closeMobileMenu}>
                            Playground
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/aboutUs' className="nav-links" onClick={closeMobileMenu}>
                            About Us
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to= '/help' className="nav-links" onClick={closeMobileMenu}>
                            Help
                        </Link>
                    </li>
                    <li className="nav-btn">
                        {button ? (
                            <Link to= '/log-in' className="btn-link" >
                                <Button buttonStyle = 'btn--outline'> Get started</Button>
                            </Link>
                        ): (
                            <Link to= '/log-in' className="btn-link" onClick={closeMobileMenu}>
                                <Button buttonStyle = 'btn--outline' buttonSize ='btn--mobile'> Get started</Button>
                            </Link>
                        )}
                    </li>
                </ul>

            </div>
        </div>
        </IconContext.Provider>
        </>
    )
}

export default Navbar