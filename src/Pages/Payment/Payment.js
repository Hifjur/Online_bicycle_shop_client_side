import { Button, Container, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Payment = () => {
    return (
        <Container >
            <Typography variant='h1' sx={{paddingY: 10}}>
                Payment Getway Coming Soon!!!
            </Typography>
            <NavLink style={{ display: { xs: 'none', md: 'inline' }, m: 2, textDecoration: 'none', color: 'white' }} to='/dashboard'>
                <Button sx={{ m: 2, display: { xs: 'none', md: 'inline' }, backgroundColor: 'rgb(35, 34, 34)', color: '#D3BDBD' }} variant="contained" color="inherit">Dashboard</Button>
            </NavLink>
            <NavLink style={{ display: 'block', marginY: 3, textDecoration: 'none', color: 'white' }} to='/home'>
                <Button sx={{ backgroundColor: '#C54B47', color: 'whtie' }} color="inherit">Home Page</Button>
            </NavLink>
        </Container>
    );
};

export default Payment;