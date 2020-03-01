import * as React from 'react';
import {List, ListItem, ListItemIcon, ListItemText} from "@material-ui/core";
import TimelineIcon from '@material-ui/icons/Timeline';
import WorkOutlineIcon from '@material-ui/icons/WorkOutline';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles({
    icon: {
        color: "#eee"
    }
});

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = () => {

    const classes = useStyles();

    return (
        <List component={"nav"} dense>
            <ListItem button>
                <ListItemIcon><TimelineIcon className={classes.icon}/></ListItemIcon>
                <ListItemText>Peak my timeline</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon><WorkOutlineIcon className={classes.icon}/></ListItemIcon>
                <ListItemText>Check out my work</ListItemText>
            </ListItem>
            <ListItem button>
                <ListItemIcon><PersonOutlineIcon className={classes.icon}/></ListItemIcon>
                <ListItemText>Find my socials</ListItemText>
            </ListItem>
        </List>
    )
}


export default NavBar;