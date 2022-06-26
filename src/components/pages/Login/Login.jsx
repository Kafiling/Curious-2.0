import React, { useContext } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import {FiLogIn} from 'react-icons/fi'
import {BsGoogle,BsFacebook} from 'react-icons/bs'

import { IconContext } from 'react-icons/lib'
import {Button} from './../Button'
import './Login.css'

import {auth,AuthContext} from './../../../Firebase'
import {signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";

import ShootAlertPDPA from './../../alert/Alert'

function Login() {

  const signInWithGoogle = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((re) => {
      console.log(re)
    })
    .catch((err) => {
      console.log(err)
      if (err.code === 'auth/account-exists-with-different-credential') {
        alert('บัญชีของคุณที่ผูกกับ Facebook ไว้แล้ว กรุณา login ผ่าน Facebook')
      }
    })
  }
  const signInWithFacebook = () =>{
    const provider = new FacebookAuthProvider();
    signInWithPopup(auth, provider)
    .then((re) => {
      console.log(re)
    })
    .catch((err) => {
      console.log(err)
      if (err.code === 'auth/account-exists-with-different-credential') {
        alert('บัญชีของคุณที่ผูกกับ Google ไว้แล้ว กรุณา login ผ่าน Google')
      }
    })
  }
  const {currentUser} = useContext(AuthContext)
  if(currentUser){
      return <ShootAlertPDPA/>
  }
  
  return (
    <div className='login-container'>
     
    <IconContext.Provider value={{colr : '#fff'}}>
      <Avatar sx={{ bgcolor: deepOrange[500] ,width: 64, height: 64 }} style={{margin : 'auto'}}><FiLogIn className='navbar-icon' size={'2rem'} /></Avatar>
      <br/>
      <h1>Login</h1><br/>
      <h3>ยินดีต้อนรับเข้าสู่ Curious!</h3>
      
      <br/><br/><br/>
      <div>
      <Button buttonSize = 'btn--wide'  buttonColor='blue' onClick={() =>signInWithGoogle()}><BsGoogle className='navbar-icon'  />Login with google&#160;&#160;&#160;</Button><br/><br/><br/><br/>
      <Button buttonSize = 'btn--wide'  buttonColor='blue' onClick={() =>signInWithFacebook()}><BsFacebook className='navbar-icon'  />Login with facebook</Button>
      </div><br/><br/><br/>
      <p>"The roots of education are bitter, but the fruit is sweet." - Aristotle</p><br/>
      <a href='https://keep-curious.web.app/'><p>คลิกที่นี้เพื่อเข้าถึง Curious v1.0</p></a>
      </IconContext.Provider>
    </div>

  )
}

export default Login