import React from "react";
import "./Home.scss";
import { createTheme, ThemeProvider, Typography, Button, Avatar, Divider } from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import BgImg from "../assets/images/BgImg.png";
import EmailIcon from "@mui/icons-material/Email";
import { useRef } from "react";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Mono", "Noto Sans Traditional Chinese"].join(","),
  },
});

function Home() {
  const pageRef = useRef(null);
  return (
    <div className="home" ref={pageRef}>
      <ThemeProvider theme={theme}>
        <div className="home__welcome">
          <Typography variant="h5" className="home__welcome-text" gutterBottom>
            Welcome to <br />
            Bodin's Playground
          </Typography>
          <Button className="home__button" startIcon={<FeedIcon />}>
            <span>Resume</span>
          </Button>
          <Button className="home__button" startIcon={<EmailIcon />}>
            <span>Contact me</span>
          </Button>
        </div>
      </ThemeProvider>
      <img className="home__img__bg" src={BgImg}></img>
    </div>
  );
}

export default Home;
