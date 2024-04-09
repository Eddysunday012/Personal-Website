import React from "react";
import ReactDOM from "react-dom/client";
import { DependenciesContext } from "dependenciescontext";
import { ResumeModal } from "menu";
import Resume from "../assets/Resume_Ethan_Domingo.pdf";

const resumeOpen = true;
const handleResumeClose = () => {
  console.log("You can't close me ;)");
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DependenciesContext.Provider
      value={{ Resume, resumeOpen, handleResumeClose }}
    >
      <ResumeModal />
    </DependenciesContext.Provider>
  </React.StrictMode>
);
