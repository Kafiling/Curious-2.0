import React ,{useState , useRef, useContext}from 'react'
import './Content.css'
import './../../components/Highlight.css'
import {Link } from 'react-router-dom'
import {Button} from '../../components/pages/Button'
import {App as MatterP6} from './Scene';

export default function Projectile() {
// Set Page
var [page, setPage] = useState(1);

function handleSetPage(page){
  window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
  setPage(page)
}
  switch (page) {
    
    case 1:
    return (<Page1/>)
    break;
  
   
   
    default:
    return (<Page404/>)
      break;
  }
  


  function Page1(){
    return (
  <>
  <div className="ProgessBar"><progress value="10" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การทดลอง Newton's Cradle</h2>
        <p>ลูกตุ้มของนิวตัน เป็นอุปกรณ์ที่แสดงให้เห็นถึงการอนุรักษ์โมเมนตัมและการอนุรักษ์พลังงานที่มีทรงกลมแกว่ง เมื่อทรงกลมหนึ่งที่ปลายยกขึ้นและปล่อยออกมันจะกระทบกับทรงกลมที่หยุดนิ่งส่งแรงผ่านทรงกลมที่อยู่กับที่ซึ่งดันทรงกลมสุดท้ายขึ้นไป ทรงกลมสุดท้ายหมุนไปข้างหลังและกระทบกับทรงกลมที่อยู่เกือบนิ่งโดยทำซ้ำเอฟเฟกต์ในทิศทางตรงกันข้าม</p>
        <div className='MatterScene'><MatterP6/></div>
        <p>ขอขอบคุณข้อมูลจาก <a href='https://hmong.in.th/wiki/Newton%27s_cradle' className='Link'>hmong.in.th</a></p>
        </div>
  </>
  )
  }
  
  


  function Page404(){
    return(
    <>
      <p>Sorry page not found</p>
      <p>please try again after a few minute</p>
    </>
      )
    
  }
}

