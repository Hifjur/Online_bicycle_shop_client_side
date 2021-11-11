import { Grid } from '@mui/material';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import ManageAllOrders from '../AddProducts/ManageAllOrders/ManageAllOrders';
import Orders from '../Oders/Orders';



const DashboardHome = () => {
    const {admin } = useAuth();

    return (
        <Grid container spacing={2}>
            
            <Grid item xs={12}>
                {admin?
                <ManageAllOrders></ManageAllOrders>
                :
                <Orders></Orders>}
            </Grid>

        </Grid>
    );
};

export default DashboardHome;