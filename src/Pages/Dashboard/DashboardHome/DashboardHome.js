import { Grid } from '@mui/material';
import React from 'react';
import Orders from '../Oders/Orders';



const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());

    return (
        <Grid container spacing={2}>
            
            <Grid item xs={12}>
                <Orders></Orders>
            </Grid>

        </Grid>
    );
};

export default DashboardHome;