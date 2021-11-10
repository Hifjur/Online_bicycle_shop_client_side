import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';

const Bike = ({ bike }) => {
    const { name, description, price, img } = bike;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="300"
                        width="400"
                        image={img}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                        Buy Now!!
                    </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Bike;