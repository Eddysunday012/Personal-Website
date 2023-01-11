import React from "react";
import { DependenciesContext } from "dependenciescontext";
import {
  Grid,
  Menu,
  Toolbar,
  Modal,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";

export const NavbarModal = () => {
  const ListButton = ({ page, index }) => {
    return (
      <ListItemButton>
        <Typography>{page}</Typography>
      </ListItemButton>
    );
  };

  return (
    <DependenciesContext.Consumer>
      {({ pageList }) => (
        <Drawer open={true}>
          <List>
            {pageList.map((page, index) => (
              <ListItem key={page}>
                <ListButton page={page} index={index} />
              </ListItem>
            ))}
          </List>
        </Drawer>
      )}
    </DependenciesContext.Consumer>
  );
};
