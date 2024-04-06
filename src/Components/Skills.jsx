import { Box,  Typography } from '@mui/material'
import React from 'react'
import frontend from '../constant/frontend'
import styled from '@emotion/styled'
import others from '../constant/others'


const Container=styled(Box)({
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    marginTop:'5rem',
    flexDirection:'column',
    gap:'2rem',

})
const Name=styled(Typography)`
background: linear-gradient(to right, #87CEEB, #5E9FFF);
// background: linear-gradient(to right, #87bceb, #637cc9);
-webkit-background-clip: text;
color: transparent;
`
const Details=styled(Box)`

padding: 1.5rem;
    // flex: 1;
    border-radius: 2rem;
    width:300px;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
    // transition:all 0.3s ease-in-out 0s;
    border:0.1px solid rgb(48,110,232);
    box-shadow:rgba(23,92,230,0.15) 0px 4px 24px;
    text-align: center;
    & > div{
        display:grid;
        gap:15px;
        justify-content:center;
            align-items:center;
        grid-template-columns:auto auto ;
        & > div{
            display:flex;
            justify-content:center;
            align-items:center;
            flex-direction:row;
            border:1px solid #91a1d1;
            border-radius:12px;
            padding:6px 12px;
            gap:8px;
            & >  img{
                height:1.5rem;
            },
            & > p{
                color:#87CEEB;
                font-weight:400;
                font-size:14px;
            }
        }
       
    }
`
const Skills=({skills})=> {
  return (
    <Container ref={skills}>
        <Name fontWeight={700} fontSize={'32px'} >
            Skills
        </Name>
        <Box fontSize={18}  color={'#87CEEB'}>
            Here are some of my skills on which I have been working on for the past 1+ year.
        </Box>
        <Details>
            <Typography fontWeight={600} marginBottom={4} fontSize={28} color={'#87CEEB'}>Web Development</Typography>
            <Box>

                {
                    frontend.map(data=>(
                        <Box>
                            <img src={data.image} alt="" />
                            <Typography>{data.name}</Typography>
                        </Box>
                    ))
                }
                </Box>
         
        </Details>
        <Details>
            <Typography fontWeight={600} marginBottom={4} fontSize={28} color={'#87CEEB'}>Others</Typography>
            <Box>

                {
                    others.map(data=>(
                        <Box>
                            <img src={data.icon} alt="" />
                            <Typography>{data.name}</Typography>
                        </Box>
                    ))
                }
                </Box>
         
        </Details>
    </Container>
  )
}

export default Skills