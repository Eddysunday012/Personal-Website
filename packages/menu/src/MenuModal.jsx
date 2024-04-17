import React from "react";
import { DependenciesContext } from "dependenciescontext";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";

export const NavbarModal = () => {
  return (
    <DependenciesContext.Consumer>
      {({ pageList, toggleDrawer, closeToggleDrawer }) => (
        <Drawer
          open={toggleDrawer}
          anchor={"left"}
          onClose={() => closeToggleDrawer()}
        >
          <Box sx={{ width: 250, backgroundColor: "#5A5A5A", height: "100vh" }}>
            <List>
              {pageList.map((page) => (
                <ListItem key={page}>
                  <ListItemButton
                    onClick={() => {
                      closeToggleDrawer(page);
                    }}
                  >
                    <ListItemText sx={{ color: "#ffffff" }}>
                      {page}
                    </ListItemText>
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Box>
        </Drawer>
      )}
    </DependenciesContext.Consumer>
  );
};
