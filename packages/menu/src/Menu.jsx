import React from "react";
import {
  AppBar,
  Grid,
  Typography,
  Button,
  ThemeProvider,
  createTheme,
  IconButton,
  Box,
  Chip,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export const Menu = () => {
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
        main: "#255F85",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <header>
        <AppBar sx={{ minHeight: 70 }} aria-label="Navbar" className="Navbar">
          <Grid
            container
            alignContent="center"
            justifyContent="left"
            spacing={1}
            sx={{
              margin: "auto",
            }}
          >
            <Grid
              item
              style={{ textAlign: "right" }}
              sx={{ m: 0.5, display: { xs: "none", sm: "none", md: "flex" } }}
              xs={1}
            >
              <Button variant="text">
                <Typography align="center">About</Typography>
              </Button>
            </Grid>
            <Grid
              item
              style={{ textAlign: "right" }}
              sx={{ m: 0.5, display: { xs: "none", sm: "none", md: "flex" } }}
              xs={1}
            >
              <Button variant="text">
                <Typography align="center">Skills</Typography>
              </Button>
            </Grid>
            <Grid
              item
              style={{ textAlign: "right" }}
              sx={{ m: 0.5, display: { xs: "none", sm: "none", md: "flex" } }}
              xs={1}
            >
              <Button variant="text">
                <Typography align="center">Projects</Typography>
              </Button>
            </Grid>
            <Grid
              item
              style={{ textAlign: "right" }}
              sx={{ m: 0.5, display: { xs: "none", sm: "none", md: "flex" } }}
              xs={1}
            >
              <Button variant="text">
                <Typography align="center">Contact</Typography>
              </Button>
            </Grid>
            <Grid item sx={{ display: { xs: 1, sm: 1, md: "none" } }}>
              <Box sx={{ m: 1 }}>
                <IconButton sx={{ margin: "auto" }}>
                  <MenuIcon sx={{ fontSize: 25, color: "white" }} />
                </IconButton>
              </Box>
            </Grid>
            <Grid item xs={3} md={3} sx={{ m: 1 }}>
              <Chip label="Resume" />
            </Grid>
          </Grid>
        </AppBar>
      </header>
    </ThemeProvider>
  );
};
