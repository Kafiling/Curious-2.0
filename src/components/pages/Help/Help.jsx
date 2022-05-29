import React from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';
import {FiLogIn} from 'react-icons/fi'
import {BsGoogle,BsFacebook} from 'react-icons/bs'

import { IconContext } from 'react-icons/lib'
import {Button} from './../Button'
import './Help.css'


function Help() {
  return (
    <div className='help-container'>
    <img src='https://firebasestorage.googleapis.com/v0/b/keep-curious-v2.appspot.com/o/Homepage%2Fcancel.svg?alt=media&token=28783bbc-2337-49af-912e-b7435b590f24' className='helpImg'></img>
    <br/><br/><h2>Help section is work in progress</h2>
    <h3><a href="https://drive.google.com/file/d/1AR7KGIAU6bTLLfnrQGInJNkSwwk19XCm/view?usp=sharing" target="_blank" rel="noopener noreferrer">สามารถเข้าถึงคู่มือการใช้งาน Curious v1.0 ได้ที่นี้</a></h3>
    </div>
 
  )
}

export default Help