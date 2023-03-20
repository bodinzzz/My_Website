import { Typography, Modal, Box, Button } from "@mui/material";
import React from "react";
import "./Project.scss";
import ProjectOneImg from "../assets/images/ProjectOneImg.png";
import ProjectTwoImg from "../assets/images/ProjectTwoImg.png";
import ProjectThreeImg from "../assets/images/ProjectThreeImg.png";
import { useEffect, useRef, useState } from "react";
import KeyboardDoubleArrowRightOutlinedIcon from "@mui/icons-material/KeyboardDoubleArrowRightOutlined";

const projectData = [
  {
    image: ProjectOneImg,
    type: "工讀專案",
    title: "就業力數據庫系統 ",
    role: "網頁設計、前端開發",
    intro:
      "這是以畢業生流向為主題的資訊圖表設計專案，我們從畢業流向調查問卷結果蒐集對學生具有價值的資訊，分類成三大主題，著重在資訊圖表的呈現方式與互動感，希望能夠幫助畢業生更好地了解就業市場的現況和趨勢，從中做出更好的職業規劃和進修選擇。",
    tools: ["React", "JavaScript(ES6+)", "SASS / SCSS"],
  },
  {
    image: ProjectThreeImg,
    type: "課堂專案",
    title: "復活Pro 線上校園二手交易系統",
    role: "撰寫系統分析文件、網頁設計與全端開發",
    intro:
      "在校園裡買賣二手商品是很普遍的事情，但訊息分散在各個社交媒體平台，讓賣家需要不斷回覆私訊，買家也往往需要花費大量時間搜尋商品。為了解決這些問題，我們開發了一個全新的二手商品交易平台，新增商品篩選功能，並提供訂單管理與進度追蹤機制，讓交易流程更加有效率並提高透明度。",
    tools: ["Java", "JavaScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    image: ProjectTwoImg,
    type: "畢業專題",
    title: "Recipeer 智慧型語音互動食譜App",
    role: "手機App界面與系統流程設計",
    intro:
      "疫情使自煮人數增加，進而使食譜需求提升，然而當我們在進行料理時卻需要反覆翻閱食譜，不僅讓料理效率降低，也會有安全上的疑慮。因此，我們開發了一個能夠提供語音互動功能的食譜服務，提高料理效率，並且更加安全。",
    tools: ["React Native", "Firebase", "Google Assistant"],
  },
];

function Project() {
  const [imageHeight, setImageHeight] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const [width, setWidth] = useState(window.innerWidth);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(() => {
    if (imageRef.current) {
      setImageHeight(imageRef.current.clientHeight);
    }
  }, [width]);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="project">
      <Typography className="project__title" variant="h5">
        03. Project
      </Typography>
      <div className="project__content">
        {projectData.map((data, index) => {
          return (
            <div className="project__container" style={{ minHeight: imageHeight }} key={index}>
              <img className={index % 2 === 0 ? "project__image--left" : "project__image--right"} src={data.image} alt="ProjectImg" ref={imageRef} />
              <div className="project__item">
                <div className="project__card" style={index % 2 === 0 ? { alignSelf: "flex-end" } : { alignSelf: "flex-start" }} key={index}>
                  <Button className="project__card__button" onClick={handleOpen} endIcon={<KeyboardDoubleArrowRightOutlinedIcon />}>
                    More
                  </Button>
                  <div className="project__card__type">{data.type}</div>
                  <div className="project__card__title">{data.title}</div>
                  <div className="project__card__role">{data.role}</div>
                  <div className="project__card__intro">{data.intro}</div>
                </div>
                <div className="project__card__tools" style={index % 2 === 0 ? { justifyContent: "flex-end" } : { justifyContent: "flex-start" }}>
                  {data.tools.map((tool, index) => {
                    return <div key={index}>{tool}</div>;
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <Modal
        className="project__modal"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="project__modal__container">
          <div className="project__modal__content">
            <div className="project__modal__content__title">{projectData[0].title}</div>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default Project;
