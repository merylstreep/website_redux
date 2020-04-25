import * as React from 'react';

import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            width: "100%",
            maxWidth: 1200,
            margin: "auto",
            padding: theme.spacing(2)
        }
    })
);


export interface CenteredLayoutProps {
}

export const CenteredLayout: React.FunctionComponent<CenteredLayoutProps> = ({ children }) => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            {children}
        </div>
    );
};