import { ShoppingBag } from '@mui/icons-material';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import React from 'react';
import { NavLink } from 'react-router-dom';

const Bike = ({ bike }) => {
    const { _id, name, description, price, img, catagory } = bike;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400, backgroundColor: 'rgb(35, 34, 34)' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        width="400"
                        image={img}
                    />
                    <CardContent>
                        <Typography sx={{ color: 'white', fontWeight: 'medium' }} gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography sx={{ color: 'white', fontWeight: 'medium' }} variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'green', fontWeight: 'bold' }}>
                            {catagory} Bike
                        </Typography>
                        <Typography sx={{ color: 'white', fontWeight: 'medium' }} variant="body2" color="text.secondary">
                            Price: ${price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <NavLink style={{textDecoration:'none'}} to={`/purchase/${_id}`}>
                        <Button sx={{ backgroundColor: '#C54B47' }} variant="contained" size="small" color="primary">
                            <ShoppingBag /> Buy Now!!
                        </Button>
                    </NavLink>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Bike;