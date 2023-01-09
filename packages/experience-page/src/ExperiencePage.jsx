import React from "react";
import { DependenciesContext } from "dependenciescontext";
import { Grid, Box, Container, Typography } from "@mui/material";

export const ExperiencePage = () => {
  const ExperienceBox = ({ exp }) => {
    return (
      <Grid item xs={4} style={{ textAlign: "center" }} sx={{ m: 2 }}>
        <Box
          display="flex-start"
          alignItems="stretch"
          sx={{
            backgroundColor: "#919090",
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
            <Typography variant="body1" sx={{ p: 1 }}>
              {exp.name}
            </Typography>
            <Typography
              variant="body2"
              style={{ textAlign: "left" }}
              sx={{ pb: 1 }}
            >
              {exp.description}
            </Typography>
            <Container>
              <Typography
                sx={{ wordBreak: "break-word", pb: 1 }}
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
            sx={{ backgroundColor: "#bab8b8", borderRadius: "12px", p: 1 }}
            alignContent="center"
          >
            <Typography variant="h5" sx={{ pb: 1, textAlign: "center" }}>
              Experience
            </Typography>
            <Grid container spacing={3} justifyContent="center">
              {experience.map((exp) => (
                <ExperienceBox exp={exp} key={exp.Name} />
              ))}
            </Grid>
          </Box>
        </Container>
      )}
    </DependenciesContext.Consumer>
  );
};
