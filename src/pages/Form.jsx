import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styled from '@emotion/styled';
import { Box, Button, InputBase, Typography } from '@mui/material';

const Name=styled(Typography)`
font-size:30px;
 font-weight:700;
background: linear-gradient(to right, #87CEEB, #5E9FFF);
// background: linear-gradient(to right, #87bceb, #637cc9);
-webkit-background-clip: text;
color: transparent;
 @media (min-width:1200px){
    margin-top:2rem;
   font-size:60px;
},

`
const Main=styled('form')({
  height:'100vh',
  marginTop:'7rem',
  zIndex:11111,
  display:"flex",
  alignItems:"center",
  gap:"20px",
  overflow:'hidden',
  
  flexDirection:"column"
})

const Btn=styled('button')({
  background:'none',
  fontWeight:600,
  transition:'all 300ms ease',
  width:'10rem',
  border:'1px solid #bfcefb',
  borderRadius:'2rem',
  height:'3rem',
  color:'#bfcefb',
  '@media (min-width:1200px)':{
      marginTop:'2rem',
      width:'10rem',
      height:'3rem',
   },

})
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qwehe62', 'template_9ov3i7a',form.current, 'ZrX4X_IoPovPpwQo7')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
   <>

    <Main ref={form} style={{position:'static'}}>
    <Name>Connect With Me</Name>
      <InputBase type="text" name="to_name" placeholder='name' style={{background:"#f1e8e8",padding:"5px",width:"300px",borderRadius:'10px',marginBottom:'1.5rem'}} />
      <InputBase type="email" name="from_name" placeholder='email address' style={{background:"#f1e8e8",padding:"5px",width:"300px",borderRadius:'10px',marginBottom:'1.5rem'}} />
      <InputBase name="message" placeholder='message' style={{background:"#f1e8e8",padding:"5px",width:"300px",borderRadius:'10px',marginBottom:'1.5rem'}}/>
      <Btn onClick={sendEmail}>send</Btn>
    </Main>
   </>
    
  );
};
export default Form