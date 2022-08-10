import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';

export default function QuestionForm({
    Choice1,
    Choice2,
    Choice3,
    Choice4,
    CorrectChoice,
    Explanation1,
    Explanation2,
    Explanation3,
    Explanation4,

    
}) 
    {
  const [value, setValue] = React.useState('');
  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState('เลือก 1 คำตอบ');
  const [Answered, setAnswered] = React.useState(0);

  const handleRadioChange = (event) => {
    setValue(event.target.value);
    setHelperText(' ');
    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (value === CorrectChoice) {
      setHelperText('🎉ยินดีด้วย คุณตอบถูก!');
      setError(false);
      setAnswered(1)
    } else if (value === '') {
      setHelperText('กรุณากดเลือกคำตอบ');
      setError(true);
      
    } else {
        setHelperText('คุณตอบผิด ลองดูคำอธิบายด้านล่างสิ');
        setError(true);
        setAnswered(1)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
    <div className = 'QuestionFormContainer'>
      <FormControl sx={{ m: 3 }} error={error} variant="standard">
        <RadioGroup
          aria-labelledby="demo-error-radios"
          name="quiz"
          value={value}
          onChange={handleRadioChange}
        >
          <FormControlLabel value= {1} control={<Radio />} label= {Choice1} />
          <FormControlLabel value= {2} control={<Radio />} label= {Choice2} />
          <FormControlLabel value= {3} control={<Radio />} label= {Choice3} />
          <FormControlLabel value= {4} control={<Radio />} label= {Choice4} />
        </RadioGroup>
        <FormHelperText>{helperText}</FormHelperText>
        <Button sx={{ mt: 1, mr: 1 }} type="submit"  variant="contained">
          ส่งคำตอบ
        </Button>
      </FormControl>
      </div>
      {Answered === 1?  
      <p>Explanation : <br/>
      {Explanation1}<br/>
      {Explanation2}<br/>
      {Explanation3}<br/>
      {Explanation4}
      </p> 

    : null
      }
    </form>
  );
}