import React, { useEffect } from "react";
import { Navbar } from "menu";
import { NavbarModal } from "menu";
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

const pageList = ["About", "Skills", "Projects", "Contact"];

const scrollFn = (pageName) => {
  const navbarHeight = document.getElementById("Navbar").offsetHeight + 10;
  console.log(navbarHeight);
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
      }}
    >
      <Navbar />
      <NavbarModal />
      <IntroPage />
      <AboutPage />
      <ExperiencePage />
      <SkillsPage />
      <ProjectPage />
      <Footer />
    </DependenciesContext.Provider>
  );
}

export default App;
