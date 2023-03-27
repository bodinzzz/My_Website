import React from "react";
import "./BottomBar.scss";
import { IconButton } from "@mui/material";
import FeedIcon from "@mui/icons-material/Feed";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

function BottomBar() {
  const handleClick = (linkUrl: string) => {
    window.open(linkUrl, "_blank");
  };

  const handleEmailClick = () => {
    const email = "sandy900825@gmail.com";
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="bottom-bar">
      <div className="bottom-bar__copy-right">Copyright © 2023 Bodinzzz</div>
      <div className="bottom-bar__links">
        <IconButton onClick={() => handleClick("https://drive.google.com/file/d/1ygvJH_x1eTwzSU5FGSpQZ0Du1zLkTL26/view?usp=sharing")}>
          <FeedIcon />
        </IconButton>
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
    </div>
  );
}

export default BottomBar;
