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
          image="https://firebasestorage.googleapis.com/v0/b/keep-curious-v2.appspot.com/o/Content%2F1%2FProj2.png?alt=media&token=b7bd588b-1666-4752-80b3-a77d4d2ad7fc"
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
      <CardActionArea href='/courses/newton_cradle'>
        <CardMedia
          component="img"
          height="280"
          image="https://firebasestorage.googleapis.com/v0/b/keep-curious-v2.appspot.com/o/Content%2F2%2FNewton.png?alt=media&token=0916182f-672c-4e86-a1e9-ed7fbd40cf4b"
          alt=":MiniLab : NewtonCradle "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          MiniLab : Newton's Cradle
          </Typography>
          <Typography variant="body2" color="text.secondary">
          ลูกตุ้มของนิวตัน เป็นอุปกรณ์ที่แสดงให้เห็นถึงการอนุรักษ์โมเมนตัมและการอนุรักษ์พลังงานที่มีทรงกลมแกว่ง<br/> 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea href='/courses/slingshot'>
        <CardMedia
          component="img"
          height="280"
          image="https://firebasestorage.googleapis.com/v0/b/keep-curious-v2.appspot.com/o/Content%2F3%2FSling1.png?alt=media&token=f589297d-74e6-4455-b8cd-b63cbb8da8cd"
          alt=":Slingshot "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          MiniLab : Slingshot
          </Typography>
          <Typography variant="body2" color="text.secondary">
          หนังสติ๊ก(Slingshot) มีหลักการทำงานโดยให้งาน เป็นพลังงานศักย์ยืดหยุ่นเปลี่ยนเป็นพลังงานจลน์<br/> 
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

    
      </Stack>
    </div>
  );
}