import React, { useRef, useEffect } from "react";
import "./Experience.scss";
import { Typography } from "@mui/material";
import ExperienceOneImg from "../assets/images/ExperienceOneImg.svg";
import ExperienceTwoImg from "../assets/images/ExperienceTwoImg.svg";
import ExperienceThreeImg from "../assets/images/ExperienceThreeImg.svg";
import { motion } from "framer-motion";
import { experienceContainerAnimation, experienceItemAnimation } from "../styles/animation";
import { useInView, useAnimate } from "framer-motion";

const experienceData = [
  {
    img: ExperienceOneImg,
    time: "2019 / 06 - present",
    place: "@NCU MIS",
    title: "資管系在學生",
    description:
      "修習網頁程式設計、資料庫管理、系統分析與設計、演算法等必修課程。並選修人工智慧與機器學習、資料探勘、物聯網實務應用。於畢業專題擔任領導者。",
  },
  {
    img: ExperienceTwoImg,
    time: "2021/ 03 - present",
    place: "@NCU CC",
    title: "UIUX 設計、前端開發工讀生",
    description: "於中央大學職涯中心擔任專案工讀生，從學生角度提供「學生軟實力系統」UIUX設計建議，並負責「就業力數據庫系統」網頁設計與前端開發。",
  },
  {
    img: ExperienceThreeImg,
    time: "2019 / 06 - present",
    place: "@NCU ",
    title: "各項校園活動參與者",
    description: `中央游泳隊: 隊員
  雄友返鄉服務隊: 活動組組長
  中央吉他: 設計組組員
  中央資管宿營: 廣宣部部員`,
  },
];

const cardStyles = ["green", "yellow", "orange"];

function Experience() {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: false });
  useEffect(() => {
    if (isInView) {
      animate(scope.current, { opacity: 1 }, { duration: 1.5 });
    }
  }, [isInView]);

  const title = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="experience" ref={scope}>
      <Typography className="experience__title" variant="h5">
        02. Experience
      </Typography>
      <motion.div className="experience__cards" variants={experienceContainerAnimation} initial="hidden" animate={isInView ? "visible" : "hidden"}>
        {experienceData.map((data, index) => {
          return (
            <motion.div className="experience__card" key={index} variants={experienceItemAnimation}>
              <img className="experience__card__image" src={data.img} alt="Experience" />
              <div className="experience__card__align-box--2">
                <div className="experience__card__time">{data.time}</div>
                <div className="experience__card__align-box--3">
                  <div className={"experience__card__place--" + cardStyles[index]}>{data.place}</div>
                  <div className="experience__card__title">{data.title}</div>
                </div>
                <div className="experience__card__description">{data.description}</div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

export default Experience;
