import React from "react";
import { Box, Typography, Container } from "@mui/material";

export const AboutPage = () => {
  return (
    <Container sx={{ mb: 2, mt: 2 }}>
      <Box
        sx={{ backgroundColor: "#bab8b8", borderRadius: "10px" }}
        id="About"
        aria-label="About Me"
      >
        <Container sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ pt: 1, pb: 1 }}>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ pb: 1 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
          <Typography variant="body1" sx={{ pb: 1 }}>
            Mattis enim ut tellus elementum. Nec tincidunt praesent semper
            feugiat nibh sed pulvinar. Morbi tempus iaculis urna id volutpat
            lacus laoreet non curabitur. Sit amet consectetur adipiscing elit
            pellentesque. Donec ac odio tempor orci dapibus ultrices in.
            Pharetra diam sit amet nisl suscipit adipiscing. Nibh tellus
            molestie nunc non blandit massa enim nec dui. Pellentesque id nibh
            tortor id aliquet lectus proin. Dictum varius duis at consectetur
            lorem donec. Elit duis tristique sollicitudin nibh. Rhoncus dolor
            purus non enim praesent elementum. Sed turpis tincidunt id aliquet
            risus. Odio eu feugiat pretium nibh ipsum consequat nisl. Bibendum
            neque egestas congue quisque egestas diam in arcu cursus. Lacus
            suspendisse faucibus interdum posuere. Vitae suscipit tellus mauris
            a diam maecenas.
          </Typography>
        </Container>
      </Box>
    </Container>
  );
};
