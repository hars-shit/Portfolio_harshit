import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { MdCall } from "react-icons/md";

const Name = styled(Typography)`
  background: linear-gradient(to right, #87ceeb, #5e9fff);
  // background: linear-gradient(to right, #87bceb, #637cc9);
  -webkit-background-clip: text;
  color: transparent;
  text-align: center;
`;
const Lower = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  "& > div": {
    borderColor: "rgb(163, 163, 163)",
    // transition:all 0.3s ease-in-out 0s;
    border: "0.1px solid rgb(48,110,232)",
    borderRadius: 25,
    boxShadow: "rgba(23,92,230,0.15) 0px 4px 24px",
    width: "280px",
    height: 60,
    display: "flex",
    justifyContent: "center",
    gap:5,
    alignItems: "center",
    padding: "1rem",
    flexDirection: "column",
    "& > div": {
      "& > a": {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        gap: 5,
        marginBottom: 5,
        textDecoration: "none",
        color:'#87CEEB',
        '& > svg':{
            fontSize:18,
        }
      },
    },
  },
});
const Lower_footer=styled(Box)({
    display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
    marginTop:'2rem',
    color:'#87CEEB',
    paddingBottom:'5rem',
    
   
})
const Footer = () => {
  return (
    <>
    <Lower>
      <Typography
        color={"#87CEEB"}
        textAlign={"center"}
      marginTop={5}
      marginBottom={1}
        fontSize={20}
        fontWeight={600}
      >
        Get In Touch
      </Typography>
      <Name marginBottom={5} color={"white"} fontSize={40} fontWeight={700}>
        Contact Me
      </Name>
      <Box>
        <Box>
          <a href="mailto:upadhyayharshit05@gmail.com">
            <BiLogoGmail />
            upadhyayharshit05@gmail.com
          </a>
        </Box>
        <Box>
          <a href="tel:+9520593613">
            <MdCall />
            +9520593613
          </a>
        </Box>
      </Box>
    </Lower>
      <Lower_footer>
        Designed with ❤️ By &nbsp;<Name>Harshit Upadhyay</Name> 
      </Lower_footer>
      </>
  );
};

export default Footer;
