import React from "react";
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import NavBar from "./NavBar";

const useStyles = makeStyles({
  root: {
    margin: 60,
    background: "none"
  },
  title: {
    fontWeight: 700,
    fontSize: "100px",
    marginTop: "100px"
  },
  subtitle: {
    fontWeight: 300,
    fontSize: "20px",
    paddingLeft: '5px',
    paddingTop: "16px",
    maxWidth: "45%"
  }
});

export interface BodyProps {}

const Body: React.FunctionComponent<BodyProps> = () => {
  const classes = useStyles();

  return (
    <>
      {/*<p>*/}
      {/*  Here's my CV of whatever :*/}
      {/*  <a href="../assets/Harry_Zhang_CV.pdf" download>*/}
      {/*    click to download{" "}*/}
      {/*  </a>*/}
      {/*</p>*/}

      {/* TODO: Maybe I can store all of this into a hero later*/}
      <Grid className={classes.root}>
        <Typography className={classes.title}>HARRY ARCHER</Typography>
        <Typography className={classes.subtitle}>
          Aerospace Engineer and budding Software Engineer currently based in
          Sydney with two dogs and a festering kombucha culture that, at this
          point, he is too afraid to touch.
        </Typography>
        <br/>
      </Grid>
      <br/>
      <Grid className={classes.root}>
        <NavBar />
      </Grid>
    </>
  );
};

export default Body;
