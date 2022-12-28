import React from "react";
import { DependenciesContext } from "dependenciescontext";
import {
    Container,
    Grid,
    Box,
    Typography,
    Icon
} from '@mui/material'
import { TerminalOutlined } from "@mui/icons-material";

/**
 * 
 * Project Page Component with sub Project Boxes
 * @return {object} JSX
 */
export const ProjectPage = () => {
    
    const ProjectBox = ({project, label}) => {
        return (
            <Grid item xs={4} style={{textAlign: 'center'}}>
                <Box
                aria-label={label}
                sx={{backgroundColor: '#919090', borderRadius:'14px'}}
                justifyContent='center'
                >
                    <Typography variant="body1" sx={{p: 1}}>
                        {project['Name']}
                    </Typography>
                    <Box sx={{backgroundColor: '#bab7b6', borderRadius: '50%', width: '40px'}} >
                        <Icon>
                            <TerminalOutlined/>
                        </Icon>
                    </Box>
                    
                </Box>
            </Grid>
        )
    }
    
    return(
        <DependenciesContext.Consumer>
            {({projects}) => (
                <Container>
                    <Box aria-label='Projects' sx={{backgroundColor: '#bab8b8', borderRadius:'12px'}}>
                        <Container sx={{p: 1}}>
                            <Typography variant="h5" sx={{p: 1}}>
                                Projects
                            </Typography>
                            <Grid container justifyContent='center' spacing={1.5}>
                                {projects.map((project, index) => 
                                    <ProjectBox 
                                    project={project}
                                    label={'project1'}
                                    key={`project${index}`}
                                    />
                                )}
                            </Grid>
                        </Container>
                    </Box>
                </Container>
            )}
        </DependenciesContext.Consumer>
            
    )
}