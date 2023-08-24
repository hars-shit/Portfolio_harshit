import styled from '@emotion/styled'
import { Box, ButtonBase, Typography } from '@mui/material'
import React from 'react'
import projects from '../constant/project'
const Container=styled(Box)({
display:'flex',
justifyContent:'center',
alignItems:'center',
flexDirection:'column',
})
const Name=styled(Typography)`
background: linear-gradient(to right, #87CEEB, #5E9FFF);
// background: linear-gradient(to right, #87bceb, #637cc9);
-webkit-background-clip: text;
color: transparent;
`
const Contain=styled(Box)({
display:'grid',
justifyContent:'center',
alignItems:'center',
gridTemplateColumns:'auto',
'@media (min-width:1200px)':{
    gridTemplateColumns:'auto auto',
    gridGap:'3rem',
   
    
 
    
 },
})
const Details=styled(Box)`
padding: 1.5rem;
    // flex: 1;
    border-radius: 2rem;
    width:250px;
    margin-bottom:2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
    // transition:all 0.3s ease-in-out 0s;
    border:0.1px solid rgb(48,110,232);
    box-shadow:rgba(23,92,230,0.15) 0px 4px 24px;
    text-align: center;
 
    & > img{
        width:100%;
        height:180px;
        border-radius:2rem;
    }
  
    `
    const Btn1=styled(ButtonBase)({
        background:'none',
        fontWeight:600,
        transition:'all 300ms ease',
        width:'8rem',
        border:'1px solid #bfcefb',
        borderRadius:'2rem',
        height:'3rem',
        '& > a':{
            color:'white',
            textDecoration:'none'
        }
    
    })
    const Btn2=styled(ButtonBase)({
        fontWeight:600,
        transition:'all 300ms ease',
        width:'8rem',
        borderRadius:'2rem',
        border:'1px solid #91a1d1',
        height:'3rem',
        // background:'#91a1d1',
        background: 'linear-gradient(to right, #87bceb, #637cc9)',
        '& > a':{
            color:'white',
            textDecoration:'none'
        }
    })
const Projects=({project})=> {
  return (
    <Container ref={project}>
         
            <Typography marginTop={10}  color={'#87CEEB'} textAlign={'center'}  fontSize={20} fontWeight={600}>Browse My Recent</Typography>
           
         <Name marginTop={2} marginBottom={4}  color={'white'} fontSize={50} fontWeight={700}>Projects</Name>
        <Contain>
            {
                projects.map(data=>(
                    <Details>
                        <img src={data.image} alt="" />
                        <Typography fontSize={'1.25rem'} fontWeight={600} margin={'1rem'} color={'#87CEEB'}>{data.name}</Typography>
                        <Box display={'flex'} gap={3} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
        
                        <Btn1><a href={data.link}>GitHub</a></Btn1>
                        <Btn2><a href={data.live}>Live Demo</a></Btn2>
                        </Box>
                    </Details>

                ))
            }
        </Contain>

    </Container>
  )
}

export default Projects