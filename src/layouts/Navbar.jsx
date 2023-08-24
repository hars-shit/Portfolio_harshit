import styled from "@emotion/styled";
import { Box, Button, ButtonBase, Drawer, Typography } from "@mui/material";
import React, { Fragment, useRef, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "../constant/Constant.css";
import Intro from "../Components/Intro";
import Form from "../pages/Form";
import About from "../Components/About";
import Skills from "../Components/Skills";
import Projects from "../Components/Projects";
import ClearOutlinedIcon from "@mui/icons-material/ClearOutlined";
import Footer from "./Footer";
const Container = styled(Box)({
  display: "flex",
  paddingTop: "1.5rem",
  width: "100%",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "2rem",
});
const Img = styled(Box)({
  "& > img": {
    boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;",
    width: "3.2rem",
    "@media (min-width:1200px)": {
      width: "4.2rem",
    },
  },
});
const Btn = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // backgroundColor: '#f6f6f6',
  height: 60,
  borderRadius: 30,
  // backgroundColor: '#9082dd',
  backgroundColor: "#d969d9",
  width: 185,
  cursor: "pointer",
  boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;",
  gap: 20,
  "@media (min-width:1200px)": {
    width: 225,
    height: 70,
  },

  "& > div": {
    "& > p": {
      color: "white",
    },
  },
});
const NavItem = styled(Box)({
  display: "flex",
  flexDirection: "column",
  marginLeft: 50,
  gap: 15,
  "& > button": {
    color: "#87CEEB",
    fontSize: 22,
    transition: "0.3s",
  },
});

const Navbar = () => {
  const about = useRef(null);
  const skills = useRef(null);
  const project = useRef(null);
  const [open, setOpen] = useState(false);
  const [clicked1, setClicked1] = useState(true);
  const [clicked2, setClicked2] = useState(false);
  const handleClick1 = () => {
    console.log("hello first");
    setClicked1(true);
    setClicked2(false);
  };
  const handleClick2 = () => {
    console.log("hello sec");
    setClicked2(true);
    setClicked1(false);
  };
  const handleAbout = () => {
    setOpen(false);
    about.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleSkills = () => {
    setOpen(false);
    skills.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleProject = () => {
    setOpen(false);
    project.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleConnect = () => {
    setOpen(false);
    setClicked2(true);
    setClicked1(false);
  };
  return (
    <Fragment>
      <Container>
        <Img>
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Favatar-icon-png-3.png&f=1&nofb=1&ipt=c8a6e8ad85f4f3e8d049d1dddbd5fb259bfac2dfbdf4cd3c598f264f26800278&ipo=images"
            alt=""
          />
        </Img>
        <Btn>
          <ButtonBase
            onClick={handleClick1}
            style={
              clicked1 === true
                ? {
                    background: "linear-gradient(to right, #87CEEB, #5E9FFF)",
                    height: "48px",
                    display: "flex",
                    borderRadius: "30px",
                    backgroundAttachment: "scroll",
                    transition:
                      "background 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "78px",
                    fontWeight: 700,
                    color: "white",
                  }
                : {}
            }
          >
            <Typography>Work</Typography>
          </ButtonBase>
          <ButtonBase
            onClick={handleClick2}
            style={
              clicked2 === true
                ? {
                    background: "linear-gradient(to right, #87CEEB, #5E9FFF)",
                    height: "48px",
                    backgroundAttachment: "scroll",
                    display: "flex",
                    borderRadius: "30px",
                    justifyContent: "center",
                    transition:
                      "background 0.5s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                    fontWeight: 700,
                    color: "white",
                    alignItems: "center",
                    width: "96px",
                  }
                : {}
            }
          >
            <Typography>Connect</Typography>
          </ButtonBase>
        </Btn>
        <Box
          style={
            clicked2 === true
              ? { display: "none" }
              : {
                  width: "3rem",
                  backgroundColor: "#d969d9",
                  height: "3rem",
                  display: "flex",
                  borderRadius: "50%",
                  boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
                  alignItems: "center",
                  justifyContent: "center",
                  '@media(min-width: 1200px)':{
                    display:'none',
                
                },
                }
          }
        >
          <ButtonBase>
            <RxHamburgerMenu onClick={() => setOpen(true)} />
          </ButtonBase>
          <Drawer
            open={open}
            anchor="right"
            hideBackdrop={true}
            variant="persistent"
            sx={{
              "& .MuiDrawer-paper": {
                zIndex: 99999999999999,
                width: "100%",
                backgroundColor: "rgb(0, 0, 0, 0.9)",
                display: "flex",
                gap: 10,
                padding: "35px 35px",
              },
            }}
          >
            <Box style={{ alignSelf: "flex-end" }}>
              <ClearOutlinedIcon
                onClick={() => setOpen(false)}
                style={{ color: "#87CEEB", fontWeight: 700, fontSize: "25px" }}
              />
            </Box>
            <NavItem>
              <Button onClick={() => setOpen(false)}>Home</Button>
              <Button onClick={handleAbout}>About</Button>
              <Button onClick={handleProject}>Projects</Button>
              <Button onClick={handleSkills}>Skills</Button>
              <Button onClick={handleConnect}>Connect</Button>
            </NavItem>
          </Drawer>
        </Box>
      </Container>
      {clicked1 && (
        <>
          <Intro />
          <About about={about} />
          <Skills skills={skills} />
          <Projects project={project} />
          <Footer />
        </>
      )}
      {clicked2 && <Form />}
    </Fragment>
  );
};

export default Navbar;
