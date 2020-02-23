import * as React from "react";
import {
  Avatar,
  Button,
  Paper,
  Card,
  CardActions,
  CardActionArea,
  CardHeader,
  CardMedia,
  Collapse,
  Typography,
  IconButton
} from "@material-ui/core";
import { data } from "../assets/data";
import background from "../assets/background_example.jpg";
import logo from "../assets/apple_logo.png";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

interface CardSpaceProps {
  filter?: string;
}

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    maxWidth: 1100,
    margin: "60px"
  },
  card: {
    margin: "1rem",
    maxWidth: 325
  },
  media: {
    height: 140
  },
  copy: {
    padding: "0.5rem",
    marginLeft: "0.5rem"
  }
});

const CardSpace: React.FC<CardSpaceProps> = ({ filter }) => {
  const classes = useStyles();

  return (
    <Paper elevation={0} className={classes.root}>
      {(Boolean(filter)
        ? data.filter(person => person.name === filter)
        : data
      ).map(person => (
        // <Collapse in={Boolean(filter) ? Boolean(person.name === filter) : true}>
        <Card raised className={classes.card}>
          <CardHeader
            action={
              <IconButton>
                <ExpandMoreIcon />
              </IconButton>
            }
            avatar={
              //can make the avatar a router link to their profile
              <Avatar
                src={"http://placekitten.com/200/300"}
                alt={"avatar-image"}
              />
            }
            title={person.name}
            subheader={person.id}
          />
          <CardActionArea>
            <CardMedia image={background} className={classes.media} />
            <Typography
              color={"primary"}
              variant={"body1"}
              className={classes.copy}
            >
              This is an example picture of lovely nature sights
            </Typography>
          </CardActionArea>
          <CardActions>
            <Button>Org Stats</Button>
            <Button>Comm Stats</Button>
          </CardActions>
        </Card>
        // </Collapse>
      ))}
    </Paper>
  );
};

export default CardSpace;
