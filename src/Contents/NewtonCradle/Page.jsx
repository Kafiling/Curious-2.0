import React ,{useState , useRef, useContext}from 'react'
import './Content.css'
import './../../components/Highlight.css'
import {Link } from 'react-router-dom'
import {Button} from '../../components/pages/Button'
import {App as Matter1} from './Scene';
import {App as Matter2} from './Scene2';
import {App as Matter3} from './Scene3';
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

    case 2:
    return (<Page2/>)
    break;
  
    case 3:
      return (<Page3/>)
      break;
  
      case 4:
      return (<Page4/>)
      break;
   
      case 5:
      return (<Page5/>)
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
        <p><span className='highlight-red highlight-block '>
        *สามารถใช้เมาส์ลากลูกบอลในการทดลองได้*
        </span></p>
        <div className='MatterScene'><Matter1/></div>
         
        
        <div className='btn-warpper'>
        
        <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='right' onClick = {() => handleSetPage(2)} >Next page</Button>
        </div>
        </div>
  </>
  )
  }

  function Page2(){
    return (
  <>
  <div className="ProgessBar"><progress value="10" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การทดลอง Newton's Cradle</h2>
        <p>เริ่มต้นด้วยการดึงกลับ 1 ลูก ยิ่งคุณดึงลูกบอลกลับมามากเท่าไหร่ คุณก็จะยิ่งให้พลังงานมากขึ้นเท่านั้น พลังงานศักย์นี้ถูกสร้างขึ้นเนื่องจากคุณได้เคลื่อนลูกบอลไปยังจุดที่สูงกว่า</p>
        <p><span className='highlight-red highlight-block '>
        *สามารถใช้เมาส์ลากลูกบอลในการทดลองได้*
        </span></p>
        <div className='MatterScene'><Matter1/></div>
        <p>ปล่อยบอล ซึ่งจะทำให้ลูกบอลตกลงมา โดยเปลี่ยนพลังงานศักย์เป็นพลังงานจลน์ สิ่งสำคัญอีกอย่างที่เกิดขึ้นคือลูกบอลได้รับโมเมนตัม โมเมนตัมนี้เช่นเดียวกับพลังงานไม่สามารถหายไปได้เมื่อลูกบอลไปถึงด้านล่าง</p>
        
        <div className='btn-warpper'>
        <Button buttonSize = 'btn--wide'  buttonColor='blue' buttonPos='left' onClick = {() => handleSetPage(1)} >Previous page</Button>
        <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='right' onClick = {() => handleSetPage(3)} >Next page</Button>
        </div>
        </div>
  </>
  )
  }

  function Page3(){
    return (
  <>
  <div className="ProgessBar"><progress value="10" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การทดลอง Newton's Cradle</h2>
        <p>ดูการถ่ายโอนพลังงานและโมเมนตัมจากลูกแรกไปยังลูกสุดท้าย ท้ายที่สุด นี่คือส่วนความบันเทิงของ Newton's Cradle เมื่อลูกบอลลูกแรกไปถึงด้านล่างและกระทบกับลูกที่สอง ลูกบอลจะหยุด โมเมนตัมและพลังงานจลน์ที่ลูกบอลได้รับระหว่างการตกจะถูกโอนผ่านลูกบอลตรงกลางและส่งผ่านไปยังลูกบอลสุดท้าย ซึ่งจะเหวี่ยงออกจากลูกบอลอีกลูก</p>
        <p><span className='highlight-red highlight-block '>
        *สามารถใช้เมาส์ลากลูกบอลในการทดลองได้*
        </span></p>
        <div className='MatterScene'><Matter2/></div>
        <p>สังเกตวงจรที่คุณสร้างขึ้น โมเมนตัมและพลังงานจะถูกส่งต่อจากลูกบอลที่ด้านหนึ่งของแท่นรองไปยังลูกบอลอีกด้านหนึ่ง พลังงานและโมเมนตัมจะค่อยๆ หายไป จะเห็นได้จากความสูงสูงสุดของลูกแต่ละครั้งต่ำกว่าครั้งก่อนเล็กน้อย</p>
        
        <div className='btn-warpper'>
        <Button buttonSize = 'btn--wide'  buttonColor='blue' buttonPos='left' onClick = {() => handleSetPage(2)} >Previous page</Button>
        <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='right' onClick = {() => handleSetPage(4)} >Next page</Button>
        </div>
        </div>
  </>
  )
  }


  function Page4(){
    return (
  <>
  <div className="ProgessBar"><progress value="10" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การทดลอง Newton's Cradle</h2>
        <p>ปรับแต่งการทดลองโดยดึงกลับ 2 ลูก โมเมนตัมเท่ากับมวลที่เคลื่อนที่คูณด้วยความเร็ว (ไม่ใช่ความเร็ว) ที่มันเคลื่อนที่ เนื่องจากต้องรักษาโมเมนตัมนี้ไว้ บอล 2 ลูกที่อยู่ท้ายสุดจะถูกผลักออกจากบอลกลางแทนที่จะเป็นเพียง 1 ลูก นอกจาก 2 บอลที่ปลายแต่ละด้านเคลื่อนที่</p>
        <p><span className='highlight-red highlight-block '>
        *สามารถใช้เมาส์ลากลูกบอลในการทดลองได้*
        </span></p>
        <div className='MatterScene'><Matter3/></div>
        <p>ขอให้สนุกกับการทดลอง! ลองทำ 3 หรือ 4 ลูกและดูว่าเกิดอะไรขึ้น คุณยังสามารถดึงลูกบอลกลับมามากหรือน้อยเพื่อปรับปริมาณพลังงานที่ลูกบอลเริ่มต้นได้ หากคุณปล่อยให้มันสร้างความบันเทิงให้คุณชั่วขณะหนึ่ง</p>
        
        <div className='btn-warpper'>
        <Button buttonSize = 'btn--wide'  buttonColor='blue' buttonPos='left' onClick = {() => handleSetPage(3)} >Previous page</Button>
        <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='right' onClick = {() => handleSetPage(5)} >Next page</Button>
        </div>
        </div>
  </>
  )
  }

  function Page5(){
    return (
      <>
      <div className="ProgessBar"><progress value="30" max="100"></progress></div>
      <div className="finalpage-container">
            <h2>การทดลอง Newton's Cradle</h2>
            <br/>
            <br/>
            <img 
            className='final-img'
            src="https://firebasestorage.googleapis.com/v0/b/keep-curious-v2.appspot.com/o/Homepage%2Ffinalpage.svg?alt=media&token=97aea829-16e4-47a1-a404-a8d8b1029bea" 
            alt="display image" 
            />
            <br/>
            <br/>
            <h2>เรียนจบบทเรียนแล้ว!</h2>
            <h3>คุณสามารถเรียนรู้บทเรียนอื่นๆของ Keep-curious ได้</h3>
            <p>ขอขอบคุณข้อมูลจาก <a href='https://hmong.in.th/wiki/Newton%27s_cradle' className='Link'>hmong.in.th</a> และ <a href='https://th.wukihow.com/wiki/Use-the-Newton%27s-Cradle' className='Link'>th.wukihow.com</a></p>
            <br/>
            <br/>
            <br/>
            <Button buttonSize = 'btn--wide'  buttonColor='blue' buttonPos='middle'  ><Link to = "/courses" >Back to Courses</Link></Button>
            <br/>
            <br/>
            
            
           
         
      
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

