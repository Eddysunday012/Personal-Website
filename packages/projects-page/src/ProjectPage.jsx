import React from "react";
import { DependenciesContext } from "dependenciescontext";
import {
  Container,
  Grid,
  Box,
  Typography,
  Icon,
  Avatar,
  Button,
} from "@mui/material";
import { TerminalOutlined } from "@mui/icons-material";

/**
 *
 * Project Page Component with sub Project Boxes
 * @return {object} JSX
 */
export const ProjectPage = () => {
  const ProjectBox = ({ project, label }) => {
    return (
      <Grid item md={6} xs={12} style={{ textAlign: "center" }}>
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
            sx={{ p: 1 }}
          >
            <Typography variant="body1" sx={{ p: 1, color: "#EEEEEE" }}>
              {project["Name"]}
            </Typography>
            <Avatar
              variant="circle"
              sx={{ m: 1, p: 0.2, backgroundColor: "#333333" }}
            >
              <Icon>
                <TerminalOutlined />
              </Icon>
            </Avatar>
            <Typography variant="body2" sx={{ m: 1, color: "#EEEEEE" }}>
              {project["Descriptions"]}
            </Typography>
            <Button
              variant="contained"
              href={project["Link"]}
              sx={{ mt: 1, mb: 2 }}
            >
              Check it out here
            </Button>
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
              <Typography
                variant="h5"
                sx={{ pb: 1, color: "#EEEEEE", textAlign: "center" }}
              >
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 8,
                marginBottom: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{ textAlign: "center", color: "#EEEEEE" }}
              >
                And more to come!
              </Typography>
            </div>
          </Box>
        </Container>
      )}
    </DependenciesContext.Consumer>
  );
};
