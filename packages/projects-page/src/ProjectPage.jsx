import React from "react";
import { DependenciesContext } from "dependenciescontext";
import { Container, Grid, Box, Typography, Icon, Avatar } from "@mui/material";
import { TerminalOutlined } from "@mui/icons-material";

/**
 *
 * Project Page Component with sub Project Boxes
 * @return {object} JSX
 */
export const ProjectPage = () => {
  const ProjectBox = ({ project, label }) => {
    return (
      <Grid item xs={6} style={{ textAlign: "center" }}>
        <Box
          aria-label={label}
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
              {project["Name"]}
            </Typography>
            <Avatar variant="circle" sx={{ mt: 2, mb: 2 }}>
              <Icon>
                <TerminalOutlined />
              </Icon>
            </Avatar>
            <Typography variant="body2" sx={{ p: 1, color: "#EEEEEE" }}>
              {project["Descriptions"]}
            </Typography>
          </Container>
        </Box>
      </Grid>
    );
  };

  return (
    <DependenciesContext.Consumer>
      {({ projects }) => (
        <Container sx={{ mt: 2, mb: 2 }}>
          <Box
            aria-label="Projects"
            id="Projects"
            sx={{ backgroundColor: "#5A5A5A", borderRadius: "12px", p: 1 }}
          >
            <Container sx={{ p: 1 }}>
              <Typography variant="h5" sx={{ pb: 1, color: "#EEEEEE" }}>
                Projects
              </Typography>
              <Grid container spacing={1.5}>
                {projects.map((project, index) => (
                  <ProjectBox
                    project={project}
                    label={`project${index}`}
                    key={`project${index}`}
                  />
                ))}
              </Grid>
            </Container>
          </Box>
        </Container>
      )}
    </DependenciesContext.Consumer>
  );
};
