
import * as React from 'react';
import {useContext,useEffect } from 'react'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import {auth,AuthContext} from './../../Firebase'

      
        const Transition = React.forwardRef(function Transition(props, ref) {
          return <Slide direction="up" ref={ref} {...props} />;
        });
        
        export default function ShootAlertPDPA() {
          const [open, setOpen] = React.useState(true);
          
          const handleClickOpen = () => {
            setOpen(true);
          };
        
          const handleClose = () => {
            setOpen(false);
            window.location.replace("/courses")
          };

          return (
            <div>
              <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogTitle>{"ข้อตกลงการใช้งาน"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                   Keep-Curious จะทำการเก็บข้อมูลผู้ใช้ (UserID,ข้อมูลเกี่ยวกับการตอบคำถามหรือกิจกรรม และ การประเมินผลต่างๆ) เพื่อนำไปประมวลผลและปรับปรุงการบริการของเรา <br/><br/> กรุณากดยอมรับเพื่อเข้าใช้งาน
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleClose}>ยอมรับ</Button>
                </DialogActions>
              </Dialog>
            </div>
          );
        }
        