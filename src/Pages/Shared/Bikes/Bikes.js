import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';
import NavigationBar from '../NavigationBar/NavigationBar';

const Bikes = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('https://shrouded-tor-90105.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBikes(data);
            });
    }, [])
    return (
        <>
        <NavigationBar></NavigationBar>
            <Container>
            <Typography variant="h1" sx={{ fontWeight: 500, paddingY: '30px',fontSize:{xs:40, md:100}, color: 'white', marginTop: 3, backgroundColor: 'rgb(35, 34, 34)' }}>BIKES</Typography>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>

                    {
                        bikes.map(bike => <Bike key={bike._id} bike={bike}></Bike>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default Bikes;