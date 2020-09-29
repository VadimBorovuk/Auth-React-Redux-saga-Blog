import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from "@material-ui/core/Grid";
import {Dialog} from '@material-ui/core';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import WebIcon from '@material-ui/icons/Web';
import BusinessIcon from '@material-ui/icons/Business';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        margin: "20px auto",
        textAlign: "left",
    },
    content: {
        background: "#90CAF9",
        paddingLeft: 20
    },
    media: {
        height: 240,
    },
    textStyles: {
        fontSize: 18,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center"
    },
    textInfo: {
        fontFamily: "Cairo, sans-serif",
        fontWeight: 700,
        margin: "5px 0",
        paddingLeft: 10,
        fontSize: 18
    }
});

const CardItem = ({index, name, username, phone, website, company, image}) => {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.root}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={image}
                        title="Contemplative Reptile"
                    />
                    <CardContent className={classes.content}>
                        <Typography className={classes.textStyles} gutterBottom variant="h5" component="h2">
                            <AccountCircleIcon/>
                            <Typography component={'span'} variant={'body2'}
                                        className={classes.textInfo}> {name}</Typography>
                        </Typography>
                        <Typography variant="body2" className={classes.textStyles} color="textSecondary" component="p">
                            <VideogameAssetIcon/>
                            <Typography component={'span'} variant={'body2'}
                                        className={classes.textInfo}>{username}</Typography>
                        </Typography>
                        <Typography variant="body2" className={classes.textStyles} color="textSecondary" component="p">
                            <PhoneIphoneIcon/>
                            <Typography component={'span'} variant={'body2'}
                                        className={classes.textInfo}>{phone}</Typography>
                        </Typography>
                        <Typography variant="body2" className={classes.textStyles} color="textSecondary" component="p">
                            <WebIcon/>
                            <Typography component={'span'} variant={'body2'}
                                        className={classes.textInfo}>{website}</Typography>
                        </Typography>
                        <Typography variant="body2" className={classes.textStyles} color="textSecondary" component="p">
                            <BusinessIcon/>
                            <Typography component={'span'} variant={'body2'}
                                        className={classes.textInfo}>{company.name}</Typography>
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
}
export default CardItem;
