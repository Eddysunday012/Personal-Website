import React from "react";
import { DependenciesContext } from "dependenciescontext";
import { Typography, Grid, Box, Fade, Container } from "@mui/material";

export const IntroPage = () => {
  const ImageMyStyle = {
    maxWidth: "230px",
    maxHeight: "230px",
    flex: 1,
    resizeMode: "contain",
  };

  const [fadeIn, setFadeIn] = React.useState(false);

  React.useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <DependenciesContext.Consumer>
      {({ Profile }) => (
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            backgroundColor: "white",
            alignItems: "center",
          }}
        >
          <Container>
            <Fade in={fadeIn} timeout={2000}>
              <Grid container spacing={4} justifyContent="center">
                <Grid
                  item
                  xs={12}
                  sm={4}
                  style={{
                    justifyContent: "center",
                    resizeMode: "contain",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img style={ImageMyStyle} src={Profile} alt="ProfilePic" />
                </Grid>
                <Grid
                  item
                  flexGrow={1}
                  xs={12}
                  sm={6}
                  style={{
                    justifyContent: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Typography align="center" variant="h5" width="100%">
                    Hello there! My name is Ethan Domingo
                  </Typography>
                  <Typography align="center" variant="body1" width="100%">
                    I'm a software engineer based in Santa Cruz, CA. Scroll down
                    to learn more about me!
                  </Typography>
                </Grid>
              </Grid>
            </Fade>
          </Container>
        </Box>
      )}
    </DependenciesContext.Consumer>
  );
};
