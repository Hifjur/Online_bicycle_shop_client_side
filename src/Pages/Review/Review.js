import { Alert, Button, Container, Rating, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Review = () => {
    const { user } = useAuth();
    const initialInfo = { customerName: user.displayName, email: user.email};
    const [review, setReview] = useState(initialInfo)
    const [reviewAdded, setReviewAdded] = useState(false);
    const [starValue, setStarValue] = React.useState(0);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...review };
        newInfo[field] = value;
        setReview(newInfo);
    }

    const handlePostingReview = e => {
        const reviewFinal = {
            ...review,
            star: starValue
        }
        e.preventDefault();

        fetch('https://shrouded-tor-90105.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewFinal)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setReviewAdded(true);


                }
            })

        e.preventDefault();
    }
    return (
        <Container>


            <Typography variant="h1" sx={{ fontWeight: 500, paddingY: '30px',fontSize:{xs:40, md:100}, color: 'white', marginTop: 3, backgroundColor: 'rgb(35, 34, 34)' }}>Leave A Review</Typography>

            {reviewAdded && <Alert severity="success">Posted Successfully</Alert>}

            <form style={{ backgroundColor: 'white', paddingTop: '20px', height: '500px' }} onSubmit={handlePostingReview}>

            <TextField
                    sx={{ width: '70%', my: 1 }}
                    name="name"
                    onBlur={handleOnBlur}
                    defaultValue={user.displayName}
                    label="Name"
                    id="standard-basic"
                    variant="standard"
                    
                />
            <TextField
                    sx={{ width: '70%', my: 1 }}
                    name="email"
                    onBlur={handleOnBlur}
                    defaultValue={user.email}
                    label="Name"
                    id="standard-basic"
                    variant="standard"
                    
                />
                <TextField
                    id="standard-multiline-static"
                    name="review"
                    label="Leave a review"
                    sx={{ width: '70%', my: 1 }}
                    onBlur={handleOnBlur}
                    multiline
                    rows={8}
                    
                    variant="standard"
                />
                <br />
                <Typography variant="body1" component="legend">Rate Us!!</Typography>
                        <Rating
                            name="simple-controlled"
                            value={starValue}
                            onChange={(event, newValue) => {
                                setStarValue(newValue);
                            }}
                        />
                        <br />
                <Button sx={{ backgroundColor: '#C54B47', my: 1 }} type="submit" variant="contained">Post Review</Button>
            </form>
            <NavLink style={{ textDecoration: 'none' }} to='/dashboard'>
                <Button sx={{ margin: '20px' }} variant="outlined">Dashboard</Button>
            </NavLink>
        </Container>
    );
};

export default Review;