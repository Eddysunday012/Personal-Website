import React from "react";
import { Box, Typography, Container } from "@mui/material";

export const AboutPage = () => {
  return (
    <Container sx={{ mb: 2, mt: 2 }}>
      <Box
        sx={{ backgroundColor: "#5A5A5A", borderRadius: "10px" }}
        id="About"
        aria-label="About Me"
      >
        <Container sx={{ p: 3 }}>
          <Typography variant="h5" sx={{ pt: 1, pb: 1, color: "#EEEEEE" }}>
            About Me
          </Typography>
          <Typography variant="body1" sx={{ pb: 1, color: "#EEEEEE" }}>
            Greetings and welcome to my personal page! I'm Ethan Domingo, a
            recent computer science graduate from UC Santa Cruz with a passion
            for crafting innovative solutions through code. Equipped with a
            degree in computer science and a minor in statistics, I'm thrilled
            to embark on the next chapter of my journey in the realm of software
            engineering. My main interests in Computer Science include Software
            Engineering, AI, Machine Learning, Data Science, Network Programming
            and Backend Development.
          </Typography>
          <Typography variant="body1" sx={{ pb: 1, color: "#EEEEEE" }}>
            I am actively seeking software engineering opportunities, and I am
            currently working towards a AWS Solutions Architect certification.
            Feel free to scroll down and learn more about me, whether it be my
            experiences and skillsets to even my personal interests and hobbies!
          </Typography>
        </Container>
      </Box>
    </Container>
  );
};
