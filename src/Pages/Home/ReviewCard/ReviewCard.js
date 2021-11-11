import {  Card, CardActionArea, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';


const ReviewCard = (props) => {
    
        const { customerName, email, review } = props.review;
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400, backgroundColor: '#FBD44E ', padding: 6 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography sx={{ color: '#C54B47', fontWeight: 'medium' , fontSize: 30 }} gutterBottom variant="h5" component="div">
                            {customerName}
                        </Typography>
                        <Typography sx={{ color: 'gray', fontWeight: 'medium' }} variant="body2" color="text.secondary">
                            {review}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'green', fontWeight: 'bold' }}>
                            Email: {email}
                        </Typography>
                        
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default ReviewCard;