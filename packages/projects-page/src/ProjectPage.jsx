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
  Paper,
  Link,
} from "@mui/material";
import { githubClient } from "github-api-functions";
import { TerminalOutlined } from "@mui/icons-material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { GoGitCommit } from "react-icons/go";
import { RiGitRepositoryLine } from "react-icons/ri";

/**
 *
 * Project Page Component with sub Project Boxes
 * @return {object} JSX
 */
export const ProjectPage = () => {
  const [projects, setProjects] = React.useState([]);

  const handleClick = (link) => {
    window.open(link);
  };

  React.useEffect(() => {
    const getUserData = async () => {
      const GHClient = new githubClient();
      const vals = await GHClient.getUserRepos("eddysunday012");
      console.log(vals);
      setProjects(vals);
      console.log(projects);
    };
    getUserData();
  }, []);

  const ProjectBox = ({ project, label }) => {
    return (
      <Grid item md={4} xs={12} style={{ textAlign: "center" }}>
        <Paper elevation={3}>
          <Box
            onClick={() => {
              handleClick(project["url"]);
            }}
            aria-label={label}
            sx={{
              backgroundColor: "#314f4f",
              height: "100%",
            }}
          >
            <Container
              href={project["url"]}
              style={{
                alignItems: "center",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
              }}
              sx={{ p: 1 }}
            >
              <Container
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <Icon sx={{ color: "#EEEEEE" }}>
                  <RiGitRepositoryLine />
                </Icon>
                <Typography
                  variant="h6"
                  sx={{
                    p: 1,
                    color: "#EEEEEE",
                    fontWeight: "bold",
                    fontFamily: [
                      "-apple-system", // Fallback for Safari
                      "SF Mono Medium",
                      "monospace",
                    ],
                  }}
                >
                  {project["name"]}
                </Typography>
              </Container>
              {/* <Avatar */}
              {/*   variant="circle" */}
              {/*   sx={{ m: 1, p: 0.2, backgroundColor: "#333333" }} */}
              {/* > */}
              {/*   <Icon> */}
              {/*     <RiGitRepositoryLine /> */}
              {/*   </Icon> */}
              {/* </Avatar> */}
              <Typography
                variant="body2"
                sx={{ m: 1, color: "#EEEEEE", textAlign: "left" }}
              >
                {project["description"]}
              </Typography>
              {/* <Button */}
              {/*   variant="contained" */}
              {/*   href={project["Link"]} */}
              {/*   sx={{ mt: 1, mb: 2 }} */}
              {/* > */}
              {/*   Check it out here */}
              {/* </Button> */}
              {/* <Grid container justifyContent="center" sx={{ py: 2 }}> */}
              {/*   {project["topics"].map((topic, index) => ( */}
              {/*     <Grid item key={index} xs={3}> */}
              {/*       <Typography */}
              {/*         variant="body2" */}
              {/*         sx={{ align: "center", color: "#EEEEEE" }} */}
              {/*       > */}
              {/*         {topic} */}
              {/*       </Typography> */}
              {/*     </Grid> */}
              {/*   ))} */}
              {/* </Grid> */}
              <Typography
                variant="body2"
                sx={{ m: 1, color: "#EEEEEE", textAlign: "left" }}
              >
                {project["language"]}
              </Typography>
            </Container>
          </Box>
        </Paper>
      </Grid>
    );
  };

  return (
    <DependenciesContext.Consumer>
      {({}) => (
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
              <Grid container spacing={1.5} alignItems="stretch">
                {!projects ? (
                  <div>Loading</div>
                ) : (
                  projects.map((project, index) => (
                    <ProjectBox
                      project={project}
                      label={`project${index}`}
                      key={`project${index}`}
                    />
                  ))
                )}
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
