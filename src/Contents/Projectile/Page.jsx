import React from 'react'
import './Content.css'
import './../../components/Highlight.css'
import {Button} from './../../components/pages/Button'
export default function Projectile() {
  
  return (
    <div>
      <Page1/>
      
    </div>
  )
}

function Page1(){
  return (
<>
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
      <Button buttonSize = 'btn--wide'  buttonColor='green' buttonPos='right'>Next page</Button>
      </div>
      

      </div>
</>
)
}