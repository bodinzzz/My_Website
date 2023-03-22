import React, { useRef } from "react";
import "./AboutMe.scss";
import { createTheme, ThemeProvider, Typography, Button, Card, Avatar, Divider, Box, IconButton } from "@mui/material";
import BoboFrog from "../assets/images/BoboFrog.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import { motion } from "framer-motion";
import { aboutMeAnimation } from "../styles/animation";
import { useInView, useAnimate } from "framer-motion";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Mono", "Noto Serif Traditional Chinese"].join(","),
  },
});

const intro = `我是名容，就讀於中央大學資訊管理學系四年級，參與過各項前端開發及 UIUX 設計專案，包括中央大學職涯中心就業力數據系統和超商 App Redesign。我也自學 UIUX 設計、音樂及繪畫創作，喜歡用創作解決生活上的問題並記錄生活。

我期望自己能夠利用程式與設計能力，開發出能夠改善生活、解決社會問題的軟體服務。`;

const handleClick = (linkUrl: string) => {
  window.open(linkUrl, "_blank");
};

const handleEmailClick = () => {
  const email = "sandy900825@gmail.com";
  window.location.href = `mailto:${email}`;
};

const IntroCard = () => {
  return (
    <Card className="about-me__card">
      <Avatar className="about-me__card__avatar" src={BoboFrog} sx={{ height: 100, width: 100 }} />
      <Typography className="about-me__card__name">Bodin</Typography>
      <div style={{ display: "flex" }}>
        <IconButton onClick={() => handleClick("https://www.linkedin.com/in/%E5%90%8D%E5%AE%B9-%E8%95%AD-a14358207/")}>
          <LinkedInIcon />
        </IconButton>
        <IconButton onClick={() => handleClick("https://github.com/bodinzzz")}>
          <GitHubIcon />
        </IconButton>
        <IconButton onClick={handleEmailClick}>
          <EmailIcon />
        </IconButton>
      </div>
      <div className="about-me__card__content">初心是我一貫的學習心態</div>
      <div className="about-me__card__content">從生活中創作是我的熱情</div>
      <div className="about-me__card__content">成為軟體工程師是我的目標</div>
    </Card>
  );
};

function AboutMe() {
  const pageRef = useRef(null);
  const isInView = useInView(pageRef, { once: false });
  return (
    <motion.div ref={pageRef}>
      <ThemeProvider theme={theme}>
        <Typography className="about-me__title" variant="h5">
          01. About
        </Typography>
        <motion.div animate={isInView ? "visible" : "hidden"} variants={aboutMeAnimation}>
          <div className="about-me__content">
            <IntroCard />
            <Typography className="about-me__intro" style={{ whiteSpace: "pre-line" }}>
              {intro}
            </Typography>
          </div>
        </motion.div>
      </ThemeProvider>
    </motion.div>
  );
}

export default AboutMe;
