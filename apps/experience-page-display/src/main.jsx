import React from "react";
import ReactDOM from "react-dom/client";
import { DependenciesContext } from "dependenciescontext";
import { ExperiencePage } from "experience-page";
import { Skills } from "./data/Skills";
import { experience } from "./data/experience";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DependenciesContext.Provider value={{ Skills, experience }}>
      <ExperiencePage />
    </DependenciesContext.Provider>
  </React.StrictMode>
);
