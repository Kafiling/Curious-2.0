import React ,{useState , useRef, useContext}from 'react'
import './Content.css'
import './../../components/Highlight.css'
import {Link } from 'react-router-dom'
import {Button} from './../../components/pages/Button'
import QuestionForm from './../../components/QuestionForm'
import ShowAnswer from './../../components/ShowAnswer'
import {Scene as MatterP3} from './ScenePage3';
import {App as MatterP6} from './ScenePage6';
import {App as MatterP7} from './ScenePage7';
import {MathJax} from 'better-react-mathjax'

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

    case 6:
      return (<Page6/>)
      break;    

    case 7:
      return (<Page7/>)
      break;   

    case 8:
      return (<Page8/>)
      break;
    default:
    return (<Page404/>)
      break;
  }
  


  function Page1(){
    return (
  <>
  <div className="ProgessBar"><progress value="12.5" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การเคลื่อนที่วิถีโค้ง (Projectile Motion)</h2>
        <p>เมื่อเราขว้างวัตถุออกไป จะสังเกตว่า<span className='highlight-yellow'>การเคลื่อนที่ของวัตถุนั้นจะเป็นวิถีโค้ง</span> จากจุดที่ขว้างวัตถุ วัตถุเคลื่อนที่ขึ้นไปเรื่อยๆ ความเร็วของวัตถุลดลงเรื่อยๆ จนถึงจุดสูงสุดวัตถุก็ค่อยๆตกลงมา ทำให้ความเร็วเพิ่มขึ้น จนตกถึงพื้น
          ในกิจกรรมนี้จะไปคุณไปสำรวจและสนุกกับการเคลื่อนที่วิถีโค้ง สาเหตุ หลักการ และทฤษฎีที่อยู่เบื้องหลัง
        </p>
        <img 
        className='content-img'
        src="https://firebasestorage.googleapis.com/v0/b/keep-curious-v2.appspot.com/o/Content%2F1%2FProj1.png?alt=media&token=020a621b-c372-4668-bc17-a5735f90da25" 
        alt="display image" 
        />
        <p><span className='highlight-red highlight-block '>Disclaimer : การเคลื่อนที่แนวโค้งในกิจกรรมนี้เป้นการเคลื่อนที่แนวโค้งอย่างง่าย นั้นคือจะไม่คำนึงถึงผลของแรงต้านอากาศ และ การสูญเสียพลังงานให้สิ่งแวดล้อม เพื่อให้เห็นความสัมพันธุ์เชิงตัวแปรในการเคลื่อนที่อย่างชัดเจน
        </span>
        </p>
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
  <div className="ProgessBar"><progress value="25" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การเคลื่อนที่วิถีโค้ง (Projectile Motion)</h2>
        <p>ปืนใหญ่เป็นอาวุรโบราณ ประดิษฐ์ขึ้นในสมัยราชวงค์หมิง (ช่วงต้นศตวรรษที่ 13) ปืนใหญ่ทำงานโดยยิงหัวกระสุนด้วยแรงดันจากการเผาไหม้ดินกระสุน แรงดันจะดันกระสุนออกมาจากกระบอกด้วยความเร็วสูง

        </p>
        <img 
        className='content-img'
        src="https://firebasestorage.googleapis.com/v0/b/keep-curious-v2.appspot.com/o/Content%2F1%2FProj2.png?alt=media&token=b7bd588b-1666-4752-80b3-a77d4d2ad7fc" 
        alt="display image" 
        />
        
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
  <div className="ProgessBar"><progress value="37.5" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การเคลื่อนที่วิถีโค้ง (Projectile Motion)</h2>
        <p>ลองสังเกตการลักษณะเคลื่อนที่รวมถึงการเปลี่ยนแปลงของความเร็วความเร่งของลูกปืนใหญ่จาก Simulation ด้านล่างนี้</p>
       <div className='MatterScene'><MatterP3/></div>
        
        <p>จะสังเกตเห็นว่าการเคลื่อนที่ของลูกกระสุนปืนใหญ่มีลักษณะโค้งพาราโบลา เมื่อวิเคราห์การเคลื่อนที่ของกระสุนแล้วจะพบว่ากระสุนออกจากกระบอกปืนด้วยความเร็วแนวเฉียงดังรูป

        </p>

        <img 
        className='content-img'
        src="https://firebasestorage.googleapis.com/v0/b/keep-curious-v2.appspot.com/o/Content%2F1%2FProj3.png?alt=media&token=ab6fd4e1-6ee8-4413-b655-8e5b3975b3ce" 
        alt="display image" 
        />

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
  <div className="ProgessBar"><progress value="50" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การเคลื่อนที่วิถีโค้ง (Projectile Motion)</h2>
        <p>เมื่อแยกองค์ประกอบของความเร็วลูกกระสุนออกเป็นแกน x และ y และ จะพบความสัมพันธุ์ดังภาพ</p>
       
        <img 
        className='content-img'
        src="https://firebasestorage.googleapis.com/v0/b/keep-curious-v2.appspot.com/o/Content%2F1%2FProj4.png?alt=media&token=f90568dd-61c6-4321-9a1c-2f747ad6d361" 
        alt="display image" 
        />
        <p>จะพบว่าลูกกระสุนมีความเร็วแนวแกนราบสม่ำเสมอ (Vx คงที่ตลอดการเคลื่อนที่) ส่วนความเร็วในแนวแกนดิ่งสังเกตว่าจะมีทิศขึ้นเมื่อถูกยิงออกมา และจะค่อยๆลดลงจนมีความเร็วในทิศลงที่เพิ่มขึ้นเรื่อยๆ เนื่องจากลูกกระสุนเคลื่อนที่ในสนามโน้มถ่วง</p>
        <br/>
        <span className='highlight-yellow highlight-block '>
          <p>คำถวามชวนคิด <br/>ข้อใดถูกต้องเกี่ยวกับการเคลื่อนที่ของลูกกระสุนตามภาพด้านบน</p>
          <div >
          <QuestionForm 
          Choice1  = 'วัตถุมีความเร็วคงที่'
          Choice2 = 'ที่จุดสูงสุดวัตถุมีความเร็วเป็น 0'
          Choice3 = 'ที่จุดสูงสุดวัตถุมีความเร็วมากที่สุด'
          Choice4 = 'วัตถุมีความเร็วแนวแกนราบคงที่'
          CorrectChoice = '4'
          Explanation1 = 'ข้อ 1 ผิด เพราะ วัตถุมีความเร็วไม่คงที่เนื่องจาก Vy ไม่คงที่'
          Explanation2 = 'ข้อ 2 ผิด เพราะ ที่จุดสูงสุดยังมี Vx อยู่จึงทำให้ความเร็วไม่เท่ากับ 0'
          Explanation3 = 'ข้อ 3 ผิด เพราะ ที่จุดสูงสุดวัตถุไม่ได้มีความเร็วมากที่สุด จุดเริ่ม/จุดจบของการเคลื่อนที่ (ระดับต่ำสุด) มีความเร็วมากที่สุด'
          Explanation4 = 'ข้อ 4 ถูก เพราะ วัตถุมี Vx คงที่ ดังแสดงในภาพ'
          />
      </div></span>
        
       

        <div className='btn-warpper'>
        <Button buttonSize = 'btn--wide'  buttonColor='blue' buttonPos='left' onClick = {() => handleSetPage(3)} >Previous page</Button>
        <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='right' onClick = {() => handleSetPage(5)} >Next page</Button>
        </div>
        
     
  
        </div>
  </>
  )
  }
/*
<MathJax>
     {`Inside a MathJax block element, one might use both Latex inline math, such
          as \\(x\\) or \\(\\frac{25x}{10} = 2^{10}\\), but then also switch
          to Latex display math, like
          \\[\\sum_{n = 100}^{1000}\\left(\\frac{10\\sqrt{n}}{n}\\right)\\]
          ... and then continue with inline math.`}

</MathJax>
*/

//<MathJax inline>{"\\(5x * 10 \\approx 42\\)"}</MathJax>

function Page5(){
    return (
  <>
  <div className="ProgessBar"><progress value="62.5" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การเคลื่อนที่วิถีโค้ง (Projectile Motion)</h2>
        <p>การคำนวณการเคลื่อนที่แนวโค้ง (Projectile) ต้องแยกคิดการเคลื่อนที่ 2 แนวการเคลื่อนที่</p>
        <span className='highlight-yellow highlight-block '>
        <MathJax>
          {`โดยแนวราบ (แกน x) ไม่มีความเร่ง (\\(a=0\\) , v คงที่ ) ใช้สมการการเคลื่อนที่ดังนี้
          \\[v_{x} = \\frac{s_{x}}{t}\\]  
          `}
          </MathJax>
          <p>โดย <br/>
          <MathJax inline>{'\\(v_{x}\\)'}</MathJax> แทน ความเร็วแกนราบ<br/>
          <MathJax inline>{'\\(s_{x}\\)'}</MathJax> แทน ระยะแกนราบ<br/>
          <MathJax inline>{'\\(t\\)'}</MathJax> แทน เวลา
          </p>
          </span>

          <span className='highlight-green highlight-block '>
        <MathJax>
          {`ส่วนแนวดิ่ง (แกน y) มีความเร่ง  ใช้สมการการเคลื่อนที่ดังนี้
          \\[v_{y} = u_{y} + a_{y}\\cdot t \\tag{1}\\]  
          \\[s_{y} = u_{y}\\cdot t + \\frac{1}{2}a_{y}\\cdot t^{2} \\tag{2}\\]
          \\[s_{y} = v_{y}\\cdot t - \\frac{1}{2}a_{y}\\cdot t^{2} \\tag{3}\\]
          \\[s_{y} = (\\frac{u_{y} + v_{y}}{2})\\cdot t \\tag{4}\\]
          \\[v_{y}^{2} = u_{y}^{2} + 2a\\cdot s \\tag{5}\\]
          
          `}
          </MathJax>
          <p>โดย <br/>
          <MathJax inline>{'\\(u_{x}\\)'}</MathJax> แทน ความเร็วต้นแกนดิ่ง<br/>
          <MathJax inline>{'\\(v_{x}\\)'}</MathJax> แทน ความเร็วปลายแกนดิ่ง<br/>
          <MathJax inline>{'\\(s_{x}\\)'}</MathJax> แทน ระยะแกนดิ่ง<br/>
          <MathJax inline>{'\\(a_{x}\\)'}</MathJax> แทน ความเร่งแกนดิ่ง<br/>
          <MathJax inline>{'\\(t\\)'}</MathJax> แทน เวลา
          </p>
          </span>

      
        <p><br/><span className='highlight-blue'>โดยทั้งแกนราบและดิ่งมีความสัมพันธุ์คือใช้ตัวแปร t (เวลาร่วมกัน)</span></p>
        <div className='btn-warpper'>
        <Button buttonSize = 'btn--wide'  buttonColor='blue' buttonPos='left' onClick = {() => handleSetPage(4)} >Previous page</Button>
        <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='right' onClick = {() => handleSetPage(6)} >Next page</Button>
        </div>
        
     
  
        </div>
  </>
  )
  }

  function Page6(){
    return (
  <>
  <div className="ProgessBar"><progress value="75" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การเคลื่อนที่วิถีโค้ง (Projectile Motion)</h2>
        <p>เมื่อทราบดังนั้นแล้ว เราลองนำสิ่งที่เรียนมาใช้ดูดีกว่า
         ลูกกระสุนปืนใหญ่ถูกยิงออกมาจากปากระบอก โดยถือว่ากระบอกมีความสูงน้อยมาก โดยกระสุนยิงออกจากกระบอกด้วยความเร็วแกนราบ 20 m/s พบว่าลูกกระสุนตกห่างจากกระบอกปืน 200 m เมื่อกระสุนออกจากกระบอกปืนมีความเร็วแกนดิ่งเท่าไร 
         (กำหนด <MathJax inline>{'\\(g = 10 m/s^{2} \\)'}</MathJax>)
        </p>
       <div className='MatterScene'><MatterP6/></div>
       <span className='highlight-yellow highlight-block '>
       <ShowAnswer 
          QuestionPage = '6'
          Explanation1 = 'ตอบ กระสุนออกจากกระบอกปืนมีความเร็วแกนดิ่งเท่ากับ 50 m/s'
          />
       </span>

        <div className='btn-warpper'>
        <Button buttonSize = 'btn--wide'  buttonColor='blue' buttonPos='left' onClick = {() => handleSetPage(5)} >Previous page</Button>
        <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='right' onClick = {() => handleSetPage(7)} >Next page</Button>
        </div>
        
       
     
  
        </div>
  </>
  )
  }

  function Page7(){
    return (
  <>
  <div className="ProgessBar"><progress value="82.5" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การเคลื่อนที่วิถีโค้ง (Projectile Motion)</h2>
        <p>จากข้อที่แล้ว หากกระสุนออกจากกระบอกด้วยความเร็วแนวดิ่ง 100 m/s และความเร็วแนวราบเท่าเดิม กระสุนจะตกห่างจากจุดที่ยิงกี่เมตร</p>
        <p>ลูกกระสุนปืนใหญ่ถูกยิงออกมาจากปากระบอก โดยถือว่ากระบอกมีความสูงน้อยมาก 
         (กำหนด <MathJax inline>{'\\(g = 10 m/s^{2} \\)'}</MathJax>)
        </p>
       <div className='MatterScene'><MatterP7/></div>
       <span className='highlight-yellow highlight-block '>
       <ShowAnswer 
          QuestionPage = '7'
          Explanation1 = 'ตอบ กระสุนจะตกห่างจากจุดที่ยิง 400 m'
          />
       </span>

        <div className='btn-warpper'>
        <Button buttonSize = 'btn--wide'  buttonColor='blue' buttonPos='left' onClick = {() => handleSetPage(6)} >Previous page</Button>
        <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='right' onClick = {() => handleSetPage(8)} >Next page</Button>
        </div>
        
       
     
  
        </div>
  </>
  )
  }

  function Page8(){
    return (
      <>
      <div className="ProgessBar"><progress value="100" max="100"></progress></div>
      <div className="finalpage-container">
            <h2>การเคลื่อนที่วิถีโค้ง (Projectile Motion)</h2>
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

