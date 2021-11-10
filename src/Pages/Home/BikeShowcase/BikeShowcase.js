import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Bike from '../../Shared/Bike/Bike';
import NavigationBar from '../../Shared/NavigationBar/NavigationBar'


const BikeShowcase = () => {
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
        <>
        
            <Container>
                <h2>Top Seller</h2>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>

                    {
                        bikes.map(bike => bike._id <7 && <Bike key={bike._id} bike={bike}></Bike>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default BikeShowcase;