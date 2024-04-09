import React, { useEffect } from "react";
import "./scrollbar.css";
import { Navbar } from "menu";
import { NavbarModal } from "menu";
import { ResumeModal } from "menu";
import { DependenciesContext } from "dependenciescontext";
import { IntroPage } from "intro-page";
import { AboutPage } from "about-page";
import { ProjectPage } from "projects-page";
import { SkillsPage } from "skills-page";
import { Footer } from "footer";
import { ExperiencePage } from "experience-page";
import Profile from "./assets/Profile.png";
import projects from "./data/projects.json";
import { Skills } from "./data/Skills";
import { experience } from "./data/experience";
import { Container } from "@mui/material";
import { Modal, Box, Typography } from "@mui/material";
import Resume from "./assets/Resume_Ethan_Domingo.pdf";

const pageList = ["About", "Skills", "Projects", "Contact"];
const OFFSET = 10;

const scrollFn = (pageName) => {
  const navbarHeight = document.getElementById("Navbar").offsetHeight + OFFSET;
  const page = document.getElementById(pageName);
  if (page) {
    page.scrollIntoView();
    window.scrollBy(0, -navbarHeight);
  }
};

function App() {
  const [toggleDrawer, setDrawer] = React.useState(false);

  const setToggleDrawer = () => {
    setDrawer(true);
  };

  const closeToggleDrawer = (pageName) => {
    if (pageName) {
      scrollFn(pageName);
    }
    setDrawer(false);
  };

  const [resumeOpen, setResumeOpen] = React.useState(false);

  const handleResume = () => {
    setResumeOpen(true);
  };

  const handleResumeClose = () => {
    setResumeOpen(false);
  };

  return (
    <DependenciesContext.Provider
      value={{
        Profile,
        projects,
        Skills,
        experience,
        scrollFn,
        toggleDrawer,
        setToggleDrawer,
        pageList,
        closeToggleDrawer,
        Resume,
        resumeOpen,
        handleResume,
        handleResumeClose,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#333333",
          minHeight: "100vh", // Ensure the background color covers the full viewport height
          display: "flex",
          flexDirection: "column", // Align children vertically
          overflowX: "hidden",
          margin: -1,
        }}
      >
        <ResumeModal />
        <Navbar />
        <NavbarModal />
        <Container maxWidth={false} sx={{ flex: "1 0 auto" }}>
          <IntroPage />
          <AboutPage />
          <ExperiencePage />
          <SkillsPage />
          <ProjectPage />
        </Container>
        <Footer />
      </Box>
    </DependenciesContext.Provider>
  );
}

export default App;
