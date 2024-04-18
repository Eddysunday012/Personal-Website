import React from "react";
import { DependenciesContext } from "dependenciescontext";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Box,
  ThemeProvider,
  createTheme,
  Button,
  Chip,
  Container,
} from "@mui/material";

export const NavbarModal = () => {
  const theme = createTheme({
    typography: {
      button: {
        textTransform: "none",
      },
      allVariants: {
        color: "white",
        fontFamily: "Roboto",
        fontSize: 20,
      },
    },
    palette: {
      primary: {
        main: "#2f4f4f",
      },
    },
  });

  return (
    <DependenciesContext.Consumer>
      {({ pageList, toggleDrawer, closeToggleDrawer, handleResume }) => (
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
            <ThemeProvider theme={theme}>
              <Container
                sx={{
                  mt: 1,
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Button
                  onClick={() => {
                    closeToggleDrawer();
                    handleResume();
                  }}
                >
                  <Chip
                    sx={{
                      mt: 1,
                      px: 1,
                      backgroundColor: "white",
                      color: "black",
                    }}
                    label="Resume"
                    color="primary"
                  />
                </Button>
              </Container>
            </ThemeProvider>
          </Box>
        </Drawer>
      )}
    </DependenciesContext.Consumer>
  );
};
