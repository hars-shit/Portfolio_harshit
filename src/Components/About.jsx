import styled from '@emotion/styled'
import { Box, ButtonBase, Container, Typography } from '@mui/material'
import React from 'react'
import SchoolIcon from '@mui/icons-material/School';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
const Column=styled(Container)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    padding:0,
    flexDirection:'column',
    background: 'linear-gradient(38.73deg, rgba(204, 0, 187, 0.15) 0%, rgba(201, 32, 184, 0) 50%), linear-gradient(141.27deg, rgba(0, 70, 209, 0) 50%, rgba(0, 70, 209, 0.15) 100%)',
    width: '100%',
    paddingBottom:'2rem',
    clipPath: 'polygon(0px 0px, 100% 0px, 100% 100%, 100% 100%, 0px 100%)',
    '@media (min-width:1200px)':{
        marginTop:'5rem',
       
     },


})
const Name=styled(Typography)`
background: linear-gradient(to right, #87CEEB, #5E9FFF);
// background: linear-gradient(to right, #87bceb, #637cc9);
-webkit-background-clip: text;
color: transparent;
`
const Details=styled(Box)`
padding: 1.5rem;
    flex: 1;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
    // transition:all 0.3s ease-in-out 0s;
    border:0.1px solid rgb(48,110,232);
    box-shadow:rgba(23,92,230,0.15) 0px 4px 24px;
    text-align: center;
    & > img{
        height:2rem;
    },
    & > p{
        color:#87CEEB;
    }
`
const About=({about})=> {
  return (
    <>
        <Box ref={about}>
        <Typography color={'#87CEEB'} textAlign={'center'} marginBottom={6} fontSize={20} fontWeight={600}>Scroll To Know More</Typography>
        </Box>
        <Column>
        <Box>
            <Name marginBottom={6} color={'white'} fontSize={50} fontWeight={700}>About Me</Name>
        </Box>
        <Box display={'flex'} gap={5} marginBottom={5} flexWrap={'wrap'} justifyContent={'center'} flexDirection={'column'}>
            <Details>
                <PermContactCalendarIcon style={{color:'rgb(48,110,232)' , fontSize:'2rem'}} />
                <Typography>Learning</Typography>
                <Typography>Website Development</Typography>
            </Details>
            <Details>
        <SchoolIcon style={{color:'rgb(48,110,232)',fontSize:'2rem'}}/>
            <Typography>Education</Typography>
            <Typography>B.Tech in Computer Science and Enginnering </Typography>
            </Details>
        </Box>
        <Box>
            <Typography color={ '#87CEEB'} style={{
    textAlign: 'justify',
    textJustify: 'inter-character',
    lineHeight: '1.5', // Adjust line height as needed
    letterSpacing: '0.04em', // Adjust letter spacing as needed
    maxWidth: '600px', // Set a maximum width to control line length
    margin: '0 auto', // Center align the text
  }}>
                I am Harshit Upadhyay, a dedicated fontend developer. With a strong command of HTML , CSS, Bootstrap, MUI, Tailwind CSS, Chakra UI, Redux Toolkit, JavaScript and React.I have also worked on Backend technologies majorly in Express.js and No SQL databases such like MongoDb. I transform designs into seamless,interactive web experiences. 
                I'm passionate about optimizing user interfaces for speed and responsiveness while maintaining a keen eye for design aesthetics.
                </Typography> 
        </Box>
      
    </Column>
    </>
  )
}

export default About