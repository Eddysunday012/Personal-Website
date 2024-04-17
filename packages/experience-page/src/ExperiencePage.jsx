import React from "react";
import { DependenciesContext } from "dependenciescontext";
import { Grid, Box, Container, Typography, Avatar } from "@mui/material";

export const ExperiencePage = () => {
  const ImageMyStyle = {
    maxHeight: "80px",
    flex: 1,
    resizeMode: "contain",
    margin: 20,
  };
  const ExperienceBox = ({ exp }) => {
    return (
      <Grid item xs={12} md={5.8} style={{ textAlign: "center" }} sx={{ m: 1 }}>
        <Box
          display="flex-start"
          alignItems="stretch"
          sx={{
            backgroundColor: "#314f4f",
            borderRadius: "14px",
            height: "100%",
          }}
        >
          <Container
            style={{
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <img style={ImageMyStyle} src={exp.logo.src} alt="ExpLogo" />
            <Typography
              variant="h6"
              sx={{ color: "#EEEEEE", fontWeight: "bold" }}
            >
              {exp.name}
            </Typography>
            <Typography
              variant="body2"
              sx={{ padding: 0, color: "#EEEEEE", fontWeight: "bold" }}
            >
              {exp.dates}
            </Typography>

            <Container sx={{ p: 2 }}>
              {exp.tasks.map((task) => {
                return (
                  <Typography
                    variant="body2"
                    style={{ textAlign: "left", color: "#EEEEEE" }}
                    sx={{ pb: 2 }}
                  >
                    {">"} {task}
                  </Typography>
                );
              })}
            </Container>
            <Container>
              <Typography
                sx={{
                  wordBreak: "break-word",
                  pb: 2,
                  fontWeight: "bold",
                  color: "#EEEEEE",
                }}
                align="center"
                variant="subtitle2"
              >
                {exp.skills.map((skill, index) => {
                  if (index != exp.skills.length - 1) {
                    return skill + ", ";
                  } else {
                    return skill;
                  }
                })}
              </Typography>
            </Container>
          </Container>
        </Box>
      </Grid>
    );
  };

  return (
    <DependenciesContext.Consumer>
      {({ experience, Skills }) => (
        <Container sx={{ mt: 1, mb: 2 }}>
          <Box
            aria-label="Experience"
            id="Experience"
            sx={{ backgroundColor: "#5A5A5A", borderRadius: "12px", p: 1 }}
            alignContent="center"
          >
            {/* <Typography */}
            {/*   variant="h5" */}
            {/*   sx={{ pb: 1, textAlign: "center", color: "#EEEEEE" }} */}
            {/* > */}
            {/*   Experience */}
            {/* </Typography> */}
            <Grid container justifyContent="center">
              {experience.map((exp) => (
                <ExperienceBox exp={exp} key={exp.name} />
              ))}
            </Grid>
          </Box>
        </Container>
      )}
    </DependenciesContext.Consumer>
  );
};
