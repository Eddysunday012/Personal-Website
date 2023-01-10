import React from "react";
import { DependenciesContext } from "dependenciescontext";
import { Grid, Menu, Toolbar, Modal, Container } from "@mui/material";

export const NavbarModal = () => {
  return (
    <DependenciesContext.Consumer>
      {() => <div>Hello World</div>}
    </DependenciesContext.Consumer>
  );
};
