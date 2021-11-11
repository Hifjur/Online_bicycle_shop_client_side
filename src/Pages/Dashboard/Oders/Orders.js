import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { NavLink } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

const Orders = () => {
    const { user, token } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/orders?email=${user.email}`;
        fetch(url, {
            headers: {
                'authorization': `Bearer ${token}`
            }
        })
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email, token])
    return (
        <div>
            <Typography variant="h1" sx={{fontWeight:500, padding: '30px', color: 'white', backgroundColor:'rgb(35, 34, 34)'}}>ORDERS</Typography>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments List">
                    <TableHead>
                        <TableRow>
                            <TableCell>Custormer's Name</TableCell>
                            <TableCell align="right">Product Preview</TableCell>
                            <TableCell align="right">Products</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Payment</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell  component="th" scope="row">
                                    <span style={{fontSize: "20px", color: 'gray'}}>{row.customerName}</span> <br />
                                    <span style={{color: 'green'}}>Address: {row.road}{row.PO}{row.city}</span>
                                    </TableCell>
                                <TableCell align="right"><img style={{height:'100px', width:'125px', borderRadius: '20px'}} src={row.img} alt="" /></TableCell>
                                <TableCell align="right">{row.productName}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                <TableCell align="right">{row.status}</TableCell>
                                <TableCell align="right">
                                    <NavLink style={{textDecoration: 'none'}} to='/payment'>
                                        <Button sx={{ backgroundColor: '#C54B47', m: 1 }} variant="contained">Payment</Button>
                                    </NavLink>
                                </TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Orders;