import React from "react";
import "./Home.scss";
import { createTheme, ThemeProvider, Typography, Button, Avatar, Divider } from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import BgImg from "../assets/images/BgImg.png";
import EmailIcon from "@mui/icons-material/Email";
import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { homeWelcomeAnimation } from "../styles/animation";
import { useInView, useAnimate } from "framer-motion";
import { useScroll, useTransform } from "framer-motion";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Mono", "Noto Sans Traditional Chinese"].join(","),
  },
});

const handleResumeClick = () => {
  window.open("https://drive.google.com/file/d/1kif-747H1wz_OQZzfJE8WD8sk0batXo6/view?usp=sharing", "_blank");
};

const handleEmailClick = () => {
  const email = "sandy900825@gmail.com";
  window.location.href = `mailto:${email}`;
};

function Home() {
  const pageRef = useRef(null);
  const isInView = useInView(pageRef, { once: false });
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, -200]);

  return (
    <div className="home" ref={pageRef}>
      <ThemeProvider theme={theme}>
        <motion.div className="home__welcome" variants={homeWelcomeAnimation} animate={isInView ? "visible" : "hidden"}>
          <Typography variant="h5" className="home__welcome-text" gutterBottom>
            Welcome to <br />
            Bodin's Playground
          </Typography>
          <Button className="home__button" startIcon={<FeedIcon />} onClick={handleResumeClick}>
            <span>Resume</span>
          </Button>
          <Button className="home__button" startIcon={<EmailIcon />} onClick={handleEmailClick}>
            <span>Contact me</span>
          </Button>
        </motion.div>
      </ThemeProvider>
      <motion.img className="home__img__bg" src={BgImg} style={{ y }}></motion.img>
    </div>
  );
}

export default Home;
