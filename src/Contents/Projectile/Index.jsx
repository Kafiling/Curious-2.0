import React from 'react'
import './Content.css'
import './../../components/Highlight.css'

export default function Projectile() {
  return (
    <div>
      <div className="content-wrapper">
      <h2>การเคลื่อนที่วิถีโค้ง (Projectile Motion)</h2>
      <p>เมื่อเราขว้างวัตถุออกไปจะสังเกตว่า<span className='highlight-yellow'>วัตถุนั้นจะเคลื่อนที่เป็นวิถีโค้ง</span>จากจุดที่ขว้างวัตถุ วัตถุเคลื่อนที่ขึ้นไปเรื่อยๆ ความเร็วของวัตถุลดลงเรื่อยๆ จนถึงจุดสูงสุดวัตถุก็ค่อยๆตกลงมา ทำให้ความเร็วเพิ่มขึ้น จนตกถึงพื้น
        <br/>ในกิจกรรมนี้จะไปคุณไปสำรวจและสนุกกับการเคลื่อนที่วิถีโค้ง สาเหตุ หลักการ และทฤษฎีที่อยู่เบื้องหลัง
      </p>
      
      <img 
      className='content-img'
      src="https://steamuserimages-a.akamaihd.net/ugc/781871757549675033/5F6623AB658C5F0278A46826103FC9735368A5C8/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false" 
      alt="display image" 
      />

      </div>
      
    </div>
  )
}
