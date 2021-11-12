import { Card, CardActionArea, CardContent, Grid, Rating, Typography } from '@mui/material';
import React from 'react';


const ReviewCard = (props) => {
    //const{} = props.review.reviewData
    
    const { star, customerName, review, email } = props.review;
    
    const starValue = parseInt(star);
    return (
        <Grid item xs={12} sm={6} md={4}>
            <Card sx={{ maxWidth: 400, backgroundColor: '#FBD44E ', padding: 6 }}>
                <CardActionArea>
                    <CardContent>
                        <Typography sx={{ color: '#C54B47', fontWeight: 'medium', fontSize: 30 }} gutterBottom variant="h5" component="div">
                            {customerName}
                        </Typography>
                        <Typography sx={{ color: 'gray', fontWeight: 'medium' }} variant="body2" color="text.secondary">
                            {review}
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'green', fontWeight: 'bold' }}>
                            Email: {email}
                        </Typography>
                        <Typography variant="subtitle2" component="legend">Customer Ratings</Typography>
                        <Rating sx={{color: '#C54B47'}} name="read-only" value={starValue} readOnly />
                    </CardContent>
                </CardActionArea>
            </Card>
        </Grid>
    );
};

export default ReviewCard;