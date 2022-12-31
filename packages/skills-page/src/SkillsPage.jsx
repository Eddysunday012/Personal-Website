import React from "react";
import { DependenciesContext } from "dependenciescontext";
import {
    Typography,
    Grid,
    Box,
    Container,
    List,
    ListItem,
    ListItemText,
    LinearProgress,
    Chip
} from '@mui/material'
// import { LinearProgressProps } from "@mui/material/LinearProgress";

const SkillSection = ({Skill}) => {
    return (
        <ListItemText>
            <Typography variant="body1" sx={{p: 1}}>
                {Skill.Name}
            </Typography>
            <LinearProgress variant="determinate" value={Skill.Percentage} sx={{m:1}} />
            <Chip label={Skill.Type} sx={{mt:2}} size="small" />
        </ListItemText>
    )
}


export const SkillsPage = () => {
    return(
        <DependenciesContext.Consumer>
            {({Skills}) => (
                <Container sx={{mt: 2, mb: 2}}>
                    <Box aria-label='Projects' sx={{backgroundColor: '#bab8b8', borderRadius:'12px', p: 1}} maxWidth="50%">
                        <Container sx={{p: 1}}>
                            <Typography variant="h5" sx={{pb: 1}}>
                                    Skills
                            </Typography>
                            <List>
                                {Skills.map((Skill, index) => 
                                <ListItem key={`Skill${index}`}>
                                    <SkillSection Skill={Skill} />
                                </ListItem>
                                )}
                            </List>
                        </Container>
                    </Box>
                </Container>
            )}
        </DependenciesContext.Consumer>
    )
}