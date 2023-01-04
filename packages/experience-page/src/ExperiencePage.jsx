import React from "react";
import { DependenciesContext } from "dependenciescontext";
import { Grid, Box, Container } from "@mui/material";

export const ExperiencePage = () => {
  return (
    <DependenciesContext.Consumer>
      {({ experience, Skills }) => (
        <Container sx={{ mt: 1, mb: 2 }}>
          <Box aria-label="Experience"></Box>
        </Container>
      )}
    </DependenciesContext.Consumer>
  );
};
