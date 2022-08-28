import * as React from 'react';
import Button from '@mui/material/Button';
import {MathJax} from 'better-react-mathjax'

export default function ShowAnswer({
    
  Explanation1,
  QuestionPage
}) 
    {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('กดเพื่อดูคำตอบ');
  const [Answered, setAnswered] = React.useState(0);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

 function handleSubmit() {
      setAnswered(1)
  };

  


  return (
    <div>
    <div className = 'QuestionFormContainer'>
       
  
      </div>
      {Answered === 1?  
      <> 
      <p>
      {Explanation1}<br/>
      Explanation : <br/>
      </p> 
      {QuestionPage === '6'? 
      <>
      <p>ใช้สมการการเคลื่อนที่ความเร็วคงที่ <MathJax inline>{'\\[v_{x} = \\frac{s_{x}}{t}\\]'}</MathJax> 
          เพื่อหา t  แทนค่าตัวแปร<br/>
          <MathJax inline>{'\\(v_{x} = 20\\)'} m/s</MathJax> <br/>
          <MathJax inline>{'\\(s_{x} = 200\\)'} m</MathJax> <br/>
          ได้ <MathJax inline>{'\\(t = 10\\)'} s</MathJax> <br/>
      </p>
      <br/>
      <p>ใช้สมการการเคลื่อนที่ความเร่งคงที่ <MathJax inline>{' \\[s_{y} = u_{y}\\cdot t + \\frac{1}{2}a_{y}\\cdot t^{2} \\]'}</MathJax> 
          เพื่อหา Uy แทนค่าตัวแปร<br/>
          <MathJax inline>{'\\(s_{y} = 0\\)'} m</MathJax> <br/>
          <MathJax inline>{'\\(a_{y} = -10\\)'} m/s^2</MathJax> <br/>
          <MathJax inline>{'\\(t = 10\\)'} s</MathJax> <br/>
          ได้ <MathJax inline>{'\\(u_{y} = 50\\)'} m/s</MathJax> <br/>
      </p>
      </>
      
      : null

      }

{QuestionPage === '7'? 
      <>
      <p>ใช้สมการการเคลื่อนที่ความเร่งคงที่ <MathJax inline>{' \\[s_{y} = u_{y}\\cdot t + \\frac{1}{2}a_{y}\\cdot t^{2} \\]'}</MathJax> 
          เพื่อหา t แทนค่าตัวแปร<br/>
          <MathJax inline>{'\\(s_{y} = 0\\)'} m</MathJax> <br/>
          <MathJax inline>{'\\(a_{y} = -10\\)'} m/s^2</MathJax> <br/>
          <MathJax inline>{'\\(u_{y} = 100\\)'} m/s</MathJax> <br/>
          ได้ <MathJax inline>{'\\(t = 20\\)'} s</MathJax> <br/>
      </p>
      
      <br/>

      <p>ใช้สมการการเคลื่อนที่ความเร็วคงที่ <MathJax inline>{'\\[v_{x} = \\frac{s_{x}}{t}\\]'}</MathJax> 
          เพื่อหา Sx  แทนค่าตัวแปร<br/>
          <MathJax inline>{'\\(v_{x} = 20\\)'} m/s</MathJax> <br/>
          <MathJax inline>{'\\(t = 20\\)'} s</MathJax> <br/>
          ได้ <MathJax inline>{'\\(s_{x} = 400\\)'} m</MathJax> <br/>
      </p>
      
      </>
      
      : null

      }
      
       </>
     

    :  <Button sx={{ mt: 1, mr: 1 }} type="submit"  variant="contained" onClick={() => handleSubmit()}>
    ดูเฉลย
  </Button>
      }
    </div>
  );
}