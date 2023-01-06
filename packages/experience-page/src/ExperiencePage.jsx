import React from "react";
import { DependenciesContext } from "dependenciescontext";
import { Grid, Box, Container, Typography } from "@mui/material";

export const ExperiencePage = () => {
  return (
    <DependenciesContext.Consumer>
      {({ experience, Skills }) => (
        <Container sx={{ mt: 1, mb: 2 }}>
          <Box aria-label="Experience">
            <Typography variant="h5" sx={{ pb: 1 }}>
              Experience
            </Typography>
          </Box>
        </Container>
      )}
    </DependenciesContext.Consumer>
  );
};
