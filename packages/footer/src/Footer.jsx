import React from "react";
import {
    AppBar,
    Toolbar,
    Typography
} from "@mui/material";

export const Footer = () => {
    return (
        <AppBar position="static" color="primary" aria-label="Footer">
            <Toolbar>
                <Typography variant="h6" color="inherit">
                My Footer
                </Typography>
            </Toolbar>
        </AppBar>
    )
}