import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import {FiLogIn} from 'react-icons/fi'
import {BsGoogle,BsFacebook} from 'react-icons/bs'

import { IconContext } from 'react-icons/lib'
import {Button} from './../Button'
import './Login.css'


function Login() {
  return (
    <div className='login-container'>
    <IconContext.Provider value={{colr : '#fff'}}>
      <Avatar sx={{ bgcolor: deepOrange[500] ,width: 64, height: 64 }} style={{margin : 'auto'}}><FiLogIn className='navbar-icon' size={'2rem'} /></Avatar>
    
      <h1>Login</h1>
      <p>"The roots of education are bitter, but the fruit is sweet." - Aristotle</p>

      <Button buttonSize = 'btn--wide'  buttonColor='blue'><BsGoogle className='navbar-icon'  />Login with google</Button>
      <Button buttonSize = 'btn--wide'  buttonColor='blue'><BsFacebook className='navbar-icon'  />Login with facebook</Button>
      </IconContext.Provider>
    </div>

  )
}

export default Login