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
        <footer>
          <AppBar position="sticky" sx={{ top: "auto", bottom: 0, mt: 3 }}>
            <Box
              sx={{ p: 3, backgroundColor: "#8ba3c4" }}
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
                  <IconButton>
                    <LinkedIn />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <GitHub />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton>
                    <Mail />
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
