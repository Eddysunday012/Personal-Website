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
  const ListButton = ({ page, setToggleDrawer }) => {
    return (
      <ListItemButton onClick={setToggleDrawer}>
        <ListItemText>{page}</ListItemText>
      </ListItemButton>
    );
  };

  return (
    <DependenciesContext.Consumer>
      {({ pageList, toggleDrawer, setToggleDrawer }) => (
        <Drawer open={toggleDrawer} anchor={"left"} onClose={setToggleDrawer}>
          <List>
            {pageList.map((page) => (
              <ListItem key={page}>
                <ListButton page={page} setToggleDrawer={setToggleDrawer} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
    </DependenciesContext.Consumer>
  );
};
