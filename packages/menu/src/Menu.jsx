import React from "react";
import { DependenciesContext } from "dependenciescontext";
import {
  AppBar,
  Typography,
  Button,
  ThemeProvider,
  createTheme,
  IconButton,
  Box,
  Chip,
  Toolbar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const pages = ["About", "Skills", "Projects", "Contact"];

export const Navbar = () => {
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
      {({ scrollFn, setToggleDrawer, handleResume }) => (
        <ThemeProvider theme={theme}>
          <header>
            <AppBar
              sx={{ minHeight: 70, maxHeight: 70 }}
              aria-label="Navbar"
              id="Navbar"
              className="Navbar"
            >
              <Toolbar disableGutters>
                <Box
                  sx={{
                    my: "auto",
                    mx: 4,
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <IconButton
                    size="large"
                    aria-label="toggle-drawer"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                    onClick={setToggleDrawer}
                  >
                    <MenuIcon />
                  </IconButton>
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                  {pages.map((page) => (
                    <Button
                      key={page}
                      sx={{ m: 2, color: "white", display: "block" }}
                      id={page + "Button"}
                      onClick={() => scrollFn(page)}
                    >
                      <Typography>{page}</Typography>
                    </Button>
                  ))}
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                  <Button onClick={handleResume}>
                    <Chip
                      sx={{ px: 1, mr: 4 }}
                      label="Resume"
                      color="primary"
                    />
                  </Button>
                </Box>
              </Toolbar>
            </AppBar>
          </header>
        </ThemeProvider>
      )}
    </DependenciesContext.Consumer>
  );
};
