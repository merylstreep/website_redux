import React from "react";
import { Grid, Theme, Tooltip, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { Links } from "../assets/ExternalLinks";
import { createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: 24,
      background: "none",
      height: "100%"
    },
    center: {
      position: "absolute",
      top: "50%"
    },
    ring: {
      position: "absolute",
      top: "0%"
    },
    resumeButton: {
      marginLeft: theme.spacing(2),
      "&:hover": {
        backgroundColor: "#ffffe8"
      }
    },
    nav: {
      display: "flex",
      justifyContent: "flex-start"
    }
  })
);
export interface HomeProps {}

export const Home: React.FunctionComponent<HomeProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.center}>
        <Grid container className={classes.nav}>
          <Typography variant={"h3"}>
            harry <span style={{ color: "#ea4e87" }}>(archer)</span> zhang
          </Typography>
        </Grid>
        <Grid>
          <br />
          <Typography>
            aerospace and software engineering
            <br />
            final year student at the university of new south wales
            <br />
            {`completing a thesis on `}
            <Tooltip title={`Still working out what this is myself`}>
              <a
                onClick={() => {
                  console.log("im working on it!!!");
                }}
              >
                {`improved turbulence modelling using gene expression techniques`}
              </a>
            </Tooltip>
          </Typography>
          <br />
          <br />
          <Typography>
            <a
              onClick={() => {
                window.open(Links.resume);
              }}
            >
              see my resume
            </a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};
