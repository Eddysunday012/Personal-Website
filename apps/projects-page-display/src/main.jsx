import React from "react";
import ReactDOM from "react-dom/client";
import { DependenciesContext } from "dependenciescontext";
import { ProjectPage } from "projects-page";
import projects from "./data/projects.json";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DependenciesContext.Provider value={{ projects }}>
      <ProjectPage />
    </DependenciesContext.Provider>
  </React.StrictMode>
);
