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
})
const Name=styled(Typography)`
background: linear-gradient(to right, #87CEEB, #5E9FFF);
// background: linear-gradient(to right, #87bceb, #637cc9);
-webkit-background-clip: text;
color: transparent;
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
const Intro=()=> {
  return (
    <Container>
        <Box>
            <Name color={'white'} fontSize={50} fontWeight={700} >Hi,I'm Harshit</Name>
        </Box>
        <Box gap={1} marginBottom={1}>
            {/* <MdLocationPin color={'#87CEEB'}  fontSize={20}/> */}
            <Typography color={'#87CEEB'} fontSize={20} fontWeight={600}>Frontend Developer</Typography>
        </Box>
        <Box display={'flex'} gap={2} marginBottom={3.5} justifyContent={'center'} >
          {/* <Typography fontSize={16.5} maxWidth={500} color={'#a9c6ff'} >
              I'm a  B.Tech fourth year student at Institute of Technology Gopeshwar , I am currently creating frontend React websites.
            </Typography> */}
            <Btn1>Download CV</Btn1>
            <Btn2>Contact Info</Btn2>
        </Box>
        <Box display={'flex'} justifyContent={'center'} marginBottom={'10rem'} gap={2.5} alignItems={'center'}>
            <BsFacebook style={{fontSize:"2rem",color:'rgb(182 206 227)',cursor:'pointer'}}/>
            <AiFillGithub style={{fontSize:"2rem",color:'rgb(182 206 227)',cursor:'pointer'}}/>
            <AiFillInstagram style={{fontSize:"2rem",color:'rgb(182 206 227)',cursor:'pointer'}}/>
            <AiFillLinkedin style={{fontSize:"2rem",color:'rgb(182 206 227)',cursor:'pointer'}}/>

        </Box>
        <Arrow>
            <MdKeyboardDoubleArrowDown />
        </Arrow>
    </Container>
  )
}

export default Intro