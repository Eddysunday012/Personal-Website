import React from "react";
import { DependenciesContext } from "dependenciescontext";
import {
  Typography,
  Grid,
  Box,
  Fade,
  Container,
  IconButton,
} from "@mui/material";
import { LinkedIn, GitHub, Mail } from "@mui/icons-material";

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
            alignItems: "center",
          }}
        >
          <Container>
            <Fade in={fadeIn} timeout={3000}>
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
                  <Typography
                    align="center"
                    variant="h5"
                    width="100%"
                    sx={{ color: "white", margin: 0.5 }}
                  >
                    Hello there! My name is Ethan Domingo
                  </Typography>
                  <Typography
                    align="center"
                    variant="body1"
                    width="100%"
                    sx={{ color: "white", margin: 0.5 }}
                  >
                    I'm a software engineer based in Los Angeles, CA. <br />
                    Scroll down to learn more about me!
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
                </Grid>
              </Grid>
            </Fade>
          </Container>
        </Box>
      )}
    </DependenciesContext.Consumer>
  );
};
