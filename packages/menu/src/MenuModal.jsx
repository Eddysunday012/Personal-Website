import React from "react";
import { DependenciesContext } from "dependenciescontext";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

export const NavbarModal = () => {
  return (
    <DependenciesContext.Consumer>
      {({ pageList, toggleDrawer, closeToggleDrawer }) => (
        <Drawer open={toggleDrawer} anchor={"left"}>
          <List>
            {pageList.map((page) => (
              <ListItem key={page}>
                <ListItemButton onClick={closeToggleDrawer}>
                  <ListItemText>{page}</ListItemText>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
    </DependenciesContext.Consumer>
  );
};
