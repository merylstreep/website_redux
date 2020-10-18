import * as React from "react";
import {useState} from "react";
import {Grid, Theme, Tooltip} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {createStyles} from "@material-ui/styles";
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nav: {
      paddingLeft: 24,
      display: "flex",
      paddingTop: "27px",
      textAlign: "center",
      width: "40%",
      color: "#ffffff"
    },
    item: {
      paddingLeft: 24,
      paddingRight: 24
    },
    navLink: {
      color: "#000000",
      textDecoration: "none"
    },
    activeNavLink: {
      color: "#959595",
      textDecoration: "none"
    }
  })
);

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {
    enum Pages {
        HOME = "/",
        HIGHLIGHTS = "/highlights",
        ABOUT_ME = "/about-me",
    }
  const [activePage, setActivePage] = useState(Pages.HOME);
  const classes = useStyles();

  return (
    <nav className={classes.nav}>
      <Grid container spacing={3}>
        <Grid item>
          <Link
            onClick={() => setActivePage(Pages.HOME)}
            className={
              Pages.HOME === activePage
                ? classes.activeNavLink
                : classes.navLink
            }
            to={Pages.HOME}
          >
            home
          </Link>
        </Grid>
        <Grid item>
          <Link
            onClick={() => setActivePage(Pages.ABOUT_ME)}
            className={
              Pages.ABOUT_ME === activePage
                ? classes.activeNavLink
                : classes.navLink
            }
            to={Pages.ABOUT_ME}
          >
            about me
          </Link>
        </Grid>
        <Tooltip title={"under inconsistent construction"}>
          <Grid item>
            <Link
              onClick={() => {
                // setActivePage(Pages.HIGHLIGHTS)
              }}
              className={
                Pages.HIGHLIGHTS === activePage
                  ? classes.activeNavLink
                  : classes.navLink
              }
              to={Pages.HIGHLIGHTS}
            >
              highlights
            </Link>
          </Grid>
        </Tooltip>
      </Grid>
    </nav>
  );
};

export default NavBar;
