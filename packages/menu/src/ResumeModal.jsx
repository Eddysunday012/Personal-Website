import React from "react";
import { Modal, Box, Typography } from "@mui/material";
import { DependenciesContext } from "dependenciescontext";

export const ResumeModal = () => {
  return (
    <DependenciesContext.Consumer>
      {({ Resume, resumeOpen, handleResumeClose }) => (
        <Modal open={resumeOpen} onClose={handleResumeClose}>
          <Box
            sx={{
              p: 1,
              top: "50%",
              left: "50%",
              position: "absolute",
              transform: "translate(-50%, -50%)",
              height: "90vh",
              width: "90vw",
            }}
          >
            <iframe
              src={Resume}
              type="application/pdf"
              width="100%"
              height="100%"
            />
          </Box>
        </Modal>
      )}
    </DependenciesContext.Consumer>
  );
};
