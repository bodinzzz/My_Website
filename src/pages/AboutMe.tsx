import React from "react";
import "./AboutMe.scss";
import { createTheme, ThemeProvider, Typography, Button, Card, Avatar, Divider, Box } from "@mui/material";
import BoboFrog from "../assets/images/BoboFrog.png";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Mono", "Noto Serif Traditional Chinese"].join(","),
  },
});

const intro = `我是波丁，就讀於中央大學資訊管理學系四年級，參與過各項前端開發及 UIUX 設計專案，包括中央大學職涯中心就業力數據系統和超商 App Redesign。我也自學 UIUX 設計、音樂及繪畫創作，喜歡用創作解決生活上的問題並記錄生活。

我期望自己能夠利用程式與設計能力，開發出能夠改善生活、解決社會問題的軟體服務。`;

const IntroCard = () => {
  return (
    <Card className="about-me__card">
      <Avatar className="about-me__card__avatar" src={BoboFrog} sx={{ height: 100, width: 100 }} />
      <Typography className="about-me__card__name">Bodin</Typography>
      <Divider />
      <Typography className="about-me__card__content">初心是我一貫的學習心態</Typography>
      <Typography className="about-me__card__content">從生活中創作是我的熱情</Typography>
      <Typography className="about-me__card__content">成為軟體工程師是我的目標</Typography>
    </Card>
  );
};

function AboutMe() {
  return (
    <ThemeProvider theme={theme}>
      <Typography className="about-me__title" variant="h5">
        01. About
      </Typography>
      <div className="about-me__content">
        <IntroCard />
        <Typography className="about-me__intro" style={{ whiteSpace: "pre-line" }}>
          {intro}
        </Typography>
      </div>
    </ThemeProvider>
  );
}

export default AboutMe;
