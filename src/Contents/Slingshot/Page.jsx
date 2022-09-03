import React ,{useState , useRef, useContext}from 'react'
import './Content.css'
import './../../components/Highlight.css'
import {Link } from 'react-router-dom'
import {Button} from '../../components/pages/Button'
import {App as Matter1} from './Scene'
import {App as Matter2} from './Scene2'
import {MathJax} from 'better-react-mathjax'
export default function Slingshot() {
// Set Page
var [page, setPage] = useState(1);

function handleReset(page){
  setPage(0)
  setTimeout(() => {  setPage(page)}, 10);
  
}



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
  <div className="ProgessBar"><progress value="33" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การทดลอง Slingshot</h2>
        <p>หนังสติ๊ก(Slingshot) มีหลักการทำงานโดยให้งาน เป็นพลังงานศักย์ยืดหยุ่น หลังจากปล่อยหนังสติ๊กลูกกระสุนจะเปลี่ยนพลังงานศักย์ยืดหยุ่นเป็นพลังงานจลน์ ทำให้ลูกกระสุนวิ่งออกไปได้</p>
        <p><span className='highlight-red highlight-block '>
        *สามารถใช้เมาส์ลากลูกบอลในการทดลองได้*
        </span></p>
        <div className='MatterScene'><Matter1/></div>
        <div className='btn-warpper'>
        <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='left' onClick = {() => handleReset(1)} >Reset</Button>
        </div>
        <span className='highlight-green highlight-block '>
        <MathJax>
          {`จากกฎอนุรักษ์พลังงานจะได้ว่า
          \\[E_{1} = E_{2} \\]  
          \\[\\frac{1}{2}kx^{2} = \\frac{1}{2}mv^{2}\\]
         
          
          `}
          </MathJax>
          <p>จะพบว่า ระยะยืดสปริง (<MathJax inline>{'\\(x\\)'}</MathJax>) แปรผันกับ ความเร็วลูกกระสุน (<MathJax inline>{'\\(v\\)'}</MathJax>)
          
          </p>
          </span>

          <span className='highlight-yellow highlight-block '>
            <p>หลังจากปล่อยกระสุนแล้ว กระสุนจะเคลื่อนที่วิถีโค้ง โดยเราพบว่า</p>
            <img 
        className='content-img'
        src="https://firebasestorage.googleapis.com/v0/b/keep-curious-v2.appspot.com/o/Content%2F1%2FProj4.png?alt=media&token=f90568dd-61c6-4321-9a1c-2f747ad6d361" 
        alt="display image" 
        />
        <MathJax>
          {`
          \\[V_{x} = V\\cos \\theta  \\] 
          \\[V_{y} = V\\sin \\theta  \\]  
          
          `}
          </MathJax>
          <p>จะพบว่ามุมที่เรายืดสปริง จะส่งผลกับวิถีการเคลื่อนที่กระสุน
          
          </p>
          </span> 
        
        
       
        
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
  <div className="ProgessBar"><progress value="66" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การทดลอง Slingshot</h2>
        <p>หนังสติ๊ก(Slingshot) มีหลักการทำงานโดยให้งาน เป็นพลังงานศักย์ยืดหยุ่น หลังจากปล่อยหนังสติ๊กลูกกระสุนจะเปลี่ยนพลังงานศักย์ยืดหยุ่นเป็นพลังงานจลน์ ทำให้ลูกกระสุนวิ่งออกไปได้</p>
        <p><span className='highlight-red highlight-block '>
        *สามารถใช้เมาส์ลากลูกบอลในการทดลองได้*
        </span></p>
        <div className='MatterScene'><Matter2/></div>
        <div className='btn-warpper'>
        <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='left' onClick = {() => handleReset(2)} >Reset</Button>
        </div>
        
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
      <div className="ProgessBar"><progress value="100" max="100"></progress></div>
      <div className="finalpage-container">
            <h2>การทดลอง Slingshot</h2>
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

