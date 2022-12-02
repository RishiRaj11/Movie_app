import React from 'react'
import { Dialog,Card } from '@mui/material';
import Login from './Login/Login';

const LoginDialog = ({open,setOpen}) => {

  const closeDialog=()=>{
    setOpen(false);
  }

  return (
    <Dialog  open={open} onClose={closeDialog} >
      <Card variant="outlined"  style={{backgroundColor:" rgb(29, 69, 107)"}}>
      <Login />
      </Card>
      
    </Dialog>
  )
}

export default LoginDialog;