import React from "react";
import { DependenciesContext } from "dependenciescontext";
import {
  Box,
  Typography,
  Container,
  Button,
  Chip,
  createTheme,
  ThemeProvider,
} from "@mui/material";

export const AboutPage = () => {
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
      {({ handleResume }) => (
        <Container sx={{ mb: 2, mt: 2 }}>
          <Box
            sx={{ backgroundColor: "#5A5A5A", borderRadius: "10px" }}
            id="About"
            aria-label="About Me"
          >
            <Container sx={{ p: 3 }}>
              <Typography variant="h5" sx={{ pt: 1, pb: 1, color: "#EEEEEE" }}>
                About Me
              </Typography>
              <Typography variant="body1" sx={{ pb: 1, color: "#EEEEEE" }}>
                Greetings and welcome to my personal page! I'm Ethan Domingo, a
                recent computer science graduate from UC Santa Cruz with a
                passion for crafting innovative solutions through code. Equipped
                with a degree in computer science and a minor in statistics, I'm
                thrilled to embark on the next chapter of my journey in the
                realm of software engineering. My main interests in Computer
                Science include Software Engineering, AI, Machine Learning, Data
                Science, Network Programming and Backend Development.
              </Typography>
              <Typography variant="body1" sx={{ pb: 1, color: "#EEEEEE" }}>
                I am actively seeking software engineering opportunities, and I
                am currently working towards a AWS Solutions Architect
                certification. Feel free to scroll down and learn more about me,
                whether it be my experiences and skillsets to even my personal
                interests and hobbies!
              </Typography>

              <ThemeProvider theme={theme}>
                <Container
                  sx={{
                    mt: 3,
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box sx={{ flexGrow: 0 }}>
                    <Button onClick={handleResume}>
                      <Chip
                        sx={{
                          px: 3,
                          backgroundColor: "white",
                          color: "black",
                          justifyContent: "center",
                        }}
                        label="Read My Full Resume Here"
                        color="primary"
                      />
                    </Button>
                  </Box>
                </Container>
              </ThemeProvider>
            </Container>
          </Box>
        </Container>
      )}
    </DependenciesContext.Consumer>
  );
};
