import React from "react";
import { DependenciesContext } from "dependenciescontext";
import {
  Typography,
  Grid,
  Box,
  Container,
  LinearProgress,
  Chip,
} from "@mui/material";

const SkillSection = ({ Skill }) => {
  return (
    <Container sx={{ m: 1 }}>
      <Typography variant="body1" sx={{ p: 1, color: "#EEEEEE" }}>
        {Skill.Name}
      </Typography>
      <LinearProgress
        variant="determinate"
        value={Skill.Percentage}
        sx={{
          m: 1,
          p: 0.1,
          backgroundColor: "#b0d9d9",
          "& .MuiLinearProgress-barColorPrimary": {
            backgroundColor: "#314f4f", // Customize the color of the completed portion
          },
        }}
      />
      <Chip
        label={Skill.Type}
        sx={{
          mt: 2,
          backgroundColor: "#325454",
          color: "#EEEEEE",
        }}
        size="small"
      />
    </Container>
  );
};

/**
 * Creates the Skills Page object
 * @return {object} JSX
 */
export const SkillsPage = () => {
  return (
    <DependenciesContext.Consumer>
      {({ Skills }) => (
        <Container sx={{ mt: 2, mb: 2 }}>
          <Box
            aria-label="Skills"
            id="Skills"
            sx={{ backgroundColor: "#5A5A5A", borderRadius: "12px", p: 1 }}
          >
            <Container sx={{ p: 1 }}>
              <Typography
                variant="h5"
                sx={{ pb: 1, color: "#EEEEEE" }}
                align="center"
              >
                Skills
              </Typography>
              <Grid container>
                {Skills.map((Skill, index) => (
                  <Grid item key={`Skill${index}`} xs={6}>
                    <SkillSection Skill={Skill} />
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </Container>
      )}
    </DependenciesContext.Consumer>
  );
};
