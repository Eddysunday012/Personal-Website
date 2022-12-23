import React from "react";
import { DependenciesContext } from "dependenciescontext";
import { Typography, Grid, Box, Fade } from "@mui/material";


export const IntroPage = () => {

    const ImageMyStyle = {width: '230px', height: null, flex: 1, resizeMode: 'contain', 'object-fit': 'cover'}

    const [fadeIn, setFadeIn] = React.useState(false);
    
    React.useEffect(() => {
        setFadeIn(true);
    }, []);

    return(
        <DependenciesContext.Consumer>
            {({Profile}) => (
            <Box sx={{
                display: 'flex',
                height: '100vh',
                backgroundColor: 'white',
                alignItems: 'center',
            }}
            >
                <Fade in={fadeIn} timeout={2000}>
                    <Grid container justifyContent="center">
                        <Grid item xs={3}>
                            <img style={ImageMyStyle} src={Profile} alt="ProfilePic" />
                        </Grid>
                        <Grid item xs={5} style={{justifyContent:'center', display:'flex', flexDirection:'column'}}>
                            <Typography align="center" variant="h5" width='100%'>
                                Hello there! My name is Ethan Domingo
                            </Typography>
                            <Typography align="center" variant="body1" width='100%'>
                                I'm a software engineer based in Santa Cruz, CA. Scroll down to learn more about me!
                            </Typography>
                        </Grid>
                    </Grid>
                </Fade>
            </Box>
            )}
        </DependenciesContext.Consumer> 
    )
};
