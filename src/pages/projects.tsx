import * as React from 'react';
import {Grid, Typography} from "@material-ui/core";


interface ProjectsProps {
}

export const Projects: React.FC<ProjectsProps> = () => {

    return (
        <Grid component={'div'}>
            <Typography variant={'h6'}>
                projects and stuff
            </Typography>
        </Grid>
    )

};