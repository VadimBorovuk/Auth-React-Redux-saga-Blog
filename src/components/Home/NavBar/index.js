import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import app from '../../../base'
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
    content: {
        background: "#1E88E5"
    },
}));

const NavBar = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.content}>
                <Toolbar>
                    <Typography variant="h6" className={classes.menuButton} >
                        <Link className="navbar__item" to="/">Home</Link>
                    </Typography>
                    <Typography variant="h6" className={classes.title}>
                        <Link className="navbar__item" to="/map">Map</Link>
                    </Typography>
                    <Button color="inherit" onClick={() => app.auth().signOut()}>signOut</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default NavBar;