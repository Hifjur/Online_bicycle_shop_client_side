import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBikes] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/bikes')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setBikes(data);
            });
    }, [])
    return (
        <Container>
            <h2>bikes</h2>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                {
                    bikes.map(bike => <Bike key={bike._id} bike={bike}></Bike>)
                }
            </Grid>
        </Container>
    );
};

export default Bikes;