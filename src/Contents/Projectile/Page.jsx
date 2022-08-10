import React ,{useState , useRef, useContext}from 'react'
import './Content.css'
import './../../components/Highlight.css'
import {Button} from './../../components/pages/Button'
import QuestionForm from './../../components/QuestionForm'
import {Scene as MatterP3} from './ScenePage3';
export default function Projectile() {
// Set Page
var [page, setPage] = useState(1);

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
        <h2>การเคลื่อนที่วิถีโค้ง (Projectile Motion)</h2>
        <p>เมื่อเราขว้างวัตถุออกไป จะสังเกตว่า<span className='highlight-yellow'>การเคลื่อนที่ของวัตถุนั้นจะเป็นวิถีโค้ง</span> จากจุดที่ขว้างวัตถุ วัตถุเคลื่อนที่ขึ้นไปเรื่อยๆ ความเร็วของวัตถุลดลงเรื่อยๆ จนถึงจุดสูงสุดวัตถุก็ค่อยๆตกลงมา ทำให้ความเร็วเพิ่มขึ้น จนตกถึงพื้น
          ในกิจกรรมนี้จะไปคุณไปสำรวจและสนุกกับการเคลื่อนที่วิถีโค้ง สาเหตุ หลักการ และทฤษฎีที่อยู่เบื้องหลัง
        </p>
        <img 
        className='content-img'
        src="https://steamuserimages-a.akamaihd.net/ugc/781871757549675033/5F6623AB658C5F0278A46826103FC9735368A5C8/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" 
        alt="display image" 
        />
        <p><span className='highlight-red highlight-block '>Disclaimer : การเคลื่อนที่แนวโค้งในกิจกรรมนี้เป้นการเคลื่อนที่แนวโค้งอย่างง่าย นั้นคือจะไม่คำนึงถึงผลของแรงต้านอากาศ และ การสูญเสียพลังงานให้สิ่งแวดล้อม เพื่อให้เห็นความสัมพันธุ์เชิงตัวแปรในการเคลื่อนที่อย่างชัดเจน
        </span>
        </p>
        <div className='btn-warpper'>
        <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='right' onClick = {() => setPage(2)} >Next page</Button>
        </div>
        
  
        </div>
  </>
  )
  }
  
  function Page2(){
    return (
  <>
  <div className="ProgessBar"><progress value="20" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การเคลื่อนที่วิถีโค้ง (Projectile Motion)</h2>
        <p>ปืนใหญ่เป็นอาวุรโบราณ ประดิษฐ์ขึ้นในสมัยราชวงค์หมิง (ช่วงต้นศตวรรษที่ 13) ปืนใหญ่ทำงานโดยยิงหัวกระสุนด้วยแรงดันจากการเผาไหม้ดินกระสุน แรงดันจะดันกระสุนออกมาจากกระบอกด้วยความเร็วสูง

        </p>
        <img 
        className='content-img'
        src="https://steamuserimages-a.akamaihd.net/ugc/781871757549675033/5F6623AB658C5F0278A46826103FC9735368A5C8/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" 
        alt="display image" 
        />
        
        <div className='btn-warpper'>
        <Button buttonSize = 'btn--wide'  buttonColor='blue' buttonPos='left' onClick = {() => setPage(1)} >Previous page</Button>
        <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='right' onClick = {() => setPage(3)} >Next page</Button>
        </div>
        
  
        </div>
  </>
  )
  }

  function Page3(){
    return (
  <>
  <div className="ProgessBar"><progress value="30" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การเคลื่อนที่วิถีโค้ง (Projectile Motion)</h2>
        <p>ลองสังเกตการลักษณะเคลื่อนที่รวมถึงการเปลี่ยนแปลงของความเร็วความเร่งของลูกปืนใหญ่จาก Simulation ด้านล่างนี้</p>
       <div className='MatterScene'><MatterP3/></div>
        
        <p>จะสังเกตเห็นว่าการเคลื่อนที่ของลูกกระสุนปืนใหญ่มีลักษณะโค้งพาราโบลา เมื่อวิเคราห์การเคลื่อนที่ของกระสุนแล้วจะพบว่ากระสุนออกจากกระบอกปืนด้วยความเร็วแนวเฉียงดังรูป

        </p>

        <img 
        className='content-img'
        src="https://steamuserimages-a.akamaihd.net/ugc/781871757549675033/5F6623AB658C5F0278A46826103FC9735368A5C8/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" 
        alt="display image" 
        />

        <div className='btn-warpper'>
        <Button buttonSize = 'btn--wide'  buttonColor='blue' buttonPos='left' onClick = {() => setPage(2)} >Previous page</Button>
        <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='right' onClick = {() => setPage(4)} >Next page</Button>
        </div>
        
     
  
        </div>
  </>
  )
  }

  function Page4(){
    return (
  <>
  <div className="ProgessBar"><progress value="40" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การเคลื่อนที่วิถีโค้ง (Projectile Motion)</h2>
        <p>เมื่อแยกองค์ประกอบของความเร็วลูกกระสุนออกเป็นแกน x และ y และ จะพบความสัมพันธุ์ดังภาพ</p>
       
        <img 
        className='content-img'
        src="https://steamuserimages-a.akamaihd.net/ugc/781871757549675033/5F6623AB658C5F0278A46826103FC9735368A5C8/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" 
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
        <Button buttonSize = 'btn--wide'  buttonColor='blue' buttonPos='left' onClick = {() => setPage(2)} >Previous page</Button>
        <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='right' onClick = {() => setPage(4)} >Next page</Button>
        </div>
        
     
  
        </div>
  </>
  )
  }

  function Page5(){
    return (
  <>
  <div className="ProgessBar"><progress value="50" max="100"></progress></div>
  <div className="content-wrapper">
        <h2>การเคลื่อนที่วิถีโค้ง (Projectile Motion)</h2>
        <p>ลองสังเกตการลักษณะเคลื่อนที่รวมถึงการเปลี่ยนแปลงของความเร็วความเร่งของลูกปืนใหญ่จาก Simulation ด้านล่างนี้</p>
       <div className='MatterScene'><MatterP3/></div>
        
        <p>จะสังเกตเห็นว่าการเคลื่อนที่ของลูกกระสุนปืนใหญ่มีลักษณะโค้งพาราโบลา เมื่อวิเคราห์การเคลื่อนที่ของกระสุนแล้วจะพบว่ากระสุนออกจากกระบอกปืนด้วยความเร็วแนวเฉียงดังรูป

        </p>

        <img 
        className='content-img'
        src="https://steamuserimages-a.akamaihd.net/ugc/781871757549675033/5F6623AB658C5F0278A46826103FC9735368A5C8/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" 
        alt="display image" 
        />

        <div className='btn-warpper'>
        <Button buttonSize = 'btn--wide'  buttonColor='blue' buttonPos='left' onClick = {() => setPage(2)} >Previous page</Button>
        <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='right' onClick = {() => setPage(4)} >Next page</Button>
        </div>
        
     
  
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

