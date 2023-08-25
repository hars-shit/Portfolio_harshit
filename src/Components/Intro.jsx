import styled from '@emotion/styled'
import { Box,  ButtonBase,  Typography, keyframes } from '@mui/material'
import React from 'react'
import {MdLocationPin} from 'react-icons/md'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram,AiFillLinkedin,AiFillGithub} from 'react-icons/ai'
import {MdKeyboardDoubleArrowDown} from 'react-icons/md'


const Container=styled(Box)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'7rem',
    flexDirection:'column',
    gap:15,
    '& > div':{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'row',
    }
})
const Btn1=styled(ButtonBase)({
    background:'none',
    fontWeight:600,
    transition:'all 300ms ease',
    width:'8rem',
    border:'1px solid #bfcefb',
    borderRadius:'2rem',
    height:'3rem',
    color:'#bfcefb',
    '@media (min-width:1200px)':{
        marginTop:'2rem',
        width:'10rem',
        height:'4rem',
     },

})
const Btn2=styled(ButtonBase)({
    fontWeight:600,
    transition:'all 300ms ease',
    width:'8rem',
    borderRadius:'2rem',
    border:'1px solid #91a1d1',
    height:'3rem',
    color:'white',
    // background:'#91a1d1',
    background: 'linear-gradient(to right, #87bceb, #637cc9)',
    '@media (min-width:1200px)':{
        marginTop:'2rem',
        width:'10rem',
        height:'4rem',
     },
})
const Name=styled(Typography)`
font-size:50px;
 font-weight:700;
background: linear-gradient(to right, #87CEEB, #5E9FFF);
// background: linear-gradient(to right, #87bceb, #637cc9);
-webkit-background-clip: text;
color: transparent;
 @media (min-width:1200px){
    margin-top:2rem;
   font-size:80px;
},

`
const bounce=keyframes`
0% {
    transform : translateY(0);
}
100%{
    transform : translateY(-10px);
}
`
const Arrow=styled(Box)({
    '& > svg':{
        fontSize:'3rem',
        color:'#87bceb',
        animation:`${bounce} 2s infinite alternate`,
    }
})
const Typo=styled(Typography)({
    '@media (min-width:1200px)':{
        fontSize:40,
     },
})
const Icon=styled(Box)({
    display:'flex',
     justifyContent:'center',
      marginBottom:'10rem', 
      gap:'2.5rem',
       alignItems:'center',
       zIndex:10,
       '& > a':{
           '& > svg':{
               
               fontSize:"2rem",
               color:'rgb(182 206 227)',
               cursor:'pointer',
               '@media (min-width:1200px)':{
                   fontSize:'3rem',
                },
            }
    }
})
const Intro=()=> {
const handleClick=()=>{
    window.scrollTo(0,document.body.scrollHeight);

}
   
  return (
    <Container>
        <Box>
            <Name color={'white'}  >Hi,I'm Harshit</Name>
        </Box>
        <Box gap={1} marginBottom={1}>
            {/* <MdLocationPin color={'#87CEEB'}  fontSize={20}/> */}
            <Typo color={'#87CEEB'} fontSize={20} fontWeight={600}>Frontend Developer</Typo>
        </Box>
        <Box display={'flex'} gap={2} marginBottom={3.5} justifyContent={'center'} >
          {/* <Typography fontSize={16.5} maxWidth={500} color={'#a9c6ff'} >
              I'm a  B.Tech fourth year student at Institute of Technology Gopeshwar , I am currently creating frontend React websites.
            </Typography> */}
            <Btn1 ><a style={{textDecoration:'none',color:'#bfcefb'}} href="https://drive.google.com/file/d/1mRhqO3AiOhKr944LG8ud26P67VJ76MDO/view?usp=drivesdk">Download CV</a></Btn1>
            <Btn2 onClick={handleClick}>Contact Info</Btn2>
        </Box>
        <Icon>
            <a  href="https://www.linkedin.com/in/harshit-upadhyay-b1231922a"><BsFacebook /></a>
            <a href="https://github.com/hars-shit"><AiFillGithub /></a>
            <a href="https://instagram.com/harshitupadhyaya?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D"><AiFillInstagram /></a>
            <a href="https://www.facebook.com/harshit.upadhyay.332345"><AiFillLinkedin /></a>

        </Icon>
        <Arrow>
            <MdKeyboardDoubleArrowDown />
        </Arrow>
    </Container>
  )
}

export default Intro