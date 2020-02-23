import * as React from 'react';
import {Grid, Typography} from "@material-ui/core";


interface AboutProps {
}

export const About: React.FC<AboutProps> = () => {

    return (
        <Grid component={'div'}>
            <Typography variant={'h6'}>
                about me
            </Typography>
        </Grid>
    )


};