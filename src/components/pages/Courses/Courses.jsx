import * as React from 'react';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import './Courses.css'
import ShootAlertWIP from './../../alert/Alert'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1), 
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Courses() {
   
  return (
    <div className='courses-container'>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={12}
        justifyContent="center"
        alignItems="center"
      >
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea href='/courses/projectile_1'>
        <CardMedia
          component="img"
          height="280"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ปืนใหญ่และการเคลื่อนที่วิถีโค้ง
          </Typography>
          <Typography variant="body2" color="text.secondary">
            ทำความเข้าใจ ทดลอง และ พิสูจน์ เกี่ยวกับการเคลื่อนที่วิถีโค้ง และการประยุกต์ใช้
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          image="https://firebasestorage.googleapis.com/v0/b/keep-curious-v2.appspot.com/o/Homepage%2Fwarning.svg?alt=media&token=bd2a340d-cf84-41a9-a3e1-4b19261b89ab"
          alt="Coming soon"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Coming soon
          </Typography>
          <Typography variant="body2" color="text.secondary">
          "Formal education will make you a living; <br/>self-education will make you a fortune."<br/> 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

   
      </Stack>
    </div>
  );
}