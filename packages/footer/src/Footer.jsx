import React from "react";
import {
    AppBar,
    Toolbar,
    Typography,
    Container,
    Box
} from "@mui/material";
import { DependenciesContext } from "dependenciescontext";

export const Footer = () => {
    return (
        <DependenciesContext.Consumer>
            {() =>
                <footer>
                    <AppBar position="absolute" color="primary" aria-label="Footer" style={{bottom: 0, display: 'flex', maxWidth: '960px', margin: '0 auto'}}>
                        <Box maxHeight={'10%'}>
                            <Typography>
                                Ethan Domingo
                            </Typography>
                        </Box>
                    </AppBar>
                </footer>
            }
        </DependenciesContext.Consumer>
    )
}