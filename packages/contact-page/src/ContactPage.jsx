import React from "react";
// import { EmailJSResponseStatus } from "emailjs-com";
import {
  Box,
  Typography,
  Grid,
  Fade,
  Container,
  IconButton,
  TextField,
  Stack,
} from "@mui/material";
import { DependenciesContext } from "dependenciescontext";

export const ContactPage = () => {
  return (
    <Container>
      <Box
        aria-label="Contact Box"
        id="Contact Box"
        sx={{ backgroundColor: "#5A5A5A", borderRadius: "12px", p: 1 }}
        alignContent="center"
      >
        <Container sx={{ p: 1 }}>
          <Typography
            label="Contact Box"
            variant="h5"
            sx={{ p: 1, color: "#EEEEEE" }}
          >
            Contact
          </Typography>
          <Stack>
            <TextField
              id="filled-textarea"
              aria-label="Email Input"
              hiddenLabel
              placeholder="Email"
              multiline
              size="small"
              sx={{
                m: 2,
                backgroundColor: "#EEEEEE",
              }}
            />
            <TextField
              id="filled-multiline-static"
              aria-label="Message Input"
              hiddenLabel
              placeholder="Message"
              multiline
              rows={4}
              size="small"
              sx={{ m: 2, backgroundColor: "#EEEEEE" }}
            />
          </Stack>
        </Container>
      </Box>
    </Container>
  );
};
