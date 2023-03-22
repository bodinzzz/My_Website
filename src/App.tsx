import React, { useRef, useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Experience from "./pages/Experience";
import Project from "./pages/Project";
import BottomBar from "./components/BottomBar";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto Mono", "Noto Sans Traditional Chinese"].join(","),
  },
});

function App() {
  const aboutMeRef = useRef<HTMLDivElement>(null);
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectRef = useRef<HTMLDivElement>(null);
  const [refs, setRefs] = useState<HTMLDivElement[]>([]);

  useEffect(() => {
    const aboutMeRefElement = aboutMeRef.current as HTMLDivElement;
    const experienceRefElement = experienceRef.current as HTMLDivElement;
    const projectRefElement = projectRef.current as HTMLDivElement;

    if (aboutMeRefElement && experienceRefElement && projectRefElement) {
      setRefs([aboutMeRefElement, experienceRefElement, projectRefElement]);
    }
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar refs={refs} />
        <Home />
        <div ref={aboutMeRef} />
        <AboutMe />
        <div ref={experienceRef} />
        <Experience />
        <div ref={projectRef} />
        <Project />
        <BottomBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
