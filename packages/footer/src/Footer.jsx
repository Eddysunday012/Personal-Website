import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Box,
  Icon,
  IconButton,
  Grid,
} from "@mui/material";
import { DependenciesContext } from "dependenciescontext";
import { LinkedIn, GitHub, Mail } from "@mui/icons-material";

export const Footer = () => {
  return (
    <DependenciesContext.Consumer>
      {() => (
        <footer style={{ position: "sticky", bottom: 0, margin: 0 }}>
          <AppBar
            position="sticky"
            sx={{
              bottom: 0,
              mt: 3,
              scrollbarGutter: "unset",
              margin: 0,
              padding: 0,
            }}
          >
            <Box
              sx={{ p: 3, backgroundColor: "#4b6666" }}
              maxWidth
              justifyContent={"center"}
            >
              <Typography textAlign="center">
                Copyright © Ethan Domingo
              </Typography>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justifyContent={["center"]}
              >
                <Grid item>
                  <IconButton href="https://www.linkedin.com/in/ethan-domingo-5a84b5196/">
                    <LinkedIn sx={{ color: "white" }} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton href="https://github.com/Eddysunday012">
                    <GitHub sx={{ color: "white" }} />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <Mail sx={{ color: "white" }} />
                  </IconButton>
                </Grid>
              </Grid>
            </Box>
          </AppBar>
        </footer>
      )}
    </DependenciesContext.Consumer>
  );
};
