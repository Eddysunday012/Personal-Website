import React from "react";
import { DependenciesContext } from "dependenciescontext";
import { Grid, Box, Container, Typography } from "@mui/material";

export const ExperiencePage = () => {
  const ExperienceBox = ({ exp }) => {
    return (
      <Grid item xs={8} md={4} style={{ textAlign: "center" }} sx={{ m: 2 }}>
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
            <Typography variant="body1" sx={{ p: 1, color: "#EEEEEE" }}>
              {exp.name}
            </Typography>
            <Typography
              variant="body2"
              style={{ textAlign: "left", color: "#EEEEEE" }}
              sx={{ pb: 1 }}
            >
              {exp.description}
            </Typography>
            <Container>
              <Typography
                sx={{
                  wordBreak: "break-word",
                  pb: 1,
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
            <Typography
              variant="h5"
              sx={{ pb: 1, textAlign: "center", color: "#EEEEEE" }}
            >
              Experience
            </Typography>
            <Grid container spacing={3} justifyContent="center">
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
