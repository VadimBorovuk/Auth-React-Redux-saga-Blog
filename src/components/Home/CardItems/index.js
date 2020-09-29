import React from 'react';
import CardItem from "./CardItem";
import Grid from '@material-ui/core/Grid';


const CardItems = ({users}) => {
    return (
        <Grid container spacing={3}>
            {users.map((item,index) => <CardItem key={index} {...item}/>)}
        </Grid>
    );
};

export default CardItems;
