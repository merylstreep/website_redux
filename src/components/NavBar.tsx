import * as React from "react";
import { Theme, Typography } from "@material-ui/core";
import { Links } from "../assets/ExternalLinks";
import { makeStyles } from "@material-ui/core/styles";
import { createStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      paddingLeft: 24,
      display: "flex",
      paddingTop: "27px",
      textAlign: "center",
      width: "40%"
    },
    item: {
      paddingLeft: 24,
      paddingRight: 24,
    }
  })
);

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
  const classes = useStyles();

  return (
    <div className={classes.nav}>
      <div className={classes.item}>
        <Typography>
          <a>highlights</a>
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography>
          <a
            onClick={() => {
              window.open(Links.github);
            }}
          >
            github
          </a>
        </Typography>
      </div>
      <div className={classes.item}>
        <Typography>
          <a
            onClick={() => {
              window.open(Links.linkedin);
            }}
          >
            linkedin
          </a>
        </Typography>
      </div>
    </div>
  );
};

export default NavBar;
