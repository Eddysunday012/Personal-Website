import React from "react";
import ReactDOM from "react-dom/client";
import { NavbarModal } from "menu";
import { DependenciesContext } from "dependenciescontext";

const pageList = ["About", "Skills", "Projects", "Contact"];

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DependenciesContext.Provider value={{ pageList }}>
      <NavbarModal />
    </DependenciesContext.Provider>
  </React.StrictMode>
);
