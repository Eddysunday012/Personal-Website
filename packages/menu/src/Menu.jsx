import React from "react";
import { 
    AppBar,
    Grid,
    Typography,
    Button,
    ThemeProvider,
    createTheme } from "@mui/material";


export const Menu = () => {
    
    const theme = createTheme({
        typography: {
            button: {
                textTransform: "none",
            },
            allVariants: {
                color: "white",
                fontFamily: "Roboto",
                fontSize: 20
            }
        },
        palette: {
            primary: {
                main: "#255F85"
            }
        }

    });

    return (
        <ThemeProvider theme={theme}>
            <header>
                <AppBar sx={{minHeight: 70}} aria-label="Navbar" className="Navbar" justifyContent="center">
                    <Grid 
                    container
                    spacing={1}
                    alignItems="center"
                    justifyContent={["spaceBetween", "center"]}
                    sx={{margin:"auto"}}
                    >
                        <Grid item style={{textAlign:"center"}} xs={2}>
                            <Button variant="text"> 
                                <Typography align="center">About</Typography> 
                            </Button>
                        </Grid>
                        <Grid item style={{textAlign:"center"}} xs={2}>
                            <Button variant="text"> 
                                <Typography align="center">Skills</Typography> 
                            </Button>
                        </Grid>
                        <Grid item style={{textAlign:"center"}} xs={2}>
                            <Button variant="text"> 
                                <Typography align="center">Projects</Typography> 
                            </Button>
                        </Grid>
                        <Grid item style={{textAlign:"center"}} xs={2}>
                            <Button variant="text"> 
                                <Typography align="center">Contact</Typography> 
                            </Button>
                        </Grid>
                    </Grid>
                </AppBar>
            </header>
        </ThemeProvider>
    )
}