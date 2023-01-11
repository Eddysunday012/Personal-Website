import React from "react";
import ReactDOM from "react-dom/client";
import { NavbarModal } from "menu";
import { DependenciesContext } from "dependenciescontext";

const pageList = ["About", "Skills", "Projects", "Contact"];
const toggleDrawer = true;
const setToggleDrawer = () => {};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DependenciesContext.Provider
      value={{ pageList, toggleDrawer, setToggleDrawer }}
    >
      <NavbarModal />
    </DependenciesContext.Provider>
  </React.StrictMode>
);
