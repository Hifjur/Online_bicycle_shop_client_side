import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Bike from '../../Shared/Bike/Bike';



const BikeShowcase = () => {
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
        
            <Container style={{marginTop: '-200px'}}>
                <h3 style={{color:'white', textDecorationLine: 'underline'}}>OUR TOP BIKES</h3>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 2, sm: 3, md: 4 }}>

                    {
                        bikes.map(bike => bike.key <7 && <Bike key={bike._id} bike={bike}></Bike>)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default BikeShowcase;